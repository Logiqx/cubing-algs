var algSet = {
  "header":
  {
    "id": "F2L",
    "name": "First Two Layers",
    "desc": "This page lists the 42 basic [F2L] cases with intuitive solutions that can be used during [CFOP] solves. It is important to understand how the intuitive approach works and how it is all about setting up a basic pair (i.e. cases 1-4) which can then be inserted using a single trigger. To benefit from empty / unsolved slots you may be able to utilise an alternative setup to avoid one or more cube rotations but this skill will naturally develop with experience. You may also notice that almost half of the cases below are actually mirrors of each other and can therefore be solved using the same approach. All cases can also be solved in an identically manner for front-right / back-left and back-right / front-left slots, thus avoiding the need for a y2 rotation. These variations can be thought of as the same F2L case but executed from a different angle. Intuitive F2L is in contrast to advanced F2L which incorporates algorithmic solutions for the full range of scenarios that may be encountered during a CFOP solve.",
    "wiki": "https://www.speedsolving.com/wiki/index.php/F2L",
    "algdb": "http://algdb.net/puzzle/333/f2l/",
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
      "id": "1",
      "name": "Same Colour on Top",
      "desc": "Cases 1 and 2 are simple [F2L] insertions.",
      "wiki": "",
      "algdb": "f2l1",
      "image": "F2L-01",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U (R U' R')",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U (L U' L')",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "2",
      "name": "Same Colour on Top",
      "desc": "Cases 1 and 2 are simple [F2L] insertions.",
      "wiki": "",
      "algdb": "f2l2",
      "image": "F2L-02",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U' (R' U R)",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y U' (L' U L)",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d' (L' U L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "3",
      "name": "Different Colours on Top",
      "desc": "Cases 3 and 4 are simple [F2L] insertions.",
      "wiki": "",
      "algdb": "f2l3",
      "image": "F2L-03",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' (R' U' R)",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y (L' U' L)",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "4",
      "name": "Different Colours on Top",
      "desc": "Cases 3 and 4 are simple [F2L] insertions.",
      "wiki": "",
      "algdb": "f2l4",
      "image": "F2L-04",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "(R U R')",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U L')",
          "desc": "Simple trigger",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "5",
      "name": "Same Colour on Top",
      "desc": "Cases 5 and 6 are solved by hiding the corner and repositioning the edge to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l5",
      "image": "F2L-05",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U' (R U R') U2 (R U' R')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U' (L U L') U2 (L U' L')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "6",
      "name": "Same Colour on Top",
      "desc": "Cases 5 and 6 are solved by hiding the corner and repositioning the edge to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l6",
      "image": "F2L-06",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U (R' U' R) U2' (R' U R)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d (R' U' R) U2' (R' U R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y U (L' U' L) U2' (L' U L)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "7",
      "name": "Same Colour on Top",
      "desc": "Cases 7 and 8 are solved by hiding the corner and repositioning the edge to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l7",
      "image": "F2L-07",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U' (R U2' R') U2 (R U' R')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U' (L U2 L') U2 (L U' L')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "8",
      "name": "Same Colour on Top",
      "desc": "Cases 7 and 8 are solved by hiding the corner and repositioning the edge to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l8",
      "image": "F2L-08",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U (R' U2 R) U2' (R' U R)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d (R' U2 R) U2' (R' U R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y U (L' U2 L) U2' (L' U L)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "9",
      "name": "Different Colours on Top",
      "desc": "Cases 9 and 10 are solved by hiding the corner (or edge) and repositioning the other piece to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l9",
      "image": "F2L-09",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U (R' U' R) U' (R' U' R)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d (R' U' R) U' (R' U' R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y U (L' U' L) U' (L' U' L)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y' U2' (R' U R) U (R' U' R)",
          "desc": "Hide edge, reposition corner",
          "status": 1,
          "uses": []
        },
        {
          "alg": "y U2' (L' U L) U (L' U' L)",
          "desc": "Hide edge, reposition corner",
          "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "10",
      "name": "Different Colours on Top",
      "desc": "Cases 9 and 10 are solved by hiding the corner (or edge) and repositioning the other piece to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l10",
      "image": "F2L-10",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U' (R U R') U (R U R')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U' (L U L') U (L U L')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "U2' (R U' R') U' (R U R')",
          "desc": "Hide edge, reposition corner",
          "status": 1,
          "uses": []
        },
        {
          "alg": "y2 U (L U' L') U' (L U L')",
          "desc": "Hide edge, reposition corner",
          "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "11",
      "name": "Different Colours on Top",
      "desc": "Cases 11 and 12 are solved by splitting the pieces apart to set up a regular insertion. Empty slots can often be used to avoid unnecessary cube rotations.",
      "wiki": "",
      "algdb": "f2l11",
      "image": "F2L-11",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U' (R U2' R') U y' (R' U' R)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "U' (R U2' R') d (R' U' R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y2 U' (L U2 L') U y' (L' U' L)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "y2 U' (L U2 L') d (L' U' L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "12",
      "name": "Different Colours on Top",
      "desc": "Cases 11 and 12 are solved by splitting the pieces apart to set up a regular insertion. Empty slots can often be used to avoid unnecessary cube rotations.",
      "wiki": "",
      "algdb": "f2l12",
      "image": "F2L-12",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U (R' U2 R) U' y (R U R')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d (R' U2 R) d' (R U R')",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y U (L' U2 L) U' y (L U L')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "y U (L' U2 L) d' (L U L')",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "13",
      "name": "Different Colours on Top",
      "desc": "Cases 13 and 14 are solved by splitting the pieces apart to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l13",
      "image": "F2L-13",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U (R' U R) U' (R' U' R)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d (R' U R) U' (R' U' R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y U (L' U L) U' (L' U' L)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "14",
      "name": "Different Colours on Top",
      "desc": "Cases 13 and 14 are solved by splitting the pieces apart to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l14",
      "image": "F2L-14",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U' (R U' R') U (R U R')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "U (L U' L') U (L U L')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "15",
      "name": "Same Colour on Top",
      "desc": "Cases 15 and 16 are solved by splitting the pieces apart to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l15",
      "image": "F2L-15",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' (R' U R) U2' y (R U R')",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y (L' U L) U2' y (L U L')",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "16",
      "name": "Same Colour on Top",
      "desc": "Cases 15 and 16 are solved by splitting the pieces apart to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l16",
      "image": "F2L-16",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "(R U' R') U2 y' (R' U' R)",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U' L') U2 y' (L' U' L)",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "17",
      "name": "Cross Colour on Top",
      "desc": "Cases 17 and 18 are solved by hiding the edge and splitting the pieces apart to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l17",
      "image": "F2L-17",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "(R U2' R') U' (R U R')",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U2 L') U' (L U L')",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "18",
      "name": "Cross Colour on Top",
      "desc": "Cases 17 and 18 are solved by hiding the edge and splitting the pieces apart to set up a regular insertion.",
      "wiki": "",
      "algdb": "f2l18",
      "image": "F2L-18",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' (R' U2 R) U (R' U' R)",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y (L' U2 L) U (L' U' L)",
          "desc": "Split pair by going over",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "19",
      "name": "Cross Colour on Top",
      "desc": "Cases 19 and 20 are solved by hiding the edge and making the pair on the side.",
      "wiki": "",
      "algdb": "f2l19",
      "image": "F2L-19",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U (R U2' R') U (R U' R')",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U (L U2 L') U (L U' L')",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "20",
      "name": "Cross Colour on Top",
      "desc": "Cases 19 and 20 are solved by hiding the edge and making the pair on the side.",
      "wiki": "",
      "algdb": "f2l20",
      "image": "F2L-20",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U' (R' U2 R) U' (R' U R)",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y U' (L' U2 L) U' (L' U L)",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d' (L' U2 L) U' (L' U L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "21",
      "name": "Cross Colour on Top",
      "desc": "Cases 21 and 22 are solved by hiding the edge and making the pair on the side.",
      "wiki": "",
      "algdb": "f2l21",
      "image": "F2L-21",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U2 (R U R') U (R U' R')",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U2 (L U L') U (L U' L')",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "22",
      "name": "Cross Colour on Top",
      "desc": "Cases 21 and 22 are solved by hiding the edge and making the pair on the side.",
      "wiki": "",
      "algdb": "f2l22",
      "image": "F2L-22",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U2 (R' U' R) U' (R' U R)",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y U2 (L' U' L) U' (L' U L)",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "23",
      "name": "Cross Colour on Top",
      "desc": "Cases 23 and 24 cannot be solved with two simple triggers, despite both pieces being in the U-layer.",
      "wiki": "",
      "algdb": "f2l23",
      "image": "F2L-23",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U (R U' R') U' (R U' R') U (R U' R')",
          "desc": "Split pieces then make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U (L U' L') U' (L U' L') U (L U' L')",
          "desc": "Split pieces then make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "24",
      "name": "Cross Colour on Top",
      "desc": "Cases 23 and 24 cannot be solved with two simple triggers, despite both pieces being in the U-layer.",
      "wiki": "",
      "algdb": "f2l24",
      "image": "F2L-24",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U' (R' U R) U (R' U R) U' (R' U R)",
          "desc": "Split pieces then make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y U' (L' U L) U (L' U L) U' (L' U L)",
          "desc": "Split pieces then make pair on side",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d' (L' U L) U (L' U L) U' (L' U L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "25",
      "name": "Corner in Slot",
      "desc": "Cases 25 and 26 can be solved in the same way as second layer edges in the [LBL] method.",
      "wiki": "",
      "algdb": "f2l25",
      "image": "F2L-25",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U' (R' U R) U y (R U' R')",
          "desc": "[LBL] solution",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y U' (L' U L) U y (L U' L')",
          "desc": "[LBL] solution",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d' (L' U L) U y (L U' L')",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "26",
      "name": "Corner in Slot",
      "desc": "Cases 25 and 26 can be solved in the same way as second layer edges in the [LBL] method.",
      "wiki": "",
      "algdb": "f2l26",
      "image": "F2L-26",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U (R U' R') U' y' (R' U R)",
          "desc": "[LBL] solution",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U (L U' L') U' y' (L' U L)",
          "desc": "[LBL] solution",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "27",
      "name": "Corner in Slot",
      "desc": "Cases 27 and 28 are solved by hiding the edge and making the pair on the side.",
      "wiki": "",
      "algdb": "f2l27",
      "image": "F2L-27",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "(R U' R') U (R U' R')",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U' L') U (L U' L')",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "28",
      "name": "Corner in Slot",
      "desc": "Cases 27 and 28 are solved by hiding the edge and making the pair on the side.",
      "wiki": "",
      "algdb": "f2l28",
      "image": "F2L-28",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' (R' U R) U' (R' U R)",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y (L' U L) U' (L' U L)",
          "desc": "Hide edge to make pair on side",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "(R U R') U2 y' (R' U R)",
          "desc": "Connect pieces with single trigger",
          "status": 1,
          "uses": []
        },
        {
          "alg": "y2 (L U L') U2 y' (L' U L)",
          "desc": "Connect pieces with single trigger",
          "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "29",
      "name": "Corner in Slot",
      "desc": "Cases 29 and 30 can be solved by executing the [double-sexy] move.",
      "wiki": "",
      "algdb": "f2l29",
      "image": "F2L-29",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' (R' U' R) U (R' U' R)",
          "desc": "[double-sexy] move",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y (L' U' L) U (L' U' L)",
          "desc": "[double-sexy] move (lefty)",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "30",
      "name": "Corner in Slot",
      "desc": "Cases 29 and 30 can be solved by executing the [double-sexy] move.",
      "wiki": "",
      "algdb": "f2l30",
      "image": "F2L-30",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "(R U R') U' (R U R')",
          "desc": "[double-sexy] move",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U L') U' (L U L')",
          "desc": "[double-sexy] move (lefty)",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "31",
      "name": "Edge in Slot",
      "desc": "Case 31 can be solved by extracting the pair and inserting it normally.",
      "wiki": "",
      "algdb": "f2l31",
      "image": "F2L-31",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "(R U' R') U y' (R' U R)",
          "desc": "Extract pair then insert normally",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "(R U' R') d (R' U R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y2 (L U' L') U y' (L' U L)",
          "desc": "Extract pair then insert normally",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "y2 (L U' L') d (L' U L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "32",
      "name": "Edge in Slot",
      "desc": "Case 32 can be solved by executing the [sexy] move (or the inverse) three times.",
      "wiki": "",
      "algdb": "f2l32",
      "image": "F2L-32",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "(U R U' R') (U R U' R') (U R U' R')",
          "desc": "Reverse [triple-sexy] move",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (U L U' L') (U L U' L') (U L U' L')",
          "desc": "Reverse [triple-sexy] move (lefty)",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "(R U R' U') (R U R' U') (R U R' U')",
          "desc": "[triple-sexy] move",
          "status": -1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U L' U') (L U L' U') (L U L' U')",
          "desc": "[triple-sexy] move",
          "status": -1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "33",
      "name": "Edge in Slot",
      "desc": "Case 33 can be solved by bringing the edge into the top layer to set up a simple pair.",
      "wiki": "",
      "algdb": "f2l33",
      "image": "F2L-33",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U' (R U' R') U2 (R U' R')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 U' (L U' L') U2 (L U' L')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "34",
      "name": "Edge in Slot",
      "desc": "Case 34 can be solved by bringing the edge into the top layer to set up a simple pair.",
      "wiki": "",
      "algdb": "f2l34",
      "image": "F2L-34",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U (R U R') U2 (R U R')",
          "desc": "Bring edge to top",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "U (L U L') U2 (L U L')",
          "desc": "Bring edge to top",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y' U (R' U R) U2' (R' U R)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "d (R' U R) U2' (R' U R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y U (L' U L) U2' (L' U L)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "35",
      "name": "Edge in Slot",
      "desc": "Case 35 can be solved by bringing the edge into the top layer to set up a simple pair.",
      "wiki": "",
      "algdb": "f2l35",
      "image": "F2L-35",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "U' (R U R') U y' (R' U' R)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "U' (R U R') d (R' U' R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y2 U' (L U L') U y' (L' U' L)",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "y2 U' (L U L') d (L' U' L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "U2 (R U R') U' y' (R' U R)",
          "desc": "Connect pieces with single trigger",
          "status": 1,
          "uses": []
        },
        {
          "alg": "y2 U2 (L U L') U' y' (L' U L)",
          "desc": "Connect pieces with single trigger",
          "status": 1,
          "uses": []
        },
      ]
    },
    {
      "id": "36",
      "name": "Edge in Slot",
      "desc": "Case 36 can be solved by bringing the edge into the top layer to set up a simple pair.",
      "wiki": "",
      "algdb": "f2l36",
      "image": "F2L-36",
      "prob": "2/75",
      "algs":
      [
        {
          "alg": "y' U (R' U' R) U' y (R U R')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "d (R' U' R) d' (R U R')",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y U (L' U' L) U' y (L U L')",
          "desc": "Hide corner, reposition edge",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "y U (L' U' L) d' (L U L')",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "37",
      "name": "Both Pieces in Slot",
      "desc": "This is the solved case.",
      "wiki": "",
      "algdb": "f2l37",
      "image": "F2L-37",
      "prob": "1/150",
      "algs":
      [
      ]
    },
    {
      "id": "38",
      "name": "Both Pieces in Slot",
      "desc": "Case 38 can be solved by bringing the pieces into the top layer (separated) to set up an easier [F2L] case.",
      "wiki": "",
      "algdb": "f2l38",
      "image": "F2L-38",
      "prob": "1/150",
      "algs":
      [
        {
          "alg": "(R U' R') U y' (R' U2 R) U2' (R' U R)",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "(R U' R') d (R' U2 R) U2' (R' U R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y2 (L U' L') U y' (L' U2 L) U2' (L' U L)",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "y2 (L U' L') d (L' U2 L) U2' (L' U L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "39",
      "name": "Both Pieces in Slot",
      "desc": "Case 39 can be solved by bringing the pieces into the top layer (separated) to set up an easier [F2L] case.",
      "wiki": "",
      "algdb": "f2l39",
      "image": "F2L-39",
      "prob": "1/150",
      "algs":
      [
        {
          "alg": "(R U' R') U' (R U R') U2 (R U' R')",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U' L') U' (L U L') U2 (L U' L')",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "40",
      "name": "Both Pieces in Slot",
      "desc": "Case 40 can be solved by bringing the pieces into the top layer (separated) to set up an easier [F2L] case.",
      "wiki": "",
      "algdb": "f2l40",
      "image": "F2L-40",
      "prob": "1/150",
      "algs":
      [
        {
          "alg": "(R U' R') U (R U2' R') U (R U' R')",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U' L') U (L U2' L') U (L U' L')",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "41",
      "name": "Both Pieces in Slot",
      "desc": "Case 41 can be solved by bringing the pieces into the top layer (separated) to set up an easier [F2L] case.",
      "wiki": "",
      "algdb": "f2l41",
      "image": "F2L-41",
      "prob": "1/150",
      "algs":
      [
        {
          "alg": "(R U' R') U y' (R' U' R) U' (R' U' R)",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "(R U' R') d (R' U' R) U' (R' U' R)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
        {
          "alg": "y2 (L U' L') U y' (L' U' L) U' (L' U' L)",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"],
          "vars":
          [
            {
              "alg": "y2 (L U' L') d (L' U' L) U' (L' U' L)",
              "desc": "Some people prefer \"d\" moves",
              "status": 1,
              "uses": []
            },
          ]
        },
      ]
    },
    {
      "id": "42",
      "name": "Both Pieces in Slot",
      "desc": "Case 42 can be solved by bringing the pieces into the top layer (separated) to set up an easier [F2L] case.",
      "wiki": "",
      "algdb": "f2l42",
      "image": "F2L-42",
      "prob": "1/150",
      "algs":
      [
        {
          "alg": "(R U' R') U2 y' (R' U' R) U' (R' U R)",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "y2 (L U' L') U2 y' (L' U' L) U' (L' U L)",
          "desc": "Separate pieces into the top layer",
          "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
  ],
  "views":
  [
    {
      "id": "simple",
      "name": "Simple Groups",
      "desc": "The groups below are based on the location of the corner and the edge pieces.",
      "groups":
      [
        {
          "id": "scfu",
          "name": "Same Colour on Top",
          "desc": "These cases are typically solved by hiding the corner and repositioning the edge, typically setting up case 1 or 2.",
          "cases": ["1", "2", "5", "6", "7", "8", "15", "16"]
        },
        {
          "id": "dcfu",
          "name": "Different Colours on Top",
          "desc": "These cases are typically solved by hiding the corner and repositioning the edge, setting up case 3 or 4.",
          "cases": ["4", "3", "10", "9", "14", "13", "12", "11"]
        },
        {
          "id": "ccfu",
          "name": "Cross Colour on Top",
          "desc": "These cases are typically solved by hiding the edge and repositioning the corner.",
          "cases": ["19", "20", "21", "22", "17", "18", "23", "24"]
        },
        {
          "id": "cset",
          "name": "Corner in Slot, Edge on Top",
          "desc": "These cases may be solved using a number of approaches.",
          "cases": ["30", "29", "27", "28", "25", "26"]
        },
        {
          "id": "ctes",
          "name": "Corner on Top, Edge in Slot",
          "desc": "These cases may be solved using a number of approaches.",
          "cases": ["32", "31", "33", "35", "34", "36"]
        },
        {
          "id": "bps",
          "name": "Both Pieces in Slot",
          "desc": "These cases are typically solved by separating both pieces as they are moved into the top layer.",
          "cases": ["37", "38", "39", "41", "40", "42"]
        },
      ]
    },
    {
      "id": "wiki",
      "name": "Wiki Groups",
      "desc": "The groups below match the Speedsolving.com Wiki and are often based on how the cases are typically solved.",
      "groups":
      [
        {
          "id": "wiki1",
          "name": "Easy Cases",
          "desc": "These cases are the four simplest [F2L] insertions - i.e. 3 move triggers.",
          "wiki": "#Easy_Cases",
          "cases": ["1", "2", "3", "4"]
        },
        {
          "id": "wiki2",
          "name": "Reposition Edge",
          "desc": "These cases are all solved by hiding the corner and repositioning the edge to set up a regular insertion.",
          "wiki": "#Reposition_Edge",
          "cases": ["5", "6", "7", "8"]
        },
        {
          "id": "wiki3",
          "name": "Reposition Edge and Flip Corner",
          "desc": "These cases are typically solved by hiding the corner and repositioning the edge to set up a regular insertion.",
          "wiki": "#Reposition_Edge_and_Flip_Corner",
          "cases": ["9", "10", "11", "12", "13", "14"]
        },
        {
          "id": "wiki4",
          "name": "Split Pair by Going Over",
          "desc": "These cases are all solved by hiding the edge and splitting up the pieces to set up a regular insertion.",
          "wiki": "#Split_Pair_by_Going_Over",
          "cases": ["15", "16", "17", "18"]
        },
        {
          "id": "wiki5",
          "name": "Pair Made on Side",
          "desc": "These cases are all solved by hiding the edge and making the pair on the side, leading to a regular insertion.",
          "wiki": "#Pair_Made_on_Side",
          "cases": ["19", "20", "21", "22"]
        },
        {
          "id": "wiki6",
          "name": "Weird",
          "desc": "These cases have are \"weird\" because they cannot be solved with two simple triggers, despite both pieces being in the U-layer.",
          "wiki": "#Weird",
          "cases": ["23", "24"]
        },
        {
          "id": "wiki7",
          "name": "Corner in Place, Edge in U Face",
          "desc": "These cases may be solved using a number of approaches.",
          "wiki": "#Corner_in_Place.2C_Edge_in_U_Face",
          "cases": ["25", "26", "27", "28", "29", "30"]
        },
        {
          "id": "wiki8",
          "name": "Edge in Place, Corner in U face",
          "desc": "These cases may be solved using a number of approaches.",
          "wiki": "#Edge_in_Place.2C_Corner_in_U_face",
          "cases": ["31", "32", "33", "34", "35", "36"]
        },
        {
          "id": "wiki9",
          "name": "Edge and Corner in Place",
          "desc": "These cases are typically solved by separating both pieces as they are moved into the top layer.",
          "wiki": "#Edge_and_Corner_in_Place",
          "cases": ["37", "38", "39", "40", "41", "42"]
        },
      ]
    },
    {
      "id": "edge",
      "name": "Edge Orientation",
      "desc": "The groups below are based on the \"orientation\" of the edge piece. If the edge is in the top layer it's orientation can switched by a cube rotation (i.e. y or y')",
      "groups":
      [
        {
          "id": "good",
          "name": "Good Edge",
          "desc": "An edge is considered \"good\" (AKA \"oriented\") if it can be solved with an [RU] algorithm (or left-handed mirror) without rotations.",
          "cases": ["1", "4", "5", "7", "10",
                    "12", "14", "15", "17", "19",
                    "21", "23", "25", "27", "30",
                    "32", "33", "34", "37", "39", "40"]
        },
        {
          "id": "bad",
          "name": "Bad Edge",
          "desc": "An edge is considered \"bad\" (AKA \"unoriented\") if it cannot be solved with an [RU] algorithm (or left-handed mirror) without rotations.",
          "cases": ["2", "3", "6", "8", "9",
                    "11", "13", "16", "18", "20",
                    "22", "24", "26", "28", "29",
                    "31", "35", "36", "38", "41", "42"]
        },
      ]
    },
    {
      "id": "numeric",
      "name": "Numeric",
      "desc": "The \"numeric\" view simply lists all of the cases sorted numerically.",
      "groups":
      [
        {
          "id": "Numerical",
          "name": "",
          "cases": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
                    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
                    "41", "42"]
        },
      ]
    },
  ]
}
