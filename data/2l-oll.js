var algSet = {
  "header":
  {
    "id": "2L-OLL",
    "name": "Orientation of the Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/OLL",
    "algdb": "http://algdb.net/Set/OLL/",
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
      "wiki": "OLL 26",
      "algdb": "OLL 26",
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
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U] R U2 R' U' R U' R'",
          "desc": "[RFAS] - Extract [F2L] pair, [AUF], re-insert [F2L] pair",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U] R U2' R' U' R U' R'",
              "desc": "Actual execution",
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
      "wiki": "OLL 27",
      "algdb": "OLL 27",
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
          "alg": "[U'] R' U2' R U R' U R",
          "desc": "[RBAS] - Extract [F2L] pair, [AUF], re-insert [F2L] pair",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "L",
      "name": "L / Bowtie",
      "wiki": "OLL 25",
      "algdb": "OLL 25",
      "image": "OCLL-L.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "[U2] (F' L F R') (F' L' F R)",
          "desc": "Basic [commutator] - [F' L F, R']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] F' (r U R' U') r' F R",
              "desc": "Actual execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] F' (r U R' U') z U' R u",
              "desc": "Actual execution",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "x' (R U' R' D) (R U R' D') x",
          "desc": "First half of the E-Perm. Basic [commutator] - [R U' R', D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(l U' R' D) (R U R' D') x",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "x' (R U' R' D) (R U R' u') [z']",
              "desc": "Actual execution",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "[U'] R U2 R' U' (R U R' U') (R U R' U') R U' R'",
          "desc": "[SuneOLL]/[2GLL]: Triple [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] R U2' R' U' (R U R' U') (R U R' U') R U' R'",
			  "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "[U2] R' U' R (U' R' U R) (U' R' U R) U' R' U2 R",
          "desc": "[SuneOLL]/[2GLL]: Triple [RBS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] R' U' R (U' R' U R) (U' R' U R) U' R' U2' R",
			  "desc": "Actual execution",
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
      "wiki": "OLL 23",
      "algdb": "OLL 23",
      "image": "OCLL-U.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "R2 (D' R U2 R') (D R U2 R') R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [D', R U2 R']]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R2 D' R U2 R' D R U2 R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "[U2] R2 (D R' U2 R) (D' R' U2 R) R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [D, R' U2 R]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] R2 D R' U2 R D' R' U2 R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "(R' U' R U' R' U2 R) (R U R' U R U2' R')",
          "desc": "[SuneOLL]/[2GLL]: [RBS], [RFS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U' R U' R' U2' R2 U R' U R U2' R'",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U2] (R U R' U R U2' R') (R' U' R U' R' U2 R)",
          "desc": "[SuneOLL]/[2GLL]: [RFS], [RBS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] R U R' U R U2' R2 U' R U' R' U2' R",
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
      "wiki": "OLL 24",
      "algdb": "OLL 24",
      "image": "OCLL-T.png",
      "prob": "4/27",
      "algs" :
      [
        {
          "alg": "[U'] (L F R' F') (L' F R F')",
          "desc": "Basic [commutator] - [L, F R' F']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] (r U R' U') (r' F R F')",
              "desc": "Actual execution is wide [sexy], wide [sledgehammer]",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U'] (r U R' U') z (U' R u F') [z']",
              "desc": "Actual execution",
			  "status": 0,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U2] x' (R U R' D) (R U' R' D') x",
          "desc": "Second half of the E-Perm. Basic [commutator] - [R, U R' D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (l U R' D) (R U' R' u') [z']",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] x' (R U R' D) (R U' R' u') [z']",
              "desc": "Actual execution",
			  "status": 0,
			  "uses": ["OH"]
			}
		  ]
		},
        {
          "alg": "(R U2 R' U' R U' R') (R' U2' R U R' U R)",
          "desc": "[SuneOLL]/[2GLL]: [RFAS], [RBAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U2' R' U' R U' R2 U2' R U R' U R",
              "desc": "Actual execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U2] (R' U2' R U R' U R) (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: [RBAS], [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] R' U2' R U R' U R2 U2' R' U' R U' R'",
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
      "wiki": "OLL 22",
      "algdb": "OLL 22",
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
              "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R2 U' R2 U' R2 U2' R",
              "desc": "Actual execution includes cancellations",
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
      "wiki": "OLL 21",
      "algdb": "OLL 21",
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
              "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U' R (U' R' U R) U' R' U2' R",
              "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U] (R U2 R' U' R U' R') (R U2 R' U' R U' R')",
          "desc": "[SuneOLL]/[2GLL]: Double [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] R U2 R' U' (R U R' U') R U' R'",
              "desc": "Actual execution includes cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] R U2' R' U' (R U R' U') R U' R'",
              "desc": "Actual execution includes cancellations",
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
