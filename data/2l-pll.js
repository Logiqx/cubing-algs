var algSet = {
  "header":
  {
    "id": "2L-PLL",
    "name": "2-Look Permutation of the Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/Set/PLL/",
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
      "id": "Adj",
      "name": "Adjacent Corner Swap",
      "desc": "This case is typically solved using the [PLL] algorithms for T-Perm, J-Perm or A-Perm.",
      "wiki": "",
      "algdb": "Jb",
      "image": "CPLL-A",
      "prob": "2/3",
      "algs" :
      [
        {
          "alg": "(R U R' U' R' F R F') (F R U' R' U' R U R' F')",
          "desc": "T-Perm - [OLL] combination - [sexy-sledge], [mounted-fish]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "R U R' U' R' F R2 U' R' U' R U R' F'",
			  "desc": "Execution applies cancellations",
			  "status": 1,
			  "uses": [],
			},
		  ]
        },
        {
          "alg": "R U R' F' (R U R' U' R' F R2 U' R' U' R U R' F') F R U' R'",
          "desc": "J-Perm - [Conjugate] of T-Perm - [R U R' F': T-Perm]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U R' F' R U R' U' R' F R2 U' R'",
              "desc": "Two-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "J-Perm - [COLL] combination - [RFAS], [RFN]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U2 R' U' R U2 L' U R' U' L",
              "desc": "Two-handed execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R' U' R U2' z U' R D' R' U",
              "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "U R2 (R F R' B2) (R F' R' B2') R2'",
          "desc": "A-Perm - A9 [commutator] / [conjugate] - [R2: [R F R', B2]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U l' U R' D2 R U' R' D2 R2 x'",
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U x R' U R' D2 R U' R' D2 R2 x'",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Diag",
      "name": "Diagonal Corner Swap",
      "desc": "This case is typically solved using the [PLL] algorithms for Y-Perm or E-Perm.",
      "wiki": "",
      "algdb": "Y",
      "image": "CPLL-O",
      "prob": "1/6",
      "algs" :
      [
        {
          "alg": "(F R U' R' U' R U R' F') (R U R' U' R' F R F')",
          "desc": "Y-Perm - [OLL] combination - [mounted-fish], [sexy-sledge]",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "R2 U' R' U R U' x' U' z' U' R U' R' U' z U R",
          "desc": "Y-Perm - One-handed algorithm",
		  "status": 1,
          "uses": ["OH"],
        },
        {
          "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' D') x",
          "desc": "E-Perm - [Commutator] combination - [R U' R', D] [R, U R' D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(l U' R' D R U R' D') (R U R' D R U' R' D') x",
              "desc": "Two-handed execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' u')",
              "desc": "One-handed execution incorporates wide turns",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "CPLL",
      "name": "Corners Permuted",
      "wiki": "",
      "algdb": ".",
      "image": "CPLL",
      "prob": "1/6",
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
      "name": "U-Perm",
      "desc": "Inverse and reflection of Ub.",
      "wiki": "",
      "algdb": "Ua",
      "image": "EPLL-Ua",
      "prob": "1/3",
      "algs" :
      [
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
			  "status": 1,
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
			  "status": 1,
			  "uses": ["2H"],
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
			  "desc": "Two-handed execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"],
			},
			{
			  "alg": "U R U' R U R U R U' R' U' R2",
			  "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"],
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
			  "desc": "Two-handed execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"],
			},
			{
			  "alg": "U' R2 U' R' U' R U R U R U' R",
			  "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
        },
      ]
    },
    {
      "id": "Ub",
      "name": "U-Perm",
      "desc": "Inverse and reflection of Ua.",
      "wiki": "",
      "algdb": "Ub",
      "image": "EPLL-Ub",
      "prob": "1/3",
      "algs" :
      [
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
			  "status": 1,
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
			  "status": 1,
			  "uses": ["2H"],
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
			  "desc": "Two-handed execution applies cancellations",
			  "status": 0,
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
			  "status": 0,
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
      ]
    },
    {
      "id": "Z",
      "name": "Z-Perm",
      "wiki": "",
      "algdb": "Z",
      "image": "EPLL-Z",
      "prob": "1/6",
      "algs" :
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
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "U R' U' R U' R U R U' R' U R U R2 U' R'",
          "desc": "Playing with [F2L] pairs - track BR + FR",
		  "status": 1,
          "uses": ["OH"],
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
      "id": "HX",
      "name": "H-Perm / X-Perm",
      "desc": "Best known as H-Perm (i.e. swapping opposite edge pairs) this case is also known as X-Perm (i.e.  swapping diagonal corner pairs).",
      "wiki": "",
      "algdb": "H",
      "image": "EPLL-H",
      "prob": "1/12",
      "algs" :
      [
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
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "(R2 U2' R U2' R2) U2' (R2 U2' R U2' R2)",
          "desc": "Note the Ortega / Varasano [OLL] algorithm (H case)",
		  "status": 1,
          "uses": ["OH"],
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
          "name": "Corner Permutation",
		  "desc": "This group of cases is known as [CPLL]. They are solved using the fastest [PLL] algorithms with the desired effect.",
          "wiki": "2-Look_PLL",
          "cases": ["Adj", "Diag", "CPLL"]
        },
        {
          "id": "edges",
          "name": "Edge Permutation",
		  "desc": "This group of cases is known as [EPLL]. All of these cases can be solved using [MU] or [RU] algorithms.",
          "wiki": "2-Look_PLL",
          "cases": ["Ua", "Ub", "Z", "HX", "EPLL"]
        },
      ]
    },
  ]
}
