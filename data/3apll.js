var algSet = {
  "header":
  {
    "id": "3APLL",
    "name": "3-Algorithm Permutation of the Last Layer",
    "level": "Improver",
    "css": "2LPLL",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/Set/PLL/",
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
      "desc": "This case is solved using Anti-[Sune] and [Niklas]. Cancellations result in a decent [PLL] algorithm for Jb-Perm.",
      "wiki": "",
      "algdb": "Jb",
      "image": "CPLL-A",
      "prob": "2/3",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "Jb-Perm - [RFAS], [RFN]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(R U2 R' U' R) U2 (L' U R' U' L)",
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
      "desc": "This case is solved using the adjacent corner swap algorithm, executed twice.",
      "wiki": "",
      "algdb": "Y",
      "image": "CPLL-O",
      "prob": "1/6",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L) U2 +<br/>(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "[PLL] combination - Jb-Perm, [AUF], Jb-Perm",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(R U2 R' U' R) U2 (L' U R' U' L) U2 +<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(R U2 R' U' R) U2 (L' U R' U' L)",
              "desc": "Optimal execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
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
      "algdb": "Ub",
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
			  "desc": "Execution applies cancellations",
			  "status": 1,
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
      "algdb": "Z",
      "image": "EPLL-Z",
      "prob": "1/6",
      "algs" :
      [
        {
          "alg": "R U' R U R U R U' R' U' R2 U' +<br/>R U' R U R U R U' R' U' R2",
          "desc": "[EPLL] combination - Ua-Perm, [AUF], Ua-Perm",
		  "status": 1,
          "uses": ["2H"],
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
          "alg": "R U' R U R U R U' R' U' R2 U +<br/>R U' R U R U R U' R' U' R2",
          "desc": "[EPLL] combination - Ua-Perm, [AUF], Ua-Perm",
		  "status": 1,
          "uses": ["2H"],
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
          "id": "corners",
          "name": "Corner Permutation",
		  "desc": "The 2 [CPLL] cases are solved using 1 [RUL] algorithm made from 2 shorter algorithms, applying cancellations - [RFAS] (R U2 R' U' R U' R') + [RFN] (R U' L' U R' U' L).",
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
