var algSet = {
  "header":
  {
    "id": "2APLL",
    "name": "2-Algorithm Permutation of the Last Layer",
    "level": "Beginner",
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
      "desc": "This case is solved using Anti-[Sune] and [Niklas], essentially a [PLL] algorithm for Jb-Perm.",
      "wiki": "",
      "algdb": "Jb",
      "image": "CPLL-A",
      "prob": "4/6",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "Jb-Perm - [RFAS], [RFN]",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Diag",
      "name": "Diagonal Corner Swap",
      "desc": "This case is solved using the Jb-Perm algorithm (adjacent corner swap), executed twice.",
      "wiki": "",
      "algdb": "Y",
      "image": "CPLL-O",
      "prob": "1/6",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L) ...<br/>U2 (R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "[PLL] combination - Jb-Perm, [AUF], Jb-Perm",
		  "status": 1,
          "uses": ["2H"]
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
      "prob": "4/12",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') U (L' U2 L U L' U L) ...<br/>U' (R U2 R' U' R U' R') U (L' U2 L U L' U L)",
          "desc": "[EPLL] combination - Ub-Perm, [AUF], Ub-Perm",
		  "status": 1,
          "uses": ["2H"]
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
      "prob": "4/12",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') U (L' U2 L U L' U L)",
          "desc": "[Sune] combination - [RFAS], [AUF], [LFAS]",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Z",
      "name": "Z-Perm",
      "wiki": "",
      "algdb": "Z",
      "image": "EPLL-Z",
      "prob": "2/12",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') U (L' U2 L U L' U L) ...<br/>(R U2 R' U' R U' R') U (L' U2 L U L' U L)",
          "desc": "[EPLL] combination - Ub-Perm, Ub-Perm",
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
      "algdb": "H",
      "image": "EPLL-H",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') U (L' U2 L U L' U L) ...<br/>U2 (R U2 R' U' R U' R') U (L' U2 L U L' U L)",
          "desc": "[EPLL] combination - Ub-Perm, [AUF], Ub-Perm",
		  "status": 1,
          "uses": ["2H"]
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
		  "desc": "The 2 [CPLL] cases are solved using 1 [RUL] algorithm made from 2 shorter algorithms - [RFAS] (R U2 R' U' R U' R') + [RFN] (R U' L' U R' U' L).",
          "wiki": "2-Look_PLL",
          "cases": ["Adj", "Diag", "CPLL"]
        },
        {
          "id": "edges",
          "name": "Edge Permutation",
		  "desc": "The 4 [EPLL] cases are solved using 1 [RUL] algorithm made from 2 shorter algorithms - [RFAS] (R U2 R' U' R U' R') + [LFAS] (L' U2 L U L' U L).",
          "wiki": "2-Look_PLL",
          "cases": ["Ua", "Ub", "Z", "H", "EPLL"]
        },
      ]
    },
  ]
}
