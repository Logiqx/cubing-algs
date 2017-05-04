var algSet = {
  "header":
  {
    "id": "PLL",
    "name": "Permutation of the Last Layer",
    "desc": "This page lists the [PLL] algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.",
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
      "name": "Aa-Perm",
      "desc": "Inverse and reflection of Ab. The algorithm(s) for this [PLL] case are good choices for an adjacent corner swap during [CPLL]. It is a clockwise 3-cycle of corners.",
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U x R2 (R U R' D2) (R U' R' D2) R2' x'",
          "desc": "A9 [commutator] / [conjugate] - [x R2: [R U R', D2]]",
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
        {
          "alg": "R U R' F' r U R' U' r' F R2 U' R'",
          "desc": "Modified Jb-Perm potentially good for big cubes",
		  "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "Ab",
      "name": "Ab-Perm",
      "desc": "Inverse and reflection of Aa. The algorithm(s) for this [PLL] case are good choices for an adjacent corner swap during [CPLL]. It is a counter-clockwise 3-cycle of corners.",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U2 x R2 (D2 R U R') (D2 R U' R') R2 x'",
          "desc": "A9 [commutator] / [conjugate] - [x R2: [D2, R U R']]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 l' R' D2 R U R' D2 R U' R x'",
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 x R2 D2 R U R' D2 R U' R x'",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "E",
      "name": "E-Perm",
	  "desc": "The algorithm below was popularised by Rowe Hessler. It utilises [OCLL] / [COLL] algorithms for L / Bowtie and T / Chameleon. The algorithm(s) for this [PLL] case are good choices for a diagonal corner swap during [CPLL].",
      "wiki": "#E_Permutation",
      "algdb": "E",
      "image": "PLL-E",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' D') x",
          "desc": "[Commutator] combination - [R U' R', D] [R, U R' D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(l U' R' D R U R' D') (R U R' D R U' R' D') x",
              "desc": "Two-handed execution starts with a wide turn",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' u')",
              "desc": "One-handed execution ends with a wide turn",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "U R (R U R' U') y (R U R' U') (R U R' U') (R U R') y' (R U' R') R'",
          "desc": "Long algorithm but decent for [OH]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U (R2 U R' U') y (R U R' U') (R U R' U') (R U R') y' (R U' R2')",
              "desc": "Two-handed execution incorporates cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "U (R2 U R' U') y (R U R' U') (R U R' U') (R U R') y' (R U' R2)",
              "desc": "One-handed execution incorporates cancellations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "z U2 R2' F (R U R' U') (R U R' U') (R U R' U') F' R2 U2'",
          "desc": "Long algorithm but decent for big cubes",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "z U2' R2 F (R U R' U') (R U R' U') (R U R' U') F' R2 U2'",
              "desc": "One-handed execution",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "F",
      "name": "F-Perm",
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
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "L R2 U R U R2 U' R' U' R2 U' R U2' L' U R'",
          "desc": "[RUL] algorithm",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "L R2 U R U R2 U' R' U' R2 U' R U2' z U' R u'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Ga",
      "name": "Ga-Perm",
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
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Gb",
      "name": "Gb-Perm",
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
			  "alg": "U' F' U' F R2 u R' U R U' R u' R2",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Gc",
      "name": "Gc-Perm",
      "desc": "Inverse of Gd. Reflection of Ga.",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U2 R2' F2 R U2 R U2' R' F R U R' U' R' F R2",
          "desc": "[RUF] algorithm. Requires decent [TPS] to be fast",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R2 u' R U' R U R' u R2 y R U' R'",
          "desc": "Standard algorithm",
		  "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "Gd",
      "name": "Gd-Perm",
      "desc": "Inverse of Gc. Reflection of Gb.<br/><br/>Check out the similarity between the Gd-Perm algorithm R2' F' (R U R U') (R' F' R U2' R' U2 R' F) F R2 and the Ra-Perm algorithm R U (R' F' R U2' R' U2 R' F) (R U R U') U' R'.",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U R2' F' R U R U' R' F' R U2' R' U2 R' F2 R2",
          "desc": "[RUF] algorithm. Requires decent [TPS] to be fast",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R U R' y' R2 u' R U' R' U R' u R2",
          "desc": "Standard algorithm",
		  "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "H",
      "name": "H-Perm / X-Perm",
      "desc": "Best known as H-Perm (i.e. swapping opposite edge pairs) this case is also known as X-Perm (i.e.  swapping diagonal corner pairs).",
      "wiki": "#H_Permutation",
      "algdb": "H",
      "image": "PLL-H",
      "prob": "1/72",
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
      "id": "Ja",
      "name": "Ja-Perm",
      "desc": "Reflection of Jb. This case is also known as the L-Perm.",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' (R' U L' U2' R U' L) (L' R' U2 R L)",
          "desc": "Playing with [F2L] pairs - track BR + FL. Similar to Na",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' R' U L' U2 R U' R' U2 R L",
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "(R' U2' R U R' U R) (R' U L U' R U L')",
          "desc": "[COLL] combination - [RBAS], [RBN]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U2' R U R' U2' L U' R U L'",
              "desc": "Two-handed execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U2' R U R' U2' L U' R U L'",
              "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Jb",
      "name": "Jb-Perm",
      "desc": "Reflection of Ja. The algorithm(s) for this [PLL] case are good choices for an adjacent corner swap during [CPLL].",
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
              "desc": "Two-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "[COLL] combination - [RFAS], [RFN]",
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
			  "alg": "R U2' R' U' R U2' L' U R' U' L",
              "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Na",
      "name": "Na-Perm",
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
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "(R U' L U2' R' U L') (R U' L U2' R' U L')",
          "desc": "Playing with [F2L] pairs - track FR + BL",
		  "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "Nb",
      "name": "Nb-Perm",
      "desc": "Reflection of Na.",
      "wiki": "#N_Permutation_:_b",
      "algdb": "Nb",
      "image": "PLL-Nb",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "R' U R U' R' F' U' F R U R' F R' F' R U' R",
          "desc": "Playing with [F2L] pair - track BR corner",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(R' U L' U2' R U' L) (R' U L' U2' R U' L)",
          "desc": "Playing with [F2L] pairs - track BR + FL",
		  "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "Ra",
      "name": "Ra-Perm",
      "desc": "Reflection of Rb.<br/><br/>Check out the similarity between the Ra-Perm algorithm R U (R' F' R U2' R' U2 R' F) (R U R U') U' R' and the Gd-Perm algorithm R2' F' (R U R U') (R' F' R U2' R' U2 R' F) F R2.",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R U R' F' R U2' R' U2 R' F R U R U2' R'",
          "desc": "[RUF] algorithm. Decent for big cubes.",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R U' R' U' R (U R D R' U' R D' R') U2' R'",
          "desc": "Contains an 8-move [commutator] - [U, R D R']",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "R U' R' U' R U R D R' U' R D' R' U2 R'",
			  "desc": "Two-handed execution",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U' R' U' R U R D R' U' R D' R' U2' R'",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Rb",
      "name": "Rb-Perm",
      "desc": "Reflection of Ra.",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' R' U2 R U2' R' F R U R' U' R' F' R2",
          "desc": "Playing with [F2L] pairs - track BR + FL",
		  "status": 1,
          "uses": ["2H"],
		  "vars":
		  [
			{
			  "alg": "U' R' U2' R U2' R' F R U R' U' R' F' R2",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "U' R' U2 (R' D' R U' R' D R U) R U' R' U' R",
          "desc": "Contains an 8-move [commutator] - [R' D R, U]",
		  "status": 0,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "U' R' U2 R' D' R U' R' D R U R U' R' U' R",
			  "desc": "Two-handed execution",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "U' R' U2' R' D' R U' R' D R U R U' R' U' R",
			  "desc": "One-handed execution",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "T",
      "name": "T-Perm",
      "desc": "Check out the similarity between the T-Perm algorithm (R U R' U' R' F R F') (F R U' R' U' R U R' F') and the Y-Perm algorithm (F R U' R' U' R U R' F') (R U R' U' R' F R F').",
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "(R U R' U' R' F R F') (F R U' R' U' R U R' F')",
          "desc": "[OLL] combination - [sexy-sledge], [mounted-fish]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "R U R' U' R' F R2 U' R' U' R U R' F'",
			  "desc": "Execution applies cancellations",
			  "status": 1,
			  "uses": ["2H", "OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Ua",
      "name": "Ua-Perm",
      "desc": "Inverse and reflection of Ub. It is a counter-clockwise 3-cycle of edges.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua",
      "prob": "1/18",
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
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Ub",
      "name": "Ub-Perm",
      "desc": "Inverse and reflection of Ua. It is a clockwise 3-cycle of edges.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub",
      "prob": "1/18",
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
			  "alg": "U R2' U R U R' U' R' U' R' U R'",
			  "desc": "Two-handed execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "U R2' U R U R' U' R3 U' R' U R'",
			  "desc": "Two-handed execution incorporating an R3",
			  "status": 0,
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
      ]
    },
    {
      "id": "V",
      "name": "V-Perm",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R' U R' d' R' F' R2 U' R' U R' F R F",
          "desc": "Two-handed algorithm includes a hidden rotation",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R' U2' R U2' L U' R' U L' U L U' R U L'",
          "desc": "Playing with [F2L] pairs - track BR + BL",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "R' U2' R U2' L U' R' U z U' R U R' z' R U L'",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "Y",
      "name": "Y-Perm",
      "desc": "The algorithm(s) for this [PLL] case are good choices for a diagonal corner swap during [CPLL].<br/><br/>Check out the similarity between the Y-Perm algorithm (F R U' R' U' R U R' F') (R U R' U' R' F R F') and the T-Perm algorithm (R U R' U' R' F R F') (F R U' R' U' R U R' F').",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "(F R U' R' U' R U R' F') (R U R' U' R' F R F')",
          "desc": "[OLL] combination - [mounted-fish], [sexy-sledge]",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R2 U' R' U R U' x' U' z' U' R U' R' U' z U R",
          "desc": "One-handed algorithm is fast despite the rotations",
		  "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "Z",
      "name": "Z-Perm",
      "wiki": "#Z_Permutation",
      "algdb": "Z",
      "image": "PLL-Z",
      "prob": "1/36",
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
          "uses": ["OH"]
        },
        {
          "alg": "R U R' U R' U' R' U R U' R' U' R2 U R",
          "desc": "Playing with [F2L] pairs - track FR + BR",
		  "status": 0,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "Skip",
      "name": "PLL Skip",
      "wiki": "",
      "algdb": "",
      "image": "PLL",
      "prob": "1/72",
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
      "id": "letters",
      "name": "Letters",
      "desc": "The \"letters\" view simply lists all of the cases according to their name.",
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
      "desc": "The \"pieces\" view groups cases based on the type of pieces that they permute; i.e. edges and / or corners.",
      "groups":
      [
        {
          "id": "edges",
          "name": "Edges Only",
          "desc": "This group of cases is known as [EPLL]. Advanced [CFOP] users may try to force these cases using [COLL] or [OLLCP]. All of these cases can be solved using [RU] or [MU] algorithms.",
          "wiki": "#Permutations_of_Edges_Only",
          "cases": ["Ua", "Ub", "Z", "H"]
        },
        {
          "id": "corners",
          "name": "Corners Only",
          "desc": "This group of cases is known as [CPLL]. They are generally solved using [commutator]s and [conjugate]s.",
          "wiki": "#Permutations_of_Corners_Only",
          "cases": ["Aa", "Ab", "E"]
        },
        {
          "id": "both",
          "name": "Edges + Corners",
          "wiki": "#Permutations_of_Edges_and_Corners",
          "cases": ["F", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "T", "V", "Y", "Na", "Nb"]
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
      "desc": "The \"corners\" view groups cases based on the corner permutation; i.e. no swap, adjacent swap or diagonal swap.",
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Corner Swap",
          "desc": "This group of cases is known as [EPLL]. Advanced [CFOP] users may try to force these cases using [COLL] or [OLLCP]. All of these cases can be solved using [RU] or [MU] algorithms.",
          "cases": ["Ua", "Ub", "Z", "H", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Corner Swap",
          "cases": ["Aa", "Ab", "F", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "T"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Corner Swap",
          "desc": "Advanced [CFOP] users may try to avoid theses cases using [COLL] or [OLLCP].",
          "cases": ["V", "Y", "E", "Na", "Nb"]
        },
	  ]
    },
    {
      "id": "edges",
      "name": "Edges",
      "desc": "The \"edges\" view groups cases based on the edge permutation; i.e. no swap, adjacent swap or opposite swap.",
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Edge Swap",
          "desc": "This group of cases is known as [CPLL]. They are generally solved using [commutator]s and [conjugate]s.",
          "cases": ["Aa", "Ab", "E", "H", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Edge Swap",
          "cases": ["Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "Ua", "Ub", "V", "Y"]
        },
        {
          "id": "opposite",
          "name": "Opposite Edge Swap",
          "cases": ["F", "T", "Z", "Na", "Nb"]
        },
	  ]
    },
    {
      "id": "grid",
      "name": "Grid",
      "desc": "The \"grid\" view arranges all of the cases by corner permutation (columns) and edge permutation (rows).<br/><br/><strong>Note:</strong> This grid is not quite so interesting as the grids for 2-sided [PLL] recognition, [COLL] or [OLL] as this one is quite sparse.",
      "headers": ["Corners<br/>Solved<br/>(EPLL)", "Adjacent<br/>Corner<br/>Swap", "Adjacent<br/>Corner<br/>Swap", "Adjacent<br/>Corner<br/>Swap", "Adjacent<br/>Corner<br/>Swap", "Diagonal<br/>Corner<br/>Swap"],
      "rows":
      [
        {
          "id": "cpll",
          "name": "Edges<br/>Solved<br/>(CPLL)",
          "cases": ["Skip", null, null, null, null, null]
        },
        {
          "id": "cpll",
          "name": "Edges<br/>Solved<br/>(CPLL)",
          "cases": ["H", null, "Aa", "Ab", null, "E"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge<br/>Swap",
          "cases": ["Ua", "Ja", "Jb", "Ra", "Rb", "Y"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge<br/>Swap",
          "cases": ["Ub", "Ga", "Gb", "Gc", "Gd", "V"]
        },
        {
          "id": "oes",
          "name": "Opposite<br/>Edge<br/>Swap",
          "cases": ["Z", null, "T", "F", null, "Na"]
        },
        {
          "id": "oes",
          "name": "Opposite<br/>Edge<br/>Swap",
          "cases": [null, null, null, null, null, "Nb"]
        },
      ]
    },
  ]
}
