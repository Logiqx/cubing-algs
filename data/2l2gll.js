var algSet = {
  "header":
  {
    "id": "2L2GLL",
    "name": "2-Look 2-Generator Last Layer",
    "desc": "This page lists [2GLL] algorithms that are suitable for intermediates. They are good algorithms and have been chosen for their execution speed.",
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
      "id": "AS",
      "name": "AS / Anti-Sune",
      "wiki": "",
      "algdb": "coll/b1",
      "image": "OCLL-AS",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U R U2 R' U' R U' R'",
          "desc": "[RFAS] - Extract [F2L] pair, [AUF], re-insert pair",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "U R U2' R' U' R U' R'",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
        {
          "alg": "R' U' R U' R' U2 R",
          "desc": "[RBS] - Extract [F2L] pair, [AUF], re-insert pair",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "R' U' R U' R' U2' R",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "S",
      "name": "S / Sune",
      "wiki": "",
      "algdb": "coll/c1",
      "image": "OCLL-S",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "R U R' U R U2' R'",
          "desc": "[RFS] - Extract [F2L] pair, [AUF], re-insert pair",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "U' R' U2' R U R' U R",
          "desc": "[RBAS] - Extract [F2L] pair, [AUF], re-insert pair",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "wiki": "",
      "algdb": "coll/d1",
      "image": "OCLL-L",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U (R U2 R' U' R U' R') * 3",
          "desc": "[SuneOLL]/[2GLL]: Triple [RFAS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U R U2 R' U' (R U R' U') (R U R' U') R U' R'",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "U R U2' R' U' (R U R' U') (R U R' U') R U' R'",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
        {
          "alg": "(R' U' R U' R' U2 R) * 3",
          "desc": "[SuneOLL]/[2GLL]: Triple [RBS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U' R (U' R' U R) (U' R' U R) U' R' U2 R",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "R' U' R (U' R' U R) (U' R' U R) U' R' U2' R",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "U",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "coll/e1",
      "image": "OCLL-U",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R' U' R U' R' U2 R) (R U R' U R U2' R')",
          "desc": "[SuneOLL]/[2GLL]: [RBS], [RFS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U' R U' R' U2 R2 U R' U R U2' R'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "R' U' R U' R' U2' R2 U R' U R U2' R'",
              "desc": "One-handed execution applies a cancellation",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
        {
          "alg": "U2 (R U R' U R U2' R') (R' U' R U' R' U2 R)",
          "desc": "[SuneOLL]/[2GLL]: [RFS], [RBS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U2 R U R' U R U2' R2 U' R U' R' U2 R",
              "desc": "Two-handed execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "U2 R U R' U R U2' R2 U' R U' R' U2' R",
              "desc": "One-handed execution applies a cancellation",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "T",
      "name": "T / Chameleon",
      "wiki": "",
      "algdb": "coll/f1",
      "image": "OCLL-T",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R' U2' R U R' U R)",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [RBAS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R U2 R' U' R U' R2' U2' R U R' U R",
              "desc": "Two-handed execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "R U2' R' U' R U' R2 U2' R U R' U R",
              "desc": "One-handed execution applies a cancellation",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
        {
          "alg": "U2 (R' U2' R U R' U R) (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: [RBAS], [RFAS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U2 R' U2' R U R' U R2 U2 R' U' R U' R'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "U2 R' U2' R U R' U R2 U2' R' U' R U' R'",
              "desc": "One-handed execution applies a cancellation",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        }
      ]
    },
    {
      "id": "Pi",
      "name": "Pi / Bruno",
      "wiki": "",
      "algdb": "coll/g1",
      "image": "OCLL-Pi",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R U2' R') (R' U' R) (R U' R') (R' U2' R)",
          "desc": "[Palindrome]. Essentially [RFAS] and [RBS] mixed together",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R U2' R2' U' R2 U' R2' U2' R",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "R U2' R2 U' R2 U' R2 U2' R",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
        {
          "alg": "(R' U2 R) (R U R') (R' U R) (R U2 R')",
          "desc": "[Palindrome]. Essentially [RBAS] and [RFS] mixed together",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U2 R2 U R2' U R2 U2 R'",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "R' U2' R2 U R2 U R2 U2' R'",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "coll/h1",
      "image": "OCLL-H",
      "prob": "2/27",
      "algs" :
      [
        {
          "alg": "U (R U2 R' U' R U' R') (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: Double [RFAS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U R U2 R' U' (R U R' U') R U' R'",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "U R U2' R' U' (R U R' U') R U' R'",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
        {
          "alg": "(R' U' R U' R' U2 R) (R' U' R U' R' U2 R)",
          "desc": "[SuneOLL]/[2GLL]: Double [RBS]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U' R (U' R' U R) U' R' U2 R",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "R' U' R (U' R' U R) U' R' U2' R",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "OCLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "coll",
      "image": "OCLL",
      "prob": "1/27",
      "algs" :
      [
        {
          "alg": "-",
          "desc": "",
          "status": 1,
          "uses": ["2H", "OH"]
        },
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
      "algs" :
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
              "uses": ["2H", "OH"]
            },
          ]
        },
        {
          "alg": "U' R' U (U' R' U' R' U' R U R U R) U' R",
          "desc": "[Conjugate] of [F2L] insert - [R' U: U' R' U' R' U' R U R U R]",
          "status": 1,
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
        {
          "alg": "U M2 U (M U2 M' U2') U' M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U: [M, U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U M2' U M U2' M' U M2'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U' M2 U (M' U2 M U2') U' M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U: [M', U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U' M2' U M' U2' M U M2'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
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
      "algdb": "pll/ub",
      "image": "EPLL-Ub",
      "prob": "4/12",
      "algs" :
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
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "U' z U2' R U R U' R' U' R' U' R U'",
              "desc": "One-handed execution is on the left",
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
              "desc": "Two-handed execution applies cancellations",
              "status": 0,
              "uses": ["2H"]
            },
            {
              "alg": "U z U' R U' R' U' R' U' R U R U2'",
              "desc": "One-handed execution is on the left",
              "status": 1,
              "uses": ["OH"]
            },
          ]
        },
        {
          "alg": "U M2 U' (M U2 M' U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U': [M, U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U M2' U' M U2' M' U' M2'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U' M2 U' (M' U2 M U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U': [M', U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U' M2' U' M' U2' M U' M2'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
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
      "algdb": "pll/z",
      "image": "EPLL-Z",
      "prob": "2/12",
      "algs" :
      [
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
        {
          "alg": "(M' U' M2' U' M2' U' M) (M2 U2' M2')",
          "desc": "Intuitive - Solve UF + UB then solve remaining edges",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "M' U' M2' U' M2' U' M' U2' M2'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U (M2 U' M2 U') (M' U2' M2 U2' M')",
          "desc": "Intuitive - Solve UL + UR then solve remaining edges",
          "status": 1,
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
      ]
    },
    {
      "id": "X",
      "name": "H-Perm / X-Perm",
      "desc": "Best known as H-Perm (i.e. swapping opposite edge pairs) this case is also known as X-Perm (i.e.  swapping diagonal corner pairs).",
      "wiki": "",
      "algdb": "pll/h",
      "image": "EPLL-H",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "(R2 U2' R U2' R2) U2' (R2 U2' R U2' R2)",
          "desc": "Note the Ortega / Varasano [OLL] algorithm (H case)",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "M2 U' (M2 U2 M2' U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] - [M2 U': [M2, U2]]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "M2' U' M2' U2' M2' U' M2'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
              "uses": ["2H"]
            },
          ]
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
      "algs" :
      [
        {
          "alg": "-",
          "desc": "",
          "status": 1,
          "uses": ["2H", "OH"]
        },
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
          "name": "Corner Orientation",
          "desc": "The [OCLL] cases are the [COLL] cases where the corners are correctly permuted and they can be solved using [RU] algorithms (AKA \"2-Gen\"). There is a 1/27 chance of skipping this step and going straight to [EPLL].",
          "wiki": "COLL",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OCLL"]
        },
        {
          "id": "edges",
          "name": "Edge Permutation",
          "desc": "The [EPLL] cases are solved using the standard [PLL] algorithms - choosing [RU] algorithms (AKA \"2-Gen\") to retain the spirit of [2GLL]. There is a 1/12 chance of skipping this step at the end of a solve.",
          "wiki": "EPLL",
          "cases": ["Ua", "Ub", "Z", "X", "EPLL"]
        },
      ]
    },
  ]
}
