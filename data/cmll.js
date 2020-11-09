var algSet = {
  "header":
  {
    "id": "CMLL",
    "name": "Corners of the Last Layer",
    "desc": "This page lists the [CMLL] algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.<br/><br/>I do not use [CMLL] algorithms for the [Sune] and [Anti-Sune] cases but I have included them for the sake of completeness.",
    "wiki": "https://www.speedsolving.com/wiki/index.php/CMLL",
    "algdb": "http://algdb.net/puzzle/333/cmll/",
    "uses":
    [
      {
        "id": "2H",
        "name": "Two-Handed"
      }
    ]
  },
  "cases":
  [
    {
      "id": "A1",
      "name": "O Solved",
      "desc": "This is the solved case.",
      "wiki": "",
      "algdb": "",
      "image": "CMLL-A-1",
      "prob": "1/162",
      "algs":
      [
      ]
    },
    {
      "id": "A3",
      "name": "O Adjacent",
      "desc": "This case is typically solved using the [PLL] algorithms for T-Perm ([RUF]), Jb-Perm ([RUL]) or Aa-Perm ([RUD]).",
      "wiki": "",
      "algdb": "cmllo1",
      "image": "CMLL-A-3",
      "prob": "2/81",
      "algs":
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
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "R U R' F' (R U R' U' R' F R2 U' R' U' R U R' F') F R U' R'",
          "name": "Jb-Perm",
          "desc": "[Conjugate] of T-Perm - [R U R' F': T-Perm]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "R U R' F' R U R' U' R' F R2 U' R'",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        }
      ]
    },
    {
      "id": "A6",
      "name": "O Diagonal",
      "desc": "This case is typically solved using the [PLL] algorithms for Y-Perm ([RUF]), Na-Perm ([RUL]) or E-Perm ([RUD]).",
      "wiki": "",
      "algdb": "cmllo2",
      "image": "CMLL-A-6",
      "prob": "1/162",
      "algs":
      [
        {
          "alg": "(F R U' R' U' R U R' F') (R U R' U' R' F R F')",
          "name": "Y-Perm (2H)",
          "desc": "[OLL] combination - [mounted-fish], [sexy-sledge]",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "B1",
      "name": "AS / Anti-Sune #1",
      "desc": "Inverse of Sune / C1. Reflection of Sune / C1.",
      "wiki": "",
      "algdb": "cmllas1",
      "image": "CMLL-B-1",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "B2",
      "name": "AS / Anti-Sune #2",
      "desc": "Inverse of Sune / C4. Reflection of Sune / C4.",
      "wiki": "",
      "algdb": "cmllas2",
      "image": "CMLL-B-2",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "B3",
      "name": "AS / Anti-Sune #3",
      "desc": "Inverse of Sune / C2. Reflection of Sune / C3.",
      "wiki": "",
      "algdb": "cmllas3",
      "image": "CMLL-B-3",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "B4",
      "name": "AS / Anti-Sune #4",
      "desc": "Inverse of Sune / C3. Reflection of Sune / C2.",
      "wiki": "",
      "algdb": "cmllas4",
      "image": "CMLL-B-4",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "B5",
      "name": "AS / Anti-Sune #5",
      "desc": "Inverse of Sune / C5. Reflection of Sune / C5.",
      "wiki": "",
      "algdb": "cmllas5",
      "image": "CMLL-B-5",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "B6",
      "name": "AS / Anti-Sune #6",
      "desc": "Inverse of Sune / C6. Reflection of Sune / C6.",
      "wiki": "",
      "algdb": "cmllas6",
      "image": "CMLL-B-6",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "C1",
      "name": "S / Sune #1",
      "desc": "Inverse of Anti-Sune / B1. Reflection of Anti-Sune / B1.",
      "wiki": "",
      "algdb": "cmlls1",
      "image": "CMLL-C-1",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "C2",
      "name": "S / Sune #2",
      "desc": "Inverse of Anti-Sune / B3. Reflection of Anti-Sune / B4.",
      "wiki": "",
      "algdb": "cmlls2",
      "image": "CMLL-C-2",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "C3",
      "name": "S / Sune #3",
      "desc": "Inverse of Anti-Sune / B4. Reflection of Anti-Sune / B3.",
      "wiki": "",
      "algdb": "cmlls3",
      "image": "CMLL-C-3",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "C4",
      "name": "S / Sune #4",
      "desc": "Inverse of Anti-Sune / B2. Reflection of Anti-Sune / B2.",
      "wiki": "",
      "algdb": "cmlls4",
      "image": "CMLL-C-4",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "C5",
      "name": "S / Sune #5",
      "desc": "Inverse of Anti-Sune / B5. Reflection of Anti-Sune / B5.",
      "wiki": "",
      "algdb": "cmlls5",
      "image": "CMLL-C-5",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "C6",
      "name": "S / Sune #6",
      "desc": "Inverse of Anti-Sune / B6. Reflection of Anti-Sune / B6.",
      "wiki": "",
      "algdb": "cmlls6",
      "image": "CMLL-C-6",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "D1",
      "name": "L / Bowtie #1",
      "wiki": "",
      "algdb": "cmlll1",
      "image": "CMLL-D-1",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "D2",
      "name": "L / Bowtie #2",
      "desc": "Inverse of Headlights / E5. Reflection of Bowtie / D3.",
      "wiki": "",
      "algdb": "cmlll2",
      "image": "CMLL-D-2",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "D3",
      "name": "L / Bowtie #3",
      "desc": "Inverse of Headlights / E3. Reflection of Bowtie / D2.",
      "wiki": "",
      "algdb": "cmlll3",
      "image": "CMLL-D-3",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "D4",
      "name": "L / Bowtie #4",
      "desc": "Inverse of Chameleon / F5. Reflection of Bowtie / D5.",
      "wiki": "",
      "algdb": "cmlll4",
      "image": "CMLL-D-4",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "D5",
      "name": "L / Bowtie #5",
      "desc": "Inverse of Chameleon / F3. Reflection of Bowtie / D4.",
      "wiki": "",
      "algdb": "cmlll5",
      "image": "CMLL-D-5",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "D6",
      "name": "L / Bowtie #6",
      "wiki": "",
      "algdb": "cmlll6",
      "image": "CMLL-D-6",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "E1",
      "name": "U / Headlights #1",
      "desc": "Inverse of Chameleon / F1.",
      "wiki": "",
      "algdb": "cmllu1",
      "image": "CMLL-E-1",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "E2",
      "name": "U / Headlights #2",
      "wiki": "",
      "algdb": "cmllu2",
      "image": "CMLL-E-2",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "E3",
      "name": "U / Headlights #3",
      "desc": "Inverse of Bowtie / D3. Reflection of Headlights / E5.",
      "wiki": "",
      "algdb": "cmllu3",
      "image": "CMLL-E-3",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "E4",
      "name": "U / Headlights #4",
      "desc": "Inverse of Chameleon / F4.",
      "wiki": "",
      "algdb": "cmllu4",
      "image": "CMLL-E-4",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "E5",
      "name": "U / Headlights #5",
      "desc": "Inverse of Bowtie / D2. Reflection of Headlights / E3.",
      "wiki": "",
      "algdb": "cmllu5",
      "image": "CMLL-E-5",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "E6",
      "name": "U / Headlights #6",
      "wiki": "",
      "algdb": "cmllu6",
      "image": "CMLL-E-6",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "F1",
      "name": "T / Chameleon #1",
      "desc": "Inverse of Headlights / E1.",
      "wiki": "",
      "algdb": "cmllt1",
      "image": "CMLL-F-1",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "F2",
      "name": "T / Chameleon #2",
      "wiki": "",
      "algdb": "cmllt2",
      "image": "CMLL-F-2",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "F3",
      "name": "T / Chameleon #3",
      "desc": "Inverse of Bowtie / D5. Reflection of Chameleon / F5.",
      "wiki": "",
      "algdb": "cmllt3",
      "image": "CMLL-F-3",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "F4",
      "name": "T / Chameleon #4",
      "desc": "Inverse of Headlights / E4.",
      "wiki": "",
      "algdb": "cmllt4",
      "image": "CMLL-F-4",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "F5",
      "name": "T / Chameleon #5",
      "desc": "Inverse of Bowtie / D4. Reflection of Chameleon / F3.",
      "wiki": "",
      "algdb": "cmllt5",
      "image": "CMLL-F-5",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "F6",
      "name": "T / Chameleon #6",
      "wiki": "",
      "algdb": "cmllt6",
      "image": "CMLL-F-6",
      "prob": "2/81",
      "algs":
      [
      ]
    },
    {
      "id": "G1",
      "name": "Pi Right Bar",
      "wiki": "",
      "algdb": "cmllpi1",
      "image": "CMLL-G-1",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "(R U2' R') (R' U' R) (R U' R') (R' U2' R)",
          "name": "Preserve EO",
          "desc": "[Palindrome]. Essentially [RFAS] and [RBS] mixed together",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "R U2' R2' U' R2 U' R2' U2' R",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
        {
          "alg": "F (R U R' U') (R U R' U') F'",
          "name": "Faster - Flip Edges #1",
          "desc": "[Conjugate] of double [sexy] - [F: [R U R' U']*2]]",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U2 F (U R U' R') (U R U' R') F'",
          "name": "Faster - Flip Edges #2",
          "desc": "Executed from a different angle",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "G2",
      "name": "Pi Back Slash",
      "desc": "Inverse and reflection of Bruno / G4.",
      "wiki": "",
      "algdb": "cmllpi2",
      "image": "CMLL-G-2",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "U F (U R U' R') (U R U' R') F' (F R' F' R) (U R U' R')",
          "name": "Preserve EO",
          "desc": "[OLL] combination - inverse of [sexy-sledge], F [double-sexy] F'",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U F (U R U' R') (U R U' R2') F' R (U R U' R')",
              "desc": "Execution includes cancellations",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U (F R' F' R) U2 R U' R' U R U2' R'",
          "name": "Faster - Flip Edges",
          "desc": "Playing with corner/edge pair - track FR",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "G3",
      "name": "Pi Checkerboard",
      "desc": "Inverse of Double Sune / H2.",
      "wiki": "",
      "algdb": "cmllpi3",
      "image": "CMLL-G-3",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "U F (U R U' R') F' F (U R U2 R' U' R U R') F'",
          "name": "Preserve EO",
          "desc": "[OLL] combination - OLL 44 + OLL 13",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U F (U R U' R' U R U2 R' U' R U R') F'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
        {
          "alg": "(U') R' F R U F U' R U R' U' F'",
          "name": "Faster - Flip Edges",
          "desc": "Playing with corner/edge pair - track FL",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "G4",
      "name": "Pi Forward Slash",
      "desc": "Inverse and reflection of Bruno / G2.",
      "wiki": "",
      "algdb": "cmllpi4",
      "image": "CMLL-G-4",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "(R U R' U') (R' F R F') F (R U R' U') (R U R' U') F'",
          "name": "Preserve EO",
          "desc": "[OLL] combination - [sexy-sledge], F [double-sexy] F'",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "(R U R' U') R' F (R2 U R' U') (R U R' U') F'",
              "desc": "Execution is similar to [OLL] 9",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "R U2 R' U' R U R' U2' (R' F R F')",
          "name": "Faster - Flip Edges",
          "desc": "Playing with corner/edge pair - track FR",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "G5",
      "name": "Pi Columns",
      "desc": "Inverse of Double Sune / H5.",
      "wiki": "",
      "algdb": "cmllpi5",
      "image": "CMLL-G-5",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "U' (R U R' U) (F' R U2' R' U2 R' F R)",
          "name": "Preserve EO",
          "desc": "Extract pair then solve using Winter Variation",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "G6",
      "name": "Pi Left Bar",
      "wiki": "",
      "algdb": "cmllpi6",
      "image": "CMLL-G-6",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "U R U2 R' U' F' (R U2 R' U' R U' R') F R U' R'",
          "name": "Preserve EO",
          "desc": "Algorithm is decent to execute and includes [RFAS]",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R' U' (R' F R F') R U' R' U2 R",
          "name": "Faster - Flip Edges",
          "desc": "[RBS] with embedded [sledgehammer] - Track BR",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "H1",
      "name": "H Columns",
      "wiki": "",
      "algdb": "cmllh1",
      "image": "CMLL-H-1",
      "prob": "1/81",
      "algs":
      [
        {
          "alg": "U (R U2 R' U' R U' R') (R U2 R' U' R U' R')",
          "name": "Preserve EO #1",
          "desc": "[SuneOLL]/[2GLL]: Double [RFAS]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U R U2 R' U' (R U R' U') R U' R'",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "(R' U' R U' R' U2 R) (R' U' R U' R' U2 R)",
          "name": "Preserve EO #2",
          "desc": "[SuneOLL]/[2GLL]: Double [RBS]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "R' U' R (U' R' U R) U' R' U2 R",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        }
      ]
    },
    {
      "id": "H2",
      "name": "H Column",
      "desc": "Inverse of Bruno / G3.",
      "wiki": "",
      "algdb": "cmllh3",
      "image": "CMLL-H-2",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "F (R U' R' U R U2 R' U') F' F (R U R' U') F'",
          "name": "Preserve EO",
          "desc": "[OLL] combination - OLL 13' + OLL 45",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "F (R U' R' U R U2 R' U' R U R' U') F'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H", "OH"]
            }
          ]
        },
        {
          "alg": "R U2' R' (R' F R F') U2 (R' F R F')",
          "name": "Faster - Flip Edges",
          "desc": "Playing with corner/edge pair - track FR",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "R U2' R2' F R F' U2 R' F R F'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        }
      ]
    },
    {
      "id": "H5",
      "name": "H Row",
      "desc": "Inverse of Bruno / G5.",
      "wiki": "",
      "algdb": "cmllh2",
      "image": "CMLL-H-5",
      "prob": "2/81",
      "algs":
      [
        {
          "alg": "U2 (R' F' R U2 R U2' R' F) (U' R U' R')",
          "name": "Preserve EO",
          "desc": "Winter Variation inverse followed by basic insertion",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "H6",
      "name": "H Rows",
      "wiki": "",
      "algdb": "cmllh4",
      "image": "CMLL-H-6",
      "prob": "1/81",
      "algs":
      [
        {
          "alg": "U F (R U R' U') (R U R' U') (R U R' U') F'",
          "name": "Preserve EO",
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
          "desc": "I use a standard [PLL] algorithm when I encounter these [CMLL] cases, instead of using [CMLL] + [EPLL].",
          "cases": ["A1", null, "A3", null, null, "A6"]
        },
        {
          "id": "antisune",
          "name": "AS / Anti-Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [CMLL] cases, followed by a standard [PLL] algorithm.",
          "cases": ["B1", "B2", "B3", "B4", "B5", "B6"]
        },
        {
          "id": "sune",
          "name": "S / Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [CMLL] cases, followed by a standard [PLL] algorithm.",
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
          "desc": "I use a standard [PLL] algorithm when I encounter these [CMLL] cases, instead of using [CMLL] + [EPLL].",
          "cases": ["A1", null, "A3", null, null, "A6"]
        },
        {
          "id": "antisune",
          "name": "AS / Anti-Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [CMLL] cases, followed by a standard [PLL] algorithm.",
          "cases": ["B1", "B2", "B3", "B4", "B5", "B6"]
        },
        {
          "id": "sune",
          "name": "S / Sune",
          "desc": "I use a standard [OCLL] algorithm when I encounter these [CMLL] cases, followed by a standard [PLL] algorithm.",
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
