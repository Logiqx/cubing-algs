var algSet = {
  "header":
  {
    "id": "4APLL",
    "name": "4-Algorithm Permutation of the Last Layer",
    "desc": "This page lists the [PLL] algorithms that I teach to improvers. The 4 algorithms below are harder to learn than [Anti-Sune] and [Niklas] but they save a lot of moves.",
    "css": "2LPLL",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/puzzle/333/pll/",
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
      "id": "Adj",
      "name": "Adjacent Corner Swap",
      "desc": "This case is solved using Anti-[Sune] and [Niklas], essentially a [PLL] algorithm for Jb-Perm.",
      "wiki": "",
      "algdb": "jb",
      "image": "CPLL-A",
      "prob": "4/6",
      "algs":
      [
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "Jb-Perm - [RFAS], [RFN]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "R U2 R' U' R U2 L' U R' U' L",
              "desc": "Optimal execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
      ]
    },
    {
      "id": "Diag",
      "name": "Diagonal Corner Swap",
      "desc": "This case is solved using an easy Na-Perm algorithm. Notice how the same 7-move [RUL] algorithm is executed twice, swapping the same [F2L] pairs each time.",
      "wiki": "",
      "algdb": "na",
      "image": "CPLL-O",
      "prob": "1/6",
      "algs":
      [
        {
          "alg": "(R U' L U2 R' U L') (R U' L U2 R' U L')",
          "desc": "Playing with [F2L] pairs - track FR + BL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "CPLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "",
      "image": "CPLL",
      "prob": "1/6",
      "algs":
      [
      ]
    },
    {
      "id": "Ua",
      "name": "Ua-Perm",
      "desc": "Inverse and reflection of Ub.",
      "wiki": "",
      "algdb": "ua",
      "image": "EPLL-Ua",
      "prob": "4/12",
      "algs":
      [
        {
          "alg": "U R U' (R U R U R U' R' U' R' U') U R'",
          "desc": "[Conjugate] of [F2L] insert - [R U': R U R U R U' R' U' R' U']",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U R U' R U R U R U' R' U' R2",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
      ]
    },
    {
      "id": "Ub",
      "name": "Ub-Perm",
      "desc": "Inverse and reflection of Ua.",
      "wiki": "",
      "algdb": "ub",
      "image": "EPLL-Ub",
      "prob": "4/12",
      "algs":
      [
        {
          "alg": "U R U' (U R U R U R' U' R' U' R') U R'",
          "desc": "[Conjugate] of [F2L] insert - [R U': U R U R U R' U' R' U' R']",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U R2 U R U R' U' R' U' R' U R'",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
      ]
    },
    {
      "id": "Z",
      "name": "Z-Perm",
      "wiki": "",
      "algdb": "z",
      "image": "EPLL-Z",
      "prob": "2/12",
      "algs":
      [
        {
          "alg": "R U' R U R U R U' R' U' R2 ...<br/>U' R U' R U R U R U' R' U' R2",
          "desc": "[EPLL] combination - Ua-Perm, [AUF], Ua-Perm",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "H",
      "name": "H-Perm / X-Perm",
      "desc": "Best known as H-Perm (i.e. swapping opposite edge pairs) this case is also known as X-Perm (i.e.  swapping diagonal corner pairs).",
      "wiki": "",
      "algdb": "h",
      "image": "EPLL-H",
      "prob": "1/12",
      "algs":
      [
        {
          "alg": "R U' R U R U R U' R' U' R2 ...<br/>U R U' R U R U R U' R' U' R2",
          "desc": "[EPLL] combination - Ua-Perm, [AUF], Ua-Perm",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "EPLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "",
      "image": "EPLL",
      "prob": "1/12",
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
          "id": "corners",
          "name": "Corner Permutation",
          "desc": "The 2 [CPLL] cases are solved using 2 [RUL] algorithms - Rb-Perm (R U2 R' U' R U2 L' U R' U' L) and Na-Perm (R U' L U2' R' U L') (R U' L U2' R' U L')",
          "wiki": "2-Look_PLL",
          "cases": ["Adj", "Diag", "CPLL"]
        },
        {
          "id": "edges",
          "name": "Edge Permutation",
          "desc": "The 4 [EPLL] cases are solved using 2 [RU] algorithms - Ua-Perm (R U' R U R U R U' R' U' R2) and Ub-Perm (R2 U R U R' U' R' U' R' U R').",
          "wiki": "2-Look_PLL",
          "cases": ["Ua", "Ub", "Z", "H", "EPLL"]
        },
      ]
    },
  ]
}
