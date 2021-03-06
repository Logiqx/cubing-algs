var algSet = {
  "header":
  {
    "id": "2AOLL",
    "name": "2-Algorithm Orientation of the Last Layer",
    "desc": "This page lists the [OLL] algorithms that I teach to beginners. The algorithms have all been chosen for their simplicity and ease of learning.",
    "css": "2LOLL",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/puzzle/333/oll/",
    "uses":
    [
      {
        "id": "2H",
        "name": "Two-Handed"
      },
    ]
  },
  "cases":
  [
    {
      "id": "Clock",
      "name": "Adjacent Edge Flip",
      "desc": "This case resembles an analog clock at 9 o'clock.",
      "wiki": "",
      "algdb": "oll44",
      "image": "EOLL-L",
      "prob": "4/8",
      "algs":
      [
        {
          "alg": "F (U R U' R') F'",
          "desc": "[Conjugate] of [reverse-sexy] - [F: U R U' R']",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Line",
      "name": "Opposite Edge Flip",
      "desc": "This case can be solved using the \"Clock\" algorithm, executed twice.",
      "wiki": "",
      "algdb": "oll45",
      "image": "EOLL-I",
      "prob": "2/8",
      "algs":
      [
        {
          "alg": "F (U R U' R') F' F (U R U' R') F'",
          "desc": "[Conjugate] of [reverse-sexy] - [F: U R U' R'] * 2",
          "status": 1,
          "uses": ["2H"],
          "vars":
          [
            {
              "alg": "F (U R U' R') (U R U' R') F'",
              "desc": "Optimal execution applies cancellations",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "Dot",
      "name": "Four Edge Flip",
      "desc": "The \"Dot\" case is solved using the algorithms for the \"Clock\" and \"Line\" cases.",
      "wiki": "",
      "algdb": "oll2",
      "image": "EOLL-D",
      "prob": "1/8",
      "algs":
      [
        {
          "alg": "F (U R U' R') F' ...<br/>U' F (U R U' R') F' F (U R U' R') F'",
          "desc": "[EOLL] combination - Clock, [AUF], Line",
          "status": 1,
          "uses": ["2H"],
          "vars":
          [
            {
              "alg": "F (U R U' R') F' ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U' F (U R U' R') (U R U' R') F'",
              "desc": "Optimal execution applies cancellations",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "EOLL",
      "name": "Solved",
      "wiki": "",
      "algdb": ".",
      "image": "EOLL",
      "prob": "1/8",
      "algs":
      [
      ]
    },
    {
      "id": "AS",
      "name": "AS / Anti-Sune",
      "wiki": "",
      "algdb": "oll26",
      "image": "OCLL-AS",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U (R U2 R' U' R U' R')",
          "desc": "[RFAS] - Extract [F2L] pair, [AUF], re-insert pair",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "S",
      "name": "S / Sune",
      "wiki": "",
      "algdb": "oll27",
      "image": "OCLL-S",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U2 (R U2 R' U' R U' R') U2 (R U2 R' U' R U' R')",
          "desc": "[OCLL] combination - Anti-Sune, [AUF], Anti-Sune",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "wiki": "",
      "algdb": "oll25",
      "image": "OCLL-L",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U' (R U2 R' U' R U' R') ...<br/>(R U2 R' U' R U' R') U2 (R U2 R' U' R U' R')",
          "desc": "[OCLL] combination - Anti-Sune, [AUF], Sune",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "U",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "oll23",
      "image": "OCLL-U",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U (R U2 R' U' R U' R') ...<br/>U (R U2 R' U' R U' R') U2 (R U2 R' U' R U' R')",
          "desc": "[OCLL] combination - Anti-Sune, [AUF], Sune",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "T",
      "name": "T / Chameleon",
      "wiki": "",
      "algdb": "oll24",
      "image": "OCLL-T",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "(R U2 R' U' R U' R') ...<br/>U' (R U2 R' U' R U' R') U2 (R U2 R' U' R U' R')",
          "desc": "[OCLL] combination - Anti-Sune, [AUF], Sune",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Pi",
      "name": "Pi / Bruno",
      "wiki": "",
      "algdb": "oll22",
      "image": "OCLL-Pi",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "(R U2 R' U' R U' R') U' (R U2 R' U' R U' R')",
          "desc": "[OCLL] combination - Anti-Sune, [AUF], Anti-Sune",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "oll21",
      "image": "OCLL-H",
      "prob": "2/27",
      "algs":
      [
        {
          "alg": "U' (R U2 R' U' R U' R') (R U2 R' U' R U' R')",
          "desc": "[OCLL] combination - Double Anti-Sune",
          "status": 1,
          "uses": ["2H"],
          "vars":
          [
            {
              "alg": "U' R U2 R' U' (R U R' U') R U' R'",
              "desc": "Optimal execution applies cancellations",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "OCLL",
      "name": "Solved",
      "wiki": "",
      "algdb": ".",
      "image": "OCLL",
      "prob": "1/27",
      "algs":
      [
      ]
    },
  ],
  "views":
  [
    {
      "id": "steps",
      "name": "Steps",
      "groups":
      [
        {
          "id": "edges",
          "name": "Edge Orientation",
          "wiki": "EOLL",
          "desc": "The 3 [EOLL] cases are solved using 1 easy algorithm - F [reverse-sexy] F'.",
          "cases": ["Clock", "Line", "Dot", "EOLL"]
        },
        {
          "id": "corners",
          "name": "Corner Orientation",
          "wiki": "OCLL",
          "desc": "The 7 [OCLL] cases are solved using 1 easy algorithm - [RFAS] (R U2 R' U' R U' R').",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OCLL"]
        },
      ]
    },
  ]
}
