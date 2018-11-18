var algSet = {
  "header":
  {
    "id": "L3E",
    "name": "Last 3 Edges",
    "desc": "These are the [LL] algorithms for use during a [LBL] Pyraminx solve. [L3E] is a small subset of [L4E] which is an advanced Pyraminx method.<br/><br/>All of the [L3E] algorithms are combinations of simple triggers and largely intuitive. They typically start by solving one of the U-layer edges, setting up to a 3 or 4 move basic insertion.<br/><br/>With a little bit of experimentation, I'd expect most people to find exactly the same algorithms. Thanks go to Michael Gottlieb of MZRG.com for all of the Pyraminx images.",
    "css": "L4E",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/",
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
      "id": "1",
      "name": "Case 1",
      "desc": "Solved.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS1",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "-",
          "desc": "",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "2",
      "name": "Case 2",
      "desc": "3-Cycle. Mirror of case 3.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS2",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "(R U' R') U' (R U' R')",
          "desc": "Simple trigger combo. Essentially [RFAS] - R U2 R' U' R U' R'",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "3",
      "name": "Case 3",
      "desc": "3-Cycle. Mirror of case 2.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS3",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "(L' U L) U (L' U L)",
          "desc": "Simple trigger combo. Essentially [LFAS] - L' U2' L U L' U L",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(R U R') U (R U R')",
          "desc": "Simple trigger combo. Essentially [RFS] - R U R' U R U2' R'",
          "status": -1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "4",
      "name": "Case 4",
      "desc": "2-Flip.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS4",
      "prob": "1/4",
      "algs" :
      [
        {
          "alg": "(R' L R L') U (L' U' L)",
          "desc": "Simple trigger combo - mirror of alg 2",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(L R' L' R) U' (R U R')",
          "desc": "Simple trigger combo - mirror of alg 1",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "(L' U L) U' (L R' L' R)",
          "desc": "Simple trigger combo - inverse of alg 1",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "(R U' R') U (R' L R L')",
          "desc": "Simple trigger combo - inverse of alg 2",
          "status": -1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "5",
      "name": "Case 5",
      "desc": "3-Cycle + 2-Flip. Mirror of case 6.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS5",
      "prob": "1/4",
      "algs" :
      [
        {
          "alg": "L (U R U' R') L'",
          "desc": "Simple [conjugate]",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(L R' L' R) (U R U' R')",
          "desc": "Simple trigger combo",
          "status": -1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "6",
      "name": "Case 6",
      "desc": "3-Cycle + 2-Flip. Mirror of case 5.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS6",
      "prob": "1/4",
      "algs" :
      [
        {
          "alg": "R' (U' L' U L) R",
          "desc": "Simple [conjugate]",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(R' L R L') (U' L' U L)",
          "desc": "Simple trigger combo",
          "status": -1,
          "uses": ["2H"]
        }
      ]
    }
  ],
  "views":
  [
    {
      "id": "steps",
      "name": "Steps",
      "groups":
      [
        {
          "id": "ds",
          "name": "Down-Edge Solved",
          "desc": "These are all of the [LL] cases in the [LBL] method. Cases 4-6 are effectively the same as cases 1-3 with a 2-flip at the front.",
          "cases": ["1", "2", "3", "4", "5", "6"]
        }
      ]
    },
  ]
}
