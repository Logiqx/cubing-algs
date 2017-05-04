var algSet = {
  "header":
  {
    "id": "PLL",
    "name": "2-Sided PLL Recognition",
    "desc": "This page shows the 72 patterns / features which can appear during PLL recognition.",
    "wiki": "https://www.speedsolving.com/wiki/index.php/PLL",
    "algdb": "http://algdb.net/Set/PLL/",
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
      "id": "Aa.1",
      "name": "Aa-Perm",
      "desc": "Clearly an A-Perm because of the checker pattern (4 stickers) and the outside 2-bar.<br/><br/>Easily recognisable as Aa-Perm because the checker pattern is on the left and the outside 2-bar on the right.",
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Checker pattern on left (4 stickers)",
          "desc": "Aa = 3 colours, Ga = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Aa.2",
      "name": "Aa-Perm",
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Aa = 3 colours, V = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Aa.3",
      "name": "Aa-Perm",
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Aa = 4 colours, Gd = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Aa.4",
      "name": "Aa-Perm",
      "desc": "Clearly an A-Perm because the sticker between the headlights is the opposite of a checker pattern (5 stickers).<br/><br/>Easily recognisable as Aa-Perm because the \"almost\" checker pattern is on the right.<br/><br/>The edge on the left is also the opposite of the rear corner.",
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Almost checker pattern on right (5 stickers)",
          "desc": "Aa = 4 colours, Ra = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ab.1",
      "name": "Ab-Perm",
      "desc": "Clearly an A-Perm because the sticker between the headlights is the opposite of a checker pattern (5 stickers).<br/><br/>Easily recognisable as Ab-Perm because the \"almost\" checker pattern is on the left.<br/><br/>The edge on the right is also the opposite of the rear corner.",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Almost checker pattern on left (5 stickers)",
          "desc": "Ab = 4 colours, Rb = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ab.2",
      "name": "Ab-Perm",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Ab = 4 colours, Gb = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ab.3",
      "name": "Ab-Perm",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Ab = 3 colours, V = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ab.4",
      "name": "Ab-Perm",
      "desc": "Clearly an A-Perm because of the checker pattern (4 stickers) and the outside 2-bar.<br/><br/>Easily recognisable as Ab-Perm because the checker pattern is on the right and the outside 2-bar on the left.",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Checker pattern on right (4 stickers)",
          "desc": "Ab = 3 colours, Gc = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "E.1",
      "name": "E-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as E-Perm because of the \"malformed\" pair in the front-left, resulting in a partial checker pattern (3 stickers).<br/><br/>The E-Perm has two appearances and looks the same after a U2.",
      "wiki": "#E_Permutation",
      "algdb": "E",
      "image": "PLL-E-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Y or V",
          "desc": "Learn the features of E, Y and V",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "E.2",
      "name": "E-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as E-Perm because of the \"malformed\" pair in the front-right, resulting in a partial checker pattern (3 stickers).<br/><br/>The E-Perm has two appearances and looks the same after a U2.",
      "wiki": "#E_Permutation",
      "algdb": "E",
      "image": "PLL-E-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Y or V",
          "desc": "Learn the features of E, Y and V",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "F.1",
      "name": "F-Perm",
      "desc": "Clearly an F-Perm because of the lonesome 3-bar.<br/><br/>It is also worth knowing that the edge on the right is the opposite of the front corner.",
      "wiki": "#F_Permutation",
      "algdb": "F",
      "image": "PLL-F-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Right edge is the opposite of front corner",
          "desc": "F = 4 colours, Ja / Jb = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "F.2",
      "name": "F-Perm",
      "wiki": "#F_Permutation",
      "algdb": "F",
      "image": "PLL-F-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gc",
          "desc": "F = 3 colours, Gc / Rb = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "F.3",
      "name": "F-Perm",
      "wiki": "#F_Permutation",
      "algdb": "F",
      "image": "PLL-F-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ga",
          "desc": "F = 3 colours, Ga / Ra = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "F.4",
      "name": "F-Perm",
      "desc": "Clearly an F-Perm because of the lonesome 3-bar.<br/><br/>It is also worth knowing that the edge on the left is the opposite of the front corner.",
      "wiki": "#F_Permutation",
      "algdb": "F",
      "image": "PLL-F-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Left edge is the opposite of front corner",
          "desc": "F = 4 colours, Ja / Jb = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ga.1",
      "name": "Ga-Perm",
      "desc": "Clearly a Ga-Perm / Gc-Perm because the sticker between the headlights is the opposite of a checker pattern (4 stickers).<br/><br/>Easily recognisable as Ga-Perm because the \"almost\" checker pattern is on the left and the outside 2-bar on the right.",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Almost checker pattern on left (4 stickers)",
          "desc": "Ga = 4 colours, Aa = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ga.2",
      "name": "Ga-Perm",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Y / Ga = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ga.3",
      "name": "Ga-Perm",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for F",
          "desc": "Ga = 4 colours, F = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ga.4",
      "name": "Ga-Perm",
      "desc": "Clearly a Ga-Perm / Gc-Perm because of the checker pattern (4 stickers) and the absence of an outside 2-bar.<br/><br/>Easily recognisable as Ga-Perm because the checker pattern is on the right.<br/><br/>The edge on the left is also the opposite of the front corner.",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Checker pattern on right (4 stickers)",
          "desc": "Ga = 4 colours, Ra = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gb.1",
      "name": "Gb-Perm",
      "desc": "Clearly a Gb-Perm / Gd-Perm because the headlights contain the opposite edge colour.<br/><br/>Recognisable as Gb-Perm because the headlights are on the left and the adjacent edge is the opposite of the front corner.",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Right edge is the opposite of front corner",
          "desc": "Gb = 4 colours, Gd = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gb.2",
      "name": "Gb-Perm",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Gb = 3 colours, Ab / V = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gb.3",
      "name": "Gb-Perm",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Y / Gb = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gb.4",
      "name": "Gb-Perm",
      "desc": "Clearly a Gb-Perm / Gd-Perm because the headlights contain the opposite edge colour.<br/><br/>Recognisable as Gb-Perm because the edge on the left matches the headlights.<br/><br/>The edge on the left is also the opposite of the back corner.",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Left edge matches right headlights",
          "desc": "Gb = 3 colours, Gd = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gc.1",
      "name": "Gc-Perm",
      "desc": "Clearly a Ga-Perm / Gc-Perm because of the checker pattern (4 stickers) and the absence of an outside 2-bar.<br/><br/>Easily recognisable as Gc-Perm because the checker pattern is on the left.<br/><br/>The edge on the right is also the opposite of the front corner.",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Checker pattern on left (4 stickers)",
          "desc": "Gc = 4 colours, Rb = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gc.2",
      "name": "Gc-Perm",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for F",
          "desc": "Gc = 4 colours, F = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gc.3",
      "name": "Gc-Perm",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Y / Gc = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gc.4",
      "name": "Gc-Perm",
      "desc": "Clearly a Ga-Perm / Gc-Perm because the sticker between the headlights is the opposite of a checker pattern (4 stickers).<br/><br/>Easily recognisable as Gc-Perm because the \"almost\" checker pattern is on the right and the outside 2-bar on the left.",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Almost checker pattern on right (4 stickers)",
          "desc": "Gc = 4 colours, Ab = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gd.1",
      "name": "Gd-Perm",
      "desc": "Clearly a Gb-Perm / Gd-Perm because the headlights contain the opposite edge colour.<br/><br/>Recognisable as Gd-Perm because the edge on the right matches the headlights.<br/><br/>The edge on the right is also the opposite of the back corner.",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Right edge matches left headlights",
          "desc": "Gd = 3 colours, Gb = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gd.2",
      "name": "Gd-Perm",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Y / Gd = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gd.3",
      "name": "Gd-Perm",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Gd = 3 colours, Aa / V = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gd.4",
      "name": "Gd-Perm",
      "desc": "Clearly a Gb-Perm / Gd-Perm because the headlights contain the opposite edge colour.<br/><br/>Recognisable as Gd-Perm because the headlights are on the right and the adjacent edge is the opposite of the front corner.",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Left edge is the opposite of front corner",
          "desc": "Gd = 4 colours, Gb = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "H.1",
      "name": "H-Perm / X-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides.<br/><br/>Easily recognisable as H-Perm because both sets of headlights contain the opposite edge colour.<br/><br/>H-perm looks the same from all four possible angles.",
      "wiki": "#H_Permutation",
      "algdb": "H",
      "image": "PLL-H-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Both headlights contain the opposite edge",
          "desc": "H = 4 colours, Ua / Ub = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ja.1",
      "name": "Ja-Perm",
      "desc": "Clearly a J-Perm because of the 3-bar and inside 2-bar which look like a 3x2 block.<br/><br/>Easily recognisable as Ja-Perm because the 3-bar is on the left and the inside 2-bar on the right.",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Inside 2-bar on the right",
          "desc": "Ja / Jb = 3 colours, F = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ja.2",
      "name": "Ja-Perm",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Ja = 3 colours, Nb = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ja.3",
      "name": "Ja-Perm",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Ja = 3 colours, Nb = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ja.4",
      "name": "Ja-Perm",
      "desc": "Clearly a J-Perm because of the 3-bar and the outside 2-bar, separated by an adjacent corner sticker.<br/><br/>Easily recognisable as Ja-Perm because the outside 2-bar is on the left, disconnected from the 3-bar on the right.",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Outside 2-bar on the left",
          "desc": "Ja / Jb = 3 colours, F = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jb.1",
      "name": "Jb-Perm",
      "desc": "Clearly a J-Perm because of the 3-bar and the outside 2-bar, separated by an adjacent corner sticker.<br/><br/>Easily recognisable as Jb-Perm because the outside 2-bar is on the right, disconnected from the 3-bar on the left.",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Outside 2-bar on the right",
          "desc": "Ja / Jb = 3 colours, F = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jb.2",
      "name": "Jb-Perm",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Jb = 3 colours, Na = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jb.3",
      "name": "Jb-Perm",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Jb = 3 colours, Na = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jb.4",
      "name": "Jb-Perm",
      "desc": "Clearly a J-Perm because of the 3-bar and inside 2-bar which look like a 3x2 block.<br/><br/>Easily recognisable as Jb-Perm because the 3-bar is on the right and the inside 2-bar on the left.",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Inside 2-bar on the left",
          "desc": "Ja / Jb = 3 colours, F = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Na.1",
      "name": "Na-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Easily recognisable as Na-Perm because of the \"corner + edge\" pairs on the right and opposite corner colours.<br/><br/>Na-perm looks the same from all four possible angles.",
      "wiki": "#N_Permutation_:_a",
      "algdb": "Na",
      "image": "PLL-Na-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Na = 4 colours, Jb = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Nb.1",
      "name": "Nb-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Easily recognisable as Nb-Perm because of the \"corner + edge\" pairs on the left and opposite corner colours.<br/><br/>Nb-perm looks the same from all four possible angles.",
      "wiki": "#N_Permutation_:_b",
      "algdb": "Nb",
      "image": "PLL-Nb-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Nb = 4 colours, Ja = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ra.1",
      "name": "Ra-Perm",
      "desc": "Clearly an R-Perm because the headlights contain an adjacent edge colour.<br/><br/>Easily recognisable as Ra-Perm because the headlights are on the left and inside 2-bar on the right.",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain an adjacent edge",
          "desc": "Ra = 4 colours, T = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ra.2",
      "name": "Ra-Perm",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for T",
          "desc": "Ra = 3 colours, T = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ra.3",
      "name": "Ra-Perm",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Ra = 4 colours, F = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ra.4",
      "name": "Ra-Perm",
      "desc": "Clearly an R-Perm because of the long checker pattern (5 stickers).<br/><br/>Easily recognisable as Ra-Perm because the checker pattern is on the right.<br/><br/>The edge on the left is also the opposite of the rear corner.",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Checker pattern on right (5 stickers)",
          "desc": "Ra = 3 colours, Aa / Ga = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rb.1",
      "name": "Rb-Perm",
      "desc": "Clearly an R-Perm because of the long checker pattern (5 stickers).<br/><br/>Easily recognisable as Rb-Perm because the checker pattern is on the left.<br/><br/>The edge on the right is also the opposite of the rear corner.",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Checker pattern on left (5 stickers)",
          "desc": "Rb = 3 colours, Ab / Gc = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rb.2",
      "name": "Rb-Perm",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Rb = 4 colours, F = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rb.3",
      "name": "Rb-Perm",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for T",
          "desc": "Rb = 3 colours, T = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rb.4",
      "name": "Rb-Perm",
      "desc": "Clearly an R-Perm because the headlights contain an adjacent edge colour.<br/><br/>Easily recognisable as Rb-Perm because the headlights are on the right and inside 2-bar on the left.",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain an adjacent edge",
          "desc": "Rb = 4 colours, T = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "T.1",
      "name": "T-Perm",
      "desc": "Clearly a T-Perm because the headlights contain the opposite edge colour.",
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain the opposite edge",
          "desc": "T = 3 colours, Ra = 4 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "T.2",
      "name": "T-Perm",
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ra",
          "desc": "T = 4 colours, Ra = 3 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "T.3",
      "name": "T-Perm",
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Rb",
          "desc": "T = 4 colours, Rb = 3 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "T.4",
      "name": "T-Perm",
      "desc": "Clearly a T-Perm because the headlights contain the opposite edge colour.",
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain the opposite edge",
          "desc": "T = 3 colours, Rb = 4 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.1",
      "name": "Ua-Perm",
      "desc": "Definitely a U-Perm because of the bar and headlights.<br/><br/>Recognisable as Ua-Perm (CCW) because the headlights contain an adjacent edge colour.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain an adjacent edge",
          "desc": "Ua / Ub = 3 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.2",
      "name": "Ua-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ua-Perm (CCW) because the edge on the left matches the headlights on the right.<br/></br>You might find the checker pattern (4 stickers) on the left is useful during recognition.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Left edge matches right headlights",
          "desc": "Ua = 3 colours, Z = 2 or 4 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.3",
      "name": "Ua-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ua-Perm (CCW) because the headlights on the right contain the opposite edge colour.<br/><br/>Another way to recognise as Ua-Perm (CCW) is because the edge on the left matches the headlights on the right.<br/><br/>You might find the checker pattern (4 stickers) on the left useful during recognition.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Right headlights contain the opposite edge",
          "desc": "Ua = 3 colours, H = 4 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.4",
      "name": "Ua-Perm",
      "desc": "Definitely a U-Perm because of the bar and headlights.<br/><br/>Easily recognisable as Ua-Perm (CCW) because the headlights contain the opposite edge colour.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain the opposite edge",
          "desc": "Ua / Ub = 3 colours",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ub.1",
      "name": "Ub-Perm",
      "desc": "Definitely a U-Perm because of the bar and headlights.<br/><br/>Easily recognisable as Ub-Perm (CW) because the headlights contain the opposite edge colour.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain the opposite edge",
          "desc": "Ua / Ub = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ub.2",
      "name": "Ub-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ub-Perm (CW) because the headlights on the left contain the opposite edge colour.<br/><br/>Another way to recognise as Ub-Perm (CW) is because the edge on the right matches the headlights on the left.<br/><br/>You might find the checker pattern (4 stickers) on the right useful during recognition.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Left headlights contain the opposite edge",
          "desc": "Ub = 3 colours, H = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ub.3",
      "name": "Ub-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ub-Perm (CW) because the edge on the right matches the headlights on the left.<br/></br>You might find the checker pattern (4 stickers) on the right is useful during recognition.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Right edge matches left headlights",
          "desc": "Ub = 3 colours, Z = 2 or 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ub.4",
      "name": "Ub-Perm",
      "desc": "Definitely a U-Perm because of the bar and headlights.<br/><br/>Recognisable as Ub-Perm (CW) because the headlights contain an adjacent edge colour.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Headlights contain an adjacent edge",
          "desc": "Ua / Ub = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.1",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Easily recognisable as V-Perm because of the 2x2 block at the front, bookended by opposite corner colours.",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "V = 4 colours, Aa / Ab = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.2",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as V-Perm because of the \"corner + edge\" pair at the back-left.<br/><br/>You might find the \"malformed\" pair at the front-right is useful during recognition.",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "V = 4 colours, Gd = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.3",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as V-Perm because of the \"malformed\" 2x2 block at the front, resulting in a checker pattern (4 stickers).",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for E",
          "desc": "Learn the features of E and V",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.4",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as V-Perm because of the \"corner + edge\" pair at the back-right.<br/><br/>You might find the \"malformed\" pair at the front-left is useful during recognition.",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "V = 4 colours, Gb = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Y.1",
      "name": "Y-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Easily recognisable as Y-Perm because the outside 2-bars are a unique feature.<br/><br/>The corner at the front makes this case very distinctive due to the opposite colours.",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Y = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Y.2",
      "name": "Y-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as Y-Perm because of the \"corner + edge\" pair at the front-left.<br/><br/>The back-left corner makes this case slightly more distinctive due to the opposite colour.",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Y / Ga / Gb = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Y.3",
      "name": "Y-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>This is the only angle for a diagonal corner swap without a visible pair, 2x2 block, \"malformed\" pair or \"malformed\" 2x2 block.<br/><br/>Most people find the \"outer\" checker pattern (4 stickers) is useful during recognition.",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for E",
          "desc": "Learn the features of E and Y",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Y.4",
      "name": "Y-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as Y-Perm because of the \"corner + edge\" pair at the front-right.<br/><br/>The back-right corner makes this case slightly more distinctive due to the opposite colour.",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Y / Gc / Gd = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Z.1",
      "name": "Z-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Exactly 2 colours, unlike U-Perms which have 3 colours.<br/><br/>The edge on the left matches the headlights on the right and the edge on the right matches the headlights on the left.<br/><br/>Easily recognisable as Z-Perm because of the distinctive checker pattern (6 stickers).<br/><br/>The Z-Perm has two appearances and looks the same after a U2.",
      "wiki": "#Z_Permutation",
      "algdb": "Z",
      "image": "PLL-Z-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Distinctive checker pattern (6 stickers)",
          "desc": "Z = 2 colours, Ua / Ub = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Z.2",
      "name": "Z-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Exactly 4 colours, unlike U-Perms which have 3 colours.<br/><br/>The edge on the left is the opposite of the headlights on the right. The edge on the right is the opposite of the headlights on the left.<br/><br/>Recognisable as Z-Perm because both sets of headlights contain an adjacent edge colour.<br/><br/>The Z-Perm has two appearances and looks the same after a U2.",
      "wiki": "#Z_Permutation",
      "algdb": "Z",
      "image": "PLL-Z-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Both headlights contain an adjacent edge",
          "desc": "Z = 4 colours, Ua / Ub = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Skip",
      "name": "PLL Skip",
      "desc": "This is clearly the solved case.<br/><br/>The solved case looks the same from all four possible angles.",
      "wiki": "",
      "algdb": "",
      "image": "PLL-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Solved",
          "desc": "Easy to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
  ],
  "views":
  [
    {
      "id": "features",
      "name": "Features",
      "desc": "The \"features\" view groups cases based on the primary features such as headlights, 3-bars, 2-bars and bookends.<br/></br/><strong>Note:</strong> The groupings are similar to those in the 2-sided recognition guide by mark49152 on speedsolving.com.",
      "groups":
      [
        {
          "id": "solved",
          "name": "Solved",
          "desc": "The solved state is the easiest case to recognise. [AUF] to complete the solve!",
          "cases": ["Skip"]
        },
        {
          "id": "bar+lights",
          "name": "3-Bar with Headlights", 
          "desc": "The 3-bar with headlights can only be a U-Perm.<br/><br/>The lone edge is considered when distinguishing between cases.<br/><br/>U-Perms = 3 colours.",
          "cases": ["Ub.1", "Ua.1", "Ua.4", "Ub.4"]
        },
        {
          "id": "bar-lights",
          "name": "3-Bar without Headlights",
          "desc": "The 3-bar without headlights can only be a J-Perm or F-Perm.<br/><br/>The presence and location of a 2-bar is considered when distinguishing between cases.<br/><br/>J-Perms = 3 colours, F-Perm = 4 colours.",
          "cases": ["Ja.1", "Jb.1", "F.1", "Jb.4", "Ja.4", "F.4"]
        },
        {
          "id": "double+opp",
          "name": "Double Lights (Opposite Edge)",
          "desc": "Double headlights with at least one opposite edge can only be an H-Perm or U-Perm.<br/><br/>The two edges are considered when distinguishing between cases. The H-Perm is most distinctive.<br/><br/>U-Perms = 3 colours, H-Perm = 4 colours.",
          "cases": ["Ub.2", "H.1", "Ua.3"]
        },
        {
          "id": "double-opp",
          "name": "Double Lights (Adjacent Edges)",
          "desc": "Double headlights without an opposite edge can only be a Z-Perm or U-Perm.<br/><br/>The two edges are considered when distinguishing between cases. The Z-Perm is most distinctive.<br/><br/>U-Perms = 3 colours, Z-Perm = 2 or 4 colours.",
          "cases": ["Z.1", "Ua.2", "Z.2", "Ub.3"]
        },
        {
          "id": "lights+inpair",
          "name": "Headlights + 2-Bar (Inside)",
          "desc": "Headlights accompanied by an inside 2-bar can only be a T-Perm or R-Perm.<br/><br/>The edge between the headlights is considered when distinguishing between cases.<br/><br/>T-Perm = 3 colours, R-Perms = 4 colours.",
          "cases": ["T.1", "Ra.1", "T.4", "Rb.4"]
        },
        {
          "id": "lights+outpair",
          "name": "Headlights + 2-Bar (Outside)",
          "desc": "Headlights accompanied by an outside 2-bar can only be an A-Perm or G-Perm.<br/><br/>The presence of a checker pattern (4 stickers) is considered when distinguishing between cases.<br/><br/>A-Perms = 3 colours, G-Perms = 4 colours.",
          "cases": ["Aa.1", "Ga.1", "Ab.4", "Gc.4"]
        },
        {
          "id": "lights+opp",
          "name": "Headlights (Opposite Edge)",
          "desc": "Headlights containing an opposite edge can only be a G-Perm.<br/><br/>The edge adjacent to the headlights is considered when distinguishing between cases.<br/><br/>G-Perms = 3 or 4 colours.",
          "cases": ["Gb.1", "Gd.1", "Gd.4", "Gb.4"]
        },
        {
          "id": "lights+adj",
          "name": "Headlights (Adjacent Edge)",
          "desc": "Headlights containing an adjacent edge can only be an R-Perm, G-Perm or A-Perm.<br/><br/>The presence of a checker pattern (4 or 5 stickers) is considered when distinguishing between cases.<br/><br/>R-Perms = 3 colours, A-Perms / G-Perms = 4 colours.",
          "cases": ["Gc.1", "Rb.1", "Ab.1", "Ga.4", "Ra.4", "Aa.4"]
        },
        {
          "id": "sym_pairs",
          "name": "Double 2-Bar (Symmetrical)",
          "desc": "Symmetrical 2-bars and 2x2 blocks can only be a Y-Perm, A-Perm or V-Perm.<br/><br/>The outer corners are considered when distinguishing between cases. The Y-Perm and V-Perm are most distinctive.",
          "cases": ["Y.1", "Ab.3", "V.1", "Aa.2"]
        },
        {
          "id": "asy_pairs",
          "name": "Double 2-Bar (Asymmetrical)",
          "desc": "Asymmetrical 2-bars can only be a J-Perm or N-Perm.<br/><br/>The relationships of the corner stickers are considered when distinguishing between cases.",
          "cases": ["Ja.3", "Nb.1", "Ja.2", "Jb.3", "Na.1", "Jb.2"]
        },
        {
          "id": "outpair+opp",
          "name": "Outside 2-Bar (Opposite Corner)",
          "desc": "Outside 2-bars connected to an opposite corner can only be a V-Perm, G-Perm or A-Perm.<br/><br/>The side adjacent to the bar / pair is considered when distinguishing between cases.",
          "cases": ["V.2", "Gd.3", "Aa.3", "V.4", "Gb.2", "Ab.2"]
        },
        {
          "id": "outpair+adj",
          "name": "Outside 2-Bar (Adjacent Corner)",
          "desc": "Outside 2-bars connected to an adjacent corner can only be an R-Perm or T-Perm.<br/><br/>The edge adjacent to the bar / pair is considered when distinguishing between cases.",
          "cases": ["Rb.3", "T.3", "Ra.2", "T.2"]
        },
        {
          "id": "inpair",
          "name": "Inside 2-Bar",
          "desc": "Inside 2-bars can only be a G-Perm or Y-Perm.<br/><br/>The relationships of the corner stickers are considered when distinguishing between cases.",
          "cases": ["Gb.3", "Y.2", "Ga.2", "Gd.2", "Y.4", "Gc.3"]
        },
        {
          "id": "misc+ends",
          "name": "Miscellaneous with Bookends",
          "desc": "The miscellaneous cases with matching bookends can only be an F-Perm, R-Perm or G-Perm.<br/><br/>The checker pattern in the F-Perm (malformed 2x2) distinguishes it from the R-Perms and G-Perms (malformed pairs).",
          "cases": ["Ra.3", "F.3", "Ga.3", "Rb.2", "F.2", "Gc.2"]
        },
        {
          "id": "misc-ends",
          "name": "Miscellaneous without Bookends",
          "desc": "The miscellaneous cases without matching bookends can only be an E-Perm, V-Perm or Y-Perm.<br/><br/>The checker pattern in the V-Perm (malformed 2x2) distinguishes it from the E-Perm (malformed pair) and Y-Perm.",
          "cases": ["E.1", "V.3", "E.2", "Y.3"]
        }
    ]
    },
    {
      "id": "letters",
      "name": "Letters",
      "desc": "The \"letters\" view simply lists all of the cases according to their name.",
      "groups":
      [
        {
          "id": "a",
          "name": "A-Perms",
          "cases": ["Aa.1", "Aa.2", "Aa.3", "Aa.4", "Ab.1", "Ab.2", "Ab.3", "Ab.4"]
        },
        {
          "id": "e",
          "name": "E-Perm",
          "cases": ["E.1", "E.2"]
        },
        {
          "id": "f",
          "name": "F-Perm",
          "cases": ["F.1", "F.2", "F.3", "F.4"]
        },
        {
          "id": "g",
          "name": "G-Perms",
          "cases": ["Ga.1", "Ga.2", "Ga.3", "Ga.4", "Gb.1", "Gb.2", "Gb.3", "Gb.4", "Gc.1", "Gc.2", "Gc.3", "Gc.4", "Gd.1", "Gd.2", "Gd.3", "Gd.4"]
        },
        {
          "id": "h",
          "name": "H-Perm",
          "cases": ["H.1"]
        },
        {
          "id": "j",
          "name": "J-Perms",
          "cases": ["Ja.1", "Ja.2", "Ja.3", "Ja.4", "Jb.1", "Jb.2", "Jb.3", "Jb.4"]
        },
        {
          "id": "n",
          "name": "N-Perms",
          "cases": ["Na.1", "Nb.1"]
        },
        {
          "id": "r",
          "name": "R-Perms",
          "cases": ["Ra.1", "Ra.2", "Ra.3", "Ra.4", "Rb.1", "Rb.2", "Rb.3", "Rb.4"]
        },
        {
          "id": "t",
          "name": "T-Perm",
          "cases": ["T.1", "T.2", "T.3", "T.4"]
        },
        {
          "id": "u",
          "name": "U-Perms",
          "cases": ["Ua.1", "Ua.2", "Ua.3", "Ua.4", "Ub.1", "Ub.2", "Ub.3", "Ub.4"]
        },
        {
          "id": "v",
          "name": "V-Perm",
          "cases": ["V.1", "V.2", "V.3", "V.4"]
        },
        {
          "id": "y",
          "name": "Y-Perm",
          "cases": ["Y.1", "Y.2", "Y.3", "Y.4"]
        },
        {
          "id": "z",
          "name": "Z-Perm",
          "cases": ["Z.1", "Z.2"]
        },
        {
          "id": "lucky",
          "name": "Lucky",
          "cases": ["Skip"]
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
          "id": "edges",
          "name": "Edges Only",
          "desc": "This group of cases is known as [EPLL]. It includes the U-Perms, Z-Perm and H-Perm.<br/><br/>U-Perms = 3 colours, Z-Perm = 2 or 4 colours, H-Perm = 4 colours.",
          "wiki": "#Permutations_of_Edges_Only",
          "cases": ["Ua.1", "Ua.2", "Ua.3", "Ua.4", "Ub.1", "Ub.2", "Ub.3", "Ub.4", "Z.1", "Z.2", "H.1"]
        },
        {
          "id": "corners",
          "name": "Corners Only",
          "desc": "This group of cases is known as [CPLL]. It includes the A-Perms, E-Perm and X-Perm (see above).",
          "wiki": "#Permutations_of_Corners_Only",
          "cases": ["Aa.1", "Aa.2", "Aa.3", "Aa.4", "Ab.1", "Ab.2", "Ab.3", "Ab.4", "E.1", "E.2"]
        },
        {
          "id": "both",
          "name": "Edges + Corners",
          "desc": "This group of cases includes the F-Perm, G-Perms, J-Perms, R-Perms, T-Perm, V-Perm, Y-Perm and N-Perms.",
          "wiki": "#Permutations_of_Edges_and_Corners",
          "cases": ["F.1", "F.2", "F.3", "F.4",
          "Ga.1", "Ga.2", "Ga.3", "Ga.4","Gb.1", "Gb.2", "Gb.3", "Gb.4", "Gc.1", "Gc.2", "Gc.3", "Gc.4", "Gd.1", "Gd.2", "Gd.3", "Gd.4",
					"Ja.1", "Ja.2", "Ja.3", "Ja.4", "Jb.1", "Jb.2", "Jb.3", "Jb.4", "Ra.1", "Ra.2", "Ra.3", "Ra.4", "Rb.1", "Rb.2", "Rb.3", "Rb.4",
					"T.1", "T.2", "T.3", "T.4", "V.1", "V.2", "V.3", "V.4", "Y.1", "Y.2", "Y.3", "Y.4", "Na.1", "Nb.1"]
        },
        {
          "id": "lucky",
          "name": "Lucky",
          "cases": ["Skip"]
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
          "desc": "This group of cases is known as [EPLL]. It includes the U-Perms, Z-Perm, H-Perm and skip.<br/><br/>U-Perms = 3 colours, Z-Perm = 2 or 4 colours, H-Perm = 4 colours.<br/><br/>The outer corners will always have adjacent sticker colours.",
          "cases": ["Ua.1", "Ua.2", "Ua.3", "Ua.4", "Ub.1", "Ub.2", "Ub.3", "Ub.4", "Z.1", "Z.2", "H.1", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Corner Swap",
          "desc": "This group of cases includes the A-Perms, F-Perm, G-Perms, J-Perms, R-Perms and T-Perm.<br/><br/>The outer corners will always have matching or opposite sticker colours.",
          "cases": ["Aa.1", "Aa.2", "Aa.3", "Aa.4", "Ab.1", "Ab.2", "Ab.3", "Ab.4", "F.1", "F.2", "F.3", "F.4",
					"Ga.1", "Ga.2", "Ga.3", "Ga.4", "Gb.1", "Gb.2", "Gb.3", "Gb.4", "Gc.1", "Gc.2", "Gc.3", "Gc.4", "Gd.1", "Gd.2", "Gd.3", "Gd.4",
					"Ja.1", "Ja.2", "Ja.3", "Ja.4", "Jb.1", "Jb.2", "Jb.3", "Jb.4", "Ra.1", "Ra.2", "Ra.3", "Ra.4", "Rb.1", "Rb.2", "Rb.3", "Rb.4",
					"T.1", "T.2", "T.3", "T.4"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Corner Swap",
          "desc": "This group of cases includes the V-Perm, Y-Perm, E-Perm and N-Perms.<br/><br/>The outer corners will always have adjacent sticker colours.",
          "cases": ["V.1", "V.2", "V.3", "V.4", "Y.1", "Y.2", "Y.3", "Y.4", "E.1", "E.2", "Na.1", "Nb.1"]
        },
	  ]
    },
    {
      "id": "edges",
      "name": "Edges",
      "desc": "The \"edges\" view groups cases based on the edge permutation; i.e. no swap, adjacent swap or opposite swap.",
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Edge Swap",
          "desc": "This group of cases is known as [CPLL]. It includes the A-Perms, E-Perm, X-Perm and skip.",
          "cases": ["Aa.1", "Aa.2", "Aa.3", "Aa.4", "Ab.1", "Ab.2", "Ab.3", "Ab.4", "E.1", "E.2", "H.1", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Edge Swap",
          "desc": "This group of cases includes the G-Perms, J-Perms, R-Perms, U-Perms, V-Perm and Y-Perm.",
          "cases": ["Ga.1", "Ga.2", "Ga.3", "Ga.4", "Gb.1", "Gb.2", "Gb.3", "Gb.4", "Gc.1", "Gc.2", "Gc.3", "Gc.4", "Gd.1", "Gd.2", "Gd.3", "Gd.4",
					"Ja.1", "Ja.2", "Ja.3", "Ja.4", "Jb.1", "Jb.2", "Jb.3", "Jb.4", "Ra.1", "Ra.2", "Ra.3", "Ra.4", "Rb.1", "Rb.2", "Rb.3", "Rb.4",
					"Ua.1", "Ua.2", "Ua.3", "Ua.4", "Ub.1", "Ub.2", "Ub.3", "Ub.4", "V.1", "V.2", "V.3", "V.4", "Y.1", "Y.2", "Y.3", "Y.4"]
        },
        {
          "id": "opposite",
          "name": "Opposite Edge Swap",
          "desc": "This group of cases includes the F-Perm, T-Perm, Z-Perm and N-Perms.",
          "cases": ["F.1", "F.2", "F.3", "F.4", "T.1", "T.2", "T.3", "T.4", "Z.1", "Z.2", "Na.1", "Nb.1"]
        },
	  ]
    },
    {
      "id": "grid",
      "name": "Grid",
      "desc": "The \"grid\" view arranges all of the cases by corner permutation (columns) and edge permutation (rows).<br/><br/><strong>Note:</strong> Applying an H-Perm to any case in the grid below will move you up / down exactly one line. Cool eh?",
      "headers": ["Corners<br/>Solved<br/>(EPLL)", "Adjacent<br/>Corner<br/>Swap (BR)", "Adjacent<br/>Corner<br/>Swap (FR)", "Adjacent<br/>Corner<br/>Swap (FL)", "Adjacent<br/>Corner<br/>Swap (BL)", "Diagonal<br/>Corner<br/>Swap"],
      "rows":
      [
        {
          "id": "cpll",
          "name": "Edges<br/>Solved (CPLL)<br/>Skip / Aa / Ab / E",
          "cases": ["Skip", "Aa.1", "Aa.2", "Ab.3", "Ab.4", "E.1"]
        },
        {
          "id": "cpll",
          "name": "Edges<br/>Solved (CPLL)<br/>H / Ab / Aa / E",
          "cases": ["H.1", "Ab.1", "Ab.2", "Aa.3", "Aa.4", "E.2"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ua / Ja / Jb / Y",
          "cases": ["Ua.1", "Ja.1", "Ja.2", "Jb.3", "Jb.4", "Y.1"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ub / Ga / Gc / V",
          "cases": ["Ub.4", "Ga.1", "Ga.2", "Gc.3", "Gc.4", "V.3"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ua / Rb / Ra / Y",
          "cases": ["Ua.3", "Rb.1", "Rb.2", "Ra.3", "Ra.4", "Y.3"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ub / Gb / Gd / V",
          "cases": ["Ub.2", "Gb.1", "Gb.2", "Gd.3", "Gd.4", "V.1"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ua / Jb / Ja / Y",
          "cases": ["Ua.4", "Jb.1", "Jb.2", "Ja.3", "Ja.4", "Y.2"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ub / Gc / Ga / V",
          "cases": ["Ub.3", "Gc.1", "Gc.2", "Ga.3", "Ga.4", "V.4"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ua / Ra / Rb / Y",
          "cases": ["Ua.2", "Ra.1", "Ra.2", "Rb.3", "Rb.4", "Y.4"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ub / Gd / Gb / V",
          "cases": ["Ub.1", "Gd.1", "Gd.2", "Gb.3", "Gb.4", "V.2"]
        },
        {
          "id": "oes",
          "name": "Opposite<br/>Edge Swap<br/>Z / F / Na",
          "cases": ["Z.1", "F.1", "F.2", "F.3", "F.4", "Na.1"]
        },
        {
          "id": "oes",
          "name": "Opposite<br/>Edge Swap<br/>Z / T / Nb",
          "cases": ["Z.2", "T.1", "T.2", "T.3", "T.4", "Nb.1"]
        },
      ]
    },
  ]
}
