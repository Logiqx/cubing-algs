var algSet = {
  "header":
  {
    "id": "COLL",
    "name": "Corners of the Last Layer",
    "desc": "This page lists the [COLL] algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.<br/><br/>I do not use [COLL] algorithms for the [Sune] and [Anti-Sune] cases but I have included them for the sake of completeness.",
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
      "id": "A1",
      "name": "O / Oriented #1",
      "desc": "This is the solved case.",
      "wiki": "",
      "algdb": ".",
      "image": "COLL-A-1",
      "prob": "1/162",
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
      "id": "A3",
      "name": "O / Oriented #3",
      "desc": "This case is typically solved using the [PLL] algorithms for T-Perm ([RUF]), Jb-Perm ([RUL]) or Aa-Perm ([RUD]).",
      "wiki": "",
      "algdb": "PLL/T",
      "image": "COLL-A-3",
      "prob": "2/81",
      "algs" :
      [
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
              "uses": ["2H", "OH"]
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
              "status": 1,
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
        {
          "alg": "U x R2 (R U R' D2) (R U' R' D2) R2' x'",
          "name": "Aa-Perm",
          "desc": "A9 [commutator] / [conjugate] - [x R2: [R U R', D2]]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U l' U R' D2 R U' R' D2 R2 x'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 0,
              "uses": ["2H"]
            },
            {
              "alg": "U x R' U R' D2 R U' R' D2 R2 x'",
              "desc": "One-handed execution applies a cancellation",
              "status": 0,
              "uses": ["OH"]
            },
          ]
        },
      ]
    },
    {
      "id": "A6",
      "name": "O / Oriented #6",
      "desc": "This case is typically solved using the [PLL] algorithms for Y-Perm ([RUF]), Na-Perm ([RUL]) or E-Perm ([RUD]).",
      "wiki": "",
      "algdb": "PLL/Y",
      "image": "COLL-A-6",
      "prob": "1/162",
      "algs" :
      [
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
          "desc": "One-handed algorithm is fast despite the rotations",
          "status": 1,
          "uses": ["OH"]
        },
        {
          "alg": "(R U' L U2 R' U L') (R U' L U2 R' U L')",
          "name": "Na-Perm",
          "desc": "Playing with [F2L] pairs - track FR + BL",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "(R U' L U2' R' U L') (R U' L U2' R' U L')",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            },
          ]
        },
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
              "desc": "Two-handed execution starts with a wide turn",
              "status": 0,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "R (R U R' U') y (R U R' U') (R U R' U') (R U R') y' (R U' R') R'",
          "name": "E-Perm",
          "desc": "Long algorithm but decent for [OH] and big cubes",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "(R2 U R' U') y (R U R' U') (R U R' U') (R U R') y' (R U' R2)",
              "desc": "One-handed execution incorporates cancellations",
              "status": 0,
              "uses": ["OH"]
            },
          ]
        },
      ]
    },
    {
      "id": "B1",
      "name": "AS / Anti-Sune #1",
      "desc": "Inverse of Sune / C1. Reflection of Sune / C1.",
      "wiki": "",
      "algdb": "COLL AS/B1",
      "image": "COLL-B-1",
      "prob": "2/81",
      "algs" :
      [
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
        },
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
      ]
    },
    {
      "id": "B2",
      "name": "AS / Anti-Sune #2",
      "desc": "Inverse of Sune / C4. Reflection of Sune / C4.",
      "wiki": "",
      "algdb": "COLL AS/B2",
      "image": "COLL-B-2",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 R2 (D R' U R) (D' R' U R') (U' R U' R')",
          "desc": "Playing with [F2L] pair - track FR",
          "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "B3",
      "name": "AS / Anti-Sune #3",
      "desc": "Inverse of Sune / C2. Reflection of Sune / C3.",
      "wiki": "",
      "algdb": "COLL AS/B3",
      "image": "COLL-B-3",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 R (L' U' L U) R' (U2 L' U2 L)",
          "desc": "Playing with [F2L] pairs - track FR + FL",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "U2 R (L' U' L U) R' (U2' L' U2' L)",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        }
      ]
    },
    {
      "id": "B4",
      "name": "AS / Anti-Sune #4",
      "desc": "Inverse of Sune / C3. Reflection of Sune / C2.",
      "wiki": "",
      "algdb": "COLL AS/B4",
      "image": "COLL-B-4",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 (R U2 R' U2) L' (U R U' R') L",
          "desc": "Playing with [F2L] pairs - track FR + FL",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "U2 (R U2' R' U2') L' (U R U' R') L",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "B5",
      "name": "AS / Anti-Sune #5",
      "desc": "Inverse of Sune / C5. Reflection of Sune / C5.",
      "wiki": "",
      "algdb": "COLL AS/B5",
      "image": "COLL-B-5",
      "prob": "2/81",
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
      "id": "B6",
      "name": "AS / Anti-Sune #6",
      "desc": "Inverse of Sune / C6. Reflection of Sune / C6.",
      "wiki": "",
      "algdb": "COLL AS/B6",
      "image": "COLL-B-6",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U2 R' U' R U' (L U' R' U L' U' R) R' U' R",
          "desc": "Playing with [F2L] pairs, includes [LFN] - track BR + BL",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U2 R' U' R U' L U' R' U L' U2 R",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "U2 R' U' R U' L U' R' U L' U2' R",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            },
          ]
        },
      ]
    },
    {
      "id": "C1",
      "name": "S / Sune #1",
      "desc": "Inverse of Anti-Sune / B1. Reflection of Anti-Sune / B1.",
      "wiki": "",
      "algdb": "COLL S/C1",
      "image": "COLL-C-1",
      "prob": "2/81",
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
      "id": "C2",
      "name": "S / Sune #2",
      "desc": "Inverse of Anti-Sune / B3. Reflection of Anti-Sune / B4.",
      "wiki": "",
      "algdb": "COLL S/C2",
      "image": "COLL-C-2",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "(L' U2 L U2) R (U' L' U L) R'",
          "desc": "Playing with [F2L] pairs - track FL + FR",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "(L' U2' L U2') R (U' L' U L) R'",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        }
      ]
    },
    {
      "id": "C3",
      "name": "S / Sune #3",
      "desc": "Inverse of Anti-Sune / B4. Reflection of Anti-Sune / B3.",
      "wiki": "",
      "algdb": "COLL S/C3",
      "image": "COLL-C-3",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "L' (R U R' U') L (U2 R U2 R')",
          "desc": "Playing with [F2L] pairs - track FL + FR",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "L' (R U R' U') L (U2' R U2' R')",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        },
      ]
    },
    {
      "id": "C4",
      "name": "S / Sune #4",
      "desc": "Inverse of Anti-Sune / B2. Reflection of Anti-Sune / B2.",
      "wiki": "",
      "algdb": "COLL S/C4",
      "image": "COLL-C-4",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "U' (R U R' U) (R U' R D) (R' U' R D') R2'",
          "desc": "Playing with [F2L] pair - track FR",
          "status": 1,
          "uses": ["2H"],
          "vars" :
          [
            {
              "alg": "U' (R U R' U) (R U' R D) (R' U' R D') R2",
              "desc": "One-handed execution",
              "status": 1,
              "uses": ["OH"]
            }
          ]
        }
      ]
    },
    {
      "id": "C5",
      "name": "S / Sune #5",
      "desc": "Inverse of Anti-Sune / B5. Reflection of Anti-Sune / B5.",
      "wiki": "",
      "algdb": "COLL S/C5",
      "image": "COLL-C-5",
      "prob": "2/81",
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
          "desc": "[LBN] - [L, U' R' U]",
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
        },
      ]
    },
    {
      "id": "C6",
      "name": "S / Sune #6",
      "desc": "Inverse of Anti-Sune / B6. Reflection of Anti-Sune / B6.",
      "wiki": "",
      "algdb": "COLL S/C6",
      "image": "COLL-C-6",
      "prob": "2/81",
      "algs" :
      [
        {
          "alg": "R' U R (R' U L U' R U L') U R' U R",
          "desc": "Playing with [F2L] pairs, includes [RBN] - track BR + BL",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U2 L U' R U L' U R' U R",
              "desc": "Two-handed execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "R' U2' L U' R U L' U R' U R",
              "desc": "One-handed execution applies cancellations",
              "status": 1,
              "uses": ["OH"]
            },
          ]
        },
      ]
    },
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
              "desc": "Two-handed execution starts with a wide turn",
              "status": 1,
              "uses": ["2H"]
            },
            {
              "alg": "U2 x' (R U' R' D) (R U R' u') [z']",
              "desc": "One-handed execution ends with a wide turn",
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
              "alg": "U' r U2' (R2 F R F') R U2' r'",
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
          "alg": "(R' U R U2') L' (R' U R U') L",
          "desc": "Playing with [F2L] pairs - track BR + FL",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U R U2' L' R' U R U' L",
              "desc": "&quot;This is  really good&quot; - Antoine Cantin",
              "status": 1,
              "uses": ["OH"]
            }
          ]
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
              "desc": "One-handed execution ends with a wide turn",
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
          "alg": "U F (U R U' R') (U R U' R') F' (F R' F' R) (U R U' R')",
          "desc": "[OLL] combination - inverse of [sexy-sledge], F [double-sexy] F'",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U F (U R U' R') (U R U' R2') F' R (U R U' R')",
              "desc": "Two handed execution includes cancellations",
              "status": 1,
              "uses": ["2H"]
            }
          ]
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
        },
        {
          "alg": "R' F2 R U2 R U2 R' F2 U' R U' R'",
          "desc": "Fast two-handed algorithm",
          "status": -1,
          "uses": ["2H"]
        },
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
              "alg": "(R U R' U') R' F (R2 U R' U') (R U R' U') F'",
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
      "desc": "The \"orientation\" view groups cases based on the corner orientation ([OCLL]); S / Sune, L / Bowtie, U / Headlights, etc.",
      "groups":
      [
        {
          "id": "oriented",
          "name": "O / Oriented",
          "desc": "I use a standard [PLL] algorithm when I encounter these [COLL] cases, instead of using [COLL] + [EPLL].",
          "cases": ["A1", null, "A3", null, null, "A6"]
        },
        {
          "id": "antisune",
          "name": "AS / Anti-Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [COLL] cases, followed by a standard [PLL] algorithm.",
          "cases": ["B1", "B2", "B3", "B4", "B5", "B6"]
        },
        {
          "id": "sune",
          "name": "S / Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [COLL] cases, followed by a standard [PLL] algorithm.",
          "cases": ["C1", "C2", "C3", "C4", "C5", "C6"]
        },
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
      "desc": "The \"permutation\" view groups cases based on the corner permutation; i.e. no swap, adjacent swap or diagonal swap.",
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Swap",
          "desc": "The \"no swap\" cases can be solved using the easiest / fastest [RU] algorithms from [2GLL].",
          "cases": ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Swap",
          "cases": ["A3",
                    "B2", "B3", "B4", "B5",
                    "C2", "C3", "C4", "C5",
                    "D2", "D3", "D4", "D5",
                    "E2", "E3", "E4", "E5",
                    "F2", "F3", "F4", "F5",
                    "G2", "G3", "G4", "G5",
                    "H2", "H5"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Swap",
          "cases": ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"]
        },
      ]
    },
    {
      "id": "grid",
      "name": "Grid",
      "desc": "The \"grid\" view arranges all of the cases by corner permutation (columns) and corner orientation / [OCLL] (rows).",
      "headers": ["2-Gen", "Swap-B", "Swap-R", "Swap-F", "Swap-L", "Diag"],
      "rows":
      [
        {
          "id": "oriented",
          "name": "O / Oriented",
          "desc": "I use a standard [PLL] algorithm when I encounter these [COLL] cases, instead of using [COLL] + [EPLL].",
          "cases": ["A1", null, "A3", null, null, "A6"]
        },
        {
          "id": "antisune",
          "name": "AS / Anti-Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [COLL] cases, followed by a standard [PLL] algorithm.",
          "cases": ["B1", "B2", "B3", "B4", "B5", "B6"]
        },
        {
          "id": "sune",
          "name": "S / Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [COLL] cases, followed by a standard [PLL] algorithm.",
          "cases": ["C1", "C2", "C3", "C4", "C5", "C6"]
        },
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
