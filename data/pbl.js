var algSet = {
  "header":
  {
    "id": "PBL",
    "name": "Permutation of Both Layers",
    "desc": "The final step of the Ortega / Varasano method is to premute both layers with a single algorithm.",
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
      "desc": "These algorithms are the nucleus of several other PBL algorithms. They are often combined with the algorithm R2' F2 R2.",
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
      "desc": "This is the simplest [PBL] case. The algorithm is often incorporated into other [PBL] algorithms.",
      "wiki": "",
      "algdb": "pbl3",
      "image": "PBL-O",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "R2' F2 R2",
          "desc": "The simplest [PBL] algorithm",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Solved/Diag",
      "name": "Solved/Diag Corner Swap",
      "desc": "This is probably the worst PBL case and is typically solved using a diag/solved algorithm cancelled into R2' F2 R2.",
      "wiki": "",
      "algdb": "pbl2",
      "image": "PBL",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "(R' F R' F2 R U' F R' F2 R U' R) (R2' F2 R2)",
          "desc": "Combination of diag/solved and diag/diag",
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
        {
          "alg": "(R U' R' U' F2 U' R U R' D R2) (R2' F2 R2)",
          "desc": "Combination of diag/solved and diag/diag",
          "status": -1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R U' R' U' F2 U' R U R' D F2 R2",
              "desc": "Execution applies cancellations",
              "status": -1,
              "uses": ["2H"]
            },
          ]
        },
      ]
    },
    {
      "id": "Adj/Solved",
      "name": "Adj/Solved Corner Swap",
      "desc": "This case can be solved using the adj/diag algorithms cancelled into R2' F2 R2.",
      "wiki": "",
      "algdb": "pbl1",
      "image": "PBL-A",
      "prob": "1/9",
      "algs" :
      [
        {
          "alg": "(R' F R' F2 R U' R) (R2' F2 R2)",
          "desc": "Combination of adj/diag and diag/diag",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' F R' F2 R U' R' F2 R2",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "U2 (R' U R' F2 R F' R) (R2' F2 R2)",
          "desc": "Combination of adj/diag and diag/diag",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U2 R' U R' F2 R F' R' F2 R2",
              "desc": "Execution applies a cancellation",
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
      "desc": "The diagonal/solved case can be solved by repeating an adj/diag algorithm.",
      "wiki": "",
      "algdb": "pbl2",
      "image": "PBL-O",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "(R' F R' F2 R U' R) (R' F R' F2 R U' R)",
          "desc": "Combination of adj/diag * 2",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' F R' F2 R U' F R' F2 R U' R",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "(R' U R' F2 R F' R) (R' U R' F2 R F' R)",
          "desc": "Combination of adj/diag * 2",
          "status": -1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' U R' F2 R F' U R' F2 R F' R",
              "desc": "Execution applies a cancellation",
              "status": -1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "R U' R' U' F2 U' R U R' U F2",
          "desc": "Basis for the algorithm below",
          "status": -1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R U' R' U' F2 U' R U R' D R2",
              "desc": "Execution applies a cancellation",
              "status": -1,
              "uses": ["2H"]
            },
          ]
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
          "desc": "AUF to complete the solve",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Adj/Adj",
      "name": "Adj/Adj Corner Swap",
      "desc": "This is the most common case to encounter during [PBL]. The algorithms allow for both bars to be at the back or the front.",
      "wiki": "",
      "algdb": "pbl4",
      "image": "PBL-A",
      "prob": "4/9",
      "algs" :
      [
        {
          "alg": "R2 U' R2' U2' F2 U' R2",
          "desc": "Basis for the algorithm below",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R2 U' R2' [U' D'] R2 U' R2'",
              "desc": "Execute the U' D' simultaneously",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "y2 R2 U' B2 U2' R2' U' R2",
          "desc": "Alternative angle - bars at the front",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "Diag/Adj",
      "name": "Diag/Adj Corner Swap",
      "desc": "The algorithms allow for the bar to be on the left or the right.",
      "wiki": "",
      "algdb": "pbl5",
      "image": "PBL-O",
      "prob": "1/9",
      "algs" :
      [
        {
          "alg": "y' R2 U R2' U' R2 U R2' U' R2",
          "desc": "Algorithm for the bar on the left",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "y R2 U' (R' U R' F2 R F' R) F2",
          "desc": "Incorporates an adj/diag algorithm",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "R U' R' U' R' F2 U' R U R",
          "desc": "Alternative angle - bar at the back",
          "status": -1,
          "uses": []
        },
      ]
    },
    {
      "id": "Solved/Adj",
      "name": "Solved/Adj Corner Swap",
      "desc": "The algorithms allow for the bar to be on the left or the right.",
      "wiki": "",
      "algdb": "pbl1",
      "image": "PBL",
      "prob": "1/9",
      "algs" :
      [
        {
          "alg": "y' R2 U' (R' U R' F2 R F' R) R2 F2",
          "desc": "Incorporates an adj/diag algorithm",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "y' R2 U' R' U R' F2 R F' R' F2",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "y (R2 U R2' U' R2 U R2' U' R2) (R2' F2 R2)",
          "desc": "Combination of diag/adj and diag/diag",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "y R2 U R2' U' R2 U R2' U' F2 R2",
              "desc": "Execution applies cancellations",
              "status": 1,
              "uses": ["2H"]
            },
          ]
        },
        {
          "alg": "(R U' R' U' R' F2 U' R U R) (R2' F2 R2)",
          "desc": "Combination of diag/adj and diag/diag",
          "status": -1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R U' R' U' R' F2 U' R U R' F2 R2",
              "desc": "Execution applies a cancellation",
              "status": -1,
              "uses": ["2H"]
            },
          ]
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
          "desc": "The algorithms for these cases have become the nucleus of algorithms for the remaining cases.",
          "wiki": "PBL",
          "cases": ["Adj/Diag", "Diag/Diag", "Solved/Diag"]
        },
        {
          "id": "CLL",
          "name": "No Swap on Bottom",
          "desc": "The algorithms for these cases are all derived from algorithms for a diagonal swap on bottom.",
          "wiki": "PBL",
          "cases": ["Adj/Solved", "Diag/Solved", "Solved/Solved"]
        },
        {
          "id": "EG1",
          "name": "Adjacent Swap on Bottom",
          "desc": "It is more likely than not that one of these cases will occur during an Ortega/Varasano solve. Ensure that you know where the bar will be during inspection.",
          "wiki": "PBL",
          "cases": ["Adj/Adj", "Diag/Adj", "Solved/Adj"]
        },
      ]
    },
  ]
}
