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
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U l' U R' D2 R U' R' D2 R2 x' U2",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Ab",
      "name": "Ab",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U2 l' R' D2 R U R' D2 R U' R x' U'",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "E",
      "name": "E",
      "wiki": "#E_Permutation",
      "algdb": "E",
      "image": "PLL-E",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
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
          "alg": "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Ga",
      "name": "Ga",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R2 u R' U R' U' R u' R2 y' R' U R",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Gb",
      "name": "Gb",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R' U' R y R2 u R' U R U' R u' R2",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Gc",
      "name": "Gc",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R2 u' R U' R U R' u R2 y R U' R'",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Gd",
      "name": "Gd",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R U R' y' R2 u' R U' R' U R' u R2",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
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
          "alg": "M2 U M2 U2 M2 U M2",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Ja",
      "name": "Ja",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' R' U L' U2 R U' R' U2 R L",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Jb",
      "name": "Jb",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R U R' F' R U R' U' R' F R2 U' R' U'",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Na",
      "name": "Na",
      "wiki": "#N_Permutation_:_a",
      "algdb": "Na",
      "image": "PLL-Na",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "U2 R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Nb",
      "name": "Nb",
      "wiki": "#N_Permutation_:_b",
      "algdb": "Nb",
      "image": "PLL-Nb",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "U' R' U L' U2 R U' L R' U L' U2 R U' L",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Ra",
      "name": "Ra",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U R U2 R' U2 R B' R' U' R U R B R2",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Rb",
      "name": "Rb",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' R' U2 R U2 R' F R U R' U' R' F' R2",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
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
          "alg": "R U R' U' R' F R2 U' R' U' R U R' F'",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Ua",
      "name": "Ua",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R2 U S R2 S' R2 U' R2",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Ub",
      "name": "Ub",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R2' U R2' S R2' S' U' R2'",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
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
          "alg": "R' U R' d' R' F' R2 U' R' U R' F R F U'",
          "desc": "VODO",
		  "status": 1,
          "uses": ["2H", "OH"]
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
          "alg": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
          "desc": "TODO",
		  "status": 1,
          "uses": ["2H", "OH"]
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
          "alg": "U2 M2 U M2 U M' U2 M2 U2 M'",
          "desc": "ZODO",
		  "status": 1,
          "uses": ["2H", "OH"]
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