var algSet = {
  "header":
  {
    "id": "OLL",
    "name": "Orientation of the Last Layer",
    "desc": "This page lists [OLL] algorithms that are suitable for intermediates. They are good algorithms and have been chosen for their execution speed.",
    "css": "POLL",
    "wiki": "https://www.speedsolving.com/wiki/index.php/OLL_(2x2x2)",
    "algdb": "http://algdb.net/puzzle/222/ortegaoll/",
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
      "id": "AS",
      "name": "AS / Anti-Sune",
      "wiki": "",
      "algdb": "oll2",
      "image": "OLL-AS",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U R U2 R' U' R U' R'",
          "desc": "[RFAS] - Extract corner, [AUF], re-insert corner",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R' U' R U' R' U2 R",
          "desc": "[RBS] - Extract corner, [AUF], re-insert corner",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "S",
      "name": "S / Sune",
      "wiki": "",
      "algdb": "oll1",
      "image": "OLL-S",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "R U R' U R U2' R'",
          "desc": "[RFS] - Extract corner, [AUF], re-insert corner",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U' R' U2' R U R' U R",
          "desc": "[RBAS] - Extract corner, [AUF], re-insert corner",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "wiki": "",
      "algdb": "oll5",
      "image": "OLL-L",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U' F R U' (R' U' R U) R' F'",
          "desc": "Playing with corner from DFL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(F' L F R') (F' L' F R)",
          "desc": "Basic [commutator] - [F' L F, R']",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "F' (R U R' U') R' F R",
              "desc": "Execution avoids L turns and reduces F turns",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
    {
      "id": "U",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "oll4",
      "image": "OLL-U",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U' F (R U R' U') F'",
          "desc": "[Conjugate] of [sexy] - [F: R U R' U']",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U F (U R U' R') F'",
          "desc": "Executed from a different angle",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "T",
      "name": "T / Chameleon",
      "wiki": "",
      "algdb": "oll6",
      "image": "OLL-T",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "U' (L F R' F') (L' F R F')",
          "desc": "Basic [commutator] - [L, F R' F']",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U' (R U R' U') (R' F R F')",
              "desc": "Execution avoids L turns and reduces F turns",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U (R' F' L F) (R F' L' F)",
          "desc": "Basic [commutator] - [R', F' L F]",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U (L' U' L U) (L F' L' F)",
              "desc": "Execution avoids R turns and reduces F turns",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        }
      ]
    },
    {
      "id": "Pi",
      "name": "Pi / Bruno",
      "wiki": "",
      "algdb": "oll3",
      "image": "OLL-Pi",
      "prob": "4/27",
      "algs":
      [
        {
          "alg": "F (R U R' U') (R U R' U') F'",
          "desc": "[Conjugate] of double [sexy] - [F: [R U R' U']*2]]",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U2 F (U R U' R') (U R U' R') F'",
          "desc": "Executed from a different angle",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "oll7",
      "image": "OLL-H",
      "prob": "2/27",
      "algs":
      [
        {
          "alg": "U (R2 U2' R' U2 R2)",
          "desc": "[Conjugate]: [R2 U2': R']",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U (R2' U2' R U2 R2)",
          "desc": "[Conjugate]: [R2' U2': R]",
          "status": 0,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "OLL",
      "name": "Solved",
      "wiki": "",
      "algdb": "",
      "image": "OLL",
      "prob": "1/27",
      "algs":
      [
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
          "name": "Corner Orientation",
          "desc": "The [OLL] cases are solved using simple algorithms. There is a 1/27 chance of skipping this step and going straight to [PBL] or [PLL].",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OLL"]
        },
      ]
    },
  ]
}
