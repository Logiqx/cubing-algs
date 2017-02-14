var algSet = {
  "header":
  {
    "id": "2LELL",
    "name": "2-Look Edges of the Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/Set/OLL/",
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
      "name": "Clock",
      "desc": "This case is typically solved using the algorithm(s) for [OLL] 28.",
      "wiki": "",
      "algdb": "OLL 28",
      "image": "EOLL-28",
      "prob": "4/8",
      "algs" :
      [
        {
          "alg": "U' (M' U' M) U2' (M' U' M)",
          "desc": "Moo!",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "M' (R U R' U') M (U R U' R')",
          "desc": "Triggers - M-slice, [sexy], M-slice, [reverse-sexy]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(r U R' U') r' R (U R U' R')",
              "desc": "One-handed execution avoids the M move",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "Line",
      "name": "Line",
      "desc": "This case is typically solved using the algorithm for [OLL] 57.",
      "wiki": "",
      "algdb": "OLL 57",
      "image": "EOLL-57",
      "prob": "2/8",
      "algs" :
      [
        {
          "alg": "(R U R' U') M' (U R U' R') M",
          "desc": "Triggers - [sexy], M-slice, [reverse-sexy], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
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
      "id": "Dot",
      "name": "Dot",
      "desc": "This case is typically solved using the algorithm for [OLL] 20.",
      "wiki": "",
      "algdb": "OLL 20",
      "image": "EOLL-20",
      "prob": "1/8",
      "algs" :
      [
        {
          "alg": "M' (R U R' U') M2 (U R U' R') U' M'",
          "desc": "M-slice, [sexy], M-slice, [reverse-sexy], [AUF], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
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
        }
      ]
    },
    {
      "id": "EOLL",
      "name": "Edges Oriented",
      "wiki": "",
      "algdb": ".",
      "image": "EOLL",
      "prob": "1/8",
      "algs" :
      [
        {
          "alg": "Yay!",
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
      "algdb": "Ua",
      "image": "EPLL-Ua",
      "prob": "1/3",
      "algs" :
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
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
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
			  "status": 1,
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
			  "desc": "Two-handed execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "U R U' R U R U R U' R' U' R2",
			  "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
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
			  "uses": ["2H"]
			},
			{
			  "alg": "U' R2 U' R' U' R U R U R U' R",
			  "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
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
      "algdb": "Ub",
      "image": "EPLL-Ub",
      "prob": "1/3",
      "algs" :
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
			  "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
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
			  "status": 1,
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
			  "desc": "Two-handed execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "U' z U2' R U R U' R' U' R' U' R U'",
			  "desc": "One-handed execution is on the left",
			  "status": 1,
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
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "U R' U' R U' R U R U' R' U R U R2 U' R'",
          "desc": "Playing with [F2L] pairs - track BR + FR",
		  "status": 1,
          "uses": ["OH"]
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
      ]
    },
    {
      "id": "H",
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
          "desc": "[MU] [commutator] / [conjugate] - [M2 U': [M2, U2]]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "M2' U' M2' U2' M2' U' M2'",
			  "desc": "Two-handed execution applies a cancellation",
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
          "id": "orientation",
          "name": "Edge Orientation",
          "wiki": "EOLL",
          "desc": "These are the 3 [EOLL] cases. All of these cases can be solved using [OLL] algorithms which do not affect the corners.",
          "cases": ["Clock", "Line", "Dot", "EOLL"]
        },
        {
          "id": "permutation",
          "name": "Edge Permutation",
		  "desc": "This group of cases is known as [EPLL]. All of these cases can be solved using [RU] or [MU] algorithms.",
          "wiki": "2-Look_PLL",
          "cases": ["Ua", "Ub", "Z", "H", "EPLL"]
        },
      ]
    },
  ]
}
