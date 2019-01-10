var algSet = {
  "header":
  {
    "id": "PPLL",
    "name": "Parity Permutation of the Last Layer",
    "desc": "This pages shows the 22 cases where PLL parity also needs to be solved. There isn't a universally accepted naming convention but the most popular case names originate from the <a href=\"https://www.speedsolving.com/wiki/index.php/4x4x4_parity_algorithms#PLL_Parity\">Speedsolving Wiki</a> and <a href=\"http://hem.bredband.net/_zlv_/rubiks/4x4/444pllpar.html\">Stefan Lidström</a>. I've used the universally accepted case names where corners are already solved (Opp, Adj, Oa, Ob, W) but I've named the 16 remaining cases according to the best underlying [PLL].",
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
      "name": "Opp",
      "desc": "This is just an opposite edge swap.",
      "wiki": "#Opposite",
      "algdb": "",
      "image": "PPLL-Opp",
      "prob": "1/36",
      "algs":
      [
        {
          "alg": "r2 U2 r2 Uw2 r2 Uw2",
          "desc": "Traditional / popular algorithm",
          "status": 1,
          "uses": ["2H"],
          "vars":
          [
            {
              "alg": "(Lw Rw 3Lw' R') U2 (Lw Rw 3Lw' R') Uw2 (Lw Rw 3Lw' R') Uw2",
              "desc": "Execution from CubeSkills (Feliks Zemdegs)",
              "status": 1,
              "uses": []
            }
          ]
        },
        {
          "alg": "Uw2 Rw2 U2 r2 U2 Rw2 Uw2",
          "desc": "[Conjugate] - [Uw2 Rw2 U2: r2]",
          "status": 1,
          "uses": ["2H"],
          "vars":
          [
            {
              "alg": "Uw2 (Lw' Rw') B2' (Lw Rw 3Lw' R') B2' (Lw Rw) Uw2",
              "desc": "Inspiration from CubeSkills (Feliks Zemdegs)",
              "status": 1,
              "uses": []
            }
          ]
        },
        {
          "alg": "Rw2 F2 U2 r2 U2 F2 Rw2",
          "desc": "[Conjugate] - [Rw2 F2 U2: r2]",
          "status": 1,
          "uses": ["2H"],
          "vars":
          [
            {
              "alg": "Rw2' F2 U2' Rw2 R2' U2' F2 Rw2",
              "desc": "This algorithm is also useful during [L2E] on 5x5x5",
              "status": 1,
              "uses": []
            }
          ]
        },
      ]
    },
    {
      "id": "Adj",
      "name": "Adj",
      "desc": "This is just an adjacent edge swap.",
      "wiki": "#Adjacent",
      "algdb": "",
      "image": "PPLL-Adj",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "R U R' U' + Parity + U' R U' R'",
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
      "algs":
      [
        {
          "alg": "Parity + U + Aa-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + U' + Ab-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
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
      "algs":
      [
        {
          "alg": "U2 + Parity + Ab-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U + Parity + Aa-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
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
      "algs":
      [
        {
          "alg": "E-Perm + Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + E-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "R' F R U R' U' R' F' R U R U' + Parity + U' 3Rw U R' U' 3Rw' F R F'",
          "desc": "Interesting discovery but fairly useless!",
          "status": -1,
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
      "algs":
      [
        {
          "alg": "F R U' R U' R U R' F' + Parity + R U R' U' R' F R F'",
          "desc": "Parity within Y-Perm - [mounted-fish] + [sexy-sledge]",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + U' + E-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jc",
      "name": "Jc-Perm",
      "desc": "Inverse and reflection of Jd.<br/><br/>Applying the opposite edge swap will result in a Ja-Perm (shown) or Ga-Perm.",
      "wiki": "#Ka",
      "algdb": "",
      "image": "PPLL-Jc",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "Jb-Perm + U' + Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + Ja-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + U + Ga-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jd",
      "name": "Jd-Perm",
      "desc": "Inverse and reflection of Jc.<br/><br/>Applying the opposite edge swap will result in a Jb-Perm (shown) or Gc-Perm.",
      "wiki": "#Kb",
      "algdb": "",
      "image": "PPLL-Jd",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "Parity + Jb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + U' + Gc-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Je",
      "name": "Je-Perm",
      "desc": "Inverse of Re. Reflection of Jf.<br/><br/>Applying the opposite edge swap will result in a Ja-Perm (shown) or Ga-Perm.",
      "wiki": "#Pd",
      "algdb": "",
      "image": "PPLL-Je",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U' + Parity + Ja-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + Ga-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jf",
      "name": "Jf-Perm",
      "desc": "Inverse of Rf. Reflection of Je.<br/><br/>Applying the opposite edge swap will result in a Jb-Perm (shown) or Gc-Perm.",
      "wiki": "#Pa",
      "algdb": "",
      "image": "PPLL-Jf",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U' + Parity + U + Jb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U2 + Parity + Gc-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "N",
      "name": "N-Perm",
      "desc": "Applying the opposite edge swap will result in an N-Perm.",
      "wiki": "#Opposite.2Fdiagonal",
      "algdb": "",
      "image": "PPLL-N",
      "prob": "1/36",
      "algs":
      [
        {
          "alg": "F R U' R U' R U R' F' U' + Parity + U R U R' U' R' F R F'",
          "desc": "Parity within Y-Perm - [mounted-fish] + [sexy-sledge]",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + Na-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + Nb-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Oa",
      "name": "Oa-Perm",
      "desc": "Inverse and reflection of Ob. This case is a counter-clockwise 4-cycle of edges.<br/><br/>Applying the opposite edge swap will result in a Z-Perm.",
      "wiki": "#Oa",
      "algdb": "",
      "image": "PPLL-Oa",
      "prob": "1/72",
      "algs":
      [
        {
          "alg": "Z-Perm + AUF + Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + AUF + Z-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ob",
      "name": "Ob-Perm",
      "desc": "Inverse and reflection of Oa. This case is a clockwise 4-cycle of edges.<br/><br/>Applying the opposite edge swap will result in a Z-Perm.",
      "wiki": "#Ob",
      "algdb": "",
      "image": "PPLL-Ob",
      "prob": "1/72",
      "algs":
      [
        {
          "alg": "Z-Perm + AUF + Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + AUF + Z-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rc",
      "name": "Rc-Perm",
      "desc": "Inverse and reflection of Rd.<br/><br/>Applying the opposite edge swap will result in a Ra-Perm (shown) or Gd-Perm.",
      "wiki": "#Db",
      "algdb": "",
      "image": "PPLL-Rc",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "Parity + Ra-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U + Parity + Gd-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rd",
      "name": "Rd-Perm",
      "desc": "Inverse and reflection of Rc.<br/><br/>Applying the opposite edge swap will result in a Rb-Perm (shown) or Gb-Perm.",
      "wiki": "#Da",
      "algdb": "",
      "image": "PPLL-Rd",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "Parity + U' + Rb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U + Parity + Gb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Re",
      "name": "Re-Perm",
      "desc": "Inverse of Je. Reflection of Rf.<br/><br/>Applying the opposite edge swap will result in a Ra-Perm (shown) or Gd-Perm.",
      "wiki": "#Pc",
      "algdb": "",
      "image": "PPLL-Re",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U' + Parity + U + Ra-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + U + Gd-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rf",
      "name": "Rf-Perm",
      "desc": "Inverse of Jf. Reflection of Re.<br/><br/>Applying the opposite edge swap will result in a Rb-Perm (shown) or Gb-Perm.",
      "wiki": "#Pb",
      "algdb": "",
      "image": "PPLL-Rf",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U' + Parity + Rb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + U + Gb-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ta",
      "name": "Ta-Perm",
      "desc": "Applying the opposite edge swap will result in a T-Perm (shown) or F-Perm.",
      "wiki": "#I_permutation",
      "algdb": "",
      "image": "PPLL-Ta",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "Parity + T-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + U + F-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Tb",
      "name": "Tb-Perm",
      "desc": "Applying the opposite edge swap will result in a T-Perm (shown) or F-Perm.",
      "wiki": "#Adjacent_3",
      "algdb": "",
      "image": "PPLL-Tb",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U' + Parity + U + T-Perm",
          "desc": "Parity followed by PLL",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + F-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "W",
      "name": "W-Perm",
      "desc": "Applying the opposite edge swap will result in a U-Perm.",
      "wiki": "#8_permutation",
      "algdb": "",
      "image": "PPLL-W",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U + Ua-Perm + Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U2 + Parity + Ua-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "Ub-Perm + Parity",
          "desc": "PLL followed by parity",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + Ub-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ya",
      "name": "Ya-Perm",
      "desc": "Reflection of Yb.<br/><br/>Applying the opposite edge swap will result in a Y-Perm (shown) or V-Perm.",
      "wiki": "#Qb",
      "algdb": "",
      "image": "PPLL-Ya",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U + Y-Perm + Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + Y-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + V-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Yb",
      "name": "Yb-Perm",
      "desc": "Reflection of Ya.<br/><br/>Applying the opposite edge swap will result in a Y-Perm (shown) or V-Perm.",
      "wiki": "#Qa",
      "algdb": "",
      "image": "PPLL-Yb",
      "prob": "1/18",
      "algs":
      [
        {
          "alg": "U' + Y-Perm + U' + Parity",
          "desc": "PLL followed by parity",
          "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "U' + Parity + U + Y-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
          "uses": ["2H"]
        },
        {
          "alg": "Parity + U' + V-Perm",
          "desc": "Parity followed by PLL",
          "status": -1,
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
          "desc": "These are the two pure edge-parity cases. I've used universally recognised case names - i.e. Opp and Adj.",
          "wiki": "#Two_dedges_.28oriented.29",
          "cases": ["Opp", "Adj"]
        },
        {
          "id": "4edges",
          "name": "Four Edges",
          "desc": "These can be reduced to a U-Perm or Z-Perm. I've used universally recognised case names - i.e Oa, Ob, W.",
          "wiki": "#Four_dedges_.28oriented.29",
          "cases": ["Oa", "Ob", "W"]
        },
        {
          "id": "2corners",
          "name": "Two Corners",
          "desc": "These are the two pure corner-parity cases and are quite striking in appearance.",
          "wiki": "#Two_corner_swaps",
          "cases": ["Tb", "N"]
        },
        {
          "id": "both",
          "name": "Edges + Corners",
          "desc": "These are the bulk of the cases and the names indicate which PLL can be used during the solution.",
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
          "desc": "I've used universally recognised case names where corners are already solved - i.e. Opp, Adj, Oa, Ob, W.",
          "cases": ["Opp", "Adj", "Oa", "Ob", "W"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Corner Swap",
          "desc": "I've chosen to name the adjecent corner swaps according to the best underlying PLL - i.e. J-Perms / R-Perms preferred over G-Perms.",
          "cases": ["Ac", "Ad", "Jc", "Jd", "Je", "Jf", "Rc", "Rd", "Re", "Rf", "Ta", "Tb"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Corner Swap",
          "desc": "All but one of the diagonal corner swap cases can be solved using a modified Y-Perm.",
          "cases": ["Ya", "Yb", "Ea", "Eb", "N"]
        },
      ]
    },
  ]
}
