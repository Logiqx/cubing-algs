var algSet = {
  "header":
  {
    "id": "4AOLL",
    "name": "4-Algorithm Orientation of the Last Layer",
    "level": "Improver",
    "css": "2LOLL",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/Set/OLL/",
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
      "id": "Clock",
      "name": "Clock",
      "desc": "This case resembles an analog clock at 9 o'clock.",
      "wiki": "",
      "algdb": "OLL 44",
      "image": "EOLL-L",
      "prob": "4/8",
      "algs" :
      [
        {
          "alg": "F (U R U' R') F'",
          "desc": "[Conjugate] of [reverse-sexy] - [F: U R U' R']",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Line",
      "name": "Line",
      "desc": "This case can be solved using the [inverse] of the \"Clock\" algorithm.",
      "wiki": "",
      "algdb": "OLL 45",
      "image": "EOLL-I",
      "prob": "2/8",
      "algs" :
      [
        {
          "alg": "F (R U R' U') F'",
          "desc": "[Conjugate] of [sexy] - [F: R U R' U']",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "Dot",
      "name": "Dot",
      "desc": "The \"Dot\" case is solved using the algorithms for the \"Clock\" and \"Line\" cases.",
      "wiki": "",
      "algdb": "OLL 2",
      "image": "EOLL-D",
      "prob": "1/8",
      "algs" :
      [
        {
          "alg": "F (U R U' R') F' + U' + F (R U R' U') F'",
          "desc": "[EOLL] combination - F [reverse-sexy] F', [AUF], F [sexy] F'",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "EOLL",
      "name": "Edges Oriented",
      "wiki": "",
      "algdb": ".",
      "image": "EOLL",
      "prob": "1/8",
      "algs" :
      [
        {
          "alg": "Yay!",
          "desc": "",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "AS",
      "name": "Anti-Sune",
      "wiki": "",
      "algdb": "OLL 26",
      "image": "OCLL-AS",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U R U2 R' U' R U' R'",
          "desc": "[RFAS] - Extract [F2L] pair, [AUF], re-insert pair",
		  "status": 1,
          "uses": ["2H"],
        }
      ]
    },
    {
      "id": "S",
      "name": "Sune",
      "wiki": "",
      "algdb": "OLL 27",
      "image": "OCLL-S",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "R U R' U R U2' R'",
          "desc": "[RFS] - Extract [F2L] pair, [AUF], re-insert pair",
		  "status": 1,
          "uses": ["2H"]
        },
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "wiki": "",
      "algdb": "OLL 25",
      "image": "OCLL-L",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U' (R U2 R' U' R U' R') + U2 + (R U R' U R U2' R')",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [AUF], [RFS]",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "U",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "OLL 23",
      "image": "OCLL-U",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "U (R U2 R' U' R U' R') + U' + (R U R' U R U2' R')",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [AUF], [RFS]",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "T",
      "name": "T / Chameleon",
      "wiki": "",
      "algdb": "OLL 24",
      "image": "OCLL-T",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') + U + (R U R' U R U2' R')",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [AUF], [RFS]",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "Pi",
      "name": "Pi / Bruno",
      "wiki": "",
      "algdb": "OLL 22",
      "image": "OCLL-Pi",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') + U' + (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [AUF], [RFAS]",
		  "status": 1,
          "uses": ["2H"],
        },
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "OLL 21",
      "image": "OCLL-H",
      "prob": "2/27",
      "algs" :
      [
        {
          "alg": "U' (R U2 R' U' R U' R') + (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: Double [RFAS]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "U' R U2 R' U' (R U R' U') R U' R'",
              "desc": "Optimal execution applies cancellations",
			  "status": 1,
			  "uses": []
			},
		  ]
        },
      ]
    },
    {
      "id": "OCLL",
      "name": "Corners Oriented",
      "wiki": "",
      "algdb": ".",
      "image": "OCLL",
      "prob": "1/27",
      "algs" :
      [
        {
          "alg": "Yay!",
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
          "id": "edges",
          "name": "Edge Orientation",
          "wiki": "EOLL",
          "desc": "The 3 [EOLL] cases are solved using 2 easy algorithms - F [reverse-sexy] F' and F [sexy] F'.",
          "cases": ["Clock", "Line", "Dot", "EOLL"]
        },
        {
          "id": "corners",
          "name": "Corner Orientation",
          "wiki": "OCLL",
          "desc": "The 7 [OCLL] cases are solved using 2 easy algorithms - [RFAS] (R U2 R' U' R U' R') and [RFS] (R U R' U R U2' R').",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "OCLL"]
        },
      ]
    },
  ]
}
