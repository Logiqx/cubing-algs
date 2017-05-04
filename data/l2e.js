var algSet = {
  "header":
  {
    "id": "L2E",
    "name": "Last Two Edges",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/Set/",
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
      "name": "Solved",
      "wiki": "",
      "algdb": ".",
      "image": "L2E-A1",
      "prob": "1/24",
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
      "id": "A2",
      "name": "PLL Parity",
      "desc": "This case is the equivalent of PLL parity on a 4x4x4.",
      "wiki": "",
      "algdb": "",
      "image": "L2E-A2",
      "prob": "1/24",
      "algs" :
      [
        {
          "alg": "Rw2 F2 U2 r2 U2 F2 Rw2",
          "desc": "Pure PLL parity algorithm",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "Rw2 F2 U2 Rw2 U2 F2 Rw2",
              "desc": "Speed variation works for L2E",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "Rw' (U' R U R') (F R' F' R) Rw ...<br/>Lw (U' R U R') (F R' F' R) Lw'",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "Rw' (U' R U R') (F R' F') Rw ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lw (U' R U R') (F R' F') Lw'",
              "desc": "Some R moves can be dropped",
              "status": -1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "Rw' (U' R' U R') (F R F' R) Rw ...<br/>Lw (U' R' U R') (F R F' R) Lw'",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "Rw' (U' R' U R') (F R F') Rw ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lw (U' R' U R') (F R F') Lw'",
              "desc": "Some R moves can be dropped",
              "status": -1,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
    {
      "id": "A3",
      "name": "OLL Parity",
      "desc": "This case is the equivalent of OLL parity on a 4x4x4.",
      "wiki": "",
      "algdb": "",
      "image": "L2E-A3",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "Rw U2 x Rw U2 Rw U2 3Rw’ U2 Lw U2 Rw’ U2 Rw U2 Rw’ U2 Rw’",
          "desc": "Lucas Parity",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "A4",
      "name": "Double Parity",
      "desc": "This case is the equivalent of OLL parity + PLL parity on a 4x4x4.",
      "wiki": "",
      "algdb": ".",
      "image": "L2E-A4",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "Rw2 B2 Rw' U2 Rw' U2 x' U2 Rw' U2 Rw U2 Rw' U2 Rw2 [U2 x U2]",
          "desc": "Parity algorithm",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "A5",
      "name": "Wing Flips",
      "desc": "This case is called double parity by some people (i.e. OLL parity on both sides) but that name is misleading because the case does not contain any parity!",
      "wiki": "",
      "algdb": "",
      "image": "L2E-A5",
      "prob": "1/24",
      "algs" :
      [
        {
          "alg": "M (U' R U R') (F R' F' R) M'",
          "desc": "Intuitive hack flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "M (U' R U R') (F R' F') M'",
              "desc": "Final R can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "M (U' R' U R') (F R F' R) M'",
          "desc": "Intuitive hack flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "M (U' R' U R') (F R F') M'",
              "desc": "Final R can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "Rw' (U' R U R') (F R' F' R) Rw ...<br/>3Rw' (U' R U R') (F R' F' R) 3Rw",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "Rw' (U' R U R') (F R' F') Rw ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Rw' (U' R U R') (F R' F') 3Rw",
              "desc": "Some R moves can be dropped",
              "status": -1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "Rw' (U' R' U R') (F R F' R) Rw ...<br/>3Rw' (U' R' U R') (F R F' R) 3Rw",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "Rw' (U' R' U R') (F R F') Rw ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Rw' (U' R' U R') (F R F') 3Rw",
              "desc": "Some R moves can be dropped",
              "status": -1,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
    {
      "id": "A6",
      "name": "Wing Flips + PLL Parity",
      "desc": "This case is sometimes omitted from L2E cheat sheets (e.g. Meep and Sarah Strong).",
      "wiki": "",
      "algdb": "",
      "image": "L2E-A6",
      "prob": "1/24",
      "algs" :
      [
        {
          "alg": "F2 Rw D2 Rw' F2 U2 F2 Lw B2 Lw' [F2]",
          "desc": "Parity algorithm",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Rw' (U' R U R') (F R' F' R) Rw ...<br/>3Lw' (U' R U R') (F R' F' R) 3Lw",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "Rw' (U' R U R') (F R' F') Rw ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Lw' (U' R U R') (F R' F') 3Lw",
              "desc": "Some R moves can be dropped",
              "status": -1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "Rw' (U' R' U R') (F R F' R) Rw ...<br/>3Lw' (U' R' U R') (F R F' R) 3Lw",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "Rw' (U' R' U R') (F R F') Rw ...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Lw' (U' R' U R') (F R F') 3Lw",
              "desc": "Some R moves can be dropped",
              "status": -1,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
    {
      "id": "B1",
      "name": "Slash Pairs (A.K.A. Nb)",
      "desc": "Mirror of B2. This case is sometimes omitted from L2E cheat sheets (e.g. Big Cubes, Andy Klise, Sir Waffle).",
      "wiki": "",
      "algdb": "",
      "image": "L2E-B5",
      "prob": "1/24",
      "algs" :
      [
        {
          "alg": "Rw2 F2 U2 Rw U2 Rw2 F2 Rw U2 Rw2 U2 F2 Rw [F2]",
          "desc": "Parity algorithm - right hand dominant",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Rw2 F2 U2 Lw' U2 Lw2 F2 Lw' U2 Rw2 U2 F2 Rw [F2]",
          "desc": "Parity algorithm - left hand dominant",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "B2",
      "name": "Backslash Pairs (A.K.A. Na)",
      "desc": "Mirror of B1. This case is sometimes omitted from L2E cheat sheets (e.g. Big Cubes, Andy Klise, Sir Waffle).",
      "wiki": "",
      "algdb": "",
      "image": "L2E-B6",
      "prob": "1/24",
      "algs" :
      [
        {
          "alg": "Lw2 F2 U2 Rw U2 Rw2 F2 Rw U2 Lw2 U2 F2 Lw' [F2]",
          "desc": "Parity algorithm - right hand dominant",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Lw2 F2 U2 Lw' U2 Lw2 F2 Lw' U2 Lw2 U2 F2 Lw' [F2]",
          "desc": "Parity algorithm - left hand dominant",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "B3",
      "name": "Quite Simple Case",
      "desc": "Mirror of B4. This case is often omitted from L2E cheat sheets (e.g. Big Cubes, Andy Klise, Sir Waffle, Meep, Sarah Strong). It is solved using the \"flip-slice-flip-slice\" approach.",
      "wiki": "",
      "algdb": "",
      "image": "L2E-B3",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "B2 3Lw2 (U' R U R') (F R' F' R) 3Lw2 B2",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "B2 3Lw2 (U' R U R') (F R' F') 3Lw2",
              "desc": "Final R and B2 can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "B2 3Lw2 (U' R' U R') (F R F' R) 3Lw2 B2",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "B2 3Lw2 (U' R' U R') (F R F') 3Lw2",
              "desc": "Final R and B2 can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 B2 Rw2 (U' R U R') (F R' F' R) Rw2 B2",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 B2 Rw2 (U' R U R') (F R' F') Rw2",
              "desc": "Final R and B2 can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 B2 Rw2 (U' R' U R') (F R F' R) Rw2 B2",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 B2 Rw2 (U' R' U R') (F R F') Rw2",
              "desc": "Final R and B2 can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
    {
      "id": "B4",
      "name": "Quite Simple Case",
      "desc": "Mirror of B3. This case is often omitted from L2E cheat sheets (e.g. Big Cubes, Andy Klise, Sir Waffle, Meep, Sarah Strong). It is solved using the \"flip-slice-flip-slice\" approach.",
      "wiki": "",
      "algdb": ".",
      "image": "L2E-B4",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "B2 Lw2 (U' R U R') (F R' F' R) Lw2 B2",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "B2 Lw2 (U' R U R') (F R' F') Lw2",
              "desc": "Final R and B2 can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "B2 Lw2 (U' R' U R') (F R F' R) Lw2 B2",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "B2 Lw2 (U' R' U R') (F R F') Lw2",
              "desc": "Final R and B2 can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 B2 3Rw2 (U' R U R') (F R' F' R) 3Rw2 B2",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 B2 3Rw2 (U' R U R') (F R' F') 3Rw2",
              "desc": "Final R and B2 can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 B2 3Rw2 (U' R' U R') (F R F' R) 3Rw2 B2",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 B2 3Rw2 (U' R' U R') (F R F') 3Rw2",
              "desc": "Final R and B2 can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
    {
      "id": "B5",
      "name": "Backslash Chequers",
      "desc": "Mirror of B6.",
      "wiki": "",
      "algdb": ".",
      "image": "L2E-B1",
      "prob": "1/24",
      "algs" :
      [
        {
          "alg": "Rw U2 Rw2 U2 Rw' U2 Rw U2 Rw' U2 Rw2 U2 Rw",
          "desc": "Parity algorithm",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "B6",
      "name": "Slash Chequers",
      "desc": "Mirror of B5.",
      "wiki": "",
      "algdb": "",
      "image": "L2E-B2",
      "prob": "1/24",
      "algs" :
      [
        {
          "alg": "Rw' U2 Rw2 U2 Rw U2 Rw' U2 Rw U2 Rw2 U2 Rw'",
          "desc": "Parity algorithm",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "C1",
      "name": "Mirrored Pairs",
      "desc": "",
      "wiki": "",
      "algdb": ".",
      "image": "L2E-C1",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "Rw U2 Rw U2 F2 Rw F2 Lw’ U2 Lw U2 Rw2",
          "desc": "Parity algorithm - right hand dominant",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Lw' U2 Lw' U2 F2 Lw' F2 Rw U2 Rw' U2 Lw2",
          "desc": "Parity algorithm - left hand dominant",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "C2",
      "name": "Mirrored Chequers",
      "desc": "This case is sometimes omitted from L2E cheat sheets (e.g. Big Cubes, Andy Klise, Sir Waffle).",
      "wiki": "",
      "algdb": "",
      "image": "L2E-C2",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "Rw' U2 Rw' U2 B2 Rw' B2 Rw' F2 Lw2 F2 Rw U2 Rw2",
          "desc": "Parity algorithm",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "C3",
      "name": "Simple Case",
      "desc": "Mirror of C4. It is solved using the \"slice-flip-slice\" approach.",
      "wiki": "",
      "algdb": "",
      "image": "L2E-C3",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "3Lw (U' R U R') (F R' F' R) 3Lw'",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "3Lw (U' R U R') (F R' F') 3Lw'",
              "desc": "Final R can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "3Lw (U' R' U R') (F R F' R) 3Lw'",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "3Lw (U' R' U R') (F R F') 3Lw'",
              "desc": "Final R can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 Lw (U' R U R') (F R' F' R) Lw'",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 Lw (U' R U R') (F R' F') Lw'",
              "desc": "Final R can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 Lw (U' R' U R') (F R F' R) Lw'",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 Lw (U' R' U R') (F R F') Lw'",
              "desc": "Final R can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
    {
      "id": "C4",
      "name": "Simple Case",
      "desc": "Mirror of C3. It is solved using the \"slice-flip-slice\" approach.",
      "wiki": "",
      "algdb": ".",
      "image": "L2E-C4",
      "prob": "1/12",
      "algs" :
      [
        {
          "alg": "3Rw' (U' R U R') (F R' F' R) 3Rw",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "3Rw' (U' R U R') (F R' F') 3Rw",
              "desc": "Final R can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "3Rw' (U' R' U R') (F R F' R) 3Rw",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "3Rw' (U' R' U R') (F R F') 3Rw",
              "desc": "Final R can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 Rw' (U' R U R') (F R' F' R) Rw",
          "desc": "Intuitive solution flips UF + RF",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 Rw' (U' R U R') (F R' F') Rw",
              "desc": "Final R can be dropped",
              "status": 1,
              "uses": ["2H"]
            }
          ]
        },
        {
          "alg": "U2 Rw' (U' R' U R') (F R F' R) Rw",
          "desc": "Intuitive solution flips UF + RB",
          "status": 1,
          "uses": [],
          "vars":
          [
            {
              "alg": "U2 Rw' (U' R' U R') (F R F') Rw",
              "desc": "Final R can be dropped",
              "status": 0,
              "uses": ["2H"]
            }
          ]
        },
      ]
    },
  ],
  "views":
  [
    {
      "id": "groups",
      "name": "Groups",
      "groups":
      [
        {
          "id": "A",
          "name": "Group A - \"No Wing Swap\"",
          "wiki": "L2E",
          "desc": "These cases may help your understanding of OLL and PLL parity on a 4x4x4. The wing pieces are correctly solved but the midge pieces are invisible / internal on a 4x4.<br/><br/>Cycles via OLL parity: A1 &#8660; A3 &#8660; A5, A2 &#8660; A4 &#8660; A6. Cycles via PLL parity: A1 &#8660; A2, A3 &#8660; A4, A5 &#8660; A6.",
          "cases": ["A1", "A2", "A3", "A4", "A5", "A6"]
        },
        {
          "id": "B",
          "name": "Group B - \"Diagonal Wing Swap\"",
          "wiki": "L2E",
          "desc": "The parity cases in this group (B1, B2, B5, B6) look like they need a diagonal wing swap to turn them into A1 (solved) or A5 (wing flips).<br/><br/>Cycles via OLL parity: B1 &#8660; B3 &#8660; B5, B2 &#8660; B4 &#8660; B6. Cycles via PLL parity: B1 &#8660; B2, B3 &#8660; B4, B5 &#8660; B6.",
          "cases": ["B1", "B2", "B3", "B4", "B5", "B6"]
        },
        {
          "id": "C",
          "name": "Group C - \"Adjacent Wing Swap\"",
          "wiki": "L2E",
          "desc": "The parity cases in this group (C1, C2) look like they need an adjacent wing swap to turn them into A1 (solved) or A5 (wing flips).<br/><br/>Cycles via OLL parity: C1 &#8660; C3 &#8660; C2 &#8660; C4 &#8660; C1. Cycles via PLL parity: C1 &#8660; C2, C3 &#8660; C4.",
          "cases": ["C1", "C2", "C3", "C4"]
        },
      ]
    },
    {
      "id": "parity",
      "name": "Parity",
      "groups":
      [
        {
          "id": "even",
          "name": "Even Parity",
          "wiki": "L2E",
          "desc": "This group of cases can be solved intuitively using the \"slice-flip-slice\" approach.<br/><br/>Cycles via PLL parity: A1 &#8660; A2, A5 &#8660; A6, B3 &#8660; B4, C3 &#8660; C4.",
          "cases": ["A1", "A2", "A5", "A6", "B3", "B4", "C3", "C4"]
        },
        {
          "id": "odd",
          "name": "Odd Parity",
          "wiki": "L2E",
          "desc": "This group of cases all contain the equivalent of OLL parity on a 4x4x4.<br/><br/>Cycles via PLL parity: A3 &#8660; A4, B1 &#8660; B2, B5 &#8660; B6, C1 &#8660; C2.",
          "cases": ["A3", "A4", "B1", "B2", "B5", "B6", "C1", "C2"]
        },
      ]
    },  ]
}
