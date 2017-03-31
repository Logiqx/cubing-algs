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
      "id": "D1",
      "name": "L / Bowtie #1",
      "wiki": "",
      "algdb": "COLL L/D1",
      "image": "COLL-D-1",
      "prob": "2/81",
      "algs" :
      [
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
			  "status": 1,
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
			  "status": 1,
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
      ]
    },
    {
      "id": "D2",
      "name": "L / Bowtie #2",
      "desc": "Inverse of Headlights / E5. Reflection of Bowtie / D3.",
      "wiki": "",
      "algdb": "COLL L/D2",
      "image": "COLL-D-2",
      "prob": "2/81",
      "algs" :
      [
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
              "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 R' U2' R' D' R U2' R' D R2",
              "desc": "One-handed execution applies a cancellation",
              "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "D3",
      "name": "L / Bowtie #3",
      "desc": "Inverse of Headlights / E3. Reflection of Bowtie / D2.",
      "wiki": "",
      "algdb": "COLL L/D3",
      "image": "COLL-D-3",
      "prob": "2/81",
      "algs" :
      [
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
              "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U' R U2' R D R' U2' R D' R2",
              "desc": "One-handed execution applies a cancellation",
              "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "D4",
      "name": "L / Bowtie #4",
	  "desc": "Inverse of Chameleon / F5. Reflection of Bowtie / D5.",
      "wiki": "",
      "algdb": "COLL L/D4",
      "image": "COLL-D-4",
      "prob": "2/81",
      "algs" :
      [
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
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        }
      ]
    },
    {
      "id": "D5",
      "name": "L / Bowtie #5",
	  "desc": "Inverse of Chameleon / F3. Reflection of Bowtie / D4.",
      "wiki": "",
      "algdb": "COLL L/D5",
      "image": "COLL-D-5",
      "prob": "2/81",
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
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "D6",
      "name": "L / Bowtie #6",
      "wiki": "",
      "algdb": "COLL L/D6",
      "image": "COLL-D-6",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U' r U2 R' (R' F R F') R U2 r'",
          "desc": "Extract 2x2x1, [sledgehammer], re-insert. See [OLL] 35",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' r U2' (R2' F R F') R U2' r'",
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U' r U2' (R2 x U R U') R x U2' r'",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "E1",
      "name": "U / Headlights #1",
      "desc": "Inverse of Chameleon / F1.",
      "wiki": "",
      "algdb": "COLL U/E1",
      "image": "COLL-E-1",
      "prob": "2/81",
      "algs" :
      [
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
			  "status": 1,
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
			  "status": 1,
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
      "id": "E2",
      "name": "U / Headlights #2",
      "wiki": "",
      "algdb": "COLL U/E2",
      "image": "COLL-E-2",
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
              "desc": "One-handed execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "E3",
      "name": "U / Headlights #3",
      "desc": "Inverse of Bowtie / D3. Reflection of Headlights / E5.",
      "wiki": "",
      "algdb": "COLL U/E3",
      "image": "COLL-E-3",
      "prob": "2/81",
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
              "desc": "Two-handed execution applies a cancellation",
              "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "U2 R2 D R' U2' R D' R' U2' R'",
              "desc": "One-handed execution applies a cancellation",
              "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "E4",
      "name": "U / Headlights #4",
      "desc": "Inverse of Chameleon / F4.",
      "wiki": "",
      "algdb": "COLL U/E4",
      "image": "COLL-E-4",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "F (R U' R' U R U R') F' F (U R U' R') F'",
          "desc": "Inverse [OLL] combination - (F [sexy] F, [mounted-fish])'",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "F (R U' R' U R U R' U R U' R') F'",
              "desc": "Execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H", "OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "E5",
      "name": "U / Headlights #5",
      "desc": "Inverse of Bowtie / D2. Reflection of Headlights / E3.",
      "wiki": "",
      "algdb": "COLL U/E5",
      "image": "COLL-E-5",
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
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R2 D' R U2' R' D R U2' R",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "E6",
      "name": "U / Headlights #6",
      "wiki": "",
      "algdb": "COLL U/E6",
      "image": "COLL-E-6",
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
      "id": "F1",
      "name": "T / Chameleon #1",
      "desc": "Inverse of Headlights / E1.",
      "wiki": "",
      "algdb": "COLL T/F1",
      "image": "COLL-F-1",
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
              "desc": "Two-handed execution applies a cancellation",
			  "status": 1,
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
			  "status": 1,
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
      "id": "F2",
      "name": "T / Chameleon #2",
      "wiki": "",
      "algdb": "COLL T/F2",
      "image": "COLL-F-2",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 R' F (R U R' U') R' F' R2 U' R' U2 R",
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
      "id": "F3",
      "name": "T / Chameleon #3",
	  "desc": "Inverse of Bowtie / D5. Reflection of Chameleon / F5.",
      "wiki": "",
      "algdb": "COLL T/F3",
      "image": "COLL-F-3",
      "prob": "2/81",
      "algs" :
      [
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
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "F4",
      "name": "T / Chameleon #4",
	  "desc": "Inverse of Headlights / E4.",
      "wiki": "",
      "algdb": "COLL T/F4",
      "image": "COLL-F-4",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 F (R U R' U') F' F (R U' R' U' R U R') F'",
          "desc": "[OLL] combination - F [sexy] F', [mounted-fish]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 F (R U R' U' R U' R' U' R U R') F'",
              "desc": "Execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H", "OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "F5",
      "name": "T / Chameleon #5",
	  "desc": "Inverse of Bowtie / D4. Reflection of Chameleon / F3.",
      "wiki": "",
      "algdb": "COLL T/F5",
      "image": "COLL-F-5",
      "prob": "2/81",
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
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "F6",
      "name": "T / Chameleon #6",
      "wiki": "",
      "algdb": "COLL T/F6",
      "image": "COLL-F-6",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 R U' R2' D' r U2 r' D R2 U R'",
          "desc": "Mirror of a common algorithm for this case",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "U2 R U' R2 D' r U2' r' D R2 U R'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "G1",
      "name": "Pi / Bruno #1",
      "wiki": "",
      "algdb": "COLL PI/G1",
      "image": "COLL-G-1",
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
      ]
    },
    {
      "id": "G2",
      "name": "Pi / Bruno #2",
      "desc": "Inverse and reflection of Bruno / G4.",
      "wiki": "",
      "algdb": "COLL PI/G2",
      "image": "COLL-G-2",
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
          "alg": "U (R U2' R' U' R U' R') (R' U L U' R U L')",
          "desc": "[RFAS] followed by [Niklas]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U R U2' R' U' R U' R2 U L U' R U L'",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "G3",
      "name": "Pi / Bruno #3",
      "desc": "Inverse of Double Sune / H2.",
      "wiki": "",
      "algdb": "COLL PI/G3",
      "image": "COLL-G-3",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U F (U R U' R' U R U2 R' U' R U R') F'",
          "desc": "Two-handed execution",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "U F (U R U' R' U R U2' R' U' R U R') F'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "G4",
      "name": "Pi / Bruno #4",
      "desc": "Inverse and reflection of Bruno / G2.",
      "wiki": "",
      "algdb": "COLL PI/G4",
      "image": "COLL-G-4",
      "prob": "2/81",
      "algs" :
      [
		{
          "alg": "(R U R' U') (R' F R F') F (R U R' U') (R U R' U') F'",
          "desc": "[OLL] combination - [sexy-sledge], F [double-sexy] F'",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(R U R' U') R' F R2 U R' U' (R U R' U') F'",
              "desc": "Two handed execution is similar to [OLL] 9",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "U' (R' U2' R U R' U R) (R U' L' U R' U' L)",
          "desc": "[RBAS] followed by [Niklas]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U' R' U2' R U R' U R2 U' L' U R' U' L",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "G5",
      "name": "Pi / Bruno #5",
      "desc": "Inverse of Double Sune / H3.",
      "wiki": "",
      "algdb": "COLL PI/G5",
      "image": "COLL-G-5",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U' R U R' U F' R U2 R' U2 R' F R",
          "desc": "Fast two-handed algorithm",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U2 (L' U R U') (L U R' U') U (R U2 R' U' R U' R')",
          "desc": "[Niklas] followed by [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 L' U R U' L U' R' U' R U' R'",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "G6",
      "name": "Pi / Bruno #6",
      "wiki": "",
      "algdb": "COLL PI/G6",
      "image": "COLL-G-6",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U R U2 R' U' F' (R U2 R' U' R U' R') F R U' R'",
          "desc": "Algorithm is fast to execute and includes [RFAS]",
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
      "name": "H / Double Sune #1",
      "wiki": "",
      "algdb": "COLL H/H1",
      "image": "COLL-H-1",
      "prob": "1/81",
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
      ]
    },
    {
      "id": "H2",
      "name": "H / Double Sune #2",
      "desc": "Inverse of Bruno / G3.",
      "wiki": "",
      "algdb": "COLL H/H2",
      "image": "COLL-H-2",
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
      "id": "H5",
      "name": "H / Double Sune #5",
      "desc": "Inverse of Bruno / G5.",
      "wiki": "",
      "algdb": "COLL H/H3",
      "image": "COLL-H-5",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 R' F' R U2 R U2 R' F U' R U' R'",
          "desc": "Fast two-handed algorithm",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U2 (R' U' R U' R' U2 R) U (U' R' U L) (U' R U L')",
          "desc": "[RBS] followed by [Niklas]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U2 R' U' R U' R' U' L U' R U L'",
              "desc": "One-handed execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "H6",
      "name": "H / Double Sune #6",
      "wiki": "",
      "algdb": "COLL H/H4",
      "image": "COLL-H-6",
      "prob": "1/81",
      "algs" :
      [
        {
          "alg": "U F (R U R' U') (R U R' U') (R U R' U') F'",
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
      "name": "Orientation",
      "groups":
      [
        {
          "id": "bowtie",
          "name": "L / Bowtie",
          "cases": ["D1", "D2", "D3", "D4", "D5", "D6"]
        },
        {
          "id": "headlights",
          "name": "U / Headlights",
          "cases": ["E1", "E2", "E3", "E4", "E5", "E6"]
        },
        {
          "id": "chameleon",
          "name": "T / Chameleon",
          "cases": ["F1", "F2", "F3", "F4", "F5", "F6"]
        },
        {
          "id": "bruno",
          "name": "Pi / Bruno",
          "cases": ["G1", "G2", "G3", "G4", "G5", "G6"]
        },
        {
          "id": "doublesune",
          "name": "H / Double Sune",
          "cases": ["H1", "H2", "H5", "H6"]
        },
	  ]
    },
    {
      "id": "permutation",
      "name": "Permutation",
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Swap",
          "cases": ["D1", "E1", "F1", "G1", "H1"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Swap",
          "cases": ["D2", "D3", "D4", "D5",
		            "E2", "E3", "E4", "E5",
					"F2", "F3", "F4", "F5",
					"G2", "G3", "G4", "G5",
					"H2", "H5"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Swap",
          "cases": ["D6", "E6", "F6", "G6", "H6"]
        },
	  ]
    },
    {
      "id": "grid",
      "name": "Grid",
      "headers": ["2-Gen", "Swap-B", "Swap-R", "Swap-F", "Swap-L", "Diag"],
      "rows":
      [
        {
          "id": "bowtie",
          "name": "L / Bowtie",
          "cases": ["D1", "D2", "D3", "D4", "D5", "D6"]
        },
        {
          "id": "headlights",
          "name": "U / Headlights",
          "cases": ["E1", "E2", "E3", "E4", "E5", "E6"]
        },
        {
          "id": "chameleon",
          "name": "T / Chameleon",
          "cases": ["F1", "F2", "F3", "F4", "F5", "F6"]
        },
        {
          "id": "bruno",
          "name": "Pi / Bruno",
          "cases": ["G1", "G2", "G3", "G4", "G5", "G6"]
        },
        {
          "id": "doublesune",
          "name": "H / Double Sune",
          "cases": ["H1", "H2", null, null, "H5", "H6"]
        },
      ]
    },
  ]
}
