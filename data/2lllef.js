var algSet = {
  "header":
  {
    "id": "2LLLEF",
    "name": "2-Look Last Layer Edges First",
    "desc": "This page lists [LLEF] algorithms that are suitable for intermediates. They are good algorithms and have been chosen for their execution speed.",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/puzzle/333/",
    "uses":
    [
      {
        "id": "2H",
        "name": "Two-Handed"
      },
      {
        "id": "OH",
        "name": "One-Handed"
      }
    ]
  },
  "cases":
  [
    {
      "id": "Clock",
      "name": "Adjacent Edge Flip",
      "desc": "This case resembles an analog clock at 9 o'clock. It is typically solved using the algorithm(s) for [OLL] 44.",
      "wiki": "",
      "algdb": "oll/oll44",
      "image": "EOLL-L",
      "prob": "4/8",
      "algs":
      [
        {
          "alg": "F (U R U' R') F'",
          "name": "OLL 44",
          "desc": "[Conjugate] of [reverse-sexy] - [F: U R U' R']",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "U2 f (R U R' U') f'",
              "desc": "Executed from a different angle",
              "status": 1,
              "uses": ["2H", "OH"]
            },
          ]
        },
        {
          "alg": "U r U2 R' U' R U' r'",
          "name": "OLL 6",
          "desc": "[RFWAS] - Extract 2x2x1 block, [AUF], re-insert block",
          "status": 1,
          "uses": ["OH"]
        }
      ]
    },
    {
      "id": "Line",
      "name": "Opposite Edge Flip",
      "desc": "This case is typically solved using the algorithm for [OLL] 45.",
      "wiki": "",
      "algdb": "oll/oll45",
      "image": "EOLL-I",
      "prob": "2/8",
      "algs":
      [
        {
          "alg": "F (R U R' U') F'",
          "name": "OLL 45",
          "desc": "[Conjugate] of [sexy] - [F: R U R' U']",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Dot",
      "name": "Four Edge Flip",
      "desc": "This case is typically solved using the algorithm(s) for [OLL] 2.",
      "wiki": "",
      "algdb": "oll/oll2",
      "image": "EOLL-D",
      "prob": "1/8",
      "algs":
      [
        {
          "alg": "F (R U R' U') F' f (R U R' U') f'",
          "name": "OLL 2",
          "desc": "[OLL] combination - F [sexy] F', f [sexy] f'",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "F (R U R' U') S (R U R' U') f'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "(r U2 R' U' R U' r') U' (r U2 R' U' R U' r')",
          "name": "OLL 2",
          "desc": "[SuneOLL]: [RFWAS], [AUF], [RFWAS]",
          "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "EOLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "",
      "image": "EOLL",
      "prob": "1/8",
      "algs":
      [
      ]
    },
    {
      "id": "Adj",
      "name": "Adjacent Edge Swap",
      "desc": "This fastest way to solve this case is using the [Anti-Sune] or [Sune] algorithms.",
      "wiki": "",
      "algdb": "",
      "image": "EPLL-A",
      "prob": "4/6",
      "algs":
      [
        {
          "alg": "R U2 R' U' R U' R'",
          "name": "AS / Anti-Sune",
          "desc": "[RFAS] - Extract [F2L] pair, [AUF], re-insert pair",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "U R U R' U R U2' R'",
          "name": "S / Sune",
          "desc": "[RFS] - Extract [F2L] pair, [AUF], re-insert pair",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Opp",
      "name": "Opposite Edge Swap",
      "desc": "This case can be solved using an [Anti-Sune] or [Sune] combination. It can also be solved using a [PLL] algorithm such as T-Perm (2H) or Z-Perm (OH).",
      "wiki": "",
      "algdb": "",
      "image": "EPLL-O",
      "prob": "1/6",
      "algs":
      [
        {
          "alg": "(R U2 R' U' R U' R') (R' U2' R U R' U R)",
          "desc": "[Anti-Sune] combination - [RFAS], [RBAS]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "R U2 R' U' R U' R2' U2' R U R' U R",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
        {
          "alg": "(R U R' U R U2' R') (R' U' R U' R' U2 R)",
          "desc": "[Sune] combination - [RFS], [RBS]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "R U R' U R U2' R2' U' R U' R' U2 R",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "EPLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "",
      "image": "EPLL",
      "prob": "1/6",
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
          "id": "orientation",
          "name": "Edge Orientation",
          "wiki": "EOLL",
          "desc": "The [EOLL] cases are solved using the fastest [OLL] algorithms having the desired effect. There is a 1/8 chance of skipping this step and going straight to [EPLL].",
          "cases": ["Clock", "Line", "Dot", "EOLL"]
        },
        {
          "id": "permutation",
          "name": "Edge Permutation",
          "desc": "The [EPLL] cases can be solved using the [Anti-Sune] or [Sune] algorithm. There is a 1/6 chance of skipping this step and going straight to [L4C].",
          "wiki": "LLEF",
          "cases": ["Adj", "Opp", "EPLL"]
        },
      ]
    },
  ]
}
