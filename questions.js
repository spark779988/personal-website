window.DS_DATA = {
  "generatedAt": "2026-11-03",
  "title": "数据结构期中冲刺",
  "banks": [
    {
      "id": "ch1",
      "order": 1,
      "title": "第一章作业",
      "subtitle": "数据结构基础 · 复杂度",
      "description": "逻辑结构、存储结构、算法特性与复杂度分析。",
      "source": "01_第一章作业.md",
      "accent": "cyan",
      "icon": "01",
      "count": 25,
      "counts": {
        "choice": 13,
        "fill": 9,
        "essay": 1,
        "code": 2
      }
    },
    {
      "id": "ch2",
      "order": 2,
      "title": "第二章客观题",
      "subtitle": "线性表 · 链表",
      "description": "顺序表、单链表、双链表与相关算法复杂度。",
      "source": "02_第二章客观题.md",
      "accent": "violet",
      "icon": "02",
      "count": 43,
      "counts": {
        "choice": 29,
        "fill": 8,
        "pairChoice": 1,
        "essay": 5
      }
    },
    {
      "id": "ch3",
      "order": 3,
      "title": "第三章客观题",
      "subtitle": "栈 · 队列",
      "description": "栈、队列、循环队列与合法出入序列。",
      "source": "03_第三章客观题.md",
      "accent": "orange",
      "icon": "03",
      "count": 54,
      "counts": {
        "choice": 39,
        "fill": 15
      }
    },
    {
      "id": "subj",
      "order": 4,
      "title": "第2-3章 主观题",
      "subtitle": "设计题 · 代码题",
      "description": "链表与顺序表设计、递归和循环链队代码。",
      "source": "04_第2-3章主观题.md",
      "accent": "lime",
      "icon": "04",
      "count": 13,
      "counts": {
        "essay": 4,
        "code": 9
      }
    }
  ],
  "questions": [
    {
      "score": 3,
      "knowledge": "线性结构中的元素关系",
      "explanation": "线性结构中的元素只有前后次序，除首尾外，每个元素都只有唯一前驱和唯一后继，因此元素之间是一对一关系。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-1",
      "bankId": "ch1",
      "chapter": 1,
      "number": 1,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "线性结构是数据元素之间存在一种(        )。",
      "options": [
        {
          "key": "A",
          "text": "一对多关系"
        },
        {
          "key": "B",
          "text": "多对多关系"
        },
        {
          "key": "C",
          "text": "多对一关系"
        },
        {
          "key": "D",
          "text": "一对一关系"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 3,
      "knowledge": "链式存储的结点布局",
      "explanation": "一个链表结点通常由数据域和指针域组成，这两部分位于同一块结点存储区中，地址连续；不同结点之间则可以通过指针分散存放。题目问的是“结点内”的存储单元，所以是 A。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-2",
      "bankId": "ch1",
      "chapter": 1,
      "number": 2,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "链式存储设计时，结点内的存储单元地址(        )。",
      "options": [
        {
          "key": "A",
          "text": "一定连续"
        },
        {
          "key": "B",
          "text": "一定不连续"
        },
        {
          "key": "C",
          "text": "不一定连续"
        },
        {
          "key": "D",
          "text": "部分连续，部分不连续"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 3,
      "knowledge": "算法分析的目的",
      "explanation": "算法分析主要比较不同算法在相同问题规模下的时间和空间开销，为优化和改进算法提供依据。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-3",
      "bankId": "ch1",
      "chapter": 1,
      "number": 3,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "算法分析的目的是(        )。",
      "options": [
        {
          "key": "A",
          "text": "找出数据结构的合理性"
        },
        {
          "key": "B",
          "text": "研究算法中的输入和输出的关系"
        },
        {
          "key": "C",
          "text": "分析算法的效率以求改进"
        },
        {
          "key": "D",
          "text": "分析算法的易懂性和文档性"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 3,
      "knowledge": "时间复杂性与空间复杂性",
      "explanation": "算法分析的核心指标是时间复杂度（运行工作量随规模的增长）与空间复杂度（额外存储需求随规模的增长）。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-4",
      "bankId": "ch1",
      "chapter": 1,
      "number": 4,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "算法分析的两个主要方面是(        )。",
      "options": [
        {
          "key": "A",
          "text": "空间复杂性和时间复杂性"
        },
        {
          "key": "B",
          "text": "正确性和简明性"
        },
        {
          "key": "C",
          "text": "可读性和文档性"
        },
        {
          "key": "D",
          "text": "数据复杂性和程序复杂性"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 3,
      "knowledge": "算法的定义",
      "explanation": "算法是为解决某类问题而规定的有限运算序列，具有明确步骤和终止条件，不同于某个具体的程序或排序方法。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-5",
      "bankId": "ch1",
      "chapter": 1,
      "number": 5,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "算法指的是(        )。",
      "options": [
        {
          "key": "A",
          "text": "计算方法"
        },
        {
          "key": "B",
          "text": "排序方法"
        },
        {
          "key": "C",
          "text": "解决问题的有限运算序列"
        },
        {
          "key": "D",
          "text": "调度方法"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 3,
      "knowledge": "算法的五个特性",
      "explanation": "算法应具有有穷性、确定性、可行性、输入和输出五个基本特性。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-6",
      "bankId": "ch1",
      "chapter": 1,
      "number": 6,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "一个算法必须具备输入、输出和(        )等五个特性。",
      "options": [
        {
          "key": "A",
          "text": "可行性、可移植性和可扩充性"
        },
        {
          "key": "B",
          "text": "可行性、确定性和有穷性"
        },
        {
          "key": "C",
          "text": "确定性、有穷性和稳定性"
        },
        {
          "key": "D",
          "text": "易读性、稳定性和安全性"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 3,
      "knowledge": "逻辑结构的分类",
      "explanation": "按元素之间的逻辑关系，数据结构通常分为线性结构和非线性结构；树、图都属于非线性结构。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-7",
      "bankId": "ch1",
      "chapter": 1,
      "number": 7,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在数据结构中，从逻辑上可以把数据结构分为(        )。",
      "options": [
        {
          "key": "A",
          "text": "动态结构和静态结构"
        },
        {
          "key": "B",
          "text": "紧凑结构和非紧凑结构"
        },
        {
          "key": "C",
          "text": "线性结构和非线性结构"
        },
        {
          "key": "D",
          "text": "内部结构和外部结构"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 3,
      "knowledge": "数据的存储结构",
      "explanation": "逻辑结构描述数据元素之间的抽象关系；它在计算机内存中的具体表示与实现称为存储结构（物理结构）。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-8",
      "bankId": "ch1",
      "chapter": 1,
      "number": 8,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "数据结构在计算机内存中的表示是指(        )。",
      "options": [
        {
          "key": "A",
          "text": "数据的存储结构"
        },
        {
          "key": "B",
          "text": "数据结构"
        },
        {
          "key": "C",
          "text": "数据的逻辑结构"
        },
        {
          "key": "D",
          "text": "数据元素之间的关系"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 3,
      "knowledge": "逻辑结构与物理实现的独立性",
      "explanation": "逻辑结构与计算机的内存地址、机器实现无关；存储结构才与具体计算机相关。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-9",
      "bankId": "ch1",
      "chapter": 1,
      "number": 9,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在数据结构中，与所使用的计算机无关的是数据的(        )结构。",
      "options": [
        {
          "key": "A",
          "text": "逻辑"
        },
        {
          "key": "B",
          "text": "存储"
        },
        {
          "key": "C",
          "text": "逻辑和存储"
        },
        {
          "key": "D",
          "text": "物理"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 3,
      "knowledge": "存储结构与数据关系",
      "explanation": "存储数据时既要保存数据元素本身，也要保存元素之间的逻辑关系：顺序存储用相对位置表示，链式存储用指针表示。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-10",
      "bankId": "ch1",
      "chapter": 1,
      "number": 10,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在存储数据时，通常不仅要存储各数据元素的值，而且还要存储(        )。",
      "options": [
        {
          "key": "A",
          "text": "数据的处理方法"
        },
        {
          "key": "B",
          "text": "数据元素的类型"
        },
        {
          "key": "C",
          "text": "数据元素之间的关系"
        },
        {
          "key": "D",
          "text": "数据的存储方法"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 3,
      "knowledge": "大 O 记号的含义",
      "explanation": "O(n²) 是增长率记号，表示当问题规模 n 增大时，算法执行工作量的增长上界与 n² 同阶，并不表示精确执行 n² 次。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-11",
      "bankId": "ch1",
      "chapter": 1,
      "number": 11,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "某算法的时间复杂度为O(n²)，表明该算法的(        )。",
      "options": [
        {
          "key": "A",
          "text": "问题规模是n²"
        },
        {
          "key": "B",
          "text": "执行时间等于n²"
        },
        {
          "key": "C",
          "text": "执行时间和n²成正比"
        },
        {
          "key": "D",
          "text": "问题规模与n²成正比"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 3,
      "knowledge": "链式存储的空间特点",
      "explanation": "链式存储依靠指针连接结点，每个结点单独申请空间，因此可用存储单元的地址可以连续，也可以不连续。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-12",
      "bankId": "ch1",
      "chapter": 1,
      "number": 12,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "线性表若采用链式存储结构时，要求内存中可用存储单元的地址(        )。",
      "options": [
        {
          "key": "A",
          "text": "必须是连续的"
        },
        {
          "key": "B",
          "text": "部分地址必须是连续的"
        },
        {
          "key": "C",
          "text": "一定是不连续的"
        },
        {
          "key": "D",
          "text": "连续或不连续都可以"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 3,
      "knowledge": "算法与程序的区别、算法特性",
      "explanation": "算法可以脱离计算机程序而存在；程序不等于算法；“可行性”不是“无二义性”，无二义性属于确定性。因此前三项均错误，选 D。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-13",
      "bankId": "ch1",
      "chapter": 1,
      "number": 13,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "下面关于算法说法正确的是( )。",
      "options": [
        {
          "key": "A",
          "text": "算法最终必须由计算机程序实现"
        },
        {
          "key": "B",
          "text": "“为解决某问题规定的算法”同“为该问题编写的程序”含义是相同的"
        },
        {
          "key": "C",
          "text": "算法的可行性是指指令不能有二义性"
        },
        {
          "key": "D",
          "text": "以上几个都是错误的"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 4,
      "knowledge": "数据结构的二元组定义",
      "explanation": "数据结构常记作 DS=(D,R)：D 是数据元素的有限集合，R 是 D 上关系的有限集合。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-14",
      "bankId": "ch1",
      "chapter": 1,
      "number": 14,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "数据结构被形式地定义为(D, R)，其中D是 ____的有限集合，R是D上的 ____有限集合。",
      "blanks": [
        {
          "accepted": [
            "数据元素"
          ],
          "display": "数据元素"
        },
        {
          "accepted": [
            "关系"
          ],
          "display": "关系"
        }
      ],
      "answerDisplay": "数据元素；关系"
    },
    {
      "score": 6,
      "knowledge": "数据结构的研究内容",
      "explanation": "数据结构包括逻辑结构、存储结构（物理结构）及在该结构上定义的运算或操作。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-15",
      "bankId": "ch1",
      "chapter": 1,
      "number": 15,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "数据结构包括数据的 ____、数据的 ____和数据的 ____这三个方面的内容。",
      "blanks": [
        {
          "accepted": [
            "逻辑结构"
          ],
          "display": "逻辑结构"
        },
        {
          "accepted": [
            "存储结构(或物理结构)",
            "存储结构",
            "物理结构"
          ],
          "display": "存储结构(或物理结构)"
        },
        {
          "accepted": [
            "运算(或操作)",
            "运算",
            "操作"
          ],
          "display": "运算(或操作)"
        }
      ],
      "answerDisplay": "逻辑结构；存储结构(或物理结构)；运算(或操作)"
    },
    {
      "score": 4,
      "knowledge": "逻辑结构分类",
      "explanation": "按逻辑关系，数据结构可分为线性结构和非线性结构两大类。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-16",
      "bankId": "ch1",
      "chapter": 1,
      "number": 16,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "数据结构按逻辑结构可分为两大类，它们分别是 ____和 ____。",
      "blanks": [
        {
          "accepted": [
            "线性结构"
          ],
          "display": "线性结构"
        },
        {
          "accepted": [
            "非线性结构"
          ],
          "display": "非线性结构"
        }
      ],
      "answerDisplay": "线性结构；非线性结构"
    },
    {
      "score": 4,
      "knowledge": "算法效率",
      "explanation": "算法效率通常从时间效率和空间效率两个方面衡量。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-17",
      "bankId": "ch1",
      "chapter": 1,
      "number": 17,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "一个算法的效率可分为 ____效率和 ____效率。",
      "blanks": [
        {
          "accepted": [
            "时间"
          ],
          "display": "时间"
        },
        {
          "accepted": [
            "空间"
          ],
          "display": "空间"
        }
      ],
      "answerDisplay": "时间；空间"
    },
    {
      "score": 4,
      "knowledge": "线性结构的前驱与后继",
      "explanation": "线性结构的首结点没有前驱，尾结点没有后继；中间结点各有且仅有一个直接前驱和一个直接后继。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-18",
      "bankId": "ch1",
      "chapter": 1,
      "number": 18,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在线性结构中，第一个结点 ____前驱结点，其余每个结点有且只有1个前驱结点;最后一个结点 ____后续结点，其余每个结点有且只有1个后续结点。",
      "blanks": [
        {
          "accepted": [
            "没有"
          ],
          "display": "没有"
        },
        {
          "accepted": [
            "没有"
          ],
          "display": "没有"
        }
      ],
      "answerDisplay": "没有；没有"
    },
    {
      "score": 2,
      "knowledge": "图形结构中的结点度",
      "explanation": "图形结构不限制结点度，一个结点可以有任意多个前驱和后继。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-19",
      "bankId": "ch1",
      "chapter": 1,
      "number": 19,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在图形结构中，每个结点的前驱结点数和后续结点数可以 ____。",
      "blanks": [
        {
          "accepted": [
            "任意多个(或任意、多个、任意个)",
            "任意多个",
            "任意",
            "多个",
            "任意个"
          ],
          "display": "任意多个(或任意、多个、任意个)"
        }
      ],
      "answerDisplay": "任意多个(或任意、多个、任意个)"
    },
    {
      "score": 4,
      "knowledge": "数据结构的研究对象",
      "explanation": "数据结构研究非数值计算问题中的数据对象、它们之间的关系以及在结构上定义的操作。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-20",
      "bankId": "ch1",
      "chapter": 1,
      "number": 20,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "数据结构是一门研究非数值计算的程序设计问题中计算机的 ____以及它们之间的 ____和运算等的学科。",
      "blanks": [
        {
          "accepted": [
            "操作对象(或数据对象)",
            "操作对象",
            "数据对象"
          ],
          "display": "操作对象(或数据对象)"
        },
        {
          "accepted": [
            "关系"
          ],
          "display": "关系"
        }
      ],
      "answerDisplay": "操作对象(或数据对象)；关系"
    },
    {
      "score": 6,
      "knowledge": "三种典型逻辑结构",
      "explanation": "线性结构是一对一；树形结构是一对多；图形结构是多对多。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-21",
      "bankId": "ch1",
      "chapter": 1,
      "number": 21,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "线性结构中元素之间存在 ____关系，树形结构中元素之间存在 ____关系，图形结构中元素之间存在 ____关系。",
      "blanks": [
        {
          "accepted": [
            "一对一(或1:1)",
            "一对一",
            "1:1"
          ],
          "display": "一对一(或1:1)"
        },
        {
          "accepted": [
            "一对多(或1:n、1:N)",
            "一对多",
            "1:n",
            "1:N"
          ],
          "display": "一对多(或1:n、1:N)"
        },
        {
          "accepted": [
            "多对多(或n:m、m:n、M:N)",
            "多对多",
            "n:m",
            "m:n",
            "M:N"
          ],
          "display": "多对多(或n:m、m:n、M:N)"
        }
      ],
      "answerDisplay": "一对一(或1:1);一对多(或1:n、1:N);多对多(或n:m、m:n、M:N)"
    },
    {
      "score": 8,
      "knowledge": "树形结构的前驱与后继",
      "explanation": "树根没有前驱；除根外每个结点只有一个前驱。叶子没有后继；非叶结点可有一个或多个后继。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch1-22",
      "bankId": "ch1",
      "chapter": 1,
      "number": 22,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在树形结构中，树根结点没有 ____结点，其余每个结点有且只有 ____个前驱结点;叶子结点没有 ____结点，其余每个结点的后续结点数可以 ____。",
      "blanks": [
        {
          "accepted": [
            "前驱"
          ],
          "display": "前驱"
        },
        {
          "accepted": [
            "1(或一)",
            "1",
            "一"
          ],
          "display": "1(或一)"
        },
        {
          "accepted": [
            "后续(或后继)",
            "后续",
            "后继"
          ],
          "display": "后续(或后继)"
        },
        {
          "accepted": [
            "任意多个(或多个、多、任意个、任意)",
            "任意多个",
            "多个",
            "多",
            "任意个",
            "任意"
          ],
          "display": "任意多个(或多个、多、任意个、任意)"
        }
      ],
      "answerDisplay": "前驱;1(或一);后续(或后继);任意多个(或多个、多、任意个、任意)"
    },
    {
      "score": 5,
      "knowledge": "逻辑结构、开始结点、终端结点",
      "explanation": "题中 R 给出的有向关系分别形成链、树和图。没有直接前驱的结点是开始/根结点，没有直接后继的结点是终端/叶结点。平台答案给出了三类结构和对应端点。",
      "referenceMarkdown": "（1）线性结构：d1 无直接前驱，是首结点；d4 无直接后继，是尾结点。\n\n（2）树形结构：d1 无直接前驱，是根结点；d2、d5、d7、d9 无直接后继，是叶子结点。\n\n（3）图形结构：d1、d2 无直接前驱，是开始结点；d6、d7 无直接后继，是终端结点。",
      "diagrams": [
        {
          "title": "（1）线性结构",
          "layout": "linear",
          "nodes": [
            "d1",
            "d2",
            "d3",
            "d4"
          ],
          "edges": [
            [
              "d1",
              "d2"
            ],
            [
              "d2",
              "d3"
            ],
            [
              "d3",
              "d4"
            ]
          ]
        },
        {
          "title": "（2）树形结构",
          "layout": "tree",
          "nodes": [
            "d1",
            "d2",
            "d3",
            "d4",
            "d5",
            "d6",
            "d7",
            "d8",
            "d9"
          ],
          "edges": [
            [
              "d1",
              "d2"
            ],
            [
              "d1",
              "d3"
            ],
            [
              "d3",
              "d4"
            ],
            [
              "d3",
              "d6"
            ],
            [
              "d4",
              "d5"
            ],
            [
              "d6",
              "d8"
            ],
            [
              "d6",
              "d7"
            ],
            [
              "d8",
              "d9"
            ]
          ]
        },
        {
          "title": "（3）图形结构",
          "layout": "graph",
          "nodes": [
            "d1",
            "d2",
            "d3",
            "d4",
            "d5",
            "d6",
            "d7",
            "d8",
            "d9"
          ],
          "edges": [
            [
              "d1",
              "d3"
            ],
            [
              "d1",
              "d8"
            ],
            [
              "d2",
              "d3"
            ],
            [
              "d2",
              "d4"
            ],
            [
              "d2",
              "d5"
            ],
            [
              "d3",
              "d9"
            ],
            [
              "d5",
              "d6"
            ],
            [
              "d8",
              "d9"
            ],
            [
              "d9",
              "d7"
            ],
            [
              "d4",
              "d7"
            ],
            [
              "d4",
              "d6"
            ]
          ]
        }
      ],
      "id": "ch1-23",
      "bankId": "ch1",
      "chapter": 1,
      "number": 23,
      "kind": "essay",
      "typeLabel": "简答题",
      "stem": "设有数据逻辑结构 S=(D,R)，试按各小题所给条件画出这些逻辑结构的图示，并确定相对于关系 R，哪些结点是开始结点，哪些结点是终端结点。\n\n**(1)**\n\n- `D={d1,d2,d3,d4}`\n- `R={(d1,d2),(d2,d3),(d3,d4)}`\n\n**(2)**\n\n- `D={d1,d2,...,d9}`\n- `R={(d1,d2),(d1,d3),(d3,d4),(d3,d6),(d6,d8),(d4,d5),(d6,d7),(d8,d9)}`\n\n**(3)**\n\n- `D={d1,d2,...,d9}`\n- `R={(d1,d3),(d1,d8),(d2,d3),(d2,d4),(d2,d5),(d3,d9),(d5,d6),(d8,d9),(d9,d7),(d4,d7),(d4,d6)}`",
      "answerDisplay": "（1）线性结构：d1 无直接前驱，是首结点；d4 无直接后继，是尾结点。\n\n（2）树形结构：d1 无直接前驱，是根结点；d2、d5、d7、d9 无直接后继，是叶子结点。\n\n（3）图形结构：d1、d2 无直接前驱，是开始结点；d6、d7 无直接后继，是终端结点。"
    },
    {
      "score": 6,
      "knowledge": "语句频度",
      "explanation": "（1）i 从 1 到 n-1，共执行 n-1 次。（2）三重循环频度为 ΣᵢΣⱼ j = n(n+1)(n+2)/6。（3）每轮 i 与 j 中较小者加一，i+j 从 0 递增到 n，循环体执行 n 次。",
      "referenceMarkdown": "（1）n-1\n\n（2）n(n+1)(n+2)/6\n\n（3）n",
      "diagrams": [],
      "id": "ch1-24",
      "bankId": "ch1",
      "chapter": 1,
      "number": 24,
      "kind": "code",
      "typeLabel": "代码分析题",
      "stem": "设 n 为正整数。试确定下列各程序段中前置以记号 `@` 的语句的频度。\n\n**（1）**\n\n```c\ni = 1;\nk = 0;\nwhile (i <= n - 1) {\n    @ k += 10 * i;\n    i++;\n}\n```\n\n**（2）**\n\n```c\nfor (i = 1; i <= n; i++)\n    for (j = 1; j <= i; j++)\n        for (k = 1; k <= j; k++)\n            @ x += delta;\n```\n\n**（3）**\n\n```c\ni = 1;\nj = 0;\nwhile (i + j <= n) {\n    @ if (i > j)\n          j++;\n      else\n          i++;\n}\n```",
      "answerDisplay": "（1）n-1\n\n（2）n(n+1)(n+2)/6\n\n（3）n"
    },
    {
      "score": 8,
      "knowledge": "时间复杂度分析",
      "explanation": "（1）两层循环各执行 n、m 次，为 O(mn)。（2）两层 n 次循环，为 O(n²)。（3）内层次数为 n-i，总计 O(n²)。（4）i 每次乘 3，执行次数量级为 log₃n，也在 O(log n) 内。",
      "referenceMarkdown": "（1）O(m×n)\n\n（2）O(n²)\n\n（3）O(n²)\n\n（4）O(log ₙ)",
      "diagrams": [],
      "id": "ch1-25",
      "bankId": "ch1",
      "chapter": 1,
      "number": 25,
      "kind": "code",
      "typeLabel": "代码分析题",
      "stem": "分析下面各程序段的时间复杂度。\n\n**（1）**\n\n```c\nfor (i = 0; i < n; i++)\n    for (j = 0; j < m; j++)\n        A[i][j] = 0;\n```\n\n**（2）**\n\n```c\ns = 0;\nfor (i = 0; i < n; i++)\n    for (j = 0; j < n; j++)\n        s += B[i][j];\nsum = s;\n```\n\n**（3）**\n\n```c\nx = 0;\nfor (i = 1; i < n; i++)\n    for (j = 1; j <= n - i; j++)\n        x++;\n```\n\n**（4）**\n\n```c\ni = 1;\nwhile (i <= n)\n    i = i * 3;\n```",
      "answerDisplay": "（1）O(m×n)\n\n（2）O(n²)\n\n（3）O(n²)\n\n（4）O(log ₙ)"
    },
    {
      "score": 2,
      "knowledge": "顺序存储结构",
      "explanation": "物理地址与逻辑地址相同且连续，是顺序存储的典型特征。链式存储不要求物理地址连续。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-1",
      "bankId": "ch2",
      "chapter": 2,
      "number": 1,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "数据在计算机存储器内表示时，物理地址与逻辑地址相同并且是连续的，称之为(        )。",
      "options": [
        {
          "key": "A",
          "text": "存储结构"
        },
        {
          "key": "B",
          "text": "逻辑结构"
        },
        {
          "key": "C",
          "text": "顺序存储结构"
        },
        {
          "key": "D",
          "text": "链式存储结构"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "顺序表插入时元素移动",
      "explanation": "在长度 n 的顺序表中，第 i 个位置前插入（1≤i≤n+1）时，从原第 i 到第 n 个元素都要后移，共 n-i+1 个。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-2",
      "bankId": "ch2",
      "chapter": 2,
      "number": 2,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个长度为n的顺序表中，在第i个元素(1≤i≤n+1)之前插入一个新元素时须向后移动(        )个元素。",
      "options": [
        {
          "key": "A",
          "text": "n-i"
        },
        {
          "key": "B",
          "text": "n-i+1"
        },
        {
          "key": "C",
          "text": "n-i-1"
        },
        {
          "key": "D",
          "text": "i"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "顺序表与链表的适用场景",
      "explanation": "顺序表在中间插入、删除通常要移动大量元素；链表只要定位后修改指针，更适合频繁插入/删除，但顺序表并不因此一概“优于”链表，反之亦然。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-3",
      "bankId": "ch2",
      "chapter": 2,
      "number": 3,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在以下的叙述中，正确的是(        )。",
      "options": [
        {
          "key": "A",
          "text": "线性表的顺序存储结构优于链表存储结构"
        },
        {
          "key": "B",
          "text": "线性表的顺序存储结构适用于频繁插入/删除数据元素的情况"
        },
        {
          "key": "C",
          "text": "线性表的链表存储结构适用于频繁插入/删除数据元素的情况"
        },
        {
          "key": "D",
          "text": "线性表的链表存储结构优于顺序存储结构"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "双向链表结点插入",
      "explanation": "在 p 前插入 q 时，先让 q 接上 p 和 p 的原前驱，再修改两侧邻居，通常要处理 q->prior、q->next、p->prior->next、p->prior 四处；平台采用的正确顺序是 D。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-4",
      "bankId": "ch2",
      "chapter": 2,
      "number": 4,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个双链表中，在p结点之前插入结点q的操作是(        )。",
      "options": [
        {
          "key": "A",
          "text": "p->prior=q; q->next=p; p->prior->next=q; q->prior=p->prior;"
        },
        {
          "key": "B",
          "text": "q->prior=p->prior; p->prior->next=q; q->next=p; p->prior=q->next;"
        },
        {
          "key": "C",
          "text": "q->next=p; p->next=q; q->prior->next=q; q->next=p;"
        },
        {
          "key": "D",
          "text": "p->prior->next=q; q->next=p; q->prior=p->prior; p->prior=q;"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "单链表删除后继结点",
      "explanation": "删除 p 的后继只需让 p->next 跳过它，即 p->next=p->next->next；题目未要求释放空间。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-5",
      "bankId": "ch2",
      "chapter": 2,
      "number": 5,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个单链表中，若删除P所指结点的后继结点，则执行(        )。",
      "options": [
        {
          "key": "A",
          "text": "p->next=p->next->next"
        },
        {
          "key": "B",
          "text": "p=p->next;p->next=p->next->next"
        },
        {
          "key": "C",
          "text": "p->next=p->next;"
        },
        {
          "key": "D",
          "text": "p=p->next->next;"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "顺序表与链表的优缺点",
      "explanation": "顺序存储换来了随机访问，但中间插入/删除要移动元素，因此“便于插入删除”的说法错误。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-6",
      "bankId": "ch2",
      "chapter": 2,
      "number": 6,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "下面关于线性表的叙述中，错误的是哪一个(        )?",
      "options": [
        {
          "key": "A",
          "text": "线性表采用顺序存储，必须占用一片连续的存储单元"
        },
        {
          "key": "B",
          "text": "线性表采用顺序存储，便于进行插入和删除操作"
        },
        {
          "key": "C",
          "text": "线性表采用链接存储，不必占用一片连续的存储单元"
        },
        {
          "key": "D",
          "text": "线性表采用链接存储，便于进行插入和删除操作"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "单链表查找的平均比较次数",
      "explanation": "成功查找位置等概率为 1..n，第 i 个位置比较 i 次，平均 (1+…+n)/n=(n+1)/2。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-7",
      "bankId": "ch2",
      "chapter": 2,
      "number": 7,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "从一个具有n个结点的单链表中查找其值等于x结点时，在查找成功的情况下，需平均比较(        )个结点。",
      "options": [
        {
          "key": "A",
          "text": "n"
        },
        {
          "key": "B",
          "text": "n/2"
        },
        {
          "key": "C",
          "text": "(n-1)/2"
        },
        {
          "key": "D",
          "text": "(n+1)/2"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "存储密度",
      "explanation": "链表结点除数据外还要存指针，存储密度=数据占用量/结点总占用量<1。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-8",
      "bankId": "ch2",
      "chapter": 2,
      "number": 8,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "单链表的存储密度(        )。",
      "options": [
        {
          "key": "A",
          "text": "大于1"
        },
        {
          "key": "B",
          "text": "等于1"
        },
        {
          "key": "C",
          "text": "小于1"
        },
        {
          "key": "D",
          "text": "不能确定"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "仅设尾指针的单循环链表",
      "explanation": "仅有尾指针的单循环链表中，rear->next 就是表头；表尾插入直接接在新尾后，删除表头也只需改 rear->next，二者都是 O(1)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-9",
      "bankId": "ch2",
      "chapter": 2,
      "number": 9,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "某线性表中最常用的操作是在最后一个元素之后插入一个元素和删除第一个元素，则采用(        )存储方式最节省运算时间。",
      "options": [
        {
          "key": "A",
          "text": "单链表"
        },
        {
          "key": "B",
          "text": "仅有头指针的单循环链表"
        },
        {
          "key": "C",
          "text": "双链表"
        },
        {
          "key": "D",
          "text": "仅有尾指针的单循环链表"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "循环单链表尾结点判定",
      "explanation": "以 h 为头指针的循环单链表中，尾结点的 next 会回到头结点，因此尾结点 p 满足 p->next==h。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-10",
      "bankId": "ch2",
      "chapter": 2,
      "number": 10,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个以h为头指针的循环单链中，p指针指向链尾的条件是(        )。",
      "options": [
        {
          "key": "A",
          "text": "p->next==h;"
        },
        {
          "key": "B",
          "text": "p->next==NULL;"
        },
        {
          "key": "C",
          "text": "p->next->next==h;"
        },
        {
          "key": "D",
          "text": "p ->data=-1;"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "链式存储结构与逻辑关系",
      "explanation": "链式结构用指针显式表示逻辑邻接关系，同时已定位位置后的插入、删除只需改指针，符合题意。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-11",
      "bankId": "ch2",
      "chapter": 2,
      "number": 11,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "对于一个线性表，既要求能够快速地进行插入和删除，又要求存储结构能够反映数据元素之间的逻辑关系，则应采用(        )存储结构。",
      "options": [
        {
          "key": "A",
          "text": "顺序"
        },
        {
          "key": "B",
          "text": "链式"
        },
        {
          "key": "C",
          "text": "散列"
        },
        {
          "key": "D",
          "text": "索引"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "顺序表访问和修改的时间复杂度",
      "explanation": "顺序表可由下标直接定位任意结点，访问为 O(1)；增加或删除可能移动 O(n) 个元素。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-12",
      "bankId": "ch2",
      "chapter": 2,
      "number": 12,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "对于顺序存储的线性表，按值访问结点和增加、删除结点的时间复杂度为(        )。",
      "options": [
        {
          "key": "A",
          "text": "O(n),O(n)"
        },
        {
          "key": "B",
          "text": "O(n),O(1)"
        },
        {
          "key": "C",
          "text": "O(1),O(n)"
        },
        {
          "key": "D",
          "text": "O(1),O(1)"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "双向链表的特点",
      "explanation": "双向链表保存 prior 和 next，可在 O(1) 时间从当前结点访问前驱，也可访问后继。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-13",
      "bankId": "ch2",
      "chapter": 2,
      "number": 13,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "与单链表相比，双链表的优点之一是(        )。",
      "options": [
        {
          "key": "A",
          "text": "插入、删除操作更简单"
        },
        {
          "key": "B",
          "text": "可以进行随机访问"
        },
        {
          "key": "C",
          "text": "可以省略表头指针或表尾指针"
        },
        {
          "key": "D",
          "text": "访问前后相邻结点更灵活"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "链表指针地址追踪",
      "explanation": "逻辑链为 c→a→e→b→d。将 f 插在 a 与 e 之间后，a->next=f、f->next=e，所以 a、e、f 的链接地址分别为 1014H、1004H、1010H。注意题中问的是 a、e、f 三者的链接地址顺序。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-14",
      "bankId": "ch2",
      "chapter": 2,
      "number": 14,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "已知表头元素为 c 的单链表在内存中的存储状态如下表所示。\n\n| 地址 | 元素 | 链接地址 |\n| --- | --- | --- |\n| 1000H | a | 1010H |\n| 1004H | b | 100CH |\n| 1008H | c | 1000H |\n| 100CH | d | NULL |\n| 1010H | e | 1004H |\n| 1014H | f（待插入） | 待确定 |\n\n现将 f 存放于 1014H 处并插入到单链表中。若 f 在逻辑上位于 a 和 e 之间，则 a、e、f 的“链接地址”依次是什么？",
      "options": [
        {
          "key": "A",
          "text": "1010H、1014H、1004H"
        },
        {
          "key": "B",
          "text": "1010H、1004H、1014H"
        },
        {
          "key": "C",
          "text": "1014H、1010H、1004H"
        },
        {
          "key": "D",
          "text": "1014H、1004H、1010H"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "顺序表随机访问",
      "explanation": "顺序表第 i 个元素地址可由首地址加偏移直接计算，其直接前驱也能由下标 i-1 访问，二者都是 O(1)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-15",
      "bankId": "ch2",
      "chapter": 2,
      "number": 15,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在n个结点的顺序表中，算法的时间复杂度是O(1)的操作是(        )。",
      "options": [
        {
          "key": "A",
          "text": "访问第i个结点(1≤i≤n)和求第i个结点的直接前驱(2≤i≤n)"
        },
        {
          "key": "B",
          "text": "在第i个结点后插入一个新结点(1≤i≤n)"
        },
        {
          "key": "C",
          "text": "删除第i个结点(1≤i≤n)"
        },
        {
          "key": "D",
          "text": "将n个结点从小到大排序"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "有序单链表插入",
      "explanation": "要找到新结点应插入的位置，必须从表头沿 next 扫描，最坏 O(n)，插入指针操作本身虽为 O(1)，总时间仍 O(n)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-16",
      "bankId": "ch2",
      "chapter": 2,
      "number": 16,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个具有n个结点的有序单链表中插入一个新结点并仍然保持有序的时间复杂度是(        )。",
      "options": [
        {
          "key": "A",
          "text": "O(1)"
        },
        {
          "key": "B",
          "text": "O(n)"
        },
        {
          "key": "C",
          "text": "O(n2)"
        },
        {
          "key": "D",
          "text": "O(nlog2n)"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "双向链表插入指针顺序",
      "explanation": "在 p 后插入 q，必须先把 q 接到 p 的原后继，再修改后继的 prior，最后接回 p；平台正确答案为 B。关键是不能过早覆盖 p->next。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-17",
      "bankId": "ch2",
      "chapter": 2,
      "number": 17,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个双链表中，在p结点之后插入结点q的操作是(        )。",
      "options": [
        {
          "key": "A",
          "text": "q->prior=p; p->next=q; p->next->prior=q; q->next=p->next;"
        },
        {
          "key": "B",
          "text": "q->next=p->next; p->next->prior=q; p->next=q; q->prior=p;"
        },
        {
          "key": "C",
          "text": "p->next=q; q->prior=p; q->next=p->next; p->next->prior=q;"
        },
        {
          "key": "D",
          "text": "q->prior=p; p->next=q; q->next=p->next; p->next->prior=q;"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "尾插、尾删的存储结构选择",
      "explanation": "双循环链表可直接由尾结点找前驱并删除尾结点；仅带尾指针的单循环链表删除尾结点仍需找其前驱。因此 D 最省时间。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-18",
      "bankId": "ch2",
      "chapter": 2,
      "number": 18,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "设一个链表最常用的操作是在末尾插入结点和删除尾结点，则选用(        )最节省时间。",
      "options": [
        {
          "key": "A",
          "text": "单链表"
        },
        {
          "key": "B",
          "text": "单循环链表"
        },
        {
          "key": "C",
          "text": "带尾指针的单循环链表"
        },
        {
          "key": "D",
          "text": "带头结点的双循环链表"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "线性表的定义",
      "explanation": "线性表是 n 个数据元素组成的有序有限序列；数据元素是基本单位。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-19",
      "bankId": "ch2",
      "chapter": 2,
      "number": 19,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "线性表是具有n(n>0)个(        )的有限序列。",
      "options": [
        {
          "key": "A",
          "text": "表元素"
        },
        {
          "key": "B",
          "text": "字符"
        },
        {
          "key": "C",
          "text": "数据元素"
        },
        {
          "key": "D",
          "text": "数据项"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "顺序表删除元素时的移动次数",
      "explanation": "本题按 0≤i≤n 的下标约定，删除第 i 个元素后需前移其后的 n-i-1 个元素；若改用教材常见的 1 开始计数，会写成 n-i。以平台答案 C 为准。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-20",
      "bankId": "ch2",
      "chapter": 2,
      "number": 20,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个长度为n的顺序表中删除第i个元素(0<=i<=n)时，需向前移动(        )个元素。",
      "options": [
        {
          "key": "A",
          "text": "n-i"
        },
        {
          "key": "B",
          "text": "n-i+1"
        },
        {
          "key": "C",
          "text": "n-i-1"
        },
        {
          "key": "D",
          "text": "i"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "链式存储地址的连续性",
      "explanation": "链式存储只要求逻辑上由指针相连，实际地址可以连续，也可以分散。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-21",
      "bankId": "ch2",
      "chapter": 2,
      "number": 21,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "线性表若采用链式存储结构时，要求内存中可用存储单元的地址(        )。",
      "options": [
        {
          "key": "A",
          "text": "必须是连续的"
        },
        {
          "key": "B",
          "text": "部分地址必须是连续的"
        },
        {
          "key": "C",
          "text": "一定是不连续的"
        },
        {
          "key": "D",
          "text": "连续或不连续都可以"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "按序号访问与表尾修改",
      "explanation": "按序号定位任意元素需要随机访问，这是顺序表 O(1) 访问的优势；表尾插入、删除通常也不需要移动元素。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-22",
      "bankId": "ch2",
      "chapter": 2,
      "number": 22,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "若某线性表最常用的操作是存取任一指定序号的元素和在最后进行插入和删除运算，则利用(        )存储方式最节省时间。",
      "options": [
        {
          "key": "A",
          "text": "顺序表"
        },
        {
          "key": "B",
          "text": "双链表"
        },
        {
          "key": "C",
          "text": "带头结点的双循环链表"
        },
        {
          "key": "D",
          "text": "单循环链表"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "取指定元素的前驱",
      "explanation": "取第 i 个元素的前驱在顺序表中可用下标 i-1 直接得到，时间 O(1)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-23",
      "bankId": "ch2",
      "chapter": 2,
      "number": 23,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "如果最常用的操作是取第i个元素的前驱结点，则采用(        )存储方式最节省时间。",
      "options": [
        {
          "key": "A",
          "text": "单链表"
        },
        {
          "key": "B",
          "text": "双链表"
        },
        {
          "key": "C",
          "text": "单循环链表"
        },
        {
          "key": "D",
          "text": "顺序表"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "带头结点单链表的操作复杂度",
      "explanation": "已知尾指针可在 O(1) 完成尾部插入；删除尾结点必须先找到尾结点的前驱，需从头扫描，时间与长度有关。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-24",
      "bankId": "ch2",
      "chapter": 2,
      "number": 24,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个长度为n(n>1)的带头结点的单链表h上，另设有尾指针r(指向尾节点)，执行(        )操作与链表的长度有关。",
      "options": [
        {
          "key": "A",
          "text": "删除单链表中的第一个结点"
        },
        {
          "key": "B",
          "text": "删除单链表中的最后一个结点"
        },
        {
          "key": "C",
          "text": "在单链表第一个元素前插入一个新结点"
        },
        {
          "key": "D",
          "text": "在单链表最后一个元素后插入一个新结点"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "有序表归并的最少比较次数",
      "explanation": "归并两个各含 n 个元素的有序表时，最少比较 n 次：某个表在比较 n 次后先耗尽，剩余元素可直接接在后面。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-25",
      "bankId": "ch2",
      "chapter": 2,
      "number": 25,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "将两个各有n个元素的有序表归并成一个有序表，其最少的比较次数是(        )。",
      "options": [
        {
          "key": "A",
          "text": "n"
        },
        {
          "key": "B",
          "text": "2n-1"
        },
        {
          "key": "C",
          "text": "2n"
        },
        {
          "key": "D",
          "text": "n-1"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "逐个插入建立有序单链表",
      "explanation": "逐个取向量中的元素，并插入有序单链表以维持有序，每次平均查找、插入 O(n)，总计 O(n²)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-26",
      "bankId": "ch2",
      "chapter": 2,
      "number": 26,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "给定有n个元素的向量，建立一个有序单链表的时间复杂度是(        )。",
      "options": [
        {
          "key": "A",
          "text": "O(1)"
        },
        {
          "key": "B",
          "text": "O(n)"
        },
        {
          "key": "C",
          "text": "O (n2)"
        },
        {
          "key": "D",
          "text": "O (n*log2n)"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "双向链表删除结点",
      "explanation": "删除 p 只需让 p 的前驱绕过 p、让 p 的后继指回 p 的前驱；平台答案 A 对应这两步。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-27",
      "bankId": "ch2",
      "chapter": 2,
      "number": 27,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个双链表中，删除p结点的操作是(        )(结点空间释放语句省略)。",
      "options": [
        {
          "key": "A",
          "text": "p->prior->next=p->next; p->next->prior=p->prior;"
        },
        {
          "key": "B",
          "text": "p->prior=p->prior->prior; p->prior->prior=p;"
        },
        {
          "key": "C",
          "text": "p->next->prior=p; p->next=p->next->next;"
        },
        {
          "key": "D",
          "text": "p->next= p->prior->prior; p->prior=p->prior->prior;"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "带头结点单链表的空表判定",
      "explanation": "带头结点单链表的头指针指向哨兵头结点，空表时头结点的 next 为 NULL。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-28",
      "bankId": "ch2",
      "chapter": 2,
      "number": 28,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "带头结点的单链表头指针为head，此单链表为空的判定条件是(        )。",
      "options": [
        {
          "key": "A",
          "text": "head==NULL"
        },
        {
          "key": "B",
          "text": "head->next==NULL"
        },
        {
          "key": "C",
          "text": "head->next==head"
        },
        {
          "key": "D",
          "text": "head!=NULL"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "循环链表与普通链表的操作",
      "explanation": "两种链表删除终端结点都必须先找到其前驱，时间均为 O(n)；开始结点删除和尾部插入并不都需要 O(n)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-29",
      "bankId": "ch2",
      "chapter": 2,
      "number": 29,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "设有两个长度为n的单链表(带头结点)，结点类型相同，若以h1为头结点指针的链表是非循环的，以h2为头结点指针的链表是循环的，则(        )。",
      "options": [
        {
          "key": "A",
          "text": "对于两个链表来说，删除开始结点的操作，其时间复杂度分别为O(1)和O(n)"
        },
        {
          "key": "B",
          "text": "对于两个链表来说，删除终端结点的操作，其时间复杂度都是O(n)"
        },
        {
          "key": "C",
          "text": "循环链表要比非循环链表占用更多的内存空间"
        },
        {
          "key": "D",
          "text": "h1和h2是不同类型的变量"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "带头结点双循环链表只有一个元素结点",
      "explanation": "带头结点的双循环链表中只有一个数据结点时，头结点 L 与这个结点互相前后相连，因此 L->next == L->prior。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-30",
      "bankId": "ch2",
      "chapter": 2,
      "number": 30,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "带头结点的双循环链表L中只有一个元素结点的条件是:____。",
      "blanks": [
        {
          "accepted": [
            "L->next == L->prior"
          ],
          "display": "L->next == L->prior"
        }
      ],
      "answerDisplay": "L->next == L->prior"
    },
    {
      "score": 2,
      "knowledge": "单链表删除指定结点",
      "explanation": "单链表只能沿 next 前进，要删除结点 p 必须先找其前驱，删除操作本身 O(1)，查找前驱 O(n)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-31",
      "bankId": "ch2",
      "chapter": 2,
      "number": 31,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在n个结点的单链表中要删除已知结点p，需找到它的____，其时间复杂度为____。",
      "blanks": [
        {
          "accepted": [
            "前驱结点"
          ],
          "display": "前驱结点"
        },
        {
          "accepted": [
            "O(n)",
            "O",
            "n"
          ],
          "display": "O(n)"
        }
      ],
      "answerDisplay": "前驱结点；O(n)"
    },
    {
      "score": 2,
      "knowledge": "顺序表删除的平均移动次数",
      "explanation": "长度为 n 的顺序表在等可能位置删除元素时，平均移动 (n-1)/2 个；具体移动数与删除位置相关。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-32",
      "bankId": "ch2",
      "chapter": 2,
      "number": 32,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在长度为n的顺序表中删除一个元素，需要平均移动____元素，具体移动的元素个数与____有关。",
      "blanks": [
        {
          "accepted": [
            "(n-1)/2"
          ],
          "display": "(n-1)/2"
        },
        {
          "accepted": [
            "删除元素的位置"
          ],
          "display": "删除元素的位置"
        }
      ],
      "answerDisplay": "(n-1)/2；删除元素的位置"
    },
    {
      "score": 2,
      "knowledge": "双向链表与单链表插入时修改的指针数",
      "explanation": "在两个结点之间插入新结点，双向链表需修改新结点的 prior、next 以及两侧结点的 next、prior，共 4 个指针；单链表通常修改 2 个指针。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-33",
      "bankId": "ch2",
      "chapter": 2,
      "number": 33,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "对于双向链表,在两个结点之间插入一个新结点需修改的指针共____个，单链表为____个。",
      "blanks": [
        {
          "accepted": [
            "4"
          ],
          "display": "4"
        },
        {
          "accepted": [
            "2"
          ],
          "display": "2"
        }
      ],
      "answerDisplay": "4；2"
    },
    {
      "score": 2,
      "knowledge": "顺序表的随机存取",
      "explanation": "顺序表可通过下标在 O(1) 时间访问任意结点，因此具有随机存取特性。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-34",
      "bankId": "ch2",
      "chapter": 2,
      "number": 34,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在顺序表中访问任意一结点的时间复杂度均为____，因此，顺序表也称为____的数据结构。",
      "blanks": [
        {
          "accepted": [
            "O(1)",
            "O",
            "1"
          ],
          "display": "O(1)"
        },
        {
          "accepted": [
            "随机存取"
          ],
          "display": "随机存取"
        }
      ],
      "answerDisplay": "O(1)；随机存取"
    },
    {
      "score": 2,
      "knowledge": "单链表结点的地址来源",
      "explanation": "单链表中每个结点由前驱结点的指针域指向；首元结点的地址由头结点的 next 或头指针提供。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-35",
      "bankId": "ch2",
      "chapter": 2,
      "number": 35,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在单链表中，除首元结点外，任一结点的存储位置由____指示。",
      "blanks": [
        {
          "accepted": [
            "前驱结点的指针域"
          ],
          "display": "前驱结点的指针域"
        }
      ],
      "answerDisplay": "前驱结点的指针域"
    },
    {
      "score": 2,
      "knowledge": "顺序存储与链式存储的关系表示",
      "explanation": "顺序结构依靠物理位置相邻表示关系；链式结构依靠指针表示关系。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-36",
      "bankId": "ch2",
      "chapter": 2,
      "number": 36,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "顺序存储结构是通过____表示元素之间的关系的;链式存储结构是通过____表示元素之间的关系的。",
      "blanks": [
        {
          "accepted": [
            "相邻的存储单元"
          ],
          "display": "相邻的存储单元"
        },
        {
          "accepted": [
            "指针"
          ],
          "display": "指针"
        }
      ],
      "answerDisplay": "相邻的存储单元；指针"
    },
    {
      "score": 2,
      "knowledge": "循环单链表的遍历特点",
      "explanation": "循环单链表尾结点的 next 指回表头，因此从任一结点沿后继都能遍历整个环。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-37",
      "bankId": "ch2",
      "chapter": 2,
      "number": 37,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "循环单链表的最大优点是:____。",
      "blanks": [
        {
          "accepted": [
            "从任意结点出发都能遍历整个链表"
          ],
          "display": "从任意结点出发都能遍历整个链表"
        }
      ],
      "answerDisplay": "从任意结点出发都能遍历整个链表"
    },
    {
      "score": 2,
      "knowledge": "顺序表插入、删除的平均移动次数",
      "explanation": "长度为 N 的顺序表，在等概率情况下，插入平均移动 N/2 个元素，删除平均移动 (N-1)/2 个，所以 (1) E、(2) A。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch2-38",
      "bankId": "ch2",
      "chapter": 2,
      "number": 38,
      "kind": "pairChoice",
      "typeLabel": "共用选项题",
      "stem": "表长为N的顺序表，当在任何位置上插入或删除一个元素的概率相等时，",
      "sharedOptions": [
        {
          "key": "A",
          "text": "(N-1)/2"
        },
        {
          "key": "B",
          "text": "N"
        },
        {
          "key": "C",
          "text": "N+1"
        },
        {
          "key": "D",
          "text": "N-1"
        },
        {
          "key": "E",
          "text": "N/2"
        },
        {
          "key": "F",
          "text": "(N+1)/2"
        },
        {
          "key": "G",
          "text": "(N-2)/2"
        }
      ],
      "subquestions": [
        {
          "label": "（1）",
          "text": "(1) 插入一个元素所需移动元素的平均次数为( ) A B C D E F G",
          "correct": "E"
        },
        {
          "label": "（2）",
          "text": "(2) 删除一个元素需要移动的元素个数为( ) A B C D E F G",
          "correct": "A"
        }
      ],
      "pairAnswers": [
        {
          "name": 1,
          "content": "E"
        },
        {
          "name": 2,
          "content": "A"
        }
      ],
      "answerDisplay": "（1）E；（2）A"
    },
    {
      "score": 5,
      "knowledge": "顺序存储与链式存储的取舍",
      "explanation": "链式存储减少了插入删除时的批量移动和连续大空间的预先分配要求，但查找第 i 个结点仍需 O(n)，另有指针和动态分配开销，并非无条件优于顺序结构。",
      "referenceMarkdown": "链式存储能避免插入、删除时大批量移动元素，也不需要按最大规模预先分配一整块连续空间，容量可以按实际需要增长。但它并非在所有情况下都更优：按位置查找仍要顺序扫描，结点还要额外保存指针，频繁申请和释放结点也有开销，空间局部性通常不如顺序表。因此应根据具体操作选择存储方式。",
      "diagrams": [],
      "id": "ch2-39",
      "bankId": "ch2",
      "chapter": 2,
      "number": 39,
      "kind": "essay",
      "typeLabel": "简答题",
      "stem": "线性表的顺序存储结构具有三个弱点:其一，在作插入或删除操作时，需移动大量元素;其二，由于难以估计，必须预先分配较大的空间，往往使存储空间不能得到充分利用;其三，表的容量难以扩充。线性表的链式存储结构是否一定都能够克服上述三个弱点，试讨论之。",
      "answerDisplay": "链式存储能避免插入、删除时大批量移动元素，也不需要按最大规模预先分配一整块连续空间，容量可以按实际需要增长。但它并非在所有情况下都更优：按位置查找仍要顺序扫描，结点还要额外保存指针，频繁申请和释放结点也有开销，空间局部性通常不如顺序表。因此应根据具体操作选择存储方式。"
    },
    {
      "score": 5,
      "knowledge": "头指针、头结点、首元结点",
      "explanation": "头指针是保存链表入口地址的指针；头结点是位于首元结点之前、通常不含有效元素的辅助结点；首元结点是第一个数据结点。头结点统一了空表与非空表以及表头操作。",
      "referenceMarkdown": "头指针是指向链表第一个结点的指针；头结点位于首元结点之前，通常不保存有效数据；首元结点才保存第一个数据元素。设置头结点后，空表和非空表、表头和其他位置的插入删除处理更统一，不必频繁修改头指针，也便于保存长度等信息。",
      "diagrams": [],
      "id": "ch2-40",
      "bankId": "ch2",
      "chapter": 2,
      "number": 40,
      "kind": "essay",
      "typeLabel": "简答题",
      "stem": "描述以下三个概念的区别:头指针、头结点、首元结点(第一个元素结点)。在单链表中设置头结点的作用是什么?",
      "answerDisplay": "头指针是指向链表第一个结点的指针；头结点位于首元结点之前，通常不保存有效数据；首元结点才保存第一个数据元素。设置头结点后，空表和非空表、表头和其他位置的插入删除处理更统一，不必频繁修改头指针，也便于保存长度等信息。"
    },
    {
      "score": 4,
      "knowledge": "单循环链表尾指针",
      "explanation": "循环单链表设尾指针 rear 后，rear->next 就是第一个结点/头结点，既能直接操作表头，也能 O(1) 到达表尾；只设头指针时找表尾需 O(n)。",
      "referenceMarkdown": "使用尾指针时，rear->next就是头结点，可以直接取得表头；在表尾插入也很方便。只设头指针时，访问表尾仍要遍历链表，因此需要频繁操作头尾时尾指针更合适。",
      "diagrams": [],
      "id": "ch2-41",
      "bankId": "ch2",
      "chapter": 2,
      "number": 41,
      "kind": "essay",
      "typeLabel": "简答题",
      "stem": "为什么在单循环链表中设置尾指针比设置头指针更好?",
      "answerDisplay": "使用尾指针时，rear->next就是头结点，可以直接取得表头；在表尾插入也很方便。只设头指针时，访问表尾仍要遍历链表，因此需要频繁操作头尾时尾指针更合适。"
    },
    {
      "score": 5,
      "knowledge": "单链表与双链表的遍历方向",
      "explanation": "普通单链表从当前结点只能沿后继方向走；双向链表保存 prior 和 next，可向前或向后遍历。",
      "referenceMarkdown": "普通非循环单链表从当前结点只能沿后继方向访问，不能到达前面的结点；双向链表同时保存前驱和后继指针，可以从当前结点向前或向后遍历整条链表。",
      "diagrams": [],
      "id": "ch2-42",
      "bankId": "ch2",
      "chapter": 2,
      "number": 42,
      "kind": "essay",
      "typeLabel": "简答题",
      "stem": "在单链表和双向链表中，能否从当前结点出发访问到任何一个结点?",
      "answerDisplay": "普通非循环单链表从当前结点只能沿后继方向访问，不能到达前面的结点；双向链表同时保存前驱和后继指针，可以从当前结点向前或向后遍历整条链表。"
    },
    {
      "score": 5,
      "knowledge": "仅知待删结点时的删除策略",
      "explanation": "仅知 p 时，双链表可直接 O(1) 删除；单循环链表可循环找到 p 的前驱，O(n)；普通单链表不能直接找前驱，通常无法仅凭 p 删除（可在允许复制后继值的条件下 O(1) 处理）。",
      "referenceMarkdown": "双向链表可由p->prior和p->next直接删除，时间复杂度O(1)。单循环链表可从p向后找到前驱，时间复杂度O(n)。普通非循环单链表仅凭p一般找不到前驱，不能直接删除；若允许复制后继数据再删除后继，则在p不是尾结点时可以做到O(1)。",
      "diagrams": [],
      "id": "ch2-43",
      "bankId": "ch2",
      "chapter": 2,
      "number": 43,
      "kind": "essay",
      "typeLabel": "简答题",
      "stem": "在单链表、双链表和单循环链表中，若仅知道指针p指向某结点，不知道头指针，能否将结点p从相应的链表中删去?若可以，其时间复杂度各为多少?",
      "answerDisplay": "双向链表可由p->prior和p->next直接删除，时间复杂度O(1)。单循环链表可从p向后找到前驱，时间复杂度O(n)。普通非循环单链表仅凭p一般找不到前驱，不能直接删除；若允许复制后继数据再删除后继，则在p不是尾结点时可以做到O(1)。"
    },
    {
      "score": 2,
      "knowledge": "顺序栈栈顶指针",
      "explanation": "顺序栈以低端为栈底，top 指向当前栈顶。退栈必须让栈顶向低地址方向移动，所以 top=top-1。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-1",
      "bankId": "ch3",
      "chapter": 3,
      "number": 1,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个具有n个单元的顺序栈中，假定以地址低端作为栈底，以top作为栈顶指针，则当做退栈处理时，top变化为(        )。",
      "options": [
        {
          "key": "A",
          "text": "top不变"
        },
        {
          "key": "B",
          "text": "top=-n"
        },
        {
          "key": "C",
          "text": "top=top-1"
        },
        {
          "key": "D",
          "text": "top=top+1"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "合法出栈序列",
      "explanation": "若先得到 3，则必须依次压入 6、5、4、3，随后弹出 3、4。此时 5、6 仍在栈中，6 被 5 压住，不可能先输出 6，所以 346521 非法。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-2",
      "bankId": "ch3",
      "chapter": 3,
      "number": 2,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "有六个元素按6，5，4，3，2，1的顺序进栈，下列不是合法的出栈序列的是(        )。",
      "options": [
        {
          "key": "A",
          "text": "543612"
        },
        {
          "key": "B",
          "text": "453126"
        },
        {
          "key": "C",
          "text": "346521"
        },
        {
          "key": "D",
          "text": "234156"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "栈的基本运算",
      "explanation": "栈的基本操作集中在栈顶和栈状态；删除栈底元素会破坏栈的受限访问规则，不属于栈的基本运算。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-3",
      "bankId": "ch3",
      "chapter": 3,
      "number": 3,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "以下不属于栈的基本运算是(        )。",
      "options": [
        {
          "key": "A",
          "text": "删除栈顶元素"
        },
        {
          "key": "B",
          "text": "删除栈底元素"
        },
        {
          "key": "C",
          "text": "判断栈是否为空"
        },
        {
          "key": "D",
          "text": "将栈置为空栈"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "栈的操作位置",
      "explanation": "栈只允许在同一端——栈顶进行插入和删除。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-4",
      "bankId": "ch3",
      "chapter": 3,
      "number": 4,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "栈是限定在(        )处进行插入或删除操作的线性表。",
      "options": [
        {
          "key": "A",
          "text": "端点"
        },
        {
          "key": "B",
          "text": "栈底"
        },
        {
          "key": "C",
          "text": "栈顶"
        },
        {
          "key": "D",
          "text": "中间"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "循环队列入队",
      "explanation": "本题约定 rear 指向下一个可写入位置：先把 x 写到 data[rear]，再令 rear=(rear+1)%maxsize，所以选 D。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-5",
      "bankId": "ch3",
      "chapter": 3,
      "number": 5,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "循环队列的入队操作应为(        )。",
      "options": [
        {
          "key": "A",
          "text": "q->rear=q->rear+1;q->data[q->rear]=x;"
        },
        {
          "key": "B",
          "text": "q->data[q->rear++]=x;"
        },
        {
          "key": "C",
          "text": "q->rear=(q->rear+1)%maxsize;q->data[q->rear]=x;"
        },
        {
          "key": "D",
          "text": "q->data[q->rear]=x;q->rear=(q->rear+1)%maxsize;"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "循环队列队满判定",
      "explanation": "循环队列采用牺牲一个单元区分空满时，队满条件是尾指针再前进一格会追上头指针：Q.front==(Q.rear+1)%n。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-6",
      "bankId": "ch3",
      "chapter": 3,
      "number": 6,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "循环队列SQ采用数组空间SQ.base[0,n-1]存放其元素值，已知其头尾指针分别是front和rear，则判定此循环队列为满的条件是(        )。",
      "options": [
        {
          "key": "A",
          "text": "Q.front==Q.rear"
        },
        {
          "key": "B",
          "text": "Q.front!=Q.rear"
        },
        {
          "key": "C",
          "text": "Q.front==(Q.rear+1)%n"
        },
        {
          "key": "D",
          "text": "Q.front!=(Q.rear+1)%n"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "循环队列 front 的含义",
      "explanation": "该题采用 front 直接指向队首元素的约定，因此 front 所在位置就是第一个数据元素。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-7",
      "bankId": "ch3",
      "chapter": 3,
      "number": 7,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "在一个顺序存储的循环队列中，队首指针指向队首元素的(        )。",
      "options": [
        {
          "key": "A",
          "text": "前一个位置"
        },
        {
          "key": "B",
          "text": "后一个位置"
        },
        {
          "key": "C",
          "text": "队首元素位置"
        },
        {
          "key": "D",
          "text": "队尾元素位置"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "合法出栈序列的多样性",
      "explanation": "仅知道首个输出为 i，后续元素的弹出时刻受中途入栈、出栈选择影响，不能由 i 唯一确定第 j 个输出。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-8",
      "bankId": "ch3",
      "chapter": 3,
      "number": 8,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "若一个栈的输入序列为1,2,3,…,n，输出序列的第一个元素是i，则第j个输出元素是(        )。",
      "options": [
        {
          "key": "A",
          "text": "i-j-1"
        },
        {
          "key": "B",
          "text": "i-j"
        },
        {
          "key": "C",
          "text": "j-i+1"
        },
        {
          "key": "D",
          "text": "不确定的"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "括号匹配与栈",
      "explanation": "括号匹配要求后遇到的开括号先闭合，符合后进先出，用栈最自然。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-9",
      "bankId": "ch3",
      "chapter": 3,
      "number": 9,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "设计一个判别表达式中左.右括号是否配对出现的算法，采用(        )数据结构最佳。",
      "options": [
        {
          "key": "A",
          "text": "线性表的顺序存储结构"
        },
        {
          "key": "B",
          "text": "栈"
        },
        {
          "key": "C",
          "text": "队列"
        },
        {
          "key": "D",
          "text": "线性表的链式存储结构"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "循环队列出队",
      "explanation": "循环队列出队只需把 front 在同一环上向后移动一格：front=(front+1)%maxsize。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-10",
      "bankId": "ch3",
      "chapter": 3,
      "number": 10,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "循环队列的出队操作是(        )。",
      "options": [
        {
          "key": "A",
          "text": "q->front=(q->front+1)%maxsize;"
        },
        {
          "key": "B",
          "text": "q->front=q->front+1;"
        },
        {
          "key": "C",
          "text": "q->rear=(q->rear+1)%maxsize;"
        },
        {
          "key": "D",
          "text": "q->rear=q->rear+1;"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "栈的后进先出",
      "explanation": "栈的插入、删除都在栈顶进行，遵循后进先出（LIFO）。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-11",
      "bankId": "ch3",
      "chapter": 3,
      "number": 11,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "栈操作的原则是(        )。",
      "options": [
        {
          "key": "A",
          "text": "先进先出"
        },
        {
          "key": "B",
          "text": "后进先出"
        },
        {
          "key": "C",
          "text": "后进后出"
        },
        {
          "key": "D",
          "text": "不分顺序"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "已知首个出栈元素时的序列",
      "explanation": "若第一个输出为 n，说明 1..n 已全部压栈，之后只能按 n,n-1,…,1 输出，因此第 i 个元素是 n-i+1。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-12",
      "bankId": "ch3",
      "chapter": 3,
      "number": 12,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "若一个栈的输入序列是1，2，3，……，n，输出序列的第一个元素是n，则第i个输出元素是(        )。",
      "options": [
        {
          "key": "A",
          "text": "n–i"
        },
        {
          "key": "B",
          "text": "n–i+1"
        },
        {
          "key": "C",
          "text": "i"
        },
        {
          "key": "D",
          "text": "不确定"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "栈序列合法性",
      "explanation": "输出 d,c,e 后，栈内 a、b 仍在，且 b 在 a 上方；下一个必须先弹出 b，不能先弹 a，故 d,c,e,a,b 非法。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-13",
      "bankId": "ch3",
      "chapter": 3,
      "number": 13,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "一个栈的入栈序列是a,b,c,d,e，则不可能的输出序列是(        )。",
      "options": [
        {
          "key": "A",
          "text": "e,d,c,b,a"
        },
        {
          "key": "B",
          "text": "d,e,c,b,a"
        },
        {
          "key": "C",
          "text": "d,c,e,a,b"
        },
        {
          "key": "D",
          "text": "a,b,c,d,e"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "循环队列首元素位置",
      "explanation": "front 指向队首元素位置，本题 front=2，所以第一个数据元素位置就是 2。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-14",
      "bankId": "ch3",
      "chapter": 3,
      "number": 14,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "容量是10的循环队列的队头位置q->front为2，则队列的第一个数据元素的位置是(        )。",
      "options": [
        {
          "key": "A",
          "text": "2"
        },
        {
          "key": "B",
          "text": "3"
        },
        {
          "key": "C",
          "text": "1"
        },
        {
          "key": "D",
          "text": "0"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "队列的先进先出",
      "explanation": "队列遵循先进先出，入队 1、2、3、4 后按相同次序输出。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-15",
      "bankId": "ch3",
      "chapter": 3,
      "number": 15,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "一个队列的入列序列是1，2，3，4，则队列的输出序列是(        )。",
      "options": [
        {
          "key": "A",
          "text": "4，3，2，1"
        },
        {
          "key": "B",
          "text": "1，2，3，4"
        },
        {
          "key": "C",
          "text": "1，4，3，2"
        },
        {
          "key": "D",
          "text": "3，2，4，1"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "栈和队列的共同点",
      "explanation": "栈和队列都是操作受限的线性表，并都把插入、删除限制在端点；二者分别在两端或同一端操作。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-16",
      "bankId": "ch3",
      "chapter": 3,
      "number": 16,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "栈和队列的共同点是(        )。",
      "options": [
        {
          "key": "A",
          "text": "都是先进后出"
        },
        {
          "key": "B",
          "text": "都是先进先出"
        },
        {
          "key": "C",
          "text": "只允许在端点处插入和删除元素"
        },
        {
          "key": "D",
          "text": "没有共同点"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "栈的合法输出序列",
      "explanation": "1,4,2,3 不可能：输出 1 后若要得到 4，需把 2、3、4 压栈，弹出 4 后栈顶是 3，不能先输出 2。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-17",
      "bankId": "ch3",
      "chapter": 3,
      "number": 17,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "若进栈序列为1,2,3,4,进栈过程中可以出栈，则(        )不可能是一个出栈序列。",
      "options": [
        {
          "key": "A",
          "text": "3,4,2,1"
        },
        {
          "key": "B",
          "text": "2,4,3,1"
        },
        {
          "key": "C",
          "text": "1,4,2,3"
        },
        {
          "key": "D",
          "text": "3,2,1,4"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "数组下标与循环取模",
      "explanation": "A[0..m] 共有 m+1 个单元，所以循环下标模数为 m+1。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-18",
      "bankId": "ch3",
      "chapter": 3,
      "number": 18,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "循环队列存储在数组A[0..m]中，则入队时的操作为(        )。",
      "options": [
        {
          "key": "A",
          "text": "rear=rear+1"
        },
        {
          "key": "B",
          "text": "rear=(rear+1)%(m-1)"
        },
        {
          "key": "C",
          "text": "rear=(rear+1)%m"
        },
        {
          "key": "D",
          "text": "rear=(rear+1)%(m+1)"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "循环队列与假溢出",
      "explanation": "循环队列通过取模复用数组前端空间，能避免顺序队列中的假溢出。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-19",
      "bankId": "ch3",
      "chapter": 3,
      "number": 19,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "循环队列的特点之一是不会产生(        )。",
      "options": [
        {
          "key": "A",
          "text": "上溢出"
        },
        {
          "key": "B",
          "text": "下溢出"
        },
        {
          "key": "C",
          "text": "队满"
        },
        {
          "key": "D",
          "text": "假溢出"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "栈的存储结构",
      "explanation": "栈作为线性表可以采用顺序存储（顺序栈）或链式存储（链栈）。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-20",
      "bankId": "ch3",
      "chapter": 3,
      "number": 20,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "栈结构通常采用的两种存储结构是(        )。",
      "options": [
        {
          "key": "A",
          "text": "顺序存储结构和链表存储结构"
        },
        {
          "key": "B",
          "text": "散列和索引方式"
        },
        {
          "key": "C",
          "text": "链表存储结构和数组"
        },
        {
          "key": "D",
          "text": "线性链表结构和非线性存储结构"
        }
      ],
      "correctChoice": "A"
    },
    {
      "score": 2,
      "knowledge": "栈容量分析",
      "explanation": "要输出 s2 首，需先压 s1,s2 后弹 s2；随后 s3,s4 可逐个处理，栈中常驻 s1。输出 s6,s5 前栈内会有 s1,s5,s6，最大深度为 3。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-21",
      "bankId": "ch3",
      "chapter": 3,
      "number": 21,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "设有一顺序栈S，元素s1，s2，s3，s4，s5，s6依次进栈，如果6个元素出栈的顺序是s2，s3，s4，s6，s5，s1，则栈的容量至少应该是(        )。",
      "options": [
        {
          "key": "A",
          "text": "2"
        },
        {
          "key": "B",
          "text": "3"
        },
        {
          "key": "C",
          "text": "5"
        },
        {
          "key": "D",
          "text": "6"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "栈与一般线性表的区别",
      "explanation": "栈与普通线性表逻辑上仍是线性关系，核心区别是栈把插入、删除位置限制在栈顶。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-22",
      "bankId": "ch3",
      "chapter": 3,
      "number": 22,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "栈与一般线性表的区别主要在(        )。",
      "options": [
        {
          "key": "A",
          "text": "元素个数"
        },
        {
          "key": "B",
          "text": "元素类型"
        },
        {
          "key": "C",
          "text": "逻辑结构"
        },
        {
          "key": "D",
          "text": "插入、删除元素的位置"
        }
      ],
      "correctChoice": "D"
    },
    {
      "score": 2,
      "knowledge": "栈操作模拟",
      "explanation": "输入 A、B、C 后要逆序输出 C、B、A，应连续压入 A、B、C，再连续弹出三次。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-23",
      "bankId": "ch3",
      "chapter": 3,
      "number": 23,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "输入序列为ABC,可以变为CBA时，经过的栈操作为(        )。",
      "options": [
        {
          "key": "A",
          "text": "push,pop,push,pop,push,pop"
        },
        {
          "key": "B",
          "text": "push,push,push,pop,pop,pop"
        },
        {
          "key": "C",
          "text": "push,push,pop,pop,push,pop"
        },
        {
          "key": "D",
          "text": "push,pop,push,push,pop,pop"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "递归与栈",
      "explanation": "递归调用要保存返回地址和局部状态，运行时通常由系统栈完成。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-24",
      "bankId": "ch3",
      "chapter": 3,
      "number": 24,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "实现递归调用属于(        )的应用。",
      "options": [
        {
          "key": "A",
          "text": "队列"
        },
        {
          "key": "B",
          "text": "栈"
        },
        {
          "key": "C",
          "text": "数组"
        },
        {
          "key": "D",
          "text": "树"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "向下增长的顺序栈",
      "explanation": "本题从高地址向低地址增长，top 初值为 n+1。进栈先令 top 减一，再把 x 放入 V[top]。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-25",
      "bankId": "ch3",
      "chapter": 3,
      "number": 25,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "若一个栈以向量V[1..n]存储，初始栈顶指针top为n+1，则下面x进栈的正确操作是(        )。",
      "options": [
        {
          "key": "A",
          "text": "top:=top+1;V[top]:=x"
        },
        {
          "key": "B",
          "text": "V[top]:=x;top:=top+1"
        },
        {
          "key": "C",
          "text": "top:=top-1;V[top]:=x"
        },
        {
          "key": "D",
          "text": "V[top]:=x;top:=top-1"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "队列的基本运算",
      "explanation": "队列只允许在队首删除、队尾插入；删除第 i 个元素不是队列的基本运算。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-26",
      "bankId": "ch3",
      "chapter": 3,
      "number": 26,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "以下哪一个不是队列的基本运算(        )。",
      "options": [
        {
          "key": "A",
          "text": "从队尾插入一个新元素"
        },
        {
          "key": "B",
          "text": "从队列中删除第i个元素"
        },
        {
          "key": "C",
          "text": "判断一个队列是否为空"
        },
        {
          "key": "D",
          "text": "读取队头元素的值"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "顺序栈空条件",
      "explanation": "top 与 base 相同时表示当前没有栈元素，即 ST.top-ST.base==0。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-27",
      "bankId": "ch3",
      "chapter": 3,
      "number": 27,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "设栈ST用顺序存储结构表示，则栈ST为空的条件是(        )。",
      "options": [
        {
          "key": "A",
          "text": "ST.top- ST.base<>0"
        },
        {
          "key": "B",
          "text": "ST.top- ST.base==0"
        },
        {
          "key": "C",
          "text": "ST.top- ST.base<>n"
        },
        {
          "key": "D",
          "text": "ST.top- ST.base==n"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "循环队列指针变化",
      "explanation": "删除一个元素：front 由 3 变为 4；再加入两个：rear 由 0 依次变为 1、2。答案 (2,4)。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-28",
      "bankId": "ch3",
      "chapter": 3,
      "number": 28,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "若在一个大小为6的数组上实现循环队列，且当前rear和front的值分别为0和3，当从队列中删除一个元素，再加入两个元素后，rear和front的值分别为(        )。",
      "options": [
        {
          "key": "A",
          "text": "1，5"
        },
        {
          "key": "B",
          "text": "2,4"
        },
        {
          "key": "C",
          "text": "4，2"
        },
        {
          "key": "D",
          "text": "5，1"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "Catalan 数",
      "explanation": "三元素入栈、出栈可形成的合法排列数为第 3 个 Catalan 数 C₃=5。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-29",
      "bankId": "ch3",
      "chapter": 3,
      "number": 29,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "若一个栈的输入序列是a，b，c，则通过入、出栈操作可能得到a,b,c的不同排列个数为(        )。",
      "options": [
        {
          "key": "A",
          "text": "4"
        },
        {
          "key": "B",
          "text": "5"
        },
        {
          "key": "C",
          "text": "6"
        },
        {
          "key": "D",
          "text": "7"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "循环队列空判定",
      "explanation": "本课程采用 front==rear 表示循环队列为空（并通过牺牲一个单元区分队满）。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-30",
      "bankId": "ch3",
      "chapter": 3,
      "number": 30,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "循环队列SQ采用数组空间SQ.base[0,n-1]存放其元素值，已知其头尾指针分别是front和rear，则判定此循环队列为空的条件是(        )。",
      "options": [
        {
          "key": "A",
          "text": "Q.rear-Q.front==n"
        },
        {
          "key": "B",
          "text": "Q.rear-Q.front-1==n"
        },
        {
          "key": "C",
          "text": "Q.front==Q.rear"
        },
        {
          "key": "D",
          "text": "Q.front==Q.rear+1"
        }
      ],
      "correctChoice": "C"
    },
    {
      "score": 2,
      "knowledge": "消除递归与栈",
      "explanation": "递归消除不一定需要显式栈，例如尾递归可直接改成循环；一般非尾递归才常借助栈。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-31",
      "bankId": "ch3",
      "chapter": 3,
      "number": 31,
      "kind": "choice",
      "typeLabel": "单选题",
      "stem": "消除递归(        )需要使用栈。",
      "options": [
        {
          "key": "A",
          "text": "一定"
        },
        {
          "key": "B",
          "text": "不一定"
        }
      ],
      "correctChoice": "B"
    },
    {
      "score": 2,
      "knowledge": "循环队列牺牲单元",
      "explanation": "循环队列牺牲一个单元区分空、满，因此数组有 n 个单元时最多存 n-1 个元素。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-32",
      "bankId": "ch3",
      "chapter": 3,
      "number": 32,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在具有n个单元.顺序存储的循环队列中，队满时共有____个元素。",
      "blanks": [
        {
          "accepted": [
            "n-1"
          ],
          "display": "n-1"
        }
      ],
      "answerDisplay": "n-1"
    },
    {
      "score": 2,
      "knowledge": "栈操作模拟",
      "explanation": "S 为入栈、X 为出栈。依次执行 SSXSXSSXXX：入 a、b，出 b；入 c、出 c；入 d、e，出 e、d、a，输出 bceda。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-33",
      "bankId": "ch3",
      "chapter": 3,
      "number": 33,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "假设以S和X分别表示进栈和退栈操作，则对输入序列a，b，c，d，e进行一系列栈操作SSXSXSSXXX之后，得到的输出序列为____。",
      "blanks": [
        {
          "accepted": [
            "bceda"
          ],
          "display": "bceda"
        }
      ],
      "answerDisplay": "bceda"
    },
    {
      "score": 2,
      "knowledge": "顺序栈入栈顺序",
      "explanation": "按平台采用的顺序栈约定，入栈先存入元素，再移动栈顶指针；答案以平台为准。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-34",
      "bankId": "ch3",
      "chapter": 3,
      "number": 34,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "向顺序栈中压入元素的操作是先____后____。",
      "blanks": [
        {
          "accepted": [
            "存入元素"
          ],
          "display": "存入元素"
        },
        {
          "accepted": [
            "移动指针"
          ],
          "display": "移动指针"
        }
      ],
      "answerDisplay": "存入元素；移动指针"
    },
    {
      "score": 2,
      "knowledge": "队列程序模拟",
      "explanation": "模拟队列：先删 h、再删 r，队列剩 c,h,a；循环依次打印 c,h,a，最后打印暂存的 r，得到 char。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-35",
      "bankId": "ch3",
      "chapter": 3,
      "number": 35,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "有程序如下。队列元素类型 `QSelemType` 为 `char`，求程序的输出结果。\n\n```c\nvoid main() {\n    char x = 'e', y = 'c';\n    enqueue(q, 'h');\n    enqueue(q, 'r');\n    enqueue(q, y);\n    dequeue(q, x);\n    enqueue(q, x);\n    dequeue(q, x);\n    enqueue(q, 'a');\n    while (!queueempty(q)) {\n        dequeue(q, y);\n        printf(\"%c\", y);\n    }\n    printf(\"%c\", x);\n}\n```",
      "blanks": [
        {
          "accepted": [
            "char"
          ],
          "display": "char"
        }
      ],
      "answerDisplay": "char"
    },
    {
      "score": 2,
      "knowledge": "循环队列元素个数公式",
      "explanation": "循环队列元素个数为 (rear-front+m)%m；若 rear≥front 也可写 rear-front，统一公式用取模。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-36",
      "bankId": "ch3",
      "chapter": 3,
      "number": 36,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "循环队列用数组data[m]存放其元素值，已知其头、尾指针分别是front和rear，则当前队列中元素的个数是____。",
      "blanks": [
        {
          "accepted": [
            "(rear-front+m)%m; (rear-front+m) mod m",
            "(rear-front+m)%m",
            "(rear-front+m) mod m"
          ],
          "display": "(rear-front+m)%m; (rear-front+m) mod m"
        }
      ],
      "answerDisplay": "(rear-front+m)%m; (rear-front+m) mod m"
    },
    {
      "score": 2,
      "knowledge": "队满条件下的元素数",
      "explanation": "队满条件说明 front 紧接在 rear 后面，环中两个空闲指针之间只空着一个逻辑单元，其余 m-1 个单元都存了元素。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-37",
      "bankId": "ch3",
      "chapter": 3,
      "number": 37,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "用数组A[m]来存放循环队列q的元素，且它的头、尾指针分别为front和rear，队列满足条件(q.rear+1)%m==q.front,则队列中当前的元素个数为____。",
      "blanks": [
        {
          "accepted": [
            "m-1"
          ],
          "display": "m-1"
        }
      ],
      "answerDisplay": "m-1"
    },
    {
      "score": 2,
      "knowledge": "循环队列出队与队满公式",
      "explanation": "数组为 data[0:M]，共 M+1 个单元，出队用 sq.front=(sq.front+1)%(M+1)；牺牲一单元时队满为 (sq.rear+1)%(M+1)==sq.front。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-38",
      "bankId": "ch3",
      "chapter": 3,
      "number": 38,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "设循环队列存放在向量sq.data[0:M]中，则队头指针sq.front在循环意义下的出队操作可表示为____，若用牺牲一个单元的办法来区分队满和队空(设队尾指针sq.rear),则队满的条件____。",
      "blanks": [
        {
          "accepted": [
            "sq.front=(sq.front+1)%(M+1)",
            "sq.front=(sq.front+1)%",
            "M+1"
          ],
          "display": "sq.front=(sq.front+1)%(M+1)"
        },
        {
          "accepted": [
            "(sq.rear+1)%(M+1)==sq.front"
          ],
          "display": "(sq.rear+1)%(M+1)==sq.front"
        }
      ],
      "answerDisplay": "sq.front=(sq.front+1)%(M+1)；(sq.rear+1)%(M+1)==sq.front"
    },
    {
      "score": 2,
      "knowledge": "线性表、栈、队列的操作位置",
      "explanation": "线性表可在任意位置插入删除；栈只在栈顶；队列在队尾插入、队头删除。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-39",
      "bankId": "ch3",
      "chapter": 3,
      "number": 39,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "线性表、栈、队列都是____结构，可以在线性表的____位置插入和删除元素;对于栈只能在____插入和删除元素;对于队列只能在____插入元素和在____位置删除元素。",
      "blanks": [
        {
          "accepted": [
            "线性"
          ],
          "display": "线性"
        },
        {
          "accepted": [
            "任何"
          ],
          "display": "任何"
        },
        {
          "accepted": [
            "栈顶"
          ],
          "display": "栈顶"
        },
        {
          "accepted": [
            "队尾"
          ],
          "display": "队尾"
        },
        {
          "accepted": [
            "队首"
          ],
          "display": "队首"
        }
      ],
      "answerDisplay": "线性；任何；栈顶；队尾；队首"
    },
    {
      "score": 2,
      "knowledge": "循环队列 front 的含义",
      "explanation": "平台采用 front 指向当前队首元素位置的约定，所以填“当前位置”。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-40",
      "bankId": "ch3",
      "chapter": 3,
      "number": 40,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "在一个循环队列中，队首指针指向队首元素的____。",
      "blanks": [
        {
          "accepted": [
            "当前位置"
          ],
          "display": "当前位置"
        }
      ],
      "answerDisplay": "当前位置"
    },
    {
      "score": 2,
      "knowledge": "假溢出",
      "explanation": "普通顺序队列 front、rear 都单向前进，即使前端空出单元也可能因 rear 到数组末端而无法入队，称为假溢出；循环队列取模复用这些单元。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-41",
      "bankId": "ch3",
      "chapter": 3,
      "number": 41,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "循环队列的引入，目的是为了克服____。",
      "blanks": [
        {
          "accepted": [
            "假溢出"
          ],
          "display": "假溢出"
        }
      ],
      "answerDisplay": "假溢出"
    },
    {
      "score": 2,
      "knowledge": "栈的定义",
      "explanation": "栈是限定仅在表尾（栈顶）进行插入和删除的线性表。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-42",
      "bankId": "ch3",
      "chapter": 3,
      "number": 42,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "____是限定仅在表尾进行插入或删除操作的线性表。",
      "blanks": [
        {
          "accepted": [
            "栈"
          ],
          "display": "栈"
        }
      ],
      "answerDisplay": "栈"
    },
    {
      "score": 2,
      "knowledge": "队尾指针变化",
      "explanation": "队列每执行一次入队，队尾在循环或顺序方向上改变一次；出队改变的是队首。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-43",
      "bankId": "ch3",
      "chapter": 3,
      "number": 43,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "队列的队尾位置随着____而变化。",
      "blanks": [
        {
          "accepted": [
            "入队"
          ],
          "display": "入队"
        }
      ],
      "answerDisplay": "入队"
    },
    {
      "score": 2,
      "knowledge": "栈程序模拟",
      "explanation": "依次模拟：压 c,a,k；弹 k，压 t,k，弹 k，压 s；栈中从顶到底为 s,t,a,c，逐个弹出得到 stac，再打印最后保存的 k，得到 stack。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-44",
      "bankId": "ch3",
      "chapter": 3,
      "number": 44,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "有程序如下。栈元素类型 `SelemType` 为 `char`，求程序的输出结果。\n\n```c\nvoid main() {\n    stack s;\n    char x, y;\n    initstack(s);\n    x = 'c';\n    y = 'k';\n    push(s, x);\n    push(s, 'a');\n    push(s, y);\n    pop(s, x);\n    push(s, 't');\n    push(s, x);\n    pop(s, x);\n    push(s, 's');\n    while (!stackempty(s)) {\n        pop(s, y);\n        printf(\"%c\", y);\n    }\n    printf(\"%c\", x);\n}\n```",
      "blanks": [
        {
          "accepted": [
            "stack"
          ],
          "display": "stack"
        }
      ],
      "answerDisplay": "stack"
    },
    {
      "score": 2,
      "knowledge": "顺序栈退栈顺序",
      "explanation": "按平台采用的顺序栈约定，退栈先移动栈顶指针，再从新栈顶位置取出元素。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-45",
      "bankId": "ch3",
      "chapter": 3,
      "number": 45,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "对顺序栈进行退栈操作是先____后____。",
      "blanks": [
        {
          "accepted": [
            "移动指针"
          ],
          "display": "移动指针"
        },
        {
          "accepted": [
            "取出元素"
          ],
          "display": "取出元素"
        }
      ],
      "answerDisplay": "移动指针；取出元素"
    },
    {
      "score": 2,
      "knowledge": "递归调用结果",
      "explanation": "dunno(3)=dunno(2)+5=dunno(1)+10=dunno(0)+15=3+15=18。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-46",
      "bankId": "ch3",
      "chapter": 3,
      "number": 46,
      "kind": "fill",
      "typeLabel": "填空题",
      "stem": "有如下递归函数，执行语句 `printf(\"%d\\n\", dunno(3));` 的结果是什么？\n\n```c\nint dunno(int m) {\n    int value;\n    if (m == 0)\n        value = 3;\n    else\n        value = dunno(m - 1) + 5;\n    return value;\n}\n```",
      "blanks": [
        {
          "accepted": [
            "18"
          ],
          "display": "18"
        }
      ],
      "answerDisplay": "18"
    },
    {
      "score": 1,
      "knowledge": "循环队列与上溢",
      "explanation": "循环队列仍可能发生真正的上溢：队列已占满到约定容量时继续入队就会上溢；它主要避免的是假上溢。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-47",
      "bankId": "ch3",
      "chapter": 3,
      "number": 47,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "循环队列中无上溢现象。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "错"
    },
    {
      "score": 1,
      "knowledge": "栈的 LIFO 特性",
      "explanation": "栈只在栈顶插入、删除，因此最后进入的元素最先退出，是后进先出表。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-48",
      "bankId": "ch3",
      "chapter": 3,
      "number": 48,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "栈是后进先出表。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "对"
    },
    {
      "score": 1,
      "knowledge": "栈序列合法性",
      "explanation": "A、B、C、D、E 依次入栈，可先入到 C 弹 C，再入到 E 弹 E、D、B、A，故该序列合法。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-49",
      "bankId": "ch3",
      "chapter": 3,
      "number": 49,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "设有一个堆栈，现有元素序列(A,B,C,D,E)依次进栈，进栈中允许出栈，则(C,E,D,B,A)是一种可能的输出序列。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "对"
    },
    {
      "score": 1,
      "knowledge": "循环队列解决假满",
      "explanation": "循环队列把数组逻辑上首尾相连，可重复利用出队后留下的空间，从而解决假满。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-50",
      "bankId": "ch3",
      "chapter": 3,
      "number": 50,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "为解决队列“假满”问题，可以采用数组实现循环队列。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "对"
    },
    {
      "score": 1,
      "knowledge": "顺序队列与循环队列判定条件",
      "explanation": "普通顺序队列用 front 与 rear 的关系或计数器判定，循环队列因为首尾相接，常见判空/判满规则不同，不能说完全相同。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-51",
      "bankId": "ch3",
      "chapter": 3,
      "number": 51,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "顺序队列和循环队列的队满和队空的条件是一样的。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "错"
    },
    {
      "score": 1,
      "knowledge": "顺序栈上溢",
      "explanation": "顺序栈已满时继续入栈会越出数组容量，即发生上溢。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-52",
      "bankId": "ch3",
      "chapter": 3,
      "number": 52,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "对顺序栈而言，在栈满状态，如果此时再作进栈运算，则会发生“上溢”。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "对"
    },
    {
      "score": 1,
      "knowledge": "循环队列的溢出类型",
      "explanation": "循环队列仍会因容量真正耗尽而上溢；“只有下溢”错误。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-53",
      "bankId": "ch3",
      "chapter": 3,
      "number": 53,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "循环队列只有下溢，没有上溢。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "错"
    },
    {
      "score": 1,
      "knowledge": "带头结点链队列的 front",
      "explanation": "带头结点链队列的 front 指向头结点，出队删除的是 front->next；队头变化只需改 front->next，front 本身通常不变。",
      "referenceMarkdown": "",
      "diagrams": [],
      "id": "ch3-54",
      "bankId": "ch3",
      "chapter": 3,
      "number": 54,
      "kind": "choice",
      "typeLabel": "判断题",
      "stem": "在对链队列(带头结点)做出队操作时，不会改变 front 指针的值。 (        )",
      "options": [
        {
          "key": "A",
          "text": "对"
        },
        {
          "key": "B",
          "text": "错"
        }
      ],
      "correctChoice": "对"
    },
    {
      "score": 0,
      "knowledge": "栈的定义、后进先出、基本运算与典型应用",
      "explanation": "",
      "referenceMarkdown": "栈是限定仅在表尾进行插入和删除操作的线性表，允许插入和删除的一端称为栈顶，另一端称为栈底。其基本性质如下：（1）栈是操作受限的线性表，元素之间仍是一对一的线性关系，只是插入和删除被限定在栈顶进行，栈底固定不动。（2）栈中元素遵循后进先出原则，最后入栈的元素最先出栈，最先入栈的元素最后出栈。（3）入栈、出栈和取栈顶元素都只修改栈顶指针，时间复杂度均为 O(1)，不需要移动其他元素。（4）顺序栈用一维数组和栈顶指针 top 实现，通常令 top 指向栈顶元素，初值 top=-1，栈空条件为 top==-1，栈满条件为 top==MaxSize-1；链栈用单链表实现，以表头作为栈顶，不存在栈满问题。（5）n 个元素按固定次序入栈时，出栈序列不唯一，合法出栈序列的个数为 Catalan 数 1/(n+1)*C(2n,n)。（6）栈的典型应用有括号匹配、表达式求值、数制转换、递归调用、迷宫求解和行编辑等。",
      "diagrams": [],
      "id": "subj-1",
      "bankId": "subj",
      "chapter": 3,
      "number": 1,
      "kind": "essay",
      "typeLabel": "问答题",
      "stem": "试述栈的基本性质。",
      "answerDisplay": "栈是限定仅在表尾进行插入和删除操作的线性表，允许插入和删除的一端称为栈顶，另一端称为栈底。其基本性质如下：（1）栈是操作受限的线性表，元素之间仍是一对一的线性关系，只是插入和删除被限定在栈顶进行，栈底固定不动。（2）栈中元素遵循后进先出原则，最后入栈的元素最先出栈，最先入栈的元素最后出栈。（3）入栈、出栈和取栈顶元素都只修改栈顶指针，时间复杂度均为 O(1)，不需要移动其他元素。（4）顺序栈用一维数组和栈顶指针 top 实现，通常令 top 指向栈顶元素，初值 top=-1，栈空条件为 top==-1，栈满条件为 top==MaxSize-1；链栈用单链表实现，以表头作为栈顶，不存在栈满问题。（5）n 个元素按固定次序入栈时，出栈序列不唯一，合法出栈序列的个数为 Catalan 数 1/(n+1)*C(2n,n)。（6）栈的典型应用有括号匹配、表达式求值、数制转换、递归调用、迷宫求解和行编辑等。"
    },
    {
      "score": 0,
      "knowledge": "队列上溢、假上溢、循环队列和链队列",
      "explanation": "",
      "referenceMarkdown": "队列满时仍要执行入队操作，这种情况称为上溢。顺序队列若采用 rear 逐次加一的存储方式，会出现 rear 已指向数组末端、而前端因元素出队空出位置却无法入队的情况，称为假上溢；数组空间真正被占满才是真上溢。解决上溢的方法及原理如下：（1）循环队列。令 rear=(rear+1)%MaxSize、front=(front+1)%MaxSize，使存储空间在逻辑上首尾相接，前端空出的单元可以重新使用，从而消除假上溢。为区分队空与队满，通常牺牲一个存储单元：队空条件为 front==rear，队满条件为 (rear+1)%MaxSize==front。（2）增设计数器或标志位。用 length 记录当前元素个数，length==0 为队空，length==MaxSize 为队满，不必牺牲存储单元。（3）链队列。以带头结点的单链表实现，front 指向头结点、rear 指向尾结点，入队时申请新结点接入队尾，出队时释放队头结点，不预先分配空间，因而不会出现假上溢，只有内存耗尽时才会失败。（4）动态扩容。队满时重新申请一块更大的空间，把原队列元素复制过去并重置 front、rear，然后继续入队，代价是 O(n) 的搬迁。（5）真上溢的处理。空间已满且不能扩容时，只能报错返回、丢弃新元素，或按循环缓冲区方式覆盖最旧的数据。",
      "diagrams": [],
      "id": "subj-2",
      "bankId": "subj",
      "chapter": 3,
      "number": 2,
      "kind": "essay",
      "typeLabel": "问答题",
      "stem": "何谓队列的上溢现象？解决它有哪些方法，且分别简述其工作原理。",
      "answerDisplay": "队列满时仍要执行入队操作，这种情况称为上溢。顺序队列若采用 rear 逐次加一的存储方式，会出现 rear 已指向数组末端、而前端因元素出队空出位置却无法入队的情况，称为假上溢；数组空间真正被占满才是真上溢。解决上溢的方法及原理如下：（1）循环队列。令 rear=(rear+1)%MaxSize、front=(front+1)%MaxSize，使存储空间在逻辑上首尾相接，前端空出的单元可以重新使用，从而消除假上溢。为区分队空与队满，通常牺牲一个存储单元：队空条件为 front==rear，队满条件为 (rear+1)%MaxSize==front。（2）增设计数器或标志位。用 length 记录当前元素个数，length==0 为队空，length==MaxSize 为队满，不必牺牲存储单元。（3）链队列。以带头结点的单链表实现，front 指向头结点、rear 指向尾结点，入队时申请新结点接入队尾，出队时释放队头结点，不预先分配空间，因而不会出现假上溢，只有内存耗尽时才会失败。（4）动态扩容。队满时重新申请一块更大的空间，把原队列元素复制过去并重置 front、rear，然后继续入队，代价是 O(n) 的搬迁。（5）真上溢的处理。空间已满且不能扩容时，只能报错返回、丢弃新元素，或按循环缓冲区方式覆盖最旧的数据。"
    },
    {
      "score": 0,
      "knowledge": "栈混洗与合法出栈序列",
      "explanation": "",
      "referenceMarkdown": "435612 不能得到。要 4 第一个出栈，须先让 1、2、3、4 依次入栈再弹出 4；要 3 第二个出栈，弹出 3。此时栈中从底到顶为 1、2。再入 5 弹出 5、入 6 弹出 6，栈中仍是 1、2，按后进先出，下一个只能弹出 2，不可能弹出 1，故该序列不能实现。135426 可以得到，操作过程为：入 1、出 1；入 2、入 3、出 3；入 4、入 5、出 5、出 4；出 2；入 6、出 6。得到出栈序列 1、3、5、4、2、6。",
      "diagrams": [],
      "id": "subj-3",
      "bankId": "subj",
      "chapter": 3,
      "number": 3,
      "kind": "essay",
      "typeLabel": "问答题",
      "stem": "如果输入序列为 123456，试问能否通过栈得到以下两个出栈序列：435612 和 135426；请说明为什么不能或如何才能得到。",
      "answerDisplay": "435612 不能得到。要 4 第一个出栈，须先让 1、2、3、4 依次入栈再弹出 4；要 3 第二个出栈，弹出 3。此时栈中从底到顶为 1、2。再入 5 弹出 5、入 6 弹出 6，栈中仍是 1、2，按后进先出，下一个只能弹出 2，不可能弹出 1，故该序列不能实现。135426 可以得到，操作过程为：入 1、出 1；入 2、入 3、出 3；入 4、入 5、出 5、出 4；出 2；入 6、出 6。得到出栈序列 1、3、5、4、2、6。"
    },
    {
      "score": 0,
      "knowledge": "限定首先出栈元素时的序列枚举",
      "explanation": "",
      "referenceMarkdown": "共 3 种：CDBAE、CDBEA、CDEBA。要求 C 第一个出栈、D 第二个出栈，操作上只能是：A、B、C 依次入栈，弹出 C；D 入栈后弹出 D。此时栈中从底到顶为 A、B，E 尚未入栈。由于 A 在 B 之下，A 不能先于 B 出栈，剩余 A、B、E 的合法排列只有三种：出 B、出 A，再入 E 出 E，得 CDBAE；出 B，入 E 出 E，再出 A，得 CDBEA；入 E 出 E，再出 B、出 A，得 CDEBA。其他排列如 A 先于 B 出栈的 CDABE、CDAEB 都不满足后进先出。",
      "diagrams": [],
      "id": "subj-4",
      "bankId": "subj",
      "chapter": 3,
      "number": 4,
      "kind": "essay",
      "typeLabel": "问答题",
      "stem": "有 5 个元素，其入栈次序为 A、B、C、D、E。在各种可能的出栈次序中，以元素 C、D 最先出栈（即 C 第一个且 D 第二个出栈）的次序有哪几个？",
      "answerDisplay": "共 3 种：CDBAE、CDBEA、CDEBA。要求 C 第一个出栈、D 第二个出栈，操作上只能是：A、B、C 依次入栈，弹出 C；D 入栈后弹出 D。此时栈中从底到顶为 A、B，E 尚未入栈。由于 A 在 B 之下，A 不能先于 B 出栈，剩余 A、B、E 的合法排列只有三种：出 B、出 A，再入 E 出 E，得 CDBAE；出 B，入 E 出 E，再出 A，得 CDBEA；入 E 出 E，再出 B、出 A，得 CDEBA。其他排列如 A 先于 B 出栈的 CDABE、CDAEB 都不满足后进先出。"
    },
    {
      "score": 0,
      "knowledge": "单链表删除最小值结点",
      "explanation": "",
      "referenceMarkdown": "删除结点得先知道它的前驱，所以一边遍历一边记两样东西：p 和它的前驱 pre，同时用 minp、minpre 记住目前最小的结点和它的前驱。走完一遍，让 minpre->next 指向 minp 的后继，再把 minp 释放掉就行了。只扫一趟，时间 O(n)，空间 O(1)。void DelMinNode(LinkList &L) {    if (L->next == NULL) return;    LNode *pre = L, *p = L->next;    LNode *minpre = pre, *minp = p;    while (p != NULL) {        if (p->data < minp->data) {            minp = p;            minpre = pre;        }        pre = p;        p = p->next;    }    minpre->next = minp->next;    free(minp);}最小值结点正好是第一个数据结点时，minpre 就是头结点，删除照样成立。题目说最小值结点唯一，所以不用考虑有多个最小值的情况。",
      "diagrams": [],
      "id": "subj-5",
      "bankId": "subj",
      "chapter": 2,
      "number": 5,
      "kind": "code",
      "typeLabel": "设计题",
      "stem": "试编写在带头结点的单链表 L 中删除一个最小值结点的高效算法（假设最小值结点是唯一的）。",
      "answerDisplay": "删除结点得先知道它的前驱，所以一边遍历一边记两样东西：p 和它的前驱 pre，同时用 minp、minpre 记住目前最小的结点和它的前驱。走完一遍，让 minpre->next 指向 minp 的后继，再把 minp 释放掉就行了。只扫一趟，时间 O(n)，空间 O(1)。void DelMinNode(LinkList &L) {    if (L->next == NULL) return;    LNode *pre = L, *p = L->next;    LNode *minpre = pre, *minp = p;    while (p != NULL) {        if (p->data < minp->data) {            minp = p;            minpre = pre;        }        pre = p;        p = p->next;    }    minpre->next = minp->next;    free(minp);}最小值结点正好是第一个数据结点时，minpre 就是头结点，删除照样成立。题目说最小值结点唯一，所以不用考虑有多个最小值的情况。"
    },
    {
      "score": 0,
      "knowledge": "有序顺序表插入",
      "explanation": "",
      "referenceMarkdown": "有序表插入不用先找位置再挪元素，直接从表尾往前比较：比 e 大的都后移一位，遇到不大于 e 的元素或者走到表头就停下，把 e 放进空出来的位置。平均要挪 n/2 个元素，时间 O(n)，空间 O(1)。bool InsertOrder(SqList &L, ElemType e) {    if (L.length >= L.listsize) return false;    int i = L.length - 1;    while (i >= 0 && L.data[i] > e) {        L.data[i + 1] = L.data[i];        i--;    }    L.data[i + 1] = e;    L.length++;    return true;}想少比较几次可以先用折半查找定位，比较次数是 O(log n)，但挪元素还是 O(n)，总时间不变。如果要求相等的元素插在已有的相等元素前面，循环条件改成 L.data[i]>=e 就行。",
      "diagrams": [],
      "id": "subj-6",
      "bankId": "subj",
      "chapter": 2,
      "number": 6,
      "kind": "code",
      "typeLabel": "设计题",
      "stem": "设顺序表 L 中的数据元素递增有序。试写一算法，将 e 插入到顺序表的适当位置，插入后保持该表的有序性。",
      "answerDisplay": "有序表插入不用先找位置再挪元素，直接从表尾往前比较：比 e 大的都后移一位，遇到不大于 e 的元素或者走到表头就停下，把 e 放进空出来的位置。平均要挪 n/2 个元素，时间 O(n)，空间 O(1)。bool InsertOrder(SqList &L, ElemType e) {    if (L.length >= L.listsize) return false;    int i = L.length - 1;    while (i >= 0 && L.data[i] > e) {        L.data[i + 1] = L.data[i];        i--;    }    L.data[i + 1] = e;    L.length++;    return true;}想少比较几次可以先用折半查找定位，比较次数是 O(log n)，但挪元素还是 O(n)，总时间不变。如果要求相等的元素插在已有的相等元素前面，循环条件改成 L.data[i]>=e 就行。"
    },
    {
      "score": 0,
      "knowledge": "单链表拆分与复用原结点",
      "explanation": "",
      "referenceMarkdown": "建 B、C 两个头结点，p 扫 A，q 先把 p 的后继存下来免得断链。p->data<0 就接到 B 的尾巴上，否则接到 C 的尾巴上。用尾插是为了让结点在新表里的相对顺序和原来一致；整个过程没有申请新的数据结点，A 的结点全部被 B、C 接着用了。时间 O(n)，空间 O(1)。void DisPart(LinkList &A, LinkList &B, LinkList &C) {    B = (LNode *)malloc(sizeof(LNode));  B->next = NULL;    C = (LNode *)malloc(sizeof(LNode));  C->next = NULL;    LNode *p = A->next, *q;    LNode *rb = B, *rc = C;    while (p != NULL) {        q = p->next;        if (p->data < 0) { rb->next = p; rb = p; }        else             { rc->next = p; rc = p; }        p = q;    }    rb->next = NULL;    rc->next = NULL;    A->next = NULL;}题目只说了小于零和大于零，等于零的没交代。这里按归到 C 处理，也可以单独留在 A 里。要是换成头插法，结点顺序会反过来。",
      "diagrams": [],
      "id": "subj-7",
      "bankId": "subj",
      "chapter": 2,
      "number": 7,
      "kind": "code",
      "typeLabel": "设计题",
      "stem": "设计算法将一个带头结点的单链表 A 分解为两个具有相同结构的链表 B、C，其中 B 表的结点为 A 表中值小于零的结点，而 C 表的结点为 A 表中值大于零的结点（链表 A 的元素类型为整型，要求 B、C 表利用 A 表的结点）。",
      "answerDisplay": "建 B、C 两个头结点，p 扫 A，q 先把 p 的后继存下来免得断链。p->data<0 就接到 B 的尾巴上，否则接到 C 的尾巴上。用尾插是为了让结点在新表里的相对顺序和原来一致；整个过程没有申请新的数据结点，A 的结点全部被 B、C 接着用了。时间 O(n)，空间 O(1)。void DisPart(LinkList &A, LinkList &B, LinkList &C) {    B = (LNode *)malloc(sizeof(LNode));  B->next = NULL;    C = (LNode *)malloc(sizeof(LNode));  C->next = NULL;    LNode *p = A->next, *q;    LNode *rb = B, *rc = C;    while (p != NULL) {        q = p->next;        if (p->data < 0) { rb->next = p; rb = p; }        else             { rc->next = p; rc = p; }        p = q;    }    rb->next = NULL;    rc->next = NULL;    A->next = NULL;}题目只说了小于零和大于零，等于零的没交代。这里按归到 C 处理，也可以单独留在 A 里。要是换成头插法，结点顺序会反过来。"
    },
    {
      "score": 0,
      "knowledge": "顺序表就地去重",
      "explanation": "",
      "referenceMarkdown": "做法是就地筛选：k 记已经保留下来的元素个数，每个 L.data[i] 都跟前面 k 个比一遍，没出现过就写到 L.data[k]，再让 k 加一；出现过就跳过。最后把表长改成 k。不用额外数组，空间 O(1)，时间是 O(n^2)。void DelSame(SqList &L) {    int i, j, k = 0;    for (i = 0; i < L.length; i++) {        j = 0;        while (j < k && L.data[j] != L.data[i]) j++;        if (j == k) L.data[k++] = L.data[i];    }    L.length = k;}如果顺序表本身有序，或者允许先排序，用双指针一趟就能去重，时间 O(n)，算上排序是 O(nlog n)。",
      "diagrams": [],
      "id": "subj-8",
      "bankId": "subj",
      "chapter": 2,
      "number": 8,
      "kind": "code",
      "typeLabel": "设计题",
      "stem": "设计一个算法，删除顺序表中值相同的结点。",
      "answerDisplay": "做法是就地筛选：k 记已经保留下来的元素个数，每个 L.data[i] 都跟前面 k 个比一遍，没出现过就写到 L.data[k]，再让 k 加一；出现过就跳过。最后把表长改成 k。不用额外数组，空间 O(1)，时间是 O(n^2)。void DelSame(SqList &L) {    int i, j, k = 0;    for (i = 0; i < L.length; i++) {        j = 0;        while (j < k && L.data[j] != L.data[i]) j++;        if (j == k) L.data[k++] = L.data[i];    }    L.length = k;}如果顺序表本身有序，或者允许先排序，用双指针一趟就能去重，时间 O(n)，算上排序是 O(nlog n)。"
    },
    {
      "score": 0,
      "knowledge": "链表表示集合与子集判定",
      "explanation": "",
      "referenceMarkdown": "A 是 B 的子集，等价于 A 里每个元素都能在 B 里找到。所以拿 A 的每个结点去 B 里顺序查找，一旦某个找不到就直接返回 0，全部找到返回 1。设 A、B 的长度分别是 m、n。int IsSubset(LinkList A, LinkList B) {    LNode *pa = A->next, *pb;    while (pa != NULL) {        pb = B->next;        while (pb != NULL && pb->data != pa->data) pb = pb->next;        if (pb == NULL) return 0;        pa = pa->next;    }    return 1;}最坏情况下每个元素都要把 B 扫完，比较次数约 m*n，时间 O(m*n)；只用了两个指针，空间 O(1)。如果允许用额外空间，可以把 B 的元素放进哈希表，时间降到 O(m+n)、空间 O(n)；先排序再归并也可以，时间 O(mlogm+nlogn)、空间 O(1)。",
      "diagrams": [],
      "id": "subj-9",
      "bankId": "subj",
      "chapter": 2,
      "number": 9,
      "kind": "code",
      "typeLabel": "设计题",
      "stem": "假设链表 A、B 分别表示一个集合，试设计算法以判断集合 A 是否是集合 B 的子集，若是，则返回 1，否则返回 0，并分析算法的时间复杂度。",
      "answerDisplay": "A 是 B 的子集，等价于 A 里每个元素都能在 B 里找到。所以拿 A 的每个结点去 B 里顺序查找，一旦某个找不到就直接返回 0，全部找到返回 1。设 A、B 的长度分别是 m、n。int IsSubset(LinkList A, LinkList B) {    LNode *pa = A->next, *pb;    while (pa != NULL) {        pb = B->next;        while (pb != NULL && pb->data != pa->data) pb = pb->next;        if (pb == NULL) return 0;        pa = pa->next;    }    return 1;}最坏情况下每个元素都要把 B 扫完，比较次数约 m*n，时间 O(m*n)；只用了两个指针，空间 O(1)。如果允许用额外空间，可以把 B 的元素放进哈希表，时间降到 O(m+n)、空间 O(n)；先排序再归并也可以，时间 O(mlogm+nlogn)、空间 O(1)。"
    },
    {
      "score": 0,
      "knowledge": "无序单链表的查找、交换和删除",
      "explanation": "",
      "referenceMarkdown": "先扫一遍找出最小值结点 minp 和它的前驱 minpre，把值打印出来。然后分奇偶处理：是奇数就和直接后继交换数据域，只交换值、不动指针最省事；是偶数就把直接后继删掉，minp 自己留着。要注意最小值可能在表尾，那时它没有后继，打印完就结束。时间 O(n)，空间 O(1)。void MinNodeOp(LinkList &L) {    if (L->next == NULL) return;    LNode *pre = L, *p = L->next;    LNode *minpre = pre, *minp = p;    while (p != NULL) {        if (p->data < minp->data) { minp = p; minpre = pre; }        pre = p;        p = p->next;    }    printf(\"%d\\n\", minp->data);    if (minp->next == NULL) return;    if (minp->data % 2 == 1) {        ElemType t = minp->data;        minp->data = minp->next->data;        minp->next->data = t;    } else {        LNode *q = minp->next;        minp->next = q->next;        free(q);    }}题目说的是交换数值，所以改一下 data 就够了；如果要求交换结点，那就得动指针，结果一样但麻烦一些。",
      "diagrams": [],
      "id": "subj-10",
      "bankId": "subj",
      "chapter": 2,
      "number": 10,
      "kind": "code",
      "typeLabel": "设计题",
      "stem": "设有一个由正整数组成的无序单链表，编写算法实现下列功能：\n\n1. 找出最小值结点，且显示该数值；\n2. 若该数值为奇数，则将其与直接后继结点的数值交换；\n3. 若为偶数，则将其直接后继结点删除。",
      "answerDisplay": "先扫一遍找出最小值结点 minp 和它的前驱 minpre，把值打印出来。然后分奇偶处理：是奇数就和直接后继交换数据域，只交换值、不动指针最省事；是偶数就把直接后继删掉，minp 自己留着。要注意最小值可能在表尾，那时它没有后继，打印完就结束。时间 O(n)，空间 O(1)。void MinNodeOp(LinkList &L) {    if (L->next == NULL) return;    LNode *pre = L, *p = L->next;    LNode *minpre = pre, *minp = p;    while (p != NULL) {        if (p->data < minp->data) { minp = p; minpre = pre; }        pre = p;        p = p->next;    }    printf(\"%d\\n\", minp->data);    if (minp->next == NULL) return;    if (minp->data % 2 == 1) {        ElemType t = minp->data;        minp->data = minp->next->data;        minp->next->data = t;    } else {        LNode *q = minp->next;        minp->next = q->next;        free(q);    }}题目说的是交换数值，所以改一下 data 就够了；如果要求交换结点，那就得动指针，结果一样但麻烦一些。"
    },
    {
      "score": 0,
      "knowledge": "有序单链表的一趟统计与删除",
      "explanation": "",
      "referenceMarkdown": "表是递增有序的，这一点很关键：比 x 小的都在前面，比 x 大的都在后面，相同的数一定挨在一起。所以从头扫一遍就能把两件事都做完。遇到比 x 小的，是偶数就删掉，是奇数就留着；遇到不小于 x 的，只在\"比 x 大并且和上一个统计过的值不同\"时让计数加一，这样相同的数只算一次。一趟下来时间 O(n)，只用了几个指针，空间 O(1)。int CountGreaterAndDelEven(LinkList &L, int x) {    LNode *pre = L, *p = L->next;    int cnt = 0, has = 0, last = 0;    while (p != NULL) {        if (p->data < x) {            if (p->data % 2 == 0) {                pre->next = p->next;                free(p);                p = pre->next;            } else {                pre = p;                p = p->next;            }        } else {            if (p->data > x && (!has || p->data != last)) {                cnt++;                last = p->data;                has = 1;            }            pre = p;            p = p->next;        }    }    return cnt;}has 和 last 是用来记住上一个统计过的值的，没有它们同一个数会被重复计数；has 保证第一个大于 x 的数一定能计上。表里没有比 x 大的元素时，函数返回 0。",
      "diagrams": [],
      "id": "subj-11",
      "bankId": "subj",
      "chapter": 2,
      "number": 11,
      "kind": "code",
      "typeLabel": "设计题",
      "stem": "设有一个正整数序列组成的有序单链表（按递增次序有序，且允许有相等的整数存在），试编写能实现下列功能的算法（要求用最少的时间和最小的空间）：\n\n1. 确定在序列中比正整数 x 大的数有几个（相同的数只计算一次）；\n2. 将单链表中比正整数 x 小的偶数从单链表中删除。",
      "answerDisplay": "表是递增有序的，这一点很关键：比 x 小的都在前面，比 x 大的都在后面，相同的数一定挨在一起。所以从头扫一遍就能把两件事都做完。遇到比 x 小的，是偶数就删掉，是奇数就留着；遇到不小于 x 的，只在\"比 x 大并且和上一个统计过的值不同\"时让计数加一，这样相同的数只算一次。一趟下来时间 O(n)，只用了几个指针，空间 O(1)。int CountGreaterAndDelEven(LinkList &L, int x) {    LNode *pre = L, *p = L->next;    int cnt = 0, has = 0, last = 0;    while (p != NULL) {        if (p->data < x) {            if (p->data % 2 == 0) {                pre->next = p->next;                free(p);                p = pre->next;            } else {                pre = p;                p = p->next;            }        } else {            if (p->data > x && (!has || p->data != last)) {                cnt++;                last = p->data;                has = 1;            }            pre = p;            p = p->next;        }    }    return cnt;}has 和 last 是用来记住上一个统计过的值的，没有它们同一个数会被重复计数；has 保证第一个大于 x 的数一定能计上。表里没有比 x 大的元素时，函数返回 0。"
    },
    {
      "score": 0,
      "knowledge": "单链表删除全部指定值的递归算法",
      "explanation": "",
      "referenceMarkdown": "递归的想法是把\"删除 L 中所有值为 x 的结点\"拆成\"处理当前这个结点\"和\"处理剩下的表\"两块。设 f(L,x) 表示删除以 L 为首元指针的链表中所有值为 x 的结点，返回删除后的首指针。出口：L 为空时，返回 NULL。如果 L->data==x，这个结点要删掉：先记住 L->next，释放 L，再对剩下的部分做 f，把结果返回。如果 L->data!=x，这个结点保留：让 L->next 等于对 L->next 递归的结果，返回 L。每个结点只处理一次，时间 O(n)，递归深度是表长，空间 O(n)。LinkList DelX(LinkList L, ElemType x) {    LNode *p;    if (L == NULL) return NULL;    if (L->data == x) {        p = L->next;        free(L);        return DelX(p, x);    }    L->next = DelX(L->next, x);    return L;}链表带头结点时，调用 L->next=DelX(L->next,x) 就可以了。表很长的话递归可能爆栈，这种情况改成循环更稳妥。",
      "diagrams": [],
      "id": "subj-12",
      "bankId": "subj",
      "chapter": 2,
      "number": 12,
      "kind": "code",
      "typeLabel": "算法设计题",
      "stem": "已知带头结点的单链表采用如下存储结构定义：\n\n```c\ntypedef struct LNode {\n    ElemType data;\n    struct LNode *next;\n} LNode, *LinkList;\n```\n\n试设计一个递归算法，删除单链表 L 中所有值为 x 的结点。要求：先简要说明算法思想（递归模型），再写出完整的算法。",
      "answerDisplay": "递归的想法是把\"删除 L 中所有值为 x 的结点\"拆成\"处理当前这个结点\"和\"处理剩下的表\"两块。设 f(L,x) 表示删除以 L 为首元指针的链表中所有值为 x 的结点，返回删除后的首指针。出口：L 为空时，返回 NULL。如果 L->data==x，这个结点要删掉：先记住 L->next，释放 L，再对剩下的部分做 f，把结果返回。如果 L->data!=x，这个结点保留：让 L->next 等于对 L->next 递归的结果，返回 L。每个结点只处理一次，时间 O(n)，递归深度是表长，空间 O(n)。LinkList DelX(LinkList L, ElemType x) {    LNode *p;    if (L == NULL) return NULL;    if (L->data == x) {        p = L->next;        free(L);        return DelX(p, x);    }    L->next = DelX(L->next, x);    return L;}链表带头结点时，调用 L->next=DelX(L->next,x) 就可以了。表很长的话递归可能爆栈，这种情况改成循环更稳妥。"
    },
    {
      "score": 0,
      "knowledge": "仅设尾指针的循环链队",
      "explanation": "",
      "referenceMarkdown": "队空时 rear==NULL；不空时 rear 指向尾结点，rear->next 指向头结点，所以队头随时可以用 rear->next 取到。入队：申请一个结点 s，把 x 放进去。空队就让 rear=s、s->next=s，自己连成一个环；不空就把 s 接在原队尾后面、队头前面，s->next=rear->next，rear->next=s，再让 rear=s 变成新队尾。O(1)。void EnQueue(LinkList &rear, ElemType x) {    LNode *s = (LNode *)malloc(sizeof(LNode));    s->data = x;    if (rear == NULL) {        rear = s;        s->next = s;    } else {        s->next = rear->next;        rear->next = s;        rear = s;    }}出队：队头是 rear->next。rear==NULL 说明队空，直接失败返回；否则令 p=rear->next，如果 p==rear 说明队里只有一个结点，出队后队就空了，把 rear 置成 NULL；不然就 rear->next=p->next，把头结点摘下来。题目说明不保留值也不回收结点，所以不用 free。O(1)。bool DeQueue(LinkList &rear) {    if (rear == NULL) return false;    LNode *p = rear->next;    if (p == rear) rear = NULL;    else rear->next = p->next;    return true;}要取队头元素的值，把参数改成 ElemType &x，删之前执行 x=p->data；要回收空间就在摘下 p 之后 free(p)。只设尾指针的循环链队，入队出队都是 O(1)，不用预先分配空间。",
      "diagrams": [],
      "id": "subj-13",
      "bankId": "subj",
      "chapter": 3,
      "number": 13,
      "kind": "code",
      "typeLabel": "算法设计题",
      "stem": "假定用一个循环单链表表示队列（称此为循环链队），该队列只设一个队尾指针，不设队首指针。已知单链表的存储结构定义如下（同严蔚敏《数据结构》第一版）：\n\n```c\ntypedef struct LNode {\n    ElemType data;\n    struct LNode *next;\n} LNode, *LinkList;\n```\n\n循环链队用 `LinkList` 类型的队尾指针 `rear` 表示：队空时 `rear == NULL`；非空时 `rear` 指向队尾结点，`rear->next` 指向队头结点。\n\n试编写下列算法：\n\n1. 向循环链队插入一个元素为 x 的结点；\n2. 从循环链队中删除一个结点（假定不需要保留被删除结点的值和不需要回收结点）。",
      "answerDisplay": "队空时 rear==NULL；不空时 rear 指向尾结点，rear->next 指向头结点，所以队头随时可以用 rear->next 取到。入队：申请一个结点 s，把 x 放进去。空队就让 rear=s、s->next=s，自己连成一个环；不空就把 s 接在原队尾后面、队头前面，s->next=rear->next，rear->next=s，再让 rear=s 变成新队尾。O(1)。void EnQueue(LinkList &rear, ElemType x) {    LNode *s = (LNode *)malloc(sizeof(LNode));    s->data = x;    if (rear == NULL) {        rear = s;        s->next = s;    } else {        s->next = rear->next;        rear->next = s;        rear = s;    }}出队：队头是 rear->next。rear==NULL 说明队空，直接失败返回；否则令 p=rear->next，如果 p==rear 说明队里只有一个结点，出队后队就空了，把 rear 置成 NULL；不然就 rear->next=p->next，把头结点摘下来。题目说明不保留值也不回收结点，所以不用 free。O(1)。bool DeQueue(LinkList &rear) {    if (rear == NULL) return false;    LNode *p = rear->next;    if (p == rear) rear = NULL;    else rear->next = p->next;    return true;}要取队头元素的值，把参数改成 ElemType &x，删之前执行 x=p->data；要回收空间就在摘下 p 之后 free(p)。只设尾指针的循环链队，入队出队都是 O(1)，不用预先分配空间。"
    }
  ],
  "quotas": {
    "full": {
      "choice": [
        7,
        7,
        6
      ],
      "fill": [
        3,
        3,
        4
      ],
      "code": [
        1,
        1,
        1
      ]
    },
    "objective": {
      "choice": [
        7,
        7,
        6
      ],
      "fill": [
        3,
        3,
        4
      ]
    }
  }
};
