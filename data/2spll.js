var algSet = {
  "header":
  {
    "id": "PLL",
    "name": "2-Sided Recognition - Permutation of Last Layer",
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
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ga",
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
          "desc": "Easy angle to recognise",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gd",
          "desc": "Aa = 4 colours, Gd = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Aa.4",
      "name": "Aa-Perm",
      "wiki": "#A_Permutation_:_a",
      "algdb": "Aa",
      "image": "PLL-Aa-4",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ga or Ra",
          "desc": "Aa / Ga = 4 colours, Ra = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ab.1",
      "name": "Ab-Perm",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gc or Rb",
          "desc": "Ab / Gc = 4 colours, Rb = 3 colours",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gb",
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
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ab.4",
      "name": "Ab-Perm",
      "wiki": "#A_Permutation_:_b",
      "algdb": "Ab",
      "image": "PLL-Ab-4",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gc",
          "desc": "Ab = 3 colours, Gc = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "E.1",
      "name": "E-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as E-Perm because of the \"malformed\" pair in the front-left, resulting in a kind of 3-sticker checker pattern.<br/><br/>The E-Perm has two appearances and looks the same after a U2.",
      "wiki": "#E_Permutation",
      "algdb": "E",
      "image": "PLL-E-1",
	  "style": "bg1",
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
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as E-Perm because of the \"malformed\" pair in the front-right, resulting in a kind of 3-sticker checker pattern.<br/><br/>The E-Perm has two appearances and looks the same after a U2.",
      "wiki": "#E_Permutation",
      "algdb": "E",
      "image": "PLL-E-2",
	  "style": "bg1",
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
      "wiki": "#F_Permutation",
      "algdb": "F",
      "image": "PLL-F-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gc or Rb",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ga or Ra",
          "desc": "F = 3 colours, Ga / Ra = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "F.4",
      "name": "F-Perm",
      "wiki": "#F_Permutation",
      "algdb": "F",
      "image": "PLL-F-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ga.1",
      "name": "Ga-Perm",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Aa",
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
          "desc": "Easy angle to recognise",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ra or F",
          "desc": "Ga / Ra = 4 colours, F = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ga.4",
      "name": "Ga-Perm",
      "wiki": "#G_Permutation_:_a",
      "algdb": "Ga",
      "image": "PLL-Ga-4",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Aa or Ra",
          "desc": "Ga / Aa = 4 colours, Ra = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gb.1",
      "name": "Gb-Perm",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gd",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ab",
          "desc": "Gb = 3 colours. Ab = 4 colours",
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
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gb.4",
      "name": "Gb-Perm",
      "wiki": "#G_Permutation_:_b",
      "algdb": "Gb",
      "image": "PLL-Gb-4",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gd",
          "desc": "Gb = 3 colours, Gd = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gc.1",
      "name": "Gc-Perm",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ab or Rb",
          "desc": "Gc / Ab = 4 colours, Rb = 3 colours",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Rb or F",
          "desc": "Gc / Rb = 4 colours, F = 3 colours",
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
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gc.4",
      "name": "Gc-Perm",
      "wiki": "#G_Permutation_:_c",
      "algdb": "Gc",
      "image": "PLL-Gc-4",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ab",
          "desc": "Gc = 4 colours, Ab = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gd.1",
      "name": "Gd-Perm",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gb",
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
          "desc": "Easy angle to recognise",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Aa",
          "desc": "Gd = 3 colours, Aa = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Gd.4",
      "name": "Gd-Perm",
      "wiki": "#G_Permutation_:_d",
      "algdb": "Gd",
      "image": "PLL-Gd-4",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gb",
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
          "alg": "Easy",
          "desc": "Easy to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ja.1",
      "name": "Ja-Perm",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
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
          "desc": "Easy angle to recognise",
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
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ja.4",
      "name": "Ja-Perm",
      "wiki": "#J_Permutation_:_a",
      "algdb": "Ja",
      "image": "PLL-Ja-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jb.1",
      "name": "Jb-Perm",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
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
          "desc": "Easy angle to recognise",
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
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Jb.4",
      "name": "Jb-Perm",
      "wiki": "#J_Permutation_:_b",
      "algdb": "Jb",
      "image": "PLL-Jb-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
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
          "desc": "Easy to recognise",
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
          "desc": "Easy to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ra.1",
      "name": "Ra-Perm",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
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
	  "style": "bg1",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ga or F",
          "desc": "Ra / Ga = 4 colours, F = 3 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ra.4",
      "name": "Ra-Perm",
      "wiki": "#R_Permutation_:_a",
      "algdb": "Ra",
      "image": "PLL-Ra-4",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Aa or Ga",
          "desc": "Ra = 3 colours, Aa / Ga = 4 colours",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Rb.1",
      "name": "Rb-Perm",
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Ab or Gc",
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
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for Gc or F",
          "desc": "Rb / Gc = 4 colours, F = 3 colours",
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
	  "style": "bg1",
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
      "wiki": "#R_Permutation_:_b",
      "algdb": "Rb",
      "image": "PLL-Rb-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "T.1",
      "name": "T-Perm",
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
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
	  "style": "bg1",
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
	  "style": "bg1",
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
      "wiki": "#T_Permutation",
      "algdb": "T",
      "image": "PLL-T-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.1",
      "name": "Ua-Perm",
      "desc": "Clearly an [EPLL] and definitely a U-Perm because of the bar and headlights.<br/><br/>Recognisable as Ua-Perm (CCW) because the headlights contain an adjacent edge colour.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.2",
      "name": "Ua-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ua-Perm (CCW) because the edge on the left matches the headlights on the right.<br/></br>You might find the 4-sticker checker pattern on the left is useful during recognition.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.3",
      "name": "Ua-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ua-Perm (CCW) because the headlights on the right contain the opposite edge colour.<br/><br/>You might find the 4-sticker checker pattern on the left is useful during recognition.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ua.4",
      "name": "Ua-Perm",
      "desc": "Clearly an [EPLL] and definitely a U-Perm because of the bar and headlights.<br/><br/>Easily recognisable as Ua-Perm (CCW) because the headlights contain the opposite edge colour.",
      "wiki": "#U_Permutation_:_a",
      "algdb": "Ua",
      "image": "PLL-Ua-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Ub.1",
      "name": "Ub-Perm",
      "desc": "Clearly an [EPLL] and definitely a U-Perm because of the bar and headlights.<br/><br/>Recognisable as Ub-Perm (CW) because the headlights contain an adjacent edge colour.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ub.2",
      "name": "Ub-Perm",
      "desc": "Clearly an [EPLL] and definitely a U-Perm because of the bar and headlights.<br/><br/>Easily recognisable as Ub-Perm (CW) because the headlights contain the opposite edge colour.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ub.3",
      "name": "Ub-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ub-Perm (CW) because the headlights on the left contain the opposite edge colour.<br/><br/>You might find the 4-sticker checker pattern on the right is useful during recognition.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Ub.4",
      "name": "Ub-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Definitely a U-Perm because there are exactly 3 colours.<br/><br/>Recognisable as Ub-Perm (CW) because the edge on the right matches the headlights on the left.<br/></br>You might find the 4-sticker checker pattern on the right is useful during recognition.",
      "wiki": "#U_Permutation_:_b",
      "algdb": "Ub",
      "image": "PLL-Ub-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.1",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as V-Perm because of the \"malformed\" 2x2 block at the front, resulting in a 4-sticker checker pattern.",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-1",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for E or Y",
          "desc": "Learn the features of E, Y and V",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.2",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as V-Perm because of the \"corner + edge\" pair at the back-right.<br/><br/>You might find the \"malformed\" pair at the front-left is useful during recognition.",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.3",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Easily recognisable as V-Perm because of the 2x2 block at the front, bookended by opposite corner colours.",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-3",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "V.4",
      "name": "V-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Recognisable as V-Perm because of the \"corner + edge\" pair at the back-left.<br/><br/>You might find the \"malformed\" pair at the front-right is useful during recognition.",
      "wiki": "#V_Permutation",
      "algdb": "V",
      "image": "PLL-V-4",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Y.1",
      "name": "Y-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>Easily recognisable as Y-Perm because the outside pairs are a unique feature.<br/><br/>The corner at the front makes this case very distinctive due to the opposite colours.",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
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
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Y.3",
      "name": "Y-Perm",
      "desc": "Definitely a diagonal corner swap because the outermost corner stickers are adjacent colours.<br/><br/>This is the only angle for a diagonal corner swap without a visible pair, 2x2 block, \"malformed\" pair or \"malformed\" 2x2 block.<br/><br/>Most people find the \"outer\" checker pattern is useful during recognition.",
      "wiki": "#Y_Permutation",
      "algdb": "Y",
      "image": "PLL-Y-3",
	  "style": "bg1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Do not mistake for E or V",
          "desc": "Learn the features of E, Y and V",
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
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Z.1",
      "name": "Z-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Exactly 4 colours, unlike U-Perms which have 3 colours.<br/><br/>Recognisable as Z-Perm because both sets of headlights contain an adjacent edge colour.<br/><br/>The Z-Perm has two appearances and looks the same after a U2.",
      "wiki": "#Z_Permutation",
      "algdb": "Z",
      "image": "PLL-Z-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Relatively easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Z.2",
      "name": "Z-Perm",
      "desc": "Clearly an [EPLL] because of the headlights on both sides. Exactly 2 colours, unlike U-Perms which have 3 colours.<br/><br/>Easily recognisable as Z-Perm because of the distinctive 6-sticker checker pattern.<br/><br/>The Z-Perm has two appearances and looks the same after a U2.",
      "wiki": "#Z_Permutation",
      "algdb": "Z",
      "image": "PLL-Z-2",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
          "desc": "Easy angle to recognise",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Skip",
      "name": "Solved",
      "desc": "This is clearly the solved case.<br/><br/>The solved case looks the same from all four possible angles.",
      "wiki": "",
      "algdb": "",
      "image": "PLL-1",
      "prob": "1/72",
      "algs" :
      [
        {
          "alg": "Easy",
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
      "groups":
      [
        {
          "id": "block",
          "name": "Single 2x2 Block",
          "desc": "2x2 blocks are amongst the easiest cases to recognise.<br/><br/>The 2x2 block and the corners clearly distinguish the V-Perm from A-Perms.",
          "cases": ["Skip", "V.3", "Aa.2", "Ab.3"]
        },
        {
          "id": "pairs",
          "name": "Two Pairs",
          "desc": "Two pairs (2x1 blocks) are amongst the easiest cases to recognise.<br/><br/>The 2x1 blocks and the corners clearly distinguish the Y-Perm from N-Perms and J-Perms.",
          "cases": ["Y.1", "Na.1", "Nb.1", "Ja.3", "Jb.3", "Ja.2", "Jb.2"]
        },
        {
          "id": "bar+pair",
          "name": "Bar + Pair", 
          "desc": "A bar (3x1 block) and a pair (2x1 block) are amongst the easiest cases to recognise.<br/><br/>The 2x1 blocks and the corners clearly distinguish the J-Perms.",
          "cases": ["Ja.1", "Jb.4", "Jb.1", "Ja.4"]
        },
        {
          "id": "bar-pair",
          "name": "Bar - Pair",
          "desc": "A bar and optional headlights are amongst the easiest cases to recognise.<br/><br/>The edges connected to a corner of the opposite colour clearly distinguish the U-Perms from F-Perm.",
          "cases": ["Ua.4", "Ub.2", "F.4", "F.1", "Ub.1", "Ua.1"]
        },
        {
          "id": "headlights",
          "name": "Double Headlights",
          "desc": "Double headlights are amongst the easiest cases to recognise.<br/><br/>The edges clearly distinguish the H-Perm from Z-Perm and U-Perms.",
          "cases": ["H.1", "Z.2", "Z.1", "Ua.3", "Ub.3", "Ua.2", "Ub.4"]
        },
        {
          "id": "head+conn",
          "name": "Headlights + Connected Pair",
          "desc": "Headlights and a connected pair are amongst the easiest cases to recognise.<br/><br/>The edge between headlights (opposite or adjacent colour) clearly distinguishes the T-Perm from R-Perms.",
          "cases": ["T.1", "T.4", "Ra.1", "Rb.4"]
        },
        {
          "id": "head+disc",
          "name": "Headlights + Disconnected Pair",
          "desc": "Headlights and a disconnected pair can be one of the trickier cases to recognise.<br/><br/>The presence of a checker pattern (4 stickers) distinguishes the A-Perms from G-Perms.",
          "cases": ["Aa.1", "Ab.4", "Ga.1", "Gc.4"]
        },
        {
          "id": "head+opp",
          "name": "Headlights with Opposite Edge",
          "desc": "Headlights containing an opposite edge can be one of the trickier cases to recognise.<br/><br/>The edge adjacent to the headlights distinguishes the G-Perms.",
          "cases": ["Gd.1", "Gb.4", "Gb.1", "Gd.4"]
        },
        {
          "id": "head+adj",
          "name": "Headlights with Adjacent Edge",
          "desc": "Headlights containing an adjacent edge can be one of the trickier cases to recognise.<br/><br/>The checker patterns (3 to 5 stickers) distinguish the A-Perms from G-Perms and R-Perms.",
          "cases": ["Ra.4", "Rb.1", "Aa.4", "Ab.1", "Ga.4", "Gc.1"]
        },
        {
          "id": "pair+opp,easy",
          "name": "Pair with Opposite Corner (Easier)",
          "desc": "A pair with an opposite corner attached can be one of the easier cases to recognise.<br/><br/>The presence of bookends distinguishes the G-Perms from Y-Perm and V-Perms.",
          "cases": ["Gb.3", "Gd.2", "Y.4", "Y.2", "V.2", "V.4"]
        },
        {
          "id": "pair+opp,tricky",
          "name": "Pair with Opposite Corner (Tricker)",
          "desc": "A pair with an opposite corner attached can be one of the trickier cases to recognise.<br/><br/>The edge adjacent to the pair distinguishes the A-Perms from G-Perms.",
          "cases": ["Gd.3", "Gb.2", "Aa.3", "Ab.2"]
        },
        {
          "id": "pair+adj",
          "name": "Pair with Adjacent Corner",
          "desc": "A pair with an adjacent corner attached can be one of the trickier cases to recognise.<br/><br/>The edge adjacent to the pair distinguishes the A-Perms from G-Perms.",
          "cases": ["Ga.2", "Gc.3", "Ra.2", "Rb.3", "T.2", "T.3"]
        },
        {
          "id": "misc+book",
          "name": "Miscellaneous Cases (Bookends)",
          "desc": "The miscellaneous cases wth bookends can be some of the trickier cases to recognise.<br/><br/>The checker patterns (3 or 4 stickers) distinguish the F-Perm from G-Perms and R-Perms.",
          "cases": ["F.3", "F.2", "Ga.3", "Gc.2", "Ra.3", "Rb.2"]
        },
        {
          "id": "misc+diag",
          "name": "Miscellaneous Cases (Diagonal Corner Swap)",
          "desc": "The miscellaneous cases with a diagonal corner swap can be some of the trickier cases to recognise.<br/><br/>The presence of a checker pattern (3 or 4 stickers) distinguishes the V-Perm from E-Perm and Y-Perm.",
          "cases": ["V.1", "E.1", "E.2", "Y.3"]
        }
    ]
    },
    {
      "id": "letters",
      "name": "Letters",
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
      "groups":
      [
        {
          "id": "edges",
          "name": "Edges Only",
		  "desc": "This group of cases is known as [EPLL]. Advanced [CFOP] users may try to force these cases using [COLL] or [OLLCP]. All of these cases can be solved using [RU] or [MU] algorithms.",
          "wiki": "#Permutations_of_Edges_Only",
          "cases": ["Ua.1", "Ua.2", "Ua.3", "Ua.4", "Ub.1", "Ub.2", "Ub.3", "Ub.4", "Z.1", "Z.2", "H.1"]
        },
        {
          "id": "corners",
          "name": "Corners Only",
		  "desc": "This group of cases is known as [CPLL]. They are generally solved using [commutator]s and [conjugate]s.",
          "wiki": "#Permutations_of_Corners_Only",
          "cases": ["Aa.1", "Aa.2", "Aa.3", "Aa.4", "Ab.1", "Ab.2", "Ab.3", "Ab.4", "E.1", "E.2"]
        },
        {
          "id": "both",
          "name": "Edges + Corners",
          "wiki": "#Permutations_of_Edges_and_Corners",
          "cases": ["Ga.1", "Ga.2", "Ga.3", "Ga.4", "Gb.1", "Gb.2", "Gb.3", "Gb.4", "Gc.1", "Gc.2", "Gc.3", "Gc.4", "Gd.1", "Gd.2", "Gd.3", "Gd.4",
					"Ja.1", "Ja.2", "Ja.3", "Ja.4", "Jb.1", "Jb.2", "Jb.3", "Jb.4", "Ra.1", "Ra.2", "Ra.3", "Ra.4", "Rb.1", "Rb.2", "Rb.3", "Rb.4",
					"T.1", "T.2", "T.3", "T.4", "F.1", "F.2", "F.3", "F.4", "Y.1", "Y.2", "Y.3", "Y.4", "V.1", "V.2", "V.3", "V.4",
					"Na.1", "Nb.1"]
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
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Corner Swap",
		  "desc": "This group of cases is known as [EPLL]. Advanced [CFOP] users may try to force these cases using [COLL] or [OLLCP]. All of these cases can be solved using [RU] or [MU] algorithms.",
          "cases": ["Ua.1", "Ua.2", "Ua.3", "Ua.4", "Ub.1", "Ub.2", "Ub.3", "Ub.4", "Z.1", "Z.2", "H.1", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Corner Swap",
          "cases": ["Aa.1", "Aa.2", "Aa.3", "Aa.4", "Ab.1", "Ab.2", "Ab.3", "Ab.4",
					"Ga.1", "Ga.2", "Ga.3", "Ga.4", "Gb.1", "Gb.2", "Gb.3", "Gb.4", "Gc.1", "Gc.2", "Gc.3", "Gc.4", "Gd.1", "Gd.2", "Gd.3", "Gd.4",
					"Ja.1", "Ja.2", "Ja.3", "Ja.4", "Jb.1", "Jb.2", "Jb.3", "Jb.4", "Ra.1", "Ra.2", "Ra.3", "Ra.4", "Rb.1", "Rb.2", "Rb.3", "Rb.4",
					"T.1", "T.2", "T.3", "T.4", "F.1", "F.2", "F.3", "F.4"]
        },
        {
          "id": "diagonal",
          "name": "Diagonal Corner Swap",
		  "desc": "Advanced [CFOP] users may try to avoid theses cases using [COLL] or [OLLCP].",
          "cases": ["Y.1", "Y.2", "Y.3", "Y.4", "V.1", "V.2", "V.3", "V.4", "E.1", "E.2", "Na.1", "Nb.1"]
        },
	  ]
    },
    {
      "id": "edges",
      "name": "Edges",
      "groups":
      [
        {
          "id": "noswap",
          "name": "No Edge Swap",
		  "desc": "This group of cases is known as [CPLL]. They are generally solved using [commutator]s and [conjugate]s.",
          "cases": ["Aa.1", "Aa.2", "Aa.3", "Aa.4", "Ab.1", "Ab.2", "Ab.3", "Ab.4", "E.1", "E.2", "H.1", "Skip"]
        },
        {
          "id": "adjacent",
          "name": "Adjacent Edge Swap",
          "cases": ["Ua.1", "Ua.2", "Ua.3", "Ua.4", "Ub.1", "Ub.2", "Ub.3", "Ub.4",
					"Ga.1", "Ga.2", "Ga.3", "Ga.4", "Gb.1", "Gb.2", "Gb.3", "Gb.4", "Gc.1", "Gc.2", "Gc.3", "Gc.4", "Gd.1", "Gd.2", "Gd.3", "Gd.4",
					"Ja.1", "Ja.2", "Ja.3", "Ja.4", "Jb.1", "Jb.2", "Jb.3", "Jb.4", "Ra.1", "Ra.2", "Ra.3", "Ra.4", "Rb.1", "Rb.2", "Rb.3", "Rb.4",
					"Y.1", "Y.2", "Y.3", "Y.4", "V.1", "V.2", "V.3", "V.4"]
        },
        {
          "id": "opposite",
          "name": "Opposite Edge Swap",
          "cases": ["T.1", "T.2", "T.3", "T.4", "F.1", "F.2", "F.3", "F.4", "Z.1", "Z.2", "Na.1", "Nb.1"]
        },
	  ]
    },
    {
      "id": "grid",
      "name": "Grid",
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
          "cases": ["Ub.1", "Ga.1", "Ga.2", "Gc.3", "Gc.4", "V.1"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ua / Rb / Ra / Y",
          "cases": ["Ua.3", "Rb.1", "Rb.2", "Ra.3", "Ra.4", "Y.3"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ub / Gb / Gd / V",
          "cases": ["Ub.3", "Gb.1", "Gb.2", "Gd.3", "Gd.4", "V.3"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ua / Jb / Ja / Y",
          "cases": ["Ua.4", "Jb.1", "Jb.2", "Ja.3", "Ja.4", "Y.2"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ub / Gc / Ga / V",
          "cases": ["Ub.4", "Gc.1", "Gc.2", "Ga.3", "Ga.4", "V.2"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ua / Ra / Rb / Y",
          "cases": ["Ua.2", "Ra.1", "Ra.2", "Rb.3", "Rb.4", "Y.4"]
        },
        {
          "id": "aes",
          "name": "Adjacent<br/>Edge Swap<br/>Ub / Gd / Gb / V",
          "cases": ["Ub.2", "Gd.1", "Gd.2", "Gb.3", "Gb.4", "V.4"]
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
