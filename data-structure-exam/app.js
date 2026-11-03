(() => {
  "use strict";

  const DATA = window.DS_DATA;
  const questions = DATA.questions;
  const questionById = new Map(questions.map((q) => [q.id, q]));
  const bankById = new Map(DATA.banks.map((bank) => [bank.id, bank]));
  const MARK_KEY = "ds-arena-marks-v1";
  const ACTIVE_BANK_KEY = "ds-arena-active-bank";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const state = {
    view: "home",
    activeBank: localStorage.getItem(ACTIVE_BANK_KEY) || "ch1",
    libraryType: "all",
    libraryOnlyMarked: false,
    libraryQuery: "",
    quiz: null,
    reviewFilter: "all",
    toastTimer: null
  };

  let marks = loadMarks();

  function loadMarks() {
    try {
      const value = JSON.parse(localStorage.getItem(MARK_KEY) || "{}");
      return value && typeof value === "object" ? value : {};
    } catch {
      return {};
    }
  }

  function saveMarks() {
    localStorage.setItem(MARK_KEY, JSON.stringify(marks));
  }

  function getMark(id) {
    return marks[id] || { important: false, doubtful: false };
  }

  function markCount() {
    return Object.values(marks).filter((mark) => mark.important || mark.doubtful).length;
  }

  function markedQuestions() {
    return questions.filter((q) => {
      const mark = getMark(q.id);
      return mark.important || mark.doubtful;
    });
  }

  function toggleMark(id, type) {
    const current = getMark(id);
    marks[id] = { ...current, [type]: !current[type] };
    saveMarks();
    updateMarkIndicators();
    showToast(marks[id][type] ? (type === "important" ? "已标记为重点" : "已标记为有疑惑") : "已取消标记");
  }

  function updateMarkIndicators() {
    const count = markCount();
    $("#markCounter").textContent = count;
    const summary = $("#markedSummary");
    if (summary) {
      summary.textContent = count ? `已标记 ${count} 题，点此专项练习` : "还没有标记题目";
    }
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function inlineMarkdown(text) {
    return escapeHtml(text)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/_{2,}/g, '<span class="blank-mark">＿＿</span>');
  }

  function markdownTextToHtml(text) {
    const lines = String(text).replace(/\r/g, "").split("\n");
    const output = [];
    let paragraph = [];
    let list = [];

    const flushParagraph = () => {
      if (!paragraph.length) return;
      output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    };
    const flushList = () => {
      if (!list.length) return;
      output.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      list = [];
    };

    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      if (/^\|.*\|$/.test(line.trim()) && /^\|?\s*:?-+/.test(lines[index + 1] || "")) {
        flushParagraph();
        flushList();
        const rows = [];
        rows.push(line.trim());
        index++;
        while (index < lines.length && /^\|.*\|$/.test(lines[index].trim())) {
          rows.push(lines[index].trim());
          index++;
        }
        index--;
        const cells = rows.map((row) => row.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
        const head = cells[0];
        const body = cells.slice(2);
        output.push(
          `<div class="table-wrap"><table><thead><tr>${head.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>` +
          `<tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`
        );
        continue;
      }
      if (!line.trim()) {
        flushParagraph();
        flushList();
        continue;
      }
      const listMatch = line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/);
      if (listMatch) {
        flushParagraph();
        list.push(listMatch[1]);
        continue;
      }
      flushList();
      paragraph.push(line.trim());
    }
    flushParagraph();
    flushList();
    return output.join("");
  }

  function renderMarkdown(markdown) {
    const source = String(markdown || "");
    const regex = /```([^\n`]*)\n([\s\S]*?)```/g;
    let last = 0;
    let match;
    const output = [];
    while ((match = regex.exec(source))) {
      output.push(markdownTextToHtml(source.slice(last, match.index)));
      const language = (match[1] || "text").trim();
      output.push(
        `<div class="code-shell"><span class="code-lang">${escapeHtml(language.toUpperCase())}</span>` +
        `<pre><code class="language-${escapeHtml(language)}">${escapeHtml(match[2].replace(/\s+$/, ""))}</code></pre></div>`
      );
      last = regex.lastIndex;
    }
    output.push(markdownTextToHtml(source.slice(last)));
    return output.join("");
  }

  function normalizeAnswer(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[，,]/g, "")
      .replace(/[；]/g, ";")
      .replace(/[：]/g, ":")
      .replace(/[（]/g, "(")
      .replace(/[）]/g, ")")
      .replace(/[²]/g, "^2")
      .replace(/[³]/g, "^3")
      .replace(/[×]/g, "*")
      .replace(/[−–—]/g, "-")
      .replace(/\s+/g, "");
  }

  function fillMatches(value, accepted) {
    const normalized = normalizeAnswer(value);
    if (!normalized) return false;
    return accepted.some((candidate) => {
      const expected = normalizeAnswer(candidate);
      return normalized === expected || (expected.length >= 9 && normalized.includes(expected));
    });
  }

  function typeLabel(kind) {
    return {
      choice: "选择题",
      pairChoice: "共用选项",
      fill: "填空题",
      code: "代码题",
      essay: "简答题"
    }[kind] || "题目";
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function chapterQuestions(chapter, acceptedKinds) {
    return questions.filter((q) => q.chapter === chapter && acceptedKinds.includes(q.kind));
  }

  function sampleBalanced(definition) {
    const chosen = [];
    for (const [kind, quotas] of Object.entries(definition)) {
      quotas.forEach((count, index) => {
        const chapter = index + 1;
        const pool = kind === "choice"
          ? chapterQuestions(chapter, ["choice", "pairChoice"])
          : chapterQuestions(chapter, [kind]);
        chosen.push(...shuffle(pool).slice(0, count));
      });
    }
    const kindOrder = { choice: 0, pairChoice: 1, fill: 2, code: 3, essay: 4 };
    return chosen.sort((a, b) => {
      const byKind = kindOrder[a.kind] - kindOrder[b.kind];
      return byKind || a.chapter - b.chapter || a.number - b.number;
    });
  }

  function objectiveQuestionsForChapter(chapter) {
    return questions.filter(
      (q) => q.chapter === chapter && ["choice", "pairChoice", "fill"].includes(q.kind)
    );
  }

  function startPreset(preset) {
    if (preset === "full") {
      startQuiz(
        sampleBalanced(DATA.quotas.full),
        "全真综合卷",
        "FULL MOCK · 33 QUESTIONS",
        "full"
      );
      return;
    }
    if (preset === "objective") {
      startQuiz(
        sampleBalanced(DATA.quotas.objective),
        "客观题冲刺",
        "OBJECTIVE ONLY · 30 QUESTIONS",
        "objective"
      );
      return;
    }
    if (preset === "marked") {
      const marked = markedQuestions();
      if (!marked.length) {
        showToast("先在题库中标记“重点”或“有疑惑”的题目");
        showLibrary("ch1", true);
        return;
      }
      startQuiz(
        shuffle(marked),
        `标记专项 · ${marked.length} 题`,
        "PERSONAL FOCUS",
        "marked"
      );
    }
  }

  function startUnit(chapter) {
    const pool = shuffle(objectiveQuestionsForChapter(chapter));
    startQuiz(pool, `第 ${chapter} 章单元检测`, `CHAPTER ${chapter} · OBJECTIVE CHECK`, "unit");
  }

  function startBankQuiz(bankId) {
    const pool = questions.filter((q) => q.bankId === bankId);
    if (!pool.length) return;
    startQuiz(
      shuffle(pool),
      `${bankById.get(bankId).title} · 专项练习`,
      `BANK PRACTICE · ${pool.length} QUESTIONS`,
      "bank"
    );
  }

  function startQuiz(items, title, eyebrow, mode) {
    if (!items.length) {
      showToast("当前没有可练习的题目");
      return;
    }
    state.quiz = {
      title,
      eyebrow,
      mode,
      questions: items,
      answers: {},
      selfReview: {},
      index: 0,
      submitted: false,
      results: null
    };
    state.reviewFilter = "all";
    showView("quiz");
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showView(name) {
    state.view = name;
    $$(".view").forEach((view) => view.classList.toggle("is-active", view.id === `view-${name}`));
    $$(".nav-link").forEach((button) => {
      const target = button.dataset.nav;
      button.classList.toggle("is-active", target === name || (name === "quiz" && target === "home"));
    });
  }

  function showHome() {
    showView("home");
    renderHomeStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showLibrary(bankId = state.activeBank, onlyMarked = false) {
    state.activeBank = bankId;
    state.libraryOnlyMarked = onlyMarked;
    localStorage.setItem(ACTIVE_BANK_KEY, bankId);
    showView("library");
    renderLibrary();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderHomeStats() {
    const objective = questions.filter((q) => ["choice", "pairChoice", "fill"].includes(q.kind)).length;
    $("#totalQuestionCount").textContent = questions.length;
    $("#objectiveCount").textContent = objective;
    updateMarkIndicators();
  }

  function renderBankCards() {
    const root = $("#bankGrid");
    root.innerHTML = DATA.banks
      .map((bank) => {
        const objective =
          (bank.counts.choice || 0) + (bank.counts.pairChoice || 0) + (bank.counts.fill || 0);
        return `
          <button class="bank-card" type="button" data-bank="${bank.id}" data-accent="${bank.accent}">
            <div class="bank-top">
              <span class="bank-number">${bank.icon} / DATA</span>
              <span class="bank-arrow">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </span>
            </div>
            <div class="bank-main">
              <h3>${escapeHtml(bank.title)}</h3>
              <div class="bank-subtitle">${escapeHtml(bank.subtitle)}</div>
              <p>${escapeHtml(bank.description)}</p>
              <div class="bank-foot">
                <span><strong>${bank.count}</strong> 题 · 客观 ${objective}</span>
                <span>查看题库 →</span>
              </div>
            </div>
          </button>
        `;
      })
      .join("");

    $("#unitButtons").innerHTML = [1, 2, 3]
      .map((chapter) => {
        const count = objectiveQuestionsForChapter(chapter).length;
        return `
          <button class="unit-button" type="button" data-unit="${chapter}">
            <b>${chapter}</b>
            <span>
              <strong>第 ${chapter} 章单元检测</strong>
              <small>${count} 道客观题 · 完整覆盖本章</small>
            </span>
          </button>
        `;
      })
      .join("");
  }

  function renderLibrary() {
    const bank = bankById.get(state.activeBank) || DATA.banks[0];
    $("#libraryTitle").textContent = bank.title;
    $("#startBankQuiz").textContent = "练习当前题库";
    $("#bankTabs").innerHTML = DATA.banks
      .map(
        (item) =>
          `<button type="button" class="segment ${item.id === bank.id ? "is-active" : ""}" data-bank-tab="${item.id}">${escapeHtml(item.title)}</button>`
      )
      .join("");

    const typeOptions = [
      ["all", "全部"],
      ["choice", "选择题"],
      ["fill", "填空题"],
      ["code", "代码题"],
      ["essay", "简答"]
    ];
    $("#typeFilters").innerHTML = typeOptions
      .map(
        ([value, label]) =>
          `<button type="button" class="filter-pill ${state.libraryType === value ? "is-active" : ""}" data-type-filter="${value}">${label}</button>`
      )
      .join("");

    const onlyMarked = $("#onlyMarkedFilter");
    onlyMarked.setAttribute("aria-pressed", String(state.libraryOnlyMarked));
    $("#librarySearch").value = state.libraryQuery;
    renderLibraryList();
  }

  function renderLibraryList() {
    const bank = bankById.get(state.activeBank) || DATA.banks[0];
    const query = state.libraryQuery.trim().toLowerCase();
    let list = questions.filter((q) => q.bankId === bank.id);
    if (state.libraryType !== "all") {
      list = list.filter((q) =>
        state.libraryType === "choice"
          ? ["choice", "pairChoice"].includes(q.kind)
          : q.kind === state.libraryType
      );
    }
    if (state.libraryOnlyMarked) {
      list = list.filter((q) => {
        const mark = getMark(q.id);
        return mark.important || mark.doubtful;
      });
    }
    if (query) {
      list = list.filter((q) =>
        `${q.number} ${q.stem} ${q.knowledge} ${q.typeLabel}`.toLowerCase().includes(query)
      );
    }
    $("#libraryMeta").textContent = `当前显示 ${list.length} 题 · ${bank.source}`;
    $("#libraryList").innerHTML = list.length
      ? list.map(renderLibraryCard).join("")
      : `
        <div class="empty-state">
          <strong>没有匹配的题目</strong>
          <span>换一个筛选条件，或先去其他题库标记重点。</span>
        </div>
      `;
  }

  function renderLibraryCard(q) {
    const mark = getMark(q.id);
    const options =
      q.options || q.sharedOptions || [];
    return `
      <article class="library-card" id="library-${q.id}">
        <div class="library-card-head">
          <div class="library-card-tags">
            <span class="pill">${escapeHtml(q.typeLabel)}</span>
            <span class="pill muted">第 ${q.chapter} 章</span>
            <span class="pill muted">第 ${q.number} 题</span>
            ${mark.important ? '<span class="pill orange">★ 重点</span>' : ""}
            ${mark.doubtful ? '<span class="pill green">? 有疑惑</span>' : ""}
          </div>
          <div class="card-mark-actions">
            <button type="button" class="mark-button" data-card-mark="important" data-id="${q.id}" aria-pressed="${Boolean(mark.important)}"><span>★</span> 重点</button>
            <button type="button" class="mark-button" data-card-mark="doubtful" data-id="${q.id}" aria-pressed="${Boolean(mark.doubtful)}"><span>?</span> 有疑惑</button>
          </div>
        </div>
        <div class="library-question">${renderMarkdown(q.stem)}</div>
        ${
          options.length
            ? `<div class="option-list">${options.map((option) => `<div class="option-line"><b>${option.key}.</b>${escapeHtml(option.text)}</div>`).join("")}</div>`
            : ""
        }
        ${renderDiagrams(q)}
        <details class="mini-answer">
          <summary>查看答案与解析</summary>
          <div class="answer-block">
            <p><strong>${q.kind === "code" || q.kind === "essay" ? "参考作答" : "平台答案"}：</strong>${answerSummary(q)}</p>
            ${q.knowledge ? `<p><strong>知识点：</strong>${escapeHtml(q.knowledge)}</p>` : ""}
            ${q.explanation ? `<p><strong>解析：</strong>${escapeHtml(q.explanation)}</p>` : ""}
            ${q.referenceMarkdown ? `<div class="reference">${renderMarkdown(q.referenceMarkdown)}</div>` : ""}
          </div>
        </details>
      </article>
    `;
  }

  function answerSummary(q) {
    if (q.kind === "choice") return escapeHtml(q.correctChoice);
    if (q.kind === "fill") return escapeHtml(q.answerDisplay || q.blanks.map((b) => b.display).join("；"));
    if (q.kind === "pairChoice") return escapeHtml(q.answerDisplay);
    return "见下方参考作答";
  }

  function renderQuiz() {
    const quiz = state.quiz;
    if (!quiz) return;
    const q = quiz.questions[quiz.index];
    const bank = bankById.get(q.bankId);
    $("#quizEyebrow").textContent = quiz.eyebrow;
    $("#quizTitle").textContent = quiz.title;
    $("#questionShell").dataset.qid = q.id;
    $("#questionShell").dataset.kind = q.kind;
    $("#questionShell").dataset.chapter = String(q.chapter);
    $("#questionCount").textContent = quiz.questions.length;
    $("#questionPosition").textContent = `QUESTION ${String(quiz.index + 1).padStart(2, "0")}`;
    $("#questionScore").textContent = q.score ? `${q.score} 分` : "综合题";
    $("#currentType").textContent = q.typeLabel;
    $("#currentChapter").textContent = `第 ${q.chapter} 章`;
    $("#currentSource").textContent = bank.title;
    $("#questionBody").innerHTML = renderMarkdown(q.stem) + renderDiagrams(q);
    $("#answerArea").innerHTML = renderAnswerArea(q);
    $("#prevQuestion").disabled = quiz.index === 0;
    $("#nextQuestion").disabled = quiz.index === quiz.questions.length - 1;
    $("#nextQuestion").textContent = quiz.index === quiz.questions.length - 1 ? "已到最后一题" : "下一题";

    const mark = getMark(q.id);
    $$("[data-mark]").forEach((button) => {
      button.setAttribute("aria-pressed", String(Boolean(mark[button.dataset.mark])));
    });
    renderPalette();
    updateQuizProgress();
  }

  function renderAnswerArea(q) {
    if (q.kind === "choice") {
      const selected = state.quiz.answers[q.id] || "";
      return q.options
        .map(
          (option) => `
            <button class="choice-option ${selected === option.key ? "is-selected" : ""}" type="button" data-choice="${option.key}">
              <span class="choice-key">${option.key}</span>
              <span class="choice-text">${escapeHtml(option.text)}</span>
            </button>
          `
        )
        .join("");
    }

    if (q.kind === "pairChoice") {
      const selected = state.quiz.answers[q.id] || {};
      return `
        <div class="pair-options">
          ${q.sharedOptions.map((option) => `<span class="pair-option-ref"><b>${option.key}</b> ${escapeHtml(option.text)}</span>`).join("")}
        </div>
        ${q.subquestions
          .map(
            (sub, index) => `
              <div class="pair-field">
                <div class="pair-row">
                  <span>${escapeHtml(sub.text)}</span>
                  <select class="pair-select" data-pair="${index}">
                    <option value="">请选择</option>
                    ${q.sharedOptions.map((option) => `<option value="${option.key}" ${selected[index] === option.key ? "selected" : ""}>${option.key}</option>`).join("")}
                  </select>
                </div>
              </div>
            `
          )
          .join("")}
      `;
    }

    if (q.kind === "fill") {
      const selected = state.quiz.answers[q.id] || [];
      return q.blanks
        .map(
          (_, index) => `
            <div class="fill-field">
              <label for="fill-${q.id}-${index}">第 ${index + 1} 空</label>
              <input class="text-input" id="fill-${q.id}-${index}" data-fill="${index}" value="${escapeHtml(selected[index] || "")}" autocomplete="off" placeholder="输入你的答案">
            </div>
          `
        )
        .join("");
    }

    const selected = state.quiz.answers[q.id] || "";
    const placeholder =
      q.kind === "code"
        ? "在这里写出算法代码，或先写出核心步骤……"
        : "写出你的答案，提交后可对照参考作答。";
    return `
      <textarea class="code-input" id="long-answer" placeholder="${placeholder}">${escapeHtml(selected)}</textarea>
      <p class="essay-hint">${q.kind === "code" ? "代码题不进行机器判分，提交后请对照参考答案自评。" : "简答题不进行机器判分，提交后请对照参考作答自评。"}</p>
    `;
  }

  function renderPalette() {
    const quiz = state.quiz;
    $("#questionPalette").innerHTML = quiz.questions
      .map((q, index) => {
        const mark = getMark(q.id);
        const classes = [
          "palette-button",
          index === quiz.index ? "is-current" : "",
          isAnswered(q) ? "is-done" : "",
          mark.important || mark.doubtful ? "is-marked" : ""
        ]
          .filter(Boolean)
          .join(" ");
        return `<button class="${classes}" type="button" data-palette="${index}" data-qid="${q.id}" data-kind="${q.kind}" data-chapter="${q.chapter}" title="第 ${index + 1} 题">${index + 1}</button>`;
      })
      .join("");
  }

  function isAnswered(q) {
    const answer = state.quiz?.answers[q.id];
    if (q.kind === "choice") return Boolean(answer);
    if (q.kind === "fill") return Boolean(answer?.length && answer.every((item) => String(item || "").trim()));
    if (q.kind === "pairChoice") {
      return Boolean(answer && q.subquestions.every((_, index) => answer[index]));
    }
    return Boolean(String(answer || "").trim());
  }

  function updateQuizProgress() {
    const quiz = state.quiz;
    if (!quiz) return;
    const count = quiz.questions.filter(isAnswered).length;
    const percent = Math.round((count / quiz.questions.length) * 100);
    $("#answeredCount").textContent = count;
    $("#navigatorRate").textContent = `${percent}%`;
    $("#quizProgressBar").style.width = `${percent}%`;
  }

  function moveQuestion(offset) {
    const quiz = state.quiz;
    if (!quiz) return;
    const next = Math.max(0, Math.min(quiz.questions.length - 1, quiz.index + offset));
    quiz.index = next;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function currentQuestion() {
    return state.quiz?.questions[state.quiz.index];
  }

  function setChoice(value) {
    const q = currentQuestion();
    state.quiz.answers[q.id] = value;
    $$(".choice-option").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.choice === value);
    });
    renderPalette();
    updateQuizProgress();
  }

  function setFill(index, value) {
    const q = currentQuestion();
    const values = [...(state.quiz.answers[q.id] || [])];
    values[index] = value;
    state.quiz.answers[q.id] = values;
    renderPalette();
    updateQuizProgress();
  }

  function setPair(index, value) {
    const q = currentQuestion();
    const values = { ...(state.quiz.answers[q.id] || {}) };
    values[index] = value;
    state.quiz.answers[q.id] = values;
    renderPalette();
    updateQuizProgress();
  }

  function setLongAnswer(value) {
    const q = currentQuestion();
    state.quiz.answers[q.id] = value;
    renderPalette();
    updateQuizProgress();
  }

  function submitQuiz() {
    const quiz = state.quiz;
    if (!quiz) return;
    const unanswered = quiz.questions.filter((q) => !isAnswered(q));
    if (unanswered.length && !window.confirm(`还有 ${unanswered.length} 题未作答，确定提交吗？`)) {
      return;
    }
    quiz.submitted = true;
    quiz.results = quiz.questions.map(gradeQuestion);
    showView("result");
    renderResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function gradeQuestion(q) {
    const answer = state.quiz.answers[q.id];
    let status = "manual";
    let correct = false;
    if (q.kind === "choice") {
      correct = answer === q.correctChoice;
      status = correct ? "correct" : "wrong";
    } else if (q.kind === "pairChoice") {
      correct = q.subquestions.every((sub, index) => answer?.[index] === sub.correct);
      status = correct ? "correct" : "wrong";
    } else if (q.kind === "fill") {
      correct = q.blanks.every((blank, index) => fillMatches(answer?.[index], blank.accepted));
      status = correct ? "correct" : "wrong";
    }
    return { question: q, answer, status, correct };
  }

  function reviewBucket(result) {
    if (result.status !== "manual") return result.status;
    const self = state.quiz.selfReview[result.question.id];
    return self === "mastered" ? "correct" : "manual";
  }

  function renderResults() {
    const quiz = state.quiz;
    const objective = quiz.results.filter((r) => r.status !== "manual");
    const objectiveCorrect = objective.filter((r) => r.correct).length;
    const percent = objective.length ? Math.round((objectiveCorrect / objective.length) * 100) : 100;
    const wrong = quiz.results.filter((r) => r.status === "wrong");
    const manual = quiz.results.filter((r) => r.status === "manual");
    const unmasteredManual = manual.filter((r) => state.quiz.selfReview[r.question.id] !== "mastered");

    $("#scoreRing").style.setProperty("--score", `${percent}%`);
    $("#scorePercent").textContent = `${percent}%`;
    $("#correctStat").textContent = objectiveCorrect;
    $("#wrongStat").textContent = wrong.length + unmasteredManual.length;
    $("#objectiveStat").textContent = `${objectiveCorrect}/${objective.length}`;
    $("#resultTitle").textContent = quiz.title;
    $("#resultMessage").textContent =
      percent >= 90
        ? "客观题掌握得很稳。继续检查代码题的关键步骤与边界条件。"
        : percent >= 70
          ? "整体不错，优先回看错题对应的知识点，再重做一次薄弱题。"
          : "先把错题解析看透，再点“错题重做”。不需要立刻整卷重刷。";

    const retryButton = $('[data-action="retry-wrong"]');
    const retryCount = wrong.length + unmasteredManual.length;
    retryButton.textContent = retryCount ? `错题重做（${retryCount}）` : "没有待重做题";
    retryButton.disabled = retryCount === 0;

    $$("[data-review-filter]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.reviewFilter === state.reviewFilter);
    });
    renderReviewList();
  }

  function renderReviewList() {
    const quiz = state.quiz;
    if (!quiz) return;
    let results = quiz.results;
    if (state.reviewFilter === "wrong") {
      results = results.filter((r) => {
        if (r.status === "wrong") return true;
        return r.status === "manual" && quiz.selfReview[r.question.id] !== "mastered";
      });
    } else if (state.reviewFilter === "marked") {
      results = results.filter((r) => {
        const mark = getMark(r.question.id);
        return mark.important || mark.doubtful;
      });
    }
    $("#reviewList").innerHTML = results.length
      ? results.map(renderReviewCard).join("")
      : `<div class="empty-state"><strong>这里暂时没有题目</strong><span>切换筛选条件继续查看。</span></div>`;
  }

  function renderReviewCard(result) {
    const q = result.question;
    const bucket = reviewBucket(result);
    const mark = getMark(q.id);
    const statusText =
      bucket === "correct" ? "正确" : bucket === "wrong" ? "答错" : "待自评";
    const statusClass =
      bucket === "correct" ? "is-correct" : bucket === "wrong" ? "is-wrong" : "is-manual";
    const selfStatus = state.quiz.selfReview[q.id] || "";
    return `
      <article class="review-card ${statusClass}" id="review-${q.id}">
        <div class="review-card-head">
          <div class="review-card-tags">
            <span class="pill ${bucket === "correct" ? "green" : bucket === "wrong" ? "red" : "orange"}">${statusText}</span>
            <span class="pill">${escapeHtml(q.typeLabel)}</span>
            <span class="pill muted">第 ${q.chapter} 章 · 第 ${q.number} 题</span>
            ${mark.important ? '<span class="pill orange">★ 重点</span>' : ""}
            ${mark.doubtful ? '<span class="pill green">? 有疑惑</span>' : ""}
          </div>
          <div class="card-mark-actions">
            <button type="button" class="mark-button" data-card-mark="important" data-id="${q.id}" aria-pressed="${Boolean(mark.important)}"><span>★</span> 重点</button>
            <button type="button" class="mark-button" data-card-mark="doubtful" data-id="${q.id}" aria-pressed="${Boolean(mark.doubtful)}"><span>?</span> 有疑惑</button>
          </div>
        </div>
        <div class="review-content">${renderMarkdown(q.stem)}</div>
        ${renderAnswerComparison(result)}
        ${renderDiagrams(q)}
        <div class="explain-panel">
          <h4>平台答案</h4>
          <p>${answerSummary(q)}</p>
        </div>
        ${q.knowledge ? `<div class="explain-panel"><h4>知识点</h4><p>${escapeHtml(q.knowledge)}</p></div>` : ""}
        ${q.explanation ? `<div class="explain-panel"><h4>解析</h4><p>${escapeHtml(q.explanation)}</p></div>` : ""}
        ${
          q.referenceMarkdown
            ? `<div class="explain-panel"><h4>参考作答</h4>${renderMarkdown(q.referenceMarkdown)}</div>`
            : ""
        }
        ${
          q.kind === "code" || q.kind === "essay"
            ? `<div class="self-review">
                <button type="button" class="button ${selfStatus === "mastered" ? "button-primary" : "button-ghost"} button-small" data-self-review="mastered" data-id="${q.id}" aria-pressed="${selfStatus === "mastered"}">已掌握</button>
                <button type="button" class="button ${selfStatus === "redo" ? "button-primary" : "button-ghost"} button-small" data-self-review="redo" data-id="${q.id}" aria-pressed="${selfStatus === "redo"}">加入错题重做</button>
              </div>`
            : ""
        }
      </article>
    `;
  }

  function renderAnswerComparison(result) {
    const q = result.question;
    if (q.kind === "code" || q.kind === "essay") {
      const answer = String(result.answer || "").trim();
      return `<div class="result-banner manual"><strong>你的作答</strong><span>${answer ? escapeHtml(answer) : "未作答"}</span></div>`;
    }
    if (q.kind === "choice") {
      return `<div class="result-banner ${result.correct ? "correct" : "wrong"}"><strong>你的选择</strong><span>${escapeHtml(result.answer || "未作答")}</span></div>`;
    }
    if (q.kind === "pairChoice") {
      const userText = q.subquestions.map((_, index) => `（${index + 1}）${result.answer?.[index] || "未作答"}`).join("；");
      return `<div class="result-banner ${result.correct ? "correct" : "wrong"}"><strong>你的选择</strong><span>${escapeHtml(userText)}</span></div>`;
    }
    const userText = q.blanks.map((_, index) => `第 ${index + 1} 空：${result.answer?.[index] || "未作答"}`).join("；");
    return `<div class="result-banner ${result.correct ? "correct" : "wrong"}"><strong>你的答案</strong><span>${escapeHtml(userText)}</span></div>`;
  }

  function renderDiagrams(q) {
    if (!q.diagrams?.length) return "";
    return `<div class="diagram-grid">${q.diagrams.map((diagram, index) => renderDiagram(diagram, `${q.id}-${index}`)).join("")}</div>`;
  }

  function renderDiagram(diagram, key) {
    const width = 360;
    const height = diagram.layout === "tree" ? 300 : 220;
    const positions = diagramPositions(diagram);
    const markerId = `arrow-${key.replace(/[^a-z0-9-]/gi, "")}`;
    const edges = diagram.edges
      .map(([from, to]) => {
        const a = positions[from];
        const b = positions[to];
        if (!a || !b) return "";
        return `<line class="diagram-edge" x1="${a.x}" y1="${a.y + 10}" x2="${b.x}" y2="${b.y - 10}" marker-end="url(#${markerId})"/>`;
      })
      .join("");
    const nodes = diagram.nodes
      .map((node) => {
        const p = positions[node];
        return `<circle class="diagram-node" cx="${p.x}" cy="${p.y}" r="16"/><text class="diagram-label" x="${p.x}" y="${p.y}">${escapeHtml(node)}</text>`;
      })
      .join("");
    return `
      <figure class="diagram-card">
        <figcaption>${escapeHtml(diagram.title)}</figcaption>
        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(diagram.title)}">
          <defs>
            <marker id="${markerId}" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#75e6ff"/>
            </marker>
          </defs>
          ${edges}
          ${nodes}
        </svg>
      </figure>
    `;
  }

  function diagramPositions(diagram) {
    if (diagram.layout === "linear") {
      return Object.fromEntries(diagram.nodes.map((node, index) => [node, { x: 55 + index * 83, y: 110 }]));
    }
    if (diagram.layout === "tree") {
      return {
        d1: { x: 180, y: 35 },
        d2: { x: 75, y: 100 },
        d3: { x: 270, y: 100 },
        d4: { x: 180, y: 165 },
        d5: { x: 95, y: 230 },
        d6: { x: 305, y: 165 },
        d7: { x: 335, y: 230 },
        d8: { x: 245, y: 230 },
        d9: { x: 278, y: 288 }
      };
    }
    return {
      d1: { x: 45, y: 60 },
      d2: { x: 45, y: 160 },
      d3: { x: 135, y: 105 },
      d4: { x: 130, y: 185 },
      d5: { x: 205, y: 175 },
      d8: { x: 170, y: 38 },
      d9: { x: 260, y: 78 },
      d6: { x: 310, y: 165 },
      d7: { x: 315, y: 70 }
    };
  }

  function retryWrong() {
    const quiz = state.quiz;
    if (!quiz) return;
    const retry = quiz.results
      .filter((result) => {
        if (result.status === "wrong") return true;
        return result.status === "manual" && quiz.selfReview[result.question.id] !== "mastered";
      })
      .map((result) => result.question);
    if (!retry.length) return;
    startQuiz(shuffle(retry), `错题重做 · ${retry.length} 题`, "RETRY & REINFORCE", "retry");
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target) return;

      if (target.dataset.nav) {
        if (target.dataset.nav === "home") showHome();
        if (target.dataset.nav === "library") showLibrary();
        if (target.dataset.nav === "marked") showLibrary(state.activeBank, true);
        return;
      }
      if (target.dataset.start) {
        startPreset(target.dataset.start);
        return;
      }
      if (target.dataset.unit) {
        startUnit(Number(target.dataset.unit));
        return;
      }
      if (target.dataset.bank) {
        showLibrary(target.dataset.bank, false);
        return;
      }
      if (target.dataset.bankTab) {
        state.activeBank = target.dataset.bankTab;
        state.libraryType = "all";
        state.libraryQuery = "";
        localStorage.setItem(ACTIVE_BANK_KEY, state.activeBank);
        renderLibrary();
        return;
      }
      if (target.dataset.typeFilter) {
        state.libraryType = target.dataset.typeFilter;
        renderLibrary();
        return;
      }
      if (target.id === "onlyMarkedFilter") {
        state.libraryOnlyMarked = !state.libraryOnlyMarked;
        renderLibrary();
        return;
      }
      if (target.id === "startBankQuiz") {
        startBankQuiz(state.activeBank);
        return;
      }
      if (target.dataset.cardMark) {
        toggleMark(target.dataset.id, target.dataset.cardMark);
        if (state.view === "library") renderLibraryList();
        if (state.view === "result") renderReviewList();
        if (state.view === "quiz") renderQuiz();
        return;
      }
      if (target.dataset.mark) {
        toggleMark(currentQuestion().id, target.dataset.mark);
        renderQuiz();
        return;
      }
      if (target.dataset.choice) {
        setChoice(target.dataset.choice);
        return;
      }
      if (target.dataset.palette !== undefined) {
        state.quiz.index = Number(target.dataset.palette);
        renderQuiz();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (target.id === "prevQuestion") {
        moveQuestion(-1);
        return;
      }
      if (target.id === "nextQuestion") {
        moveQuestion(1);
        return;
      }
      if (target.id === "submitQuiz") {
        submitQuiz();
        return;
      }
      if (target.dataset.action === "exit-quiz") {
        if (!state.quiz?.submitted && Object.keys(state.quiz?.answers || {}).length) {
          if (!window.confirm("退出后本次作答不会保留，确定退出吗？")) return;
        }
        showHome();
        return;
      }
      if (target.dataset.action === "retry-wrong") {
        retryWrong();
        return;
      }
      if (target.dataset.reviewFilter) {
        state.reviewFilter = target.dataset.reviewFilter;
        $$("[data-review-filter]").forEach((button) => {
          button.classList.toggle("is-active", button.dataset.reviewFilter === state.reviewFilter);
        });
        renderReviewList();
        return;
      }
      if (target.dataset.selfReview) {
        state.quiz.selfReview[target.dataset.id] = target.dataset.selfReview;
        renderResults();
        showToast(target.dataset.selfReview === "mastered" ? "已标记为掌握" : "已加入错题重做");
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target.matches("[data-pair]")) {
        setPair(Number(event.target.dataset.pair), event.target.value);
      }
    });

    document.addEventListener("input", (event) => {
      if (event.target.matches("[data-fill]")) {
        setFill(Number(event.target.dataset.fill), event.target.value);
      }
      if (event.target.id === "long-answer") {
        setLongAnswer(event.target.value);
      }
      if (event.target.id === "librarySearch") {
        state.libraryQuery = event.target.value;
        renderLibraryList();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (state.view !== "quiz" || !state.quiz || event.target.matches("textarea, input, select")) return;
      if (event.key === "ArrowLeft") moveQuestion(-1);
      if (event.key === "ArrowRight") moveQuestion(1);
    });
  }

  function init() {
    renderBankCards();
    renderHomeStats();
    bindEvents();
    if (!bankById.has(state.activeBank)) state.activeBank = "ch1";
    showView("home");
  }

  init();
})();
