var algSet = {
  "header":
  {
    "id": "L4E",
    "name": "Last 4 Edges",
    "desc": "These are the [L4E] algorithms for use during a V-First Pyraminx solve. [LBL] is a beginner variation of the V-First method as it is just the \"down-edge solved\" subset.<br/><br/>All of the L4E algorithms are combinations of simple triggers and largely intuitive. They typically start by solving one of the U-layer edges, setting up to a 3 or 4 move basic insertion.<br/><br/>With a little bit of experimentation, I'd expect most people to find exactly the same algorithms. Thanks go to Michael Gottlieb of MZRG.com for all of the Pyraminx images.",
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
      "id": "DS1",
      "name": "Down-Edge Solved #1",
      "desc": "Solved.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS1",
      "prob": "1/96",
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
      "id": "DS2",
      "name": "Down-Edge Solved #2",
      "desc": "3-Cycle. Mirror of DS3.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS2",
      "prob": "1/96",
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
      "id": "DS3",
      "name": "Down-Edge Solved #3",
      "desc": "3-Cycle. Mirror of DS2.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS3",
      "prob": "1/96",
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
      "id": "DS4",
      "name": "Down-Edge Solved #4",
      "desc": "2-Flip.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS4",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "(R' L R L') (U L' U' L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "DS5",
      "name": "Down-Edge Solved #5",
      "desc": "3-Cycle + 2-Flip. Mirror of DS6.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS5",
      "prob": "1/32",
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
      "id": "DS6",
      "name": "Down-Edge Solved #6",
      "desc": "3-Cycle + 2-Flip. Mirror of DS5.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DS6",
      "prob": "1/32",
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
    },
    {
      "id": "DF1",
      "name": "Down-Edge Flipped #1",
      "desc": "4-Flip. This is probably the worst possible L4E case because no two-trigger solution exists!",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DF1",
      "prob": "1/96",
      "algs" :
      [
        {
          "alg": "(L R' L' R) U' (L R' L' R) U' (L R' L' R)",
          "desc": "Simple triple-trigger combo",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "(L' U L) (R U' R') (L' U L) (R U' R')",
          "desc": "Simple double-trigger combo x 2",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "DF2",
      "name": "Down-Edge Flipped #2",
      "desc": "3-Cycle + 4-Flip. Mirror of DF3.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DF2",
      "prob": "1/96",
      "algs" :
      [
        {
          "alg": "(L R' L' R) U (L R' L' R)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "DF3",
      "name": "Down-Edge Flipped #3",
      "desc": "3-Cycle + 4-Flip. Mirror of DF2.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DF3",
      "prob": "1/96",
      "algs" :
      [
        {
          "alg": "(R' L R L') U' (R' L R L')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "DF4",
      "name": "Down-Edge Flipped #4",
      "desc": "2-Flip. I use the same algorithm as DS4 after the triggers swapped around.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DF4",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (U L' U' L) (R' L R L')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "DF5",
      "name": "Down-Edge Flipped #5",
      "desc": "3-Cycle + 2-Flip. Mirror of DF6.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DF5",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' (R U' R') (L' U' L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "DF6",
      "name": "Down-Edge Flipped #6",
      "desc": "3-Cycle + 2-Flip. Mirror of DF5.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-DF6",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (L' U L) (R U R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "US1",
      "name": "Upper-Edge Solved #1",
      "desc": "3-Cycle. Mirror of US2.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US1",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U L' U' L",
          "desc": "Basic insertion",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "US2",
      "name": "Upper-Edge Solved #2",
      "desc": "3-Cycle. Mirror of US1.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US2",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' R U R'",
          "desc": "Basic insertion",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "US3",
      "name": "Upper-Edge Solved #3",
      "desc": "3-Cycle + 2-Flip. Mirror of US4.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US3",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "L R' L' R",
          "desc": "Basic insertion",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "US4",
      "name": "Upper-Edge Solved #4",
      "desc": "3-Cycle + 2-Flip. Mirror of US3.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US4",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "R' L R L'",
          "desc": "Basic insertion",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "US5",
      "name": "Upper-Edge Solved #5",
      "desc": "3-Cycle + 2-Flip. Mirror of US6.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US5",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "(R' L R L') (L' U L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "R' L R L2' U L",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        }
      ]
    },
    {
      "id": "US6",
      "name": "Upper-Edge Solved #6",
      "desc": "3-Cycle + 2-Flip. Mirror of US5.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US6",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "(L R' L' R) (R U' R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "L R' L' R2 U' R'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        }
      ]
    },
    {
      "id": "US7",
      "name": "Upper-Edge Solved #7",
      "desc": "3-Cycle. Mirror of US8.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US7",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "R U' R'",
          "desc": "Basic insertion",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "US8",
      "name": "Upper-Edge Solved #8",
      "desc": "3-Cycle. Mirror of US7.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-US8",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "L' U L",
          "desc": "Basic insertion",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF1",
      "name": "Upper-Edge Flipped #1",
      "desc": "3-Cycle + 2-Flip. Mirror of UF2.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF1",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "(R U R') U (R' L R L')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF2",
      "name": "Upper-Edge Flipped #2",
      "desc": "3-Cycle + 2-Flip. Mirror of UF1.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF2",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "(L' U' L) U' (L R' L' R)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF3",
      "name": "Upper-Edge Flipped #3",
      "desc": "3-Cycle + 2-Flip. Mirror of UF4.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF3",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (L' U L) U' (R U R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF4",
      "name": "Upper-Edge Flipped #4",
      "desc": "3-Cycle + 2-Flip. Mirror of UF3.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF4",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' (R U' R') U (L' U' L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF5",
      "name": "Upper-Edge Flipped #5",
      "desc": "3-Cycle + 2-Flip. Mirror of UF6.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF5",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "(R U R') U (L' U L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF6",
      "name": "Upper-Edge Flipped #6",
      "desc": "3-Cycle + 2-Flip. Mirror of UF5.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF6",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "(L' U' L) U' (R U' R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF7",
      "name": "Upper-Edge Flipped #7",
      "desc": "3-Cycle + 2-Flip. Mirror of UF8.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF7",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (R' L R L') U (L' U L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "UF8",
      "name": "Upper-Edge Flipped #8",
      "desc": "3-Cycle + 2-Flip. Mirror of UF7.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-UF8",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' (L R' L' R) U' (R U' R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "NP1",
      "name": "Nothing Placed #1",
      "desc": "4-Cycle + 2-Flip. Mirror of NP2.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP1",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (R U' R') (R' L R L')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U R U' R2' L R L'",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        }
      ]
    },
    {
      "id": "NP2",
      "name": "Nothing Placed #2",
      "desc": "4-Cycle + 2-Flip. Mirror of NP1.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP2",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' (L' U L) (L R' L' R)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": [],
          "vars" :
          [
            {
              "alg": "U' L' U L2 R' L' R",
              "desc": "Execution applies a cancellation",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        }
      ]
    },
    {
      "id": "NP3",
      "name": "Nothing Placed #3",
      "desc": "4-Cycle + 2-Flip. Mirror of NP4.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP3",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' (L' U' L) U (R U R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "NP4",
      "name": "Nothing Placed #4",
      "desc": "4-Cycle + 2-Flip. Mirror of NP3.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP4",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (R U R') U' (L' U' L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "NP5",
      "name": "Nothing Placed #5",
      "desc": "4-Cycle. Mirror of NP6.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP5",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (R U' R') U' (R U R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "NP6",
      "name": "Nothing Placed #6",
      "desc": "4-Cycle. Mirror of NP5.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP6",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' (L' U L) U (L' U' L)",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "NP7",
      "name": "Nothing Placed #7",
      "desc": "4-Cycle + 2-Flip. Mirror of NP8.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP7",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U' (L' U L) (R U' R')",
          "desc": "Simple trigger combo",
          "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "NP8",
      "name": "Nothing Placed #8",
      "desc": "4-Cycle + 2-Flip. Mirror of NP7.",
      "wiki": "",
      "algdb": "",
      "image": "L4E-NP8",
      "prob": "1/32",
      "algs" :
      [
        {
          "alg": "U (R U' R') (L' U L)",
          "desc": "Simple trigger combo",
          "status": 1,
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
          "desc": "These are all of the cases where the D-edge is solved and correspond to the [LL] cases from the [LBL] method. DS4-DS6 are effectively the same as DS1-DS3 with a 2-flip at the front.",
          "cases": ["DS1", "DS2", "DS3", "DS4", "DS5", "DS6"]
        },
        {
          "id": "df",
          "name": "Down-Edge Flipped",
          "desc": "These are all of the cases where the D-edge is placed correctly but flipped. DF4-DF6 are effectively the same as DF1-DF3 with a 2-flip at the front. DF1-DF6 are effectively the same as DS1-DS6 after a 4-flip.",
          "cases": ["DF1", "DF2", "DF3", "DF4", "DF5", "DF6"]
        },
        {
          "id": "us",
          "name": "Upper-Edge Solved",
          "desc": "These are all of the cases where a single edge in the U-layer is already solved. They include the basic insertions R U R', R U' R', R' L R L' and their mirrors. US5-US8 are effectively the same as US1-US4 with a 2-flip at the front.",
          "cases": ["US1", "US2", "US3", "US4", "US5", "US6", "US7", "US8"]
        },
        {
          "id": "uf",
          "name": "Upper-Edge Flipped",
          "desc": "These are all of the cases where a single edge in the U-layer is placed correctly but flipped. US5-US8 are effectively the same as US1-US4 with a 2-flip at the front. UF1-UF8 are effectively the same as US1-US8 after a 4-flip.",
          "cases": ["UF1", "UF2", "UF3", "UF4", "UF5", "UF6", "UF7", "UF8"]
        },
        {
          "id": "np",
          "name": "Nothing Placed",
          "desc": "These are all of the cases where none of the last 4 edges are placed correctly. NP5-NP8 are effectively the same as NP1-NP4 with a 2-flip at the front.",
          "cases": ["NP1", "NP2", "NP3", "NP4", "NP5", "NP6", "NP7", "NP8"]
        }
      ]
    },
  ]
}
