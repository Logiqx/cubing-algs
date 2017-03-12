var algSet = {
  "header":
  {
    "id": "2LL4C",
    "name": "2-Look Last Four Corners",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/",
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
      "desc": "This case can be solved with the [Niklas] algorithm.",
      "wiki": "",
      "algdb": ".",
      "image": "OCLL-AS",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R' U L U') (R U L' U')",
          "desc": "[RBN] - [R', U L U']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U L U' R U L'",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "z (D' R U R' D R U') [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
          ]
        },
        {
          "alg": "U2 (L' U R U') (L U R' U')",
          "desc": "[LFN] - [L', U R U']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 L' U R U' L U R'",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 z (U' R D R' U R D') [z']",
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
      "desc": "This case can be solved with the [Niklas] algorithm.",
      "wiki": "",
      "algdb": ".",
      "image": "OCLL-S",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R U' L' U) (R' U' L U)",
          "desc": "[RFN] - [R, U' L' U]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U' L' U R' U' L",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "z (D R' U' R D' R' U) [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
          ]
        },
        {
          "alg": "U2 (L U' R' U) (L' U' R U)",
          "desc": "[LFN] - [L, U' R' U]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 L U' R' U L' U' R",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 z (U R' D' R U' R' D) [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
          ]
        }
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "desc": "This case has lots of options as it can be solved using most of the standard [OCLL] algorithms.",
      "wiki": "",
      "algdb": ".",
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
      "desc": "This case can be solved with the commutators or [Anti-Sune] combinations.",
      "wiki": "",
      "algdb": ".",
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
          "alg": "U (R U2 R' U' R U' R') U2 (R' U2' R U R' U R)",
          "desc": "[Anti-Sune] combination - [RFAS], U2, [RBAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U (R U2' R' U' R U' R') U2' (R' U2' R U R' U R)",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "U (R' U2' R U R' U R) U2 (R U2 R' U' R U' R')",
          "desc": "[Anti-Sune] combination - [RBAS], U2, [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U (R' U2' R U R' U R) U2' (R U2' R' U' R U' R')",
              "desc": "One-handed execution",
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
      "desc": "This case can be solved with commutators or [Sune] combinations.",
      "wiki": "",
      "algdb": ".",
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
          "alg": "U' (R U R' U R U2' R') U2 (R' U' R U' R' U2 R)",
          "desc": "[Sune] combination - [RFS], U2, [RBS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' (R U R' U R U2' R') U2' (R' U' R U' R' U2' R)",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "U' (R' U' R U' R' U2 R) U2 (R U R' U R U2' R')",
          "desc": "[Sune] combination - [RBS], U2, [RFS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' (R' U' R U' R' U2' R) U2' (R U R' U R U2' R')",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "Pi",
      "name": "Pi / Bruno",
      "desc": "This case can be solved using [Niklas] combinations.",
      "wiki": "",
      "algdb": ".",
      "image": "OCLL-Pi",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U (R U' L' U) (R' U' L U) U' (L U' R' U) (L' U' R U)",
          "desc": "[Niklas] combination - [RFN], U', [LBN]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U R U' L' U R' U' L2 U' R' U L' U' R",
              "desc": "Two-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U z (D R' U' R D' R' U2' R' D' R U' R' D) [z']",
              "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
          ]
        },
        {
          "alg": "U' (R' U L U') (R U L' U') U (L' U R U') (L U R' U')",
          "desc": "[Niklas] combination - [RBN], U', [LFN]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' R' U L U' R U L2' U R U' L U R'",
              "desc": "Two-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U' z (D' R U R' D R U2' R D R' U R D') [z']",
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
      "algdb": ".",
      "image": "OCLL-H",
      "prob": "2/27",
      "algs" :
      [
        {
          "alg": "U F (R U R' U') (R U R' U') (R U R' U') F'",
          "desc": "[Conjugate] of triple [sexy]: [F: [R U R' U']*3]",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "U F (U R U' R') (U R U' R') (U R U' R') F'",
          "desc": "[Conjugate] of triple [reverse-sexy]: [F: [U R U' R']*3]",
		  "status": 1,
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
      "id": "Aa",
      "name": "Aa-Perm",
      "desc": "Inverse and reflection of Ab.",
      "wiki": "",
      "algdb": "Set/PLL/Aa",
      "image": "CPLL-Aa",
      "prob": "4/12",
      "algs" :
      [
        {
          "alg": "U R2 (R F R' B2) (R F' R' B2') R2'",
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
      ]
    },
    {
      "id": "Ab",
      "name": "Ab-Perm",
      "desc": "Inverse and reflection of Aa.",
      "wiki": "",
      "algdb": "Set/PLL/Ab",
      "image": "CPLL-Ab",
      "prob": "4/12",
      "algs" :
      [
        {
          "alg": "U2 R2 (B2 R F R') (B2' R F' R') R2",
          "desc": "A9 [commutator] / [conjugate] - [R2: [B2, R F R']]",
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
	  "desc": "The algorithm below was popularised by Rowe Hessler. It utilises [OCLL] / [COLL] algorithms for L / Bowtie and T / Chameleon.",
      "wiki": "",
      "algdb": "Set/PLL/E",
      "image": "CPLL-E",
      "prob": "2/12",
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
      "id": "X",
      "name": "H-Perm / X-Perm",
      "desc": "Best known as H-Perm (i.e. swapping opposite edge pairs) this case is also known as X-Perm (i.e.  swapping diagonal corner pairs).",
      "wiki": "",
      "algdb": "Set/PLL/H",
      "image": "CPLL-X",
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
      "id": "CPLL",
      "name": "Corners Permuted",
      "wiki": "",
      "algdb": ".",
      "image": "CPLL",
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
          "name": "Corner Orientation",
		  "desc": "These are the 7 [OCLL-EPP] cases. Most of theses cases are solved using a [commutator].",
          "wiki": "Corner_Orientation#OCLL-EPP",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OCLL"]
        },
        {
          "id": "permutation",
          "name": "Corner Permutation",
		  "desc": "This group of cases is known as [CPLL]. All of these cases can be solved using standard [PLL] algorithms.",
          "wiki": "CPLL",
          "cases": ["Aa", "Ab", "E", "X", "CPLL"]
        },
      ]
    },
  ]
}
