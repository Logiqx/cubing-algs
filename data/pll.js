var algSet = {
  "header":
  {
    "id": "PLL",
    "name": "Permutation of the Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/PLL",
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
      "id": "Aa",
      "name": "Aa",
      "desc": "Inverse and reflection of Ab.",
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U] R2 (R F R' B2) (R F' R' B2') R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R F R', B2]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] l' U R' D2 R U' R' D2 R2 x'",
              "desc": "Actual execution incorporates a rotation and cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] x R' U R' D2 R U' R' D2 R2 x'",
              "desc": "Actual execution incorporates a rotation and cancellations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Ab",
      "name": "Ab",
      "desc": "Inverse and reflection of Aa.",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U2] R2 (B2 R F R') (B2' R F' R') R2",
          "desc": "A9 [commutator] / [conjugate] - [R2: [B2, R F R']]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] l' R' D2 R U R' D2 R U' R x'",
              "desc": "Actual execution incorporates a rotation and cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] x R2 D2 R U R' D2 R U' R x'",
              "desc": "Actual execution incorporates a rotation and cancellations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "E",
      "name": "E",
	  "desc": "The algorithm below was popularised by Rowe Hessler. It utilises the [OCLL] algorithms for L / Bowtie and T / Chameleon",
      "wiki": "#E_Permutation",
      "algdb": "E",
      "image": "PLL-E",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' D') x",
          "desc": "Combination of two basic [commutator]s - [R U' R', D] + [R, U R' D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(l U' R' D R U R' D') (R U R' D R U' R' D') x",
              "desc": "Actual execution incorporates a rotation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' u') [z']",
              "desc": "Actual execution incorporates a rotation",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "F",
      "name": "F",
      "wiki": "#F_Permutation",
      "algdb": "F",
      "image": "PLL-F",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R' U' F' (R U R' U' R' F R2 U' R' U' R U R' F') F U R",
          "desc": "[Conjugate] of T-Perm - [R' U' F': T-Perm]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
              "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "L R2 U R U R2 U' R' U' R2 U' R U2' L' U R'",
          "desc": "RUL algorithm",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "L R2 U R U R2 U' R' U' R2 U' R U2' z U' R u'",
              "desc": "Actual execution includes rotations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Ga",
      "name": "Ga",
      "desc": "Inverse of Gb. Reflection of Gc.",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R2 u R' U R' U' R u' R2 y' R' U R",
          "desc": "Standard algorithm",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "R2 u R' U R' U' R u' R2 y z U' R U",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Gb",
      "name": "Gb",
      "desc": "Inverse of Ga. Reflection of Gd.",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R' U' R y R2 u R' U R U' R u' R2",
          "desc": "Standard algorithm",
		  "status": 1,
          "uses": ["OH"],
		  "vars" :
		  [
			{
			  "alg": "[U'] F' U' F R2 u R' U R U' R u' R2",
              "desc": "Actual execution avoids the rotation",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Gc",
      "name": "Gc",
      "desc": "Inverse of Gd. Reflection of Ga.",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U2] R2' F2 R U2 R U2' R' F R U R' U' R' F R2",
          "desc": "RUF algorithm. Requires decent [TPS] to be fast",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "R2 u' R U' R U R' u R2 y R U' R'",
          "desc": "Standard algorithm",
		  "status": 1,
          "uses": ["OH"],
        },
      ]
    },
    {
      "id": "Gd",
      "name": "Gd",
      "desc": "Inverse of Gc. Reflection of Gb.",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U] R2' F' R U R U' R' F' R U2' R' U2 R' F2 R2",
          "desc": "RUF algorithm. Requires decent [TPS] to be fast",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "R U R' y' R2 u' R U' R' U R' u R2",
          "desc": "Standard algorithm",
		  "status": 1,
          "uses": ["OH"],
        },
      ]
    },
    {
      "id": "H",
      "name": "H / X",
      "desc": "Best known as the H-Perm (i.e. swapping opposite edge pairs) this case is also known as the X-Perm (i.e.  swapping diagonal corner pairs).",
      "wiki": "#H_Permutation",
      "algdb": "H",
      "image": "PLL-H",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "M2 U' (M2 U2 M2' U2') U M2'",
          "desc": "[Conjugate] of a simple [commutator] -  [M2 U': M2 U2 M2' U2']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "M2' U' M2' U2' M2' U' M2'",
			  "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "(R2 U2' R U2' R2) U2' (R2 U2' R U2' R2)",
          "desc": "Note the Ortega / Varasano OLL algorithm (H case) in brackets",
		  "status": 1,
          "uses": ["OH"],
        },
      ]
    },
    {
      "id": "Ja",
      "name": "Ja",
      "desc": "Reflection of Jb.",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U'] R' U L' U2 R U' R' U2 R L",
          "desc": "Playing with [F2L] pairs... track the BR + FL pairs",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "R' U2' R U R' U2' L U' R U L'",
          "desc": "Playing with [F2L] pairs... track the BR + BL pairs",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U2' R U R' U2' z U R' D R U'",
              "desc": "Actual execution includes a rotation",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Jb",
      "name": "Jb",
      "desc": "Reflection of Ja.",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R U R' F' (R U R' U' R' F R2 U' R' U' R U R' F') F R U' R'",
          "desc": "[Conjugate] of T-Perm - [R U R' F': T-Perm]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U R' F' R U R' U' R' F R2 U' R'",
              "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "R U2' R' U' R U2' L' U R' U' L",
          "desc": "Playing with F2L pairs... track the FR + FL pairs",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U2' R' U' R U2' z U' R D' R' U",
              "desc": "Actual execution includes a rotation",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Na",
      "name": "Na",
      "desc": "Reflection of Nb.",
      "wiki": "#N_Permutation_:_a",
      "algdb": "Na",
      "image": "PLL-Na",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "R U R' U (R U R' F' R U R' U' R' F R2 U' R' U’) U’ R U’ R’",
          "desc": "[Conjugate] of Jb-Perm - [R U R' U: Jb-Perm]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U R' U (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "(R' U L' U2' R U' L) (R' U L' U2' R U' L)",
          "desc": "Easy 7-move algorithm executed twice",
		  "status": 1,
          "uses": ["OH"],
        },
      ]
    },
    {
      "id": "Nb",
      "name": "Nb",
      "desc": "Reflection of Na.",
      "wiki": "#N_Permutation_:_b",
      "algdb": "Nb",
      "image": "PLL-Nb",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "R' U R U' R' F' U' F R U R' F R' F' R U' R",
          "desc": "RUF algorithm",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "(R U' L U2' R' U L') (R U' L U2' R' U L')",
          "desc": "Easy 7-move algorithm executed twice",
		  "status": 1,
          "uses": ["OH"],
        },
      ]
    },
    {
      "id": "Ra",
      "name": "Ra",
      "desc": "Reflection of Rb.",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R U R' F' R U2' R' U2 R' F R U R U2' R'",
          "desc": "RUF algorithm",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "R U' R' U' R U R D R' U' R D' R' U2' R'",
          "desc": "RUD algorithm",
		  "status": 1,
          "uses": ["OH"],
        },
      ]
    },
    {
      "id": "Rb",
      "name": "Rb",
      "desc": "Reflection of Ra.",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U'] R' U2 R U2' R' F R U R' U' R' F' R2",
          "desc": "RUF algorithm",
		  "status": 1,
          "uses": ["2H"],
		  "vars":
		  [
			{
			  "alg": "[U'] R' U2' R U2' R' F R U R' U' R' F' R2",
			  "desc": "RUD algorithm",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
        },
      ]
    },
    {
      "id": "T",
      "name": "T",
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "(R U R' U' R' F R F') (F R U' R' U' R U R' F')",
          "desc": "Combination of two simple [OLL]s - #33 + #37",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "R U R' U' R' F R2 U' R' U' R U R' F'",
			  "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["2H", "OH"],
			},
		  ]
        },
      ]
    },
    {
      "id": "Ua",
      "name": "Ua",
      "desc": "Inverse and reflection of Ub.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U] M2 U (M U2 M' U2') U' M2'",
          "desc": "[Conjugate] of a simple [commutator] -  [M2 U: M U2 M' U2']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U] M2' U M U2' M' U M2'",
			  "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "[U'] M2 U (M' U2 M U2') U' M2'",
          "desc": "[Conjugate] of a simple [commutator] -  [M2 U: M' U2 M U2']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U'] M2' U M' U2' M U M2'",
			  "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "[U] R U' (R U R U R U' R' U' R' U') U R'",
          "desc": "[Conjugate] of a [F2L] insertion - [R U': R U R U R U' R' U' R' U']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U] R U' R U R U R U' R' U' R2",
			  "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
        },
        {
          "alg": "[U'] R' U (U' R' U' R' U' R U R U R) U' R",
          "desc": "[Conjugate] of a [F2L] insertion - [R' U: U' R' U' R' U' R U R U R]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U'] R2 U' R' U' R U R U R U' R",
			  "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
        },
      ]
    },
    {
      "id": "Ub",
      "name": "Ub",
      "desc": "Inverse and reflection of Ua.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "[U] M2 U' (M U2 M' U2') U M2'",
          "desc": "[Conjugate] of a simple [commutator] -  [M2 U': M U2 M' U2']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U] M2' U' M U2' M' U' M2'",
			  "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "[U'] M2 U' (M' U2 M U2') U M2'",
          "desc": "[Conjugate] of a simple [commutator] -  [M2 U': M' U2 M U2']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U'] M2' U' M' U2' M U' M2'",
			  "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "[U] R U' (U R U R U R' U' R' U' R') U R'",
          "desc": "[Conjugate] of a [F2L] insertion - [R U': U R U R U R' U' R' U' R']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U] R2 U R U R' U' R' U' R' U R'",
			  "desc": "Actual execution includes cancellations",
			  "status": 0,
			  "uses": [],
			},
			{
			  "alg": "[U'] z U2' R U R U' R' U' R' U' R U' [z']",
			  "desc": "This execution is on the left and includes a rotation",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
		},
        {
          "alg": "[U'] R' U (R' U' R' U' R' U R U R U) U' R",
          "desc": "[Conjugate] of a [F2L] insertion - [R' U: R' U' R' U' R' U R U R U]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U'] R' U R' U' R' U' R' U R U R2",
			  "desc": "Actual execution includes cancellations",
			  "status": 0,
			  "uses": [],
			},
			{
			  "alg": "[U] z U' R U' R' U' R' U' R U R U2' [z']",
			  "desc": "This execution is on the left and includes a rotation",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
        },
      ]
    },
    {
      "id": "V",
      "name": "V",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R' U R' d' R' F' R2 U' R' U R' F R F",
          "desc": "Two-handed V-Perm incorporates a hidden rotation",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "R' U2' R U2' L U' R' U L' U L U' R U L'",
          "desc": "One-handed V-Perm",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "R' U2' R U2' L U' R' U z U' R U R' z' R U L'",
			  "desc": "Actual execution includes rotations",
			  "status": 1,
			  "uses": ["OH"],
			},
		  ]
        },
      ]
    },
    {
      "id": "Y",
      "name": "Y",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "(F R U' R' U' R U R' F') (R U R' U' R' F R F')",
          "desc": "Combination of two simple [OLL]s - #37 + #33",
		  "status": 1,
          "uses": ["2H"],
        },
        {
          "alg": "R2 U' R' U R U' x' U' z' U' R U' R' U' z U R",
          "desc": "One-handed Y-Perm",
		  "status": 1,
          "uses": ["OH"],
        },
      ]
    },
    {
      "id": "Z",
      "name": "Z",
      "wiki": "#Z_Permutation",
      "algdb": "Z",
      "image": "PLL-Z",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "(M' U' M2' U' M2' U' M) (M2 U2' M2')",
          "desc": "Intuitive - Solve UF + UB edges then solve M-slice",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "M' U' M2' U' M2' U' M' U2' M2'",
			  "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"],
			},
		  ]
        },
        {
          "alg": "[U] R' U' R U' R U R U' R' U R U R2 U' R'",
          "desc": "Playing with [F2L] pairs... track the BR + FR pairs",
		  "status": 1,
          "uses": ["OH"],
        },
        {
          "alg": "[U] (M2 U' M2 U') (M' U2' M2 U2' M')",
          "desc": "Intuitive - Solve UL + UR edges then solve M-slice",
		  "status": -1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "[U] M2' U' M2' U' M' U2' M2' U2' M'",
			  "desc": "Actual execution",
			  "status": -1,
			  "uses": ["2H"],
			},
		  ]
        },
      ]
    },
    {
      "id": "Skip",
      "name": "Permutation of the Last Layer",
      "wiki": "",
      "algdb": "",
      "image": "PLL",
      "prob": "1/72",
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
      "id": "letters",
      "name": "Letters",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "a",
          "name": "A-Perms",
          "cases": ["Aa", "Ab"]
        },
        {
          "id": "e",
          "name": "E-Perm",
          "cases": ["E"]
        },
        {
          "id": "f",
          "name": "F-Perm",
          "cases": ["F"]
        },
        {
          "id": "g",
          "name": "G-Perms",
          "cases": ["Ga", "Gb", "Gc", "Gd"]
        },
        {
          "id": "h",
          "name": "H-Perm",
          "cases": ["H"]
        },
        {
          "id": "j",
          "name": "J-Perms",
          "cases": ["Ja", "Jb"]
        },
        {
          "id": "n",
          "name": "N-Perms",
          "cases": ["Na", "Nb"]
        },
        {
          "id": "r",
          "name": "R-Perms",
          "cases": ["Ra", "Rb"]
        },
        {
          "id": "t",
          "name": "T-Perm",
          "cases": ["T"]
        },
        {
          "id": "u",
          "name": "U-Perms",
          "cases": ["Ua", "Ub"]
        },
        {
          "id": "v",
          "name": "V-Perm",
          "cases": ["V"]
        },
        {
          "id": "y",
          "name": "Y-Perm",
          "cases": ["Y"]
        },
        {
          "id": "z",
          "name": "Z-Perm",
          "cases": ["Z"]
        },
        {
          "id": "lucky",
          "name": "Lucky",
          "cases": ["Skip"]
        },
	  ]
    },
    {
      "id": "pieces",
      "name": "Pieces",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "edges",
          "name": "Edges Only",
		  "desc": "This group of cases is known as [EPLL]. Advanced [CFOP] users may try to force these cases using [COLL] or [OLLCP].",
          "wiki": "#Permutations_of_Edges_Only",
          "cases": ["Ua", "Ub", "Z", "H"]
        },
        {
          "id": "corners",
          "name": "Corners Only",
		  "desc": "This group of cases is known as [CPLL]. They are generally solved using [conjugate]s and [commutator]s.",
          "wiki": "#Permutations_of_Corners_Only",
          "cases": ["Aa", "Ab", "E"]
        },
        {
          "id": "both",
          "name": "Edges + Corners",
          "wiki": "#Permutations_of_Edges_and_Corners",
          "cases": ["Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "T", "F", "Y", "V", "Na", "Nb"]
        },
        {
          "id": "lucky",
          "name": "Lucky",
          "cases": ["Skip"]
        },
	  ]
    },
    {
      "id": "corners",
      "name": "Corners",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Corner Swap",
		  "desc": "This group of cases is known as [EPLL]. Advanced [CFOP] users may try to force these cases using [COLL] or [OLLCP].",
          "cases": ["Ua", "Ub", "Z", "H", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Corner Swap",
          "cases": ["Aa", "Ab", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "T", "F"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Corner Swap",
		  "desc": "Advanced [CFOP] users may try to avoid diagonal corner swaps using partial [OLLCP].",
          "cases": ["Y", "V", "E", "Na", "Nb"]
        },
	  ]
    },
    {
      "id": "edges",
      "name": "Edges",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Edge Swap",
		  "desc": "This group of cases is known as [CPLL]. They are generally solved using [conjugate]s and [commutator]s.",
          "cases": ["Aa", "Ab", "E", "H", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Edge Swap",
          "cases": ["Ua", "Ub", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "Y", "V"]
        },
        {
          "id": "opposite",
          "name": "Opposite Edge Swap",
          "cases": ["T", "F", "Z", "Na", "Nb"]
        },
	  ]
    },
    {
      "id": "grid",
      "name": "Grid",
      "headers": ["EPLL", "Adjacent", "Adjacent", "Adjacent", "Diagonal"],
      "rows":
      [
        {
          "id": "cpll",
          "name": "CPLL",
          "cases": ["Skip", "Aa", null, "Ab", "E"]
        },
        {
          "id": "various",
          "name": "Various",
          "cases": ["Ua", "Ga", "T", "Gb", "Y"]
        },
        {
          "id": "various",
          "name": "Various",
          "cases": ["Ub", "Gc", null, "Gd", "V"]
        },
        {
          "id": "various",
          "name": "Various",
          "cases": ["Z", "Ja", "F", "Ra", "Na"]
        },
        {
          "id": "various",
          "name": "Various",
          "cases": ["H", "Jb", null, "Rb", "Nb"]
        },
      ]
    },
  ]
}
