var algSet = {
  "header":
  {
    "id": "2LL4C",
    "name": "2-Look Last Four Corners",
    "desc": "This page lists [L4C] algorithms that are suitable for intermediates. They are good algorithms and have been chosen for their execution speed.",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/puzzle/333/",
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
      "name": "AS / Anti-Sune",
      "desc": "This case can be solved with the [Niklas] algorithm.",
      "wiki": "",
      "algdb": "",
      "image": "OCLL-AS",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U2 (L' U R U') (L U R' U')",
          "desc": "[LFN] - [L', U R U']",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U2 L' U R U' L U R'",
              "desc": "Actual execution",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
        {
          "alg": "(R' U L U') (R U L' U')",
          "desc": "[RBN] - [R', U L U']",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U L U' R U L'",
              "desc": "Actual execution",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "S",
      "name": "S / Sune",
      "desc": "This case can be solved with the [Niklas] algorithm.",
      "wiki": "",
      "algdb": "",
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
              "desc": "Actual execution",
              "status": 1,
              "uses": ["2H", "OH"]
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
              "desc": "Actual execution",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        }
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "desc": "This case has lots of options as it can be solved using the standard [OCLL] algorithms.",
      "wiki": "",
      "algdb": "",
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
              "alg": "F' (r U R' U') z U' R u [z']",
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
          "alg": "U' L' (R U R' U') L (U R U' R')",
          "desc": "Basic [commutator] - [L', R U R' U']",
          "status": 1,
          "uses": ["OH"]
        },
		{
          "alg": "R (L' U' L U) R' (U' L' U L)",
          "desc": "Basic [commutator] - [R, L' U' L U]",
          "status": 1,
          "uses": ["OH"]
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
              "desc": "Execution applies a cancellation",
              "status": 0,
              "uses": ["2H", "OH"]
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
              "desc": "Execution applies a cancellation",
              "status": 0,
              "uses": ["2H", "OH"]
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
              "desc": "Execution applies cancellations",
              "status": 0,
              "uses": ["2H", "OH"]
            }
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
              "desc": "Execution applies cancellations",
              "status": 0,
              "uses": ["2H", "OH"]
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
      "algdb": "",
      "image": "OCLL-U",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U2 R2 (D R' U2 R) (D' R' U2 R) R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [D, R' U2 R]]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U2 R2 D R' U2 R D' R' U2 R'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "R2 (D' R U2 R') (D R U2 R') R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [D', R U2 R']]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R2' D' R U2 R' D R U2 R",
              "desc": "Eexecution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U (R U2 R' U' R U' R') (L' U2' L U L' U L)",
          "desc": "[Anti-Sune] combination - [RFAS], U2, [LFAS]",
          "status": 1,
          "uses": ["OH"]
        },
        {
          "alg": "U' (L' U2' L U L' U L) (R U2 R' U' R U' R')",
          "desc": "[Anti-Sune] combination - [LFAS], U2, [RFAS]",
          "status": 1,
          "uses": ["OH"]
        },
      ]
    },
    {
      "id": "T",
      "name": "T / Chameleon",
      "desc": "This case can be solved with commutators or [Sune] combinations.",
      "wiki": "",
      "algdb": "",
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
              "alg": "U2 (l U R' D) (R U' R' D') x",
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
          "alg": "U' (R U R' U') L' (U R U' R') L",
          "desc": "Basic [commutator] - [R U R' U', L']",
          "status": 1,
          "uses": ["OH"]
        },
        {
          "alg": "U (L' U' L U) R (U' L' U L) R'",
          "desc": "Basic [commutator] - [L' U' L U, R]",
          "status": 1,
          "uses": ["OH"]
        },
        {
          "alg": "U' (R U R' U R U2' R') (L' U' L U' L' U2 L)",
          "desc": "[Sune] combination - [RFS], U2, [LFS]",
          "status": 1,
          "uses": []
        },
        {
          "alg": "U (L' U' L U' L' U2 L) (R U R' U R U2' R')",
          "desc": "[Sune] combination - [LFS], U2, [RFS]",
          "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "Pi",
      "name": "Pi / Bruno",
      "desc": "This case can be solved using [Niklas] combinations.",
      "wiki": "",
      "algdb": "",
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
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H", "OH"]
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
              "desc": "Actual execution applies cancellations",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "",
      "image": "OCLL-H",
      "prob": "2/27",
      "algs" :
      [
        {
          "alg": "U F (R U R' U') (R U R' U') (R U R' U') F'",
          "desc": "[Conjugate] of triple [sexy]: [F: [R U R' U']*3]",
          "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "OCLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "",
      "image": "OCLL",
      "prob": "1/27",
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
    {
      "id": "Aa",
      "name": "Aa-Perm",
      "desc": "Inverse and reflection of Ab.",
      "wiki": "",
      "algdb": "pll/aa",
      "image": "CPLL-Aa",
      "prob": "4/12",
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
      ]
    },
    {
      "id": "Ab",
      "name": "Ab-Perm",
      "desc": "Inverse and reflection of Aa.",
      "wiki": "",
      "algdb": "pll/ab",
      "image": "CPLL-Ab",
      "prob": "4/12",
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
      "desc": "The algorithm below was popularised by Rowe Hessler. It utilises [OCLL] / [COLL] algorithms for L / Bowtie and T / Chameleon.",
      "wiki": "",
      "algdb": "pll/e",
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
              "desc": "Two-handed execution starts with a wide turn",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "x' (R U' R' D R U R' D') (R U R' D R U' R' u')",
              "desc": "One-handed execution ends with a wide turn",
              "status": 1,
              "uses": ["OH"]
            },
          ]
        },
        {
          "alg": "U R (R U R' U') y (R U R' U') (R U R' U') (R U R') y' (R U' R') R'",
          "desc": "Long algorithm but decent for [OH] and big cubes",
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
              "status": 0,
              "uses": ["OH"]
            },
          ]
        },
        {
          "alg": "U z U2 R2' F (R U R' U') (R U R' U') (R U R' U') F' R2 U2'",
          "desc": "Long algorithm but decent for [OH] and big cubes",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U z U2' R2 F (R U R' U') (R U R' U') (R U R' U') F' R2 U2'",
              "desc": "One-handed execution",
              "status": 0,
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
      "algdb": "pll/h",
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
      "name": "Solved",
      "wiki": "",
      "algdb": "pll",
      "image": "CPLL",
      "prob": "1/12",
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
      "id": "steps",
      "name": "Steps",
      "groups":
      [
        {
          "id": "orientation",
          "name": "Corner Orientation",
          "desc": "The [OCLL-EPP] cases are typically solved using a [commutator] - e.g. [Niklas] algorithm. There is a 1/27 chance of skipping this step and going straight to [CPLL].",
          "wiki": "Corner_Orientation#OCLL-EPP",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OCLL"]
        },
        {
          "id": "permutation",
          "name": "Corner Permutation",
          "desc": "The [CPLL] cases are solved using the standard [PLL] algorithms. There is a 1/12 chance of skipping this step at the end of a solve.",
          "wiki": "CPLL",
          "cases": ["Aa", "Ab", "E", "X", "CPLL"]
        },
      ]
    },
  ]
}
