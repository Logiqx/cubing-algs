var algSet = {
  "header":
  {
    "id": "2LELL",
    "name": "2-Look Edges of the Last Layer",
    "desc": "This page lists [ELL] algorithms that are suitable for intermediates. They are good algorithms and have been chosen for their execution speed.",
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
      "id": "28",
      "name": "Stealth / Angel Fish",
      "desc": "This case is typically solved using the algorithm(s) for [OLL] 28.",
      "wiki": "",
      "algdb": "oll/oll28",
      "image": "EOLL-28",
      "prob": "4/8",
      "algs":
      [
        {
          "alg": "M' (R U R' U') M (U R U' R')",
          "desc": "Triggers - M-slice, [sexy], M-slice, [reverse-sexy]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "(r U R' U') r' R (U R U' R')",
              "desc": "Execution avoids the M move",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
        {
          "alg": "U' (M' U' M) U2' (M' U' M)",
          "desc": "Moo!",
          "status": 0,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "57",
      "name": "H / I",
      "desc": "This case is typically solved using the algorithm for [OLL] 57.",
      "wiki": "",
      "algdb": "oll/oll57",
      "image": "EOLL-57",
      "prob": "2/8",
      "algs":
      [
        {
          "alg": "(R U R' U') M' (U R U' R') M",
          "desc": "Triggers - [sexy], M-slice, [reverse-sexy], M-slice",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "(R U R' U') M' (U R U' r')",
              "desc": "Two-handed execution",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "(R U R' U') r R' (U R U' r')",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        }
      ]
    },
    {
      "id": "20",
      "name": "No Edges - X / Checkers",
      "desc": "This case is typically solved using the algorithm for [OLL] 20.",
      "wiki": "",
      "algdb": "oll/oll20",
      "image": "EOLL-20",
      "prob": "1/8",
      "algs":
      [
        {
          "alg": "M' (R U R' U') M2 (U R U' R') U' M'",
          "desc": "M-slice, [sexy], M-slice, [reverse-sexy], [AUF], M-slice",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "(r U R' U') M2' (U R U' R') U' M'",
              "desc": "Two-handed execution",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "(r U R' U') r2 R2 (U R U' R') U' r R'",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
        {
          "alg": "M U (R U R' U') M2' (U R U' R') M",
          "desc": "M-slice, [AUF], [sexy], M-slice, [reverse-sexy], M-slice",
          "status": -1,
          "uses": [],
          "vars":
          [
            {
              "alg": "r' R U (R U R' U') M2' (U R U' r')",
              "desc": "Two-handed execution",
              "status": -1,
              "uses": ["2H"]
            },
            {
              "alg": "r' R U (R U R' U') r2 R2 (U R U' r')",
              "desc": "One-handed execution",
              "status": -1,
              "uses": ["OH"]
            }
          ]
        }
      ]
    },
    {
      "id": "EOLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "ell",
      "image": "EOLL",
      "prob": "1/8",
      "algs":
      [
      ]
    },
    {
      "id": "Ua",
      "name": "Ua-Perm",
      "desc": "Inverse and reflection of Ub.",
      "wiki": "",
      "algdb": "pll/ua",
      "image": "EPLL-Ua",
      "prob": "4/12",
      "algs":
      [
        {
          "alg": "U M2 U (M U2 M' U2') U' M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U: [M, U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U M2' U M U2' M' U M2'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U' M2 U (M' U2 M U2') U' M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U: [M', U2]]",
          "status": 0,
          "uses": [],
          "vars":
          [
            {
              "alg": "U' M2' U M' U2' M U M2'",
              "desc": "Execution applies a cancellation",
              "status": 0,
              "uses": ["2H"]
            },
          ]
        },
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
              "uses": ["2H", "OH"]
            },
          ]
        },
        {
          "alg": "U' R' U (U' R' U' R' U' R U R U R) U' R",
          "desc": "[Conjugate] of [F2L] insert - [R' U: U' R' U' R' U' R U R U R]",
          "status": 0,
          "uses": [],
          "vars":
          [
            {
              "alg": "U' R2 U' R' U' R U R U R U' R",
              "desc": "Execution applies cancellations",
              "status": 0,
              "uses": ["2H", "OH"]
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
      "algdb": "pll/ub",
      "image": "EPLL-Ub",
      "prob": "4/12",
      "algs":
      [
        {
          "alg": "U M2 U' (M U2 M' U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U': [M, U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U M2' U' M U2' M' U' M2'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U' M2 U' (M' U2 M U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U': [M', U2]]",
          "status": 0,
          "uses": [],
          "vars":
          [
            {
              "alg": "U' M2' U' M' U2' M U' M2'",
              "desc": "Execution applies a cancellation",
              "status": 0,
              "uses": ["2H"]
            },
          ]
        },
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
            {
              "alg": "U' z U2' R U R U' R' U' R' U' R U'",
              "desc": "Execution is on the left",
              "status": 0,
              "uses": ["OH"]
            },
          ]
        },
        {
          "alg": "U' R' U (R' U' R' U' R' U R U R U) U' R",
          "desc": "[Conjugate] of [F2L] insert - [R' U: R' U' R' U' R' U R U R U]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U' R' U R' U' R' U' R' U R U R2",
              "desc": "Execution applies cancellations",
              "status": 0,
              "uses": ["2H"]
            },
            {
              "alg": "U z U' R U' R' U' R' U' R U R U2'",
              "desc": "Execution is on the left",
              "status": 1,
              "uses": ["OH"]
            },
          ]
        },
      ]
    },
    {
      "id": "Z",
      "name": "Z-Perm",
      "wiki": "",
      "algdb": "pll/z",
      "image": "EPLL-Z",
      "prob": "2/12",
      "algs":
      [
        {
          "alg": "(M' U' M2' U' M2' U' M) (M2 U2' M2')",
          "desc": "Intuitive - Solve UF + UB then solve remaining edges",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "M' U' M2' U' M2' U' M' U2' M2'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U (M2 U' M2 U') (M' U2' M2 U2' M')",
          "desc": "Intuitive - Solve UL + UR then solve remaining edges",
          "status": -1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U M2' U' M2' U' M' U2' M2' U2' M'",
              "desc": "Two-handed execution",
              "status": -1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U R' U' R U' R U R U' R' U R U R2 U' R'",
          "desc": "Playing with [F2L] pairs - track BR + FR",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "R U R' U R' U' R' U R U' R' U' R2 U R",
          "desc": "Playing with [F2L] pairs - track FR + BR",
          "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "H",
      "name": "H-Perm / X-Perm",
      "desc": "Best known as H-Perm (i.e. swapping opposite edge pairs) this case is also known as X-Perm (i.e.  swapping diagonal corner pairs).",
      "wiki": "",
      "algdb": "pll/h",
      "image": "EPLL-H",
      "prob": "1/12",
      "algs":
      [
        {
          "alg": "M2 U' (M2 U2 M2' U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U': [M2, U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "M2' U' M2' U2' M2' U' M2'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "(R2 U2' R U2' R2) U2' (R2 U2' R U2' R2)",
          "desc": "Note the Ortega / Varasano [OLL] algorithm (H case)",
          "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "EPLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "pll",
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
          "id": "orientation",
          "name": "Edge Orientation",
          "wiki": "EOLL",
          "desc": "The [EOLL] cases are solved using the standard [OLL] algorithms which by good fortune preserve the corners. There is a 1/8 chance of skipping this step and going straight to [EPLL].",
          "cases": ["28", "57", "20", "EOLL"]
        },
        {
          "id": "permutation",
          "name": "Edge Permutation",
          "desc": "The [EPLL] cases are solved using the standard [PLL] algorithms - typically [RU] or [MU] moves. There is a 1/12 chance of skipping this step at the end of a solve.",
          "wiki": "2-Look_PLL",
          "cases": ["Ua", "Ub", "Z", "H", "EPLL"]
        },
      ]
    },
  ]
}
