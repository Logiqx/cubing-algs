var algSet = {
  "header":
  {
    "id": "PBL",
    "name": "Permutation of Both Layers",
    "desc": "BLAH BLAH BLAH.",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/puzzle/222/ortegapbl/",
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
      "id": "Adj/Diag",
      "name": "Adj/Diag Corner Swap",
      "desc": "BLAH BLAH BLAH.",
      "wiki": "",
      "algdb": "pbl5",
      "image": "PBL-A",
      "prob": "1/9",
      "algs" :
      [
        {
          "alg": "R' U R' F2 R F' R",
          "desc": "Simple algorithm, inverse of alg 2",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U2 R' F R' F2 R U' R",
          "desc": "Simple algorithm, inverse of alg 1",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Diag/Diag",
      "name": "Diag/Diag Corner Swap",
      "desc": "BLAH BLAH BLAH.",
      "wiki": "",
      "algdb": "pbl3",
      "image": "PBL-O",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "R2' F2 R2",
          "desc": "The simplest algorithm of all!",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Solved/Diag",
      "name": "Solved/Diag Corner Swap",
      "wiki": "",
      "algdb": "pbl2",
      "image": "PBL",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "(R' F R' F2 R U' R) (R' F R' F2 R U' R) (R2' F2 R2)",
          "desc": "Combination of Adj/Diag and Diag/Diag",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' F R' F2 R U' F R' F2 R U' R' F2 R2",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
      ]
    },
    {
      "id": "Adj/Solved",
      "name": "Adj/Solved Corner Swap",
      "desc": "BLAH BLAH BLAH.",
      "wiki": "",
      "algdb": "pbl1",
      "image": "PBL-A",
      "prob": "1/9",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "Jb-Perm - [RFAS], [RFN]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R U2 R' U' R U2 L' U R' U' L",
              "desc": "Optimal execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
      ]
    },
    {
      "id": "Diag/Solved",
      "name": "Diag/Solved Corner Swap",
      "desc": "BLAH BLAH BLAH.",
      "wiki": "",
      "algdb": "pbl2",
      "image": "PBL-O",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "(R U' L U2 R' U L') (R U' L U2 R' U L')",
          "desc": "Playing with [F2L] pairs - track FR + BL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Solved/Solved",
      "name": "Solved/Solved",
      "wiki": "",
      "algdb": "",
      "image": "PBL",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "-",
          "desc": "",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Adj/Adj",
      "name": "Adj/Adj Corner Swap",
      "desc": "This is the most common case to encounter during [PBL].",
      "wiki": "",
      "algdb": "pbl4",
      "image": "PBL-A",
      "prob": "4/9",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R U' L' U R' U' L)",
          "desc": "Jb-Perm - [RFAS], [RFN]",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R U2 R' U' R U2 L' U R' U' L",
              "desc": "Optimal execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
      ]
    },
    {
      "id": "Diag/Adj",
      "name": "Diag/Adj Corner Swap",
      "desc": "BLAH BLAH BLAH.",
      "wiki": "",
      "algdb": "pbl5",
      "image": "PBL-O",
      "prob": "1/9",
      "algs" :
      [
        {
          "alg": "(R U' L U2 R' U L') (R U' L U2 R' U L')",
          "desc": "Playing with [F2L] pairs - track FR + BL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Solved/Adj",
      "name": "Solved/Adj Corner Swap",
      "wiki": "",
      "algdb": "pbl1",
      "image": "PBL",
      "prob": "1/9",
      "algs" :
      [
        {
          "alg": "-",
          "desc": "",
          "status": 1,
          "uses": ["2H"]
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
          "id": "EG2",
          "name": "Diagonal Swap on Bottom",
          "desc": "Equivalent of EG-2... BLAH BLAH BLAH. These are the core algs that I use for PBL and can be utilised for other cases.",
          "wiki": "PBL",
          "cases": ["Adj/Diag", "Diag/Diag", "Solved/Diag"]
        },
        {
          "id": "CLL",
          "name": "No Swap on Bottom",
          "desc": "Equivalent of CLL... BLAH BLAH BLAH.",
          "wiki": "PBL",
          "cases": ["Adj/Solved", "Diag/Solved", "Solved/Solved"]
        },
        {
          "id": "EG1",
          "name": "Adjacent Swap on Bottom",
          "desc": "Equivalent of EG-1... BLAH BLAH BLAH.",
          "wiki": "PBL",
          "cases": ["Adj/Adj", "Diag/Adj", "Solved/Adj"]
        },
      ]
    },
  ]
}
