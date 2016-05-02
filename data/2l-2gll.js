var algSet = {
  "header":
  {
    "id": "2L-2GLL",
    "name": "2-Generator Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/2GLL",
    "algdb": "",
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
      "id": "AS",
      "name": "Anti-Sune",
      "wiki": "",
      "algdb": "COLL AS",
      "image": "OCLL-AS.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "R' U' R U' R' U2 R",
          "desc": "[RBS] - Extract [F2L] pair, [AUF], re-insert [F2L] pair",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "R' U' R U' R' U2' R",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[y] R U2 R' U' R U' R'",
          "desc": "[RFAS] - Extract [F2L] pair, [AUF], re-insert [F2L] pair",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[y] R U2' R' U' R U' R'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "S",
      "name": "Sune",
      "wiki": "",
      "algdb": "COLL S",
      "image": "OCLL-S.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "R U R' U R U2' R'",
          "desc": "[RFS] - Extract [F2L] pair, [AUF], re-insert [F2L] pair",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "[y'] R' U2' R U R' U R",
          "desc": "[RBAS] - Extract [F2L] pair, [AUF], re-insert [F2L] pair",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "wiki": "",
      "algdb": "COLL L",
      "image": "OCLL-L.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "[y'] R U2 R' U' (R U R' U') (R U R' U') R U' R'",
          "desc": "[SuneOLL]/[2GLL]: Triple [RFAS]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[y'] R U2' R' U' (R U R' U') (R U R' U') R U' R'",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "[y2] R' U' R (U' R' U R) (U' R' U R) U' R' U2 R",
          "desc": "[SuneOLL]/[2GLL]: Triple [RBS]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[y2] R' U' R (U' R' U R) (U' R' U R) U' R' U2' R",
			  "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "U",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "COLL U",
      "image": "OCLL-U.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R' U' R U' R' U2 R) (R U R' U R U2' R')",
          "desc": "[SuneOLL]/[2GLL]: [RBS], [RFS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U' R U' R' U2 R2 U R' U R U2' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U' R U' R' U2' R2 U R' U R U2' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[y2] (R U R' U R U2' R') (R' U' R U' R' U2 R)",
          "desc": "[SuneOLL]/[2GLL]: [RFS], [RBS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[y2] R U R' U R U2' R2 U' R U' R' U2 R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[y2] R U R' U R U2' R2 U' R U' R' U2' R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "T",
      "name": "T / Chameleon",
      "wiki": "",
      "algdb": "COLL T",
      "image": "OCLL-T.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R U2 R' U' R U' R') (R' U2' R U R' U R)",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [RBAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U2 R' U' R U' R2' U2' R U R' U R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R' U' R U' R2 U2' R U R' U R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[y2] (R' U2' R U R' U R) (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: [RBAS], [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[y2] R' U2' R U R' U R2 U2 R' U' R U' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[y2] R' U2' R U R' U R2 U2' R' U' R U' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "Pi",
      "name": "Pi / Bruno",
      "wiki": "",
      "algdb": "COLL PI",
      "image": "OCLL-Pi.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "(R U2' R') (R' U' R) (R U' R') (R' U2' R)",
          "desc": "[Palindrome]. Essentially [RFAS] and [RBS] mixed together",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U2' R2' U' R2 U' R2' U2' R",
              "desc": "Two-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R2 U' R2 U' R2 U2' R",
              "desc": "One-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "H",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "COLL H",
      "image": "OCLL-H.png",
      "prob": "2/27",
      "algs" :
      [
        {
          "alg": "(R' U' R U' R' U2 R) (R' U' R U' R' U2 R)",
          "desc": "[SuneOLL]/[2GLL]: Double [RBS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U' R (U' R' U R) U' R' U2 R",
              "desc": "Two-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U' R (U' R' U R) U' R' U2' R",
              "desc": "One-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[y] (R U2 R' U' R U' R') (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: Double [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[y] R U2 R' U' (R U R' U') R U' R'",
              "desc": "Two-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[y] R U2' R' U' (R U R' U') R U' R'",
              "desc": "One-handed execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "-",
      "name": "Corners Oriented",
      "wiki": "",
      "algdb": "",
      "image": "OCLL.png",
      "prob": "1/27",
      "algs" :
      [
        {
          "alg": "N/A",
          "desc": "",
		  "status": 1,
          "uses": ["OH", "2H"]
        },
      ]
    },
  ],
  "views":
  [
    {
      "id": "steps",
      "name": "Steps",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "corners",
          "name": "Corner Orientation",
          "cases": ["AS", "S", "L", "U", "T", "Pi", "H", "-"]
        },
      ]
    },
  ]
}
