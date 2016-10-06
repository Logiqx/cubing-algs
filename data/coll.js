var algSet = {
  "header":
  {
    "id": "COLL",
    "name": "Corners of the Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/COLL",
    "algdb": "http://algdb.net/Set/",
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
      "id": "L1",
      "name": "Bowtie #1",
      "wiki": "",
      "algdb": "COLL L/D1",
      "image": "COLL-L-1.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U'] R U2 R' U' (R U R' U') (R U R' U') R U' R'",
          "desc": "[SuneOLL]/[2GLL]: Triple [RFAS]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U'] R U2' R' U' (R U R' U') (R U R' U') R U' R'",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "L2",
      "name": "Bowtie #2",
      "desc": "Inverse of Headlights / U5. Reflection of Bowtie / L3.",
      "wiki": "",
      "algdb": "COLL L/D2",
      "image": "COLL-L-2.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "R2 (R U2 R' D') (R U2 R' D) R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R U2 R', D']]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U2 R' D' R U2 R' D R2",
              "desc": "Actual execution includes a cancellation",
              "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U2' R' D' R U2' R' D R2",
              "desc": "Actual execution includes a cancellation",
              "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "L3",
      "name": "Bowtie #3",
      "desc": "Inverse of Headlights / U3. Reflection of Bowtie / L2.",
      "wiki": "",
      "algdb": "COLL L/D3",
      "image": "COLL-L-3.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U] R2 (R' U2 R D) (R' U2 R D') R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R' U2 R, D]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] R U2 R D R' U2 R D' R2'",
              "desc": "Actual execution includes a cancellation",
              "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] R U2' R D R' U2' R D' R2",
              "desc": "Actual execution includes a cancellation",
              "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "L4",
      "name": "Bowtie #4",
	  "desc": "Inverse of Chameleon / T5. Reflection of Bowtie / L5.",
      "wiki": "",
      "algdb": "COLL L/D4",
      "image": "COLL-L-4.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "x' (R U' R' D) (R U R' D') x",
          "desc": "First half of the standard E-Perm. Basic [commutator] - [R U' R', D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(l U' R' D) (R U R' D') x",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "x' (R U' R' D) (R U R' u') [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        }
      ]
    },
    {
      "id": "L5",
      "name": "Bowtie #5",
	  "desc": "Inverse of Chameleon / T3. Reflection of Bowtie / L4.",
      "wiki": "",
      "algdb": "COLL L/D5",
      "image": "COLL-L-5.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U2] (F' L F R') (F' L' F R)",
          "desc": "Basic [commutator] - [F' L F, R']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] F' (r U R' U') r' F R",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] F' (r U R' U') z U' R u",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "L6",
      "name": "Bowtie #6",
      "wiki": "",
      "algdb": "COLL L/D6",
      "image": "COLL-L-6.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U] r U2 R' (R' F R F') R U2 r'",
          "desc": "Modified [OLL] #35. Extract 2x2x1 block, [sledgehammer], re-insert block",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] r U2' (R2' F R F') R U2' r'",
              "desc": "Two-handed execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] r U2' (R2 x U R U') R x U2' r'",
              "desc": "One-handed execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "U1",
      "name": "Headlights #1",
      "desc": "Inverse of Chameleon / T1.",
      "wiki": "",
      "algdb": "COLL U/E1",
      "image": "COLL-U-1.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "(R' U' R U' R' U2' R) (R U R' U R U2' R')",
          "desc": "[SuneOLL]/[2GLL]: [RBS], [RFS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U' R U' R' U2 R2 U R' U R U2' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U' R U' R' U2' R2 U R' U R U2' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "U2",
      "name": "Headlights #2",
      "wiki": "",
      "algdb": "COLL U/E2",
      "image": "COLL-U-2.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "R' (F R U' R' U' R U R' F' R U R' U' R' F R F') R",
          "desc": "[Conjugate] - [R': Y-Perm]",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R' (R2 U' R' U R U' x' U' z' U' R U' R' U' z U R x) R",
          "desc": "[Conjugate] - [R': Y-Perm]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U' R' U R U' x' U' z' U' R U' R' U' z U R2 x",
              "desc": "Actual execution includes some cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "U3",
      "name": "Headlights #3",
      "desc": "Inverse of Bowtie / L3. Reflection of Headlights / U5.",
      "wiki": "",
      "algdb": "COLL U/E3",
      "image": "COLL-U-3.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U2] R2 (D R' U2 R) (D' R' U2 R) R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [D, R' U2 R]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] R2 D R' U2 R D' R' U2 R'",
              "desc": "Actual execution includes a cancellation",
              "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] R2 D R' U2' R D' R' U2' R'",
              "desc": "Actual execution includes a cancellation",
              "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "U4",
      "name": "Headlights #4",
      "desc": "Inverse of Chameleon / T4.",
      "wiki": "",
      "algdb": "COLL U/E4",
      "image": "COLL-U-4.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "F (R U' R' U R U R') F' F (U R U' R') F'",
          "desc": "Two simple [OLL] algorithms",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "F (R U' R' U R U R' U R U' R') F'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H", "OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "U5",
      "name": "Headlights #5",
      "desc": "Inverse of Bowtie / L2. Reflection of Headlights / U3.",
      "wiki": "",
      "algdb": "COLL U/E5",
      "image": "COLL-U-5.png",
      "prob": "2/81",
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
              "desc": "Two-handed execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R2 D' R U2' R' D R U2' R",
              "desc": "Two-handed execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "U6",
      "name": "Headlights #6",
      "wiki": "",
      "algdb": "COLL U/E6",
      "image": "COLL-U-6.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "R' U2 R F U' R' U' R U F'",
          "desc": "Two-handed execution",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "R' U2' R F U' R' U' R U F'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
          ]
        }
      ]
    },
    {
      "id": "T1",
      "name": "Chameleon #1",
      "desc": "Inverse of Headlights / U1.",
      "wiki": "",
      "algdb": "COLL T/F1",
      "image": "COLL-T-1.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R' U2' R U R' U R)",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [RBAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U2 R' U' R U' R2' U2' R U R' U R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R' U' R U' R2 U2' R U R' U R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "T2",
      "name": "Chameleon #2",
      "wiki": "",
      "algdb": "COLL T/F2",
      "image": "COLL-T-2.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U2] R' F R U R' U' R' F' R2 U' R' U2 R",
          "desc": "Fast two-handed algorithm",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R' U R U2' R' L' U R U' L",
          "desc": "&quot;This is  really good&quot; - Antoine Cantin",
		  "status": 1,
          "uses": ["OH"]
        }
      ]
    },
    {
      "id": "T3",
      "name": "Chameleon #3",
	  "desc": "Inverse of Bowtie / L5. Reflection of Chameleon / T5.",
      "wiki": "",
      "algdb": "COLL T/F3",
      "image": "COLL-T-3.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U2] x' (R U R' D) (R U' R' D') x",
          "desc": "Second half of the standard E-Perm. Basic [commutator] - [R, U R' D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (l U R' D) (R U' R' u') [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] x' (R U R' D) (R U' R' u') [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "T4",
      "name": "Chameleon #4",
	  "desc": "Inverse of Headlights / U4.",
      "wiki": "",
      "algdb": "COLL T/F4",
      "image": "COLL-T-4.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U2] F (R U R' U') F' F (R U' R' U' R U R') F'",
          "desc": "Two simple [OLL] algorithms",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] F (R U R' U' R U' R' U' R U R') F'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H", "OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "T5",
      "name": "Chameleon #5",
	  "desc": "Inverse of Bowtie / L4. Reflection of Chameleon / T3.",
      "wiki": "",
      "algdb": "COLL T/F5",
      "image": "COLL-T-5.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U'] (L F R' F') (L' F R F')",
          "desc": "Basic [commutator] - [L, F R' F']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] (r U R' U') (r' F R F')",
              "desc": "Two-handed execution is wide [sexy], wide [sledgehammer]",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U'] (r U R' U') z (U' R u F') [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "T6",
      "name": "Chameleon #6",
      "wiki": "",
      "algdb": "COLL T/F6",
      "image": "COLL-T-6.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U2] R U' R2' D' r U2 r' D R2 U R'",
          "desc": "Mirror of a common algorithm for this case",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U2] R U' R2 D' r U2' r' D R2 U R'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "P1",
      "name": "Bruno #1",
      "wiki": "",
      "algdb": "COLL PI/G1",
      "image": "COLL-Pi-1.png",
      "prob": "2/81",
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
              "desc": "Two-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R2 U' R2 U' R2 U2' R",
              "desc": "One-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "P2",
      "name": "Bruno #2",
      "desc": "Inverse and reflection of Bruno / P4.",
      "wiki": "",
      "algdb": "COLL PI/G2",
      "image": "COLL-Pi-2.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "R' F2 R U2 R U2 R' F2 U' R U' R'",
          "desc": "Fast two-handed algorithm",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "[U] (R U2' R' U' R U' R') (R' U L U' R U L')",
          "desc": "[RFAS] followed by [Niklas]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] R U2' R' U' R U' R2 U L U' R U L'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "P3",
      "name": "Bruno #3",
      "desc": "Inverse of Double Sune / H2.",
      "wiki": "",
      "algdb": "COLL PI/G3",
      "image": "COLL-Pi-3.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U] F (U R U' R' U R U2 R' U' R U R') F'",
          "desc": "Two-handed execution",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U] F (U R U' R' U R U2' R' U' R U R') F'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "P4",
      "name": "Bruno #4",
      "desc": "Inverse and reflection of Bruno / P2.",
      "wiki": "",
      "algdb": "COLL PI/G4",
      "image": "COLL-Pi-4.png",
      "prob": "2/81",
      "algs" :
      [
		{
          "alg": "(R U R' U') (R' F R F') F (R U R' U') (R U R' U') F'",
          "desc": "Combination of two simple OLLs - [sexy-sledge], F double-[sexy] F'",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(R U R' U') R' F R2 U R' U' (R U R' U') F'",
              "desc": "Actual execution includes cancellations. Very similar to OLL 9.",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "[U'] (R' U2' R U R' U R) (R U' L' U R' U' L)",
          "desc": "[RBAS] followed by [Niklas]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] R' U2' R U R' U R2 U' L' U R' U' L",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "P5",
      "name": "Bruno #5",
      "desc": "Inverse of Double Sune / H3.",
      "wiki": "",
      "algdb": "COLL PI/G5",
      "image": "COLL-Pi-5.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U'] R U R' U F' R U2 R' U2 R' F R",
          "desc": "Fast two-handed algorithm",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "[U2] (L' U R U') (L U R' U') U (R U2 R' U' R U' R')",
          "desc": "[Niklas] followed by [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] L' U R U' L U' R' U' R U' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "P6",
      "name": "Bruno #6",
      "wiki": "",
      "algdb": "COLL PI/G6",
      "image": "COLL-Pi-6.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "[U] R U2 R' U' F' (R U2 R' U' R U' R') F R U' R'",
          "desc": "Algorithm is fast to execute and incorporates [RFAS]",
		  "status": 1,
          "uses": ["2H"]
		},
		{
          "alg": "R U' R' U2' L' U R U' L R' U2' R U R' ",
          "desc": "Slightly unsure about algorithm choice for OH",
		  "status": 1,
          "uses": ["OH"]
        }
      ]
    },
    {
      "id": "H1",
      "name": "Double Sune #1",
      "wiki": "",
      "algdb": "COLL H/H1",
      "image": "COLL-H-1.png",
      "prob": "1/81",
      "algs" :
      [
        {
          "alg": "[U] (R U2 R' U' R U' R') (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: Double [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] R U2 R' U' (R U R' U') R U' R'",
              "desc": "Two-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] R U2' R' U' (R U R' U') R U' R'",
              "desc": "One-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "H2",
      "name": "Double Sune #2",
      "desc": "Inverse of Bruno / P3.",
      "wiki": "",
      "algdb": "COLL H/H2",
      "image": "COLL-H-2.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "F (R U' R' U R U2 R' U' R U R' U') F'",
          "desc": "Two-handed execution",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "F (R U' R' U R U2' R' U' R U R' U') F'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "H3",
      "name": "Double Sune #3",
      "desc": "Inverse of Bruno / P5.",
      "wiki": "",
      "algdb": "COLL H/H3",
      "image": "COLL-H-3.png",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "R' F' R U2 R U2 R' F U' R U' R'",
          "desc": "Fast two-handed algorithm",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(R' U' R U' R' U2 R) U (U' R' U L) (U' R U L')",
          "desc": "[RBS] followed by [Niklas]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U' R U' R' U' L U' R U L'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "H4",
      "name": "Double Sune #4",
      "wiki": "",
      "algdb": "COLL H/H4",
      "image": "COLL-H-4.png",
      "prob": "1/81",
      "algs" :
      [
        {
          "alg": "[U] F (R U R' U') (R U R' U') (R U R' U') F'",
          "desc": "[Conjugate] of triple [sexy] - [F: [R U R' U']*3]]",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
  ],
  "views":
  [
    {
      "id": "orientation",
      "name": "Corner Orientation",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "bowtie",
          "name": "L / Bowtie",
          "cases": ["L1", "L2", "L3", "L4", "L5", "L6"]
        },
        {
          "id": "headlights",
          "name": "U / Headlights",
          "cases": ["U1", "U2", "U3", "U4", "U5", "U6"]
        },
        {
          "id": "chameleon",
          "name": "T / Chameleon",
          "cases": ["T1", "T2", "T3", "T4", "T5", "T6"]
        },
        {
          "id": "bruno",
          "name": "Pi / Bruno",
          "cases": ["P1", "P2", "P3", "P4", "P5", "P6"]
        },
        {
          "id": "doublesune",
          "name": "H / Double Sune",
          "cases": ["H1", "H2", "H3", "H4"]
        },
	  ]
    },
    {
      "id": "permutation",
      "name": "Corner Permutation",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Swap",
          "cases": ["L1", "U1", "T1", "P1", "H1"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Swap",
          "cases": ["L2", "L3", "L4", "L5",
		            "U2", "U3", "U4", "U5",
					"T2", "T3", "T4", "T5",
					"P2", "P3", "P4", "P5",
					"H2", "H3"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Swap",
          "cases": ["L6", "U6", "T6", "P6", "H4"]
        },
	  ]
    },
    {
      "id": "Grid",
      "name": "Grid",
      "headers": ["No CP", "Adj", "Adj", "Adj", "Adj", "Diag"],
      "rows":
      [
        {
          "id": "bowtie",
          "name": "L / Bowtie",
          "cases": ["L1", "L2", "L3", "L4", "L5", "L6"]
        },
        {
          "id": "headlights",
          "name": "U / Headlights",
          "cases": ["U1", "U2", "U3", "U4", "U5", "U6"]
        },
        {
          "id": "chameleon",
          "name": "T / Chameleon",
          "cases": ["T1", "T2", "T3", "T4", "T5", "T6"]
        },
        {
          "id": "bruno",
          "name": "Pi / Bruno",
          "cases": ["P1", "P2", "P3", "P4", "P5", "P6"]
        },
        {
          "id": "doublesune",
          "name": "H / Double Sune",
          "cases": ["H1", "H2", null, null, "H3", "H4"]
        },
      ]
    },
  ]
}
