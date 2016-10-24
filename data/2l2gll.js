var algSet = {
  "header":
  {
    "id": "2L2GLL",
    "name": "2-Look 2-Generator Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/Set/",
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
      "name": "Anti-Sune",
      "wiki": "",
      "algdb": "COLL AS/B1",
      "image": "OCLL-AS",
      "prob": "4/27",
      "algs" :
      [
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
        }
      ]
    },
    {
      "id": "S",
      "name": "Sune",
      "wiki": "",
      "algdb": "COLL S/C1",
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
      "algdb": "COLL L/D1",
      "image": "OCLL-L",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U' R U2 R' U' (R U R' U') (R U R' U') R U' R'",
          "desc": "[SuneOLL]/[2GLL]: Triple [RFAS]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "U' R U2' R' U' (R U R' U') (R U R' U') R U' R'",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "U2 R' U' R (U' R' U R) (U' R' U R) U' R' U2 R",
          "desc": "[SuneOLL]/[2GLL]: Triple [RBS]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "U2 R' U' R (U' R' U R) (U' R' U R) U' R' U2' R",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "U",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "COLL U/E1",
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
      "algdb": "COLL T/F1",
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
      "algdb": "COLL PI/G1",
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
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "COLL H/H1",
      "image": "OCLL-H",
      "prob": "2/27",
      "algs" :
      [
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
      ]
    },
    {
      "id": "OCLL",
      "name": "Corners Oriented",
      "wiki": "",
      "algdb": "..",
      "image": "OCLL",
      "prob": "1/27",
      "algs" :
      [
        {
          "alg": "Yay!",
          "desc": "",
		  "status": 1,
          "uses": ["OH", "2H"]
        },
      ]
    },
    {
      "id": "Ua",
      "name": "Ua-Perm",
      "desc": "Inverse and reflection of Ub.",
      "wiki": "",
      "algdb": "PLL/Ua",
      "image": "EPLL-Ua",
      "prob": "1/3",
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
			  "uses": ["2H", "OH"],
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
			  "status": 1,
			  "uses": ["2H", "OH"],
			},
		  ]
        },
        {
          "alg": "U M2 U (M U2 M' U2') U' M2'",
          "desc": "[MU] [commutator] / [conjugate] -  [M2 U: [M, U2]]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "U M2' U M U2' M' U M2'",
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "U' M2 U (M' U2 M U2') U' M2'",
          "desc": "[MU] [commutator] / [conjugate] -  [M2 U: [M', U2]]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "U' M2' U M' U2' M U M2'",
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"],
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
      "algdb": "PLL/Ub",
      "image": "EPLL-Ub",
      "prob": "1/3",
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
			  "uses": ["2H"],
			},
			{
			  "alg": "U' z U2' R U R U' R' U' R' U' R U'",
			  "desc": "One-handed execution is on the left",
			  "status": 1,
			  "uses": ["OH"],
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
			  "status": 1,
			  "uses": ["2H"],
			},
			{
			  "alg": "U z U' R U' R' U' R' U' R U R U2'",
			  "desc": "One-handed execution is on the left",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
        },
        {
          "alg": "U M2 U' (M U2 M' U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] -  [M2 U': [M, U2]]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "U M2' U' M U2' M' U' M2'",
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "U' M2 U' (M' U2 M U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] -  [M2 U': [M', U2]]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "U' M2' U' M' U2' M U' M2'",
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"],
			},
		  ]
        },
      ]
    },
    {
      "id": "Z",
      "name": "Z-Perm",
      "wiki": "",
      "algdb": "PLL/Z",
      "image": "EPLL-Z",
      "prob": "1/6",
      "algs" :
      [
        {
          "alg": "U R' U' R U' R U R U' R' U R U R2 U' R'",
          "desc": "Playing with [F2L] pairs - track BR + FR",
		  "status": 1,
          "uses": ["2H", "OH"],
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
			  "uses": ["2H"],
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
			  "uses": ["2H"],
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
      "algdb": "PLL/H",
      "image": "EPLL-H",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "(R2 U2' R U2' R2) U2' (R2 U2' R U2' R2)",
          "desc": "Note the Ortega / Varasano [OLL] algorithm (H case)",
		  "status": 1,
          "uses": ["2H", "OH"],
        },
        {
          "alg": "M2 U' (M2 U2 M2' U2') U M2'",
          "desc": "[MU] [commutator] / [conjugate] -  [M2 U': [M2, U2]]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "M2' U' M2' U2' M2' U' M2'",
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"],
			},
		  ]
        },
      ]
    },
    {
      "id": "EPLL",
      "name": "Edges Permuted",
      "wiki": "",
      "algdb": "PLL",
      "image": "EPLL",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "Yay!",
          "desc": "",
		  "status": 1,
          "uses": ["OH", "2H"]
        },
      ]
    },
  ],
  "views":
  [
    {
      "id": "steps",
      "name": "Steps",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "corners",
          "name": "Corner Orientation",
		  "desc": "These are the 7 [COLL] cases where corner swaps are not required. All of these cases can be solved using [RU] algorithms.",
          "wiki": "COLL",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OCLL"]
        },
        {
          "id": "edges",
          "name": "Edge Permutation",
		  "desc": "This group of cases is known as [EPLL]. All of these cases can be solved using [RU] or [MU] algorithms. The [RU] algorithms are most in the spirit of [2GLL].",
          "wiki": "EPLL",
          "cases": ["Ua", "Ub", "Z", "X", "EPLL"]
        },
      ]
    },
  ]
}