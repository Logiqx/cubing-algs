var algSet = {
  "header":
  {
    "id": "PPLL",
    "name": "Parity Permutation of the Last Layer",
    "desc": "TODO.",
    "wiki": "https://www.speedsolving.com/wiki/index.php/4x4x4_parity_algorithms",
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
      "id": "Opp",
      "name": "Opp-Parity",
      "desc": "This is just an opposite dedge swap.",
      "wiki": "#Opposite",
      "algdb": "",
      "image": "PPLL-Opp",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "Uw2 Rw2 U2 r2 U2 Rw2 Uw2",
          "desc": "Opposite dedge swap",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Adj",
      "name": "Adj-Parity",
      "desc": "This is just an adjacent dedge swap.",
      "wiki": "#Adjacent",
      "algdb": "",
      "image": "PPLL-Adj",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "R U R' U' + Opp-Parity + U' R U' R'",
          "desc": "[Conjugate] of opposite swap - [R U R' U': Opp]",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ac",
      "name": "Ac-Perm",
      "desc": "Inverse and reflection of Ad.<br/><br/>Applying the opposite edge swap will result in an A-Perm.",
      "wiki": "#Ca",
      "algdb": "",
      "image": "PPLL-Ac",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Opp-Parity + U + Aa-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ad",
      "name": "Ad-Perm",
      "desc": "Inverse and reflection of Ac.<br/><br/>Applying the opposite edge swap will result in an A-Perm.",
      "wiki": "#Cb",
      "algdb": "",
      "image": "PPLL-Ad",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Opp-Parity + U2 + Ab-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ea",
      "name": "Ea-Perm",
      "desc": "Applying the opposite edge swap will result in an E-Perm.",
      "wiki": "#Xi_.28.CE.9E.29_permutation",
      "algdb": "",
      "image": "PPLL-Ea",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Opp-Parity + E-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Eb",
      "name": "Eb-Perm",
      "desc": "Applying the opposite edge swap will result in an E-Perm.",
      "wiki": "#Theta_.28.CE.B8.29_permutation",
      "algdb": "",
      "image": "PPLL-Eb",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "F R U' R U' R U R' F' + Opp-Parity + R U R' U' R' F R F'",
          "desc": "Parity within Y-Perm - [mounted-fish] + [sexy-sledge]",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jc",
      "name": "Jc-Perm",
      "desc": "Inverse and reflection of Jd.<br/><br/>Applying the opposite edge swap will result in a Ja-Perm or Ga-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Jc",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Jb-Perm + U' + Opp-Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jd",
      "name": "Jd-Perm",
      "desc": "Inverse and reflection of Jc.<br/><br/>Applying the opposite edge swap will result in a Jb-Perm or Gc-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Jd",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Opp-Parity + Jb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Je",
      "name": "Je-Perm",
      "desc": "Inverse of Re. Reflection of Jf.<br/><br/>Applying the opposite edge swap will result in a Ja-Perm or Ga-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Je",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' + Opp-Parity + Ja-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jf",
      "name": "Jf-Perm",
      "desc": "Inverse of Rf. Reflection of Je.<br/><br/>Applying the opposite edge swap will result in a Jb-Perm or Gc-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Jf",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' + Opp-Parity + U + Jb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "N",
      "name": "N-Perm",
      "desc": "Applying the opposite edge swap will result in an N-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-N",
      "prob": "1/36",
      "algs" :
      [
        {
          "alg": "F R U' R U' R U R' F' U' + Opp-Parity + U R U R' U' R' F R F'",
          "desc": "Parity within Y-Perm - [mounted-fish] + [sexy-sledge]",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Oa",
      "name": "Oa-Perm",
      "desc": "Inverse and reflection of Ob.<br/><br/>Applying the opposite edge swap will result in a Z-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Oa",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Z-Perm + AUF + Opp-Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ob",
      "name": "Ob-Perm",
      "desc": "Inverse and reflection of Oa.<br/><br/>Applying the opposite edge swap will result in a Z-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Ob",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Z-Perm + AUF + Opp-Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rc",
      "name": "Rc-Perm",
      "desc": "Inverse and reflection of Rd.<br/><br/>Applying the opposite edge swap will result in a Ra-Perm or Gd-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Rc",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Opp-Parity + Ra-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rd",
      "name": "Rd-Perm",
      "desc": "Inverse and reflection of Rc.<br/><br/>Applying the opposite edge swap will result in a Rb-Perm or Gb-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Rd",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Opp-Parity + U' + Rb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Re",
      "name": "Re-Perm",
      "desc": "Inverse of Je. Reflection of Rf.<br/><br/>Applying the opposite edge swap will result in a Ra-Perm or Gd-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Re",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' + Opp-Parity + U + Ra-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rf",
      "name": "Rf-Perm",
      "desc": "Inverse of Jf. Reflection of Re.<br/><br/>Applying the opposite edge swap will result in a Rb-Perm or Gb-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Rf",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' + Opp-Parity + Rb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ta",
      "name": "Ta-Perm",
      "desc": "Applying the opposite edge swap will result in a T-Perm or F-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Ta",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Opp-Parity + T-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Tb",
      "name": "Tb-Perm",
      "desc": "Applying the opposite edge swap will result in a T-Perm or F-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Tb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' + Opp-Parity + U + T-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "W",
      "name": "W-Perm",
      "desc": "Applying the opposite edge swap will result in a U-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-W",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "Opp-Parity + AUF + U-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ya",
      "name": "Ya-Perm",
      "desc": "Reflection of Yb.<br/><br/>Applying the opposite edge swap will result in a Y-Perm or V-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Ya",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U + Y-Perm + Opp-Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Yb",
      "name": "Yb-Perm",
      "desc": "Reflection of Ya.<br/><br/>Applying the opposite edge swap will result in a Y-Perm or V-Perm.",
      "wiki": "",
      "algdb": "",
      "image": "PPLL-Yb",
      "prob": "1/18",
      "algs" :
      [
        {
          "alg": "U' + Y-Perm + U' + Opp-Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
  ],
  "views":
  [
    {
      "id": "letters",
      "name": "Letters",
      "desc": "The \"letters\" view simply lists all of the cases sorted alphabetically.",
      "groups":
      [
        {
          "id": "parities",
          "name": "Edge Parities",
          "cases": ["Opp", "Adj"]
        },
        {
          "id": "a",
          "name": "A-Perms",
          "cases": ["Ac", "Ad"]
        },
        {
          "id": "e",
          "name": "E-Perms",
          "cases": ["Ea", "Eb"]
        },
        {
          "id": "j",
          "name": "J-Perms",
          "cases": ["Jc", "Jd", "Je", "Jf"]
        },
        {
          "id": "n",
          "name": "N-Perm",
          "cases": ["N"]
        },
        {
          "id": "o",
          "name": "O-Perms",
          "cases": ["Oa", "Ob"]
        },
        {
          "id": "r",
          "name": "R-Perms",
          "cases": ["Rc", "Rd", "Re", "Rf"]
        },
        {
          "id": "t",
          "name": "T-Perms",
          "cases": ["Ta", "Tb"]
        },
        {
          "id": "w",
          "name": "W-Perm",
          "cases": ["W"]
        },
        {
          "id": "y",
          "name": "Y-Perms",
          "cases": ["Ya", "Yb"]
        },
      ]
    },
    {
      "id": "pieces",
      "name": "Pieces",
      "desc": "The \"pieces\" view groups cases based on the type of pieces that they permute; i.e. edges and / or corners.",
      "groups":
      [
        {
          "id": "2edges",
          "name": "Two Edges",
          "desc": "TODO.",
          "wiki": "#Two_dedges_.28oriented.29",
          "cases": ["Opp", "Adj"]
        },
        {
          "id": "4edges",
          "name": "Four Edges",
          "desc": "TODO.",
          "wiki": "#Four_dedges_.28oriented.29",
          "cases": ["Oa", "Ob", "W"]
        },
        {
          "id": "2corners",
          "name": "Two Corners",
          "desc": "TODO.",
          "wiki": "#Two_corner_swaps",
          "cases": ["Tb", "N"]
        },
        {
          "id": "both",
          "name": "Edges + Corners",
          "desc": "TODO.",
          "wiki": "#Two_corner_swap_and_a_dedge_3-cycle",
          "cases": ["Ac", "Ad", "Ea", "Eb", "Jc", "Jd", "Je", "Jf", "Rc", "Rd", "Re", "Rf", "Ta", "Ya", "Yb"]
        },
      ]
    },
    {
      "id": "corners",
      "name": "Corners",
      "desc": "The \"corners\" view groups cases based on the corner permutation; i.e. no swap, adjacent swap or diagonal swap.",
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Corner Swap",
          "desc": "TODO.",
          "cases": ["Opp", "Adj", "Oa", "Ob", "W"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Corner Swap",
          "desc": "TODO.",
          "cases": ["Ac", "Ad", "Jc", "Jd", "Je", "Jf", "Rc", "Rd", "Re", "Rf", "Ta", "Tb"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Corner Swap",
          "desc": "TODO.",
          "cases": ["Ya", "Yb", "Ea", "Eb", "N"]
        },
      ]
    },
  ]
}
