var algSet = {
  "header":
  {
    "id": "2LCLL",
    "name": "2-Look Corners of the Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/Set/CLL/",
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
      "algdb": "OLL 26",
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
      "algdb": "OLL 27",
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
        }
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "wiki": "",
      "algdb": "OLL 25",
      "image": "OCLL-L",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(F' L F R') (F' L' F R)",
          "desc": "Basic [commutator] - [F' L F, R']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "F' (r U R' U') r' F R",
              "desc": "Two-handed execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "F' (r U R' U') z U' R u",
              "desc": "One-handed execution incorporates wide turns",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "U2 x' (R U' R' D) (R U R' D') x",
          "desc": "First half of E-Perm. Basic [commutator] - [R U' R', D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 (l U' R' D) (R U R' D') x",
              "desc": "Two-handed execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 x' (R U' R' D) (R U R' u') [z']",
              "desc": "One-handed execution incorporates wide turns",
			  "status": 0,
			  "uses": ["OH"]
			},
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
			  "status": 0,
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
			  "status": 0,
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
          "alg": "U2 R2 (R U2 R' D') (R U2 R' D) R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R U2 R', D']]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 R' U2 R' D' R U2 R' D R2",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 R' U2' R' D' R U2' R' D R2",
              "desc": "One-handed execution applies a cancellation",
              "status": 0,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "U' R2 (R' U2 R D) (R' U2 R D') R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R' U2 R, D]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' R U2 R D R' U2 R D' R2'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "U' R U2' R D R' U2' R D' R2",
              "desc": "One-handed execution applies a cancellation",
              "status": 0,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "U",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "OLL 23",
      "image": "OCLL-U",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "R2 (D' R U2 R') (D R U2 R') R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [D', R U2 R']]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R2' D' R U2 R' D R U2 R",
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R2 D' R U2' R' D R U2' R",
              "desc": "One-handed execution applies a cancellation",
			  "status": 0,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "U2 R2 (D R' U2 R) (D' R' U2 R) R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [D, R' U2 R]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 R2 D R' U2 R D' R' U2 R'",
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 R2 D R' U2' R D' R' U2' R'",
              "desc": "One-handed execution applies a cancellation",
              "status": 0,
			  "uses": ["OH"]
			}
		  ]
        },
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
			  "status": 0,
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
			  "alg": "U2 R U R' U R U2' R2' U' R U' R' U2 R",
              "desc": "Two-handed execution applies a cancellation",
			  "status": 0,
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
      "algdb": "OLL 24",
      "image": "OCLL-T",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U' (L F R' F') (L' F R F')",
          "desc": "Basic [commutator] - [L, F R' F']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' (r U R' U') (r' F R F')",
              "desc": "Two-handed - wide [sexy], wide [sledgehammer]",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U' (r U R' U') z (U' R u F') [z']",
              "desc": "One-handed execution incorporates wide turns",
			  "status": 0,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "U2 x' (R U R' D) (R U' R' D') x",
          "desc": "Second half of E-Perm. Basic [commutator] - [R, U R' D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 (l U R' D) (R U' R' u') [z']",
              "desc": "Two-handed execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 x' (R U R' D) (R U' R' u') [z']",
              "desc": "One-handed execution incorporates wide turns",
			  "status": 0,
			  "uses": ["OH"]
			}
		  ]
		},
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
			  "status": 0,
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
			  "status": 0,
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
      "algdb": "OLL 22",
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
        {
          "alg": "(R U2 R' U' R U' R') U' (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: Anti-Sune, [AUF], Anti-Sune",
		  "status": -1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "(R U2' R' U' R U' R') U' (R U2' R' U' R U' R')",
              "desc": "One-handed execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "f (R U R' U') f' F (R U R' U') F'",
          "desc": "[EOLL] combination - f [sexy] f', F [sexy] F'",
		  "status": -1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "f (R U R' U') S' (R U R' U') F'",
              "desc": "Two-handed execution applies a cancellation",
              "status": -1,
			  "uses": ["2H"]
			}
		  ]
        }
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "OLL 21",
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
        {
          "alg": "U F (R U R' U') (R U R' U') (R U R' U') F'",
          "desc": "[Conjugate] of triple [sexy]: [F: [R U R' U']*3]",
		  "status": -1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "OCLL",
      "name": "Corners Oriented",
      "wiki": "",
      "algdb": ".",
      "image": "OCLL",
      "prob": "1/27",
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
      "id": "Adj",
      "name": "Adjacent Corner Swap",
      "desc": "This case is typically solved using the [PLL] algorithms for Aa-Perm, Jb-Perm or T-Perm",
      "wiki": "",
      "algdb": "Jb",
      "image": "CPLL-A",
      "prob": "2/3",
      "algs" :
      [
        {
          "alg": "U R2 (R F R' B2) (R F' R' B2') R2'",
          "name": "Aa-Perm",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R F R', B2]]",
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
          "alg": "R U R' F' (R U R' U' R' F R2 U' R' U' R U R' F') F R U' R'",
          "name": "Jb-Perm",
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
          "name": "Jb-Perm",
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
			  "alg": "R U2' R' U' R U2' z U' R D' R' U",
              "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "(R U R' U' R' F R F') (F R U' R' U' R U R' F')",
          "name": "T-Perm",
          "desc": "[OLL] combination - [sexy-sledge], [mounted-fish]",
		  "status": 1,
          "uses": [],
		  "vars":
		  [
			{
			  "alg": "R U R' U' R' F R2 U' R' U' R U R' F'",
			  "desc": "Execution applies cancellations",
			  "status": 1,
			  "uses": []
			},
		  ]
        },
      ]
    },
    {
      "id": "Diag",
      "name": "Diagonal Corner Swap",
      "desc": "This case is typically solved using the [PLL] algorithms for E-Perm or Y-Perm.",
      "wiki": "",
      "algdb": "Y",
      "image": "CPLL-O",
      "prob": "1/6",
      "algs" :
      [
        {
          "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' D') x",
          "name": "E-Perm",
          "desc": "[Commutator] combination - [R U' R', D] [R, U R' D]",
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
        {
          "alg": "(F R U' R' U' R U R' F') (R U R' U' R' F R F')",
          "name": "Y-Perm",
          "desc": "[OLL] combination - [mounted-fish], [sexy-sledge]",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R2 U' R' U R U' x' U' z' U' R U' R' U' z U R",
          "name": "Y-Perm",
          "desc": "One-handed algorithm",
		  "status": 1,
          "uses": ["OH"]
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
          "name": "Corner Orientation",
          "wiki": "OCLL",
          "desc": "These are the 7 [OCLL] cases. There is a 1/27 chance of skipping this step and going straight to [CPLL].",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OCLL"]
        },
        {
          "id": "permutation",
          "name": "Corner Permutation",
		  "desc": "This group of cases is known as [CPLL]. They are solved using the fastest [PLL] algorithms with the desired effect.",
          "wiki": "2-Look_PLL",
          "cases": ["Adj", "Diag", "CPLL"]
        },
      ]
    },
  ]
}
