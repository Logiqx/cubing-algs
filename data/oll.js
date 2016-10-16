var algSet = {
  "header":
  {
    "id": "OLL",
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
      "id": "1",
      "name": "No Edges - Runway",
      "wiki": "",
      "algdb": "OLL 1",
      "image": "OLL-01",
      "prob": "1/108",
      "algs" :
      [
        {
          "alg": "R U2 R' (R' F R F') U2 (R' F R F')",
          "desc": "Extract [F2L] pair, [sledgehammer], [AUF], [sledgehammer]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R U2' (R2' F R F') U2 (R' F R F')",
              "desc": "Actual execution applies a cancellation",
              "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "(r' U' R U' R' U2' r) U (r U2' R' U' R U' r')",
          "desc": "[SuneOLL]: [RBWS], [AUF], [RFWAS]",
		  "status": 1,
          "uses": ["OH"]
        }
      ]
    },
    {
      "id": "2",
      "name": "No Edges - Zamboni",
      "wiki": "",
      "algdb": "OLL 2",
      "image": "OLL-02",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "R' U2 (r U' r') U2 (r U r') U2 R",
          "desc": "[Palindrome]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "R' U2' (r U' r') U2' (r U r') U2' R",
              "desc": "Actual execution",
              "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U] (r U r') U2' (R U2' R') U2' (r U' r')",
          "desc": "Decent for [OH] but also pretty good for [2H]",
		  "status": -1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "(r U2 R' U' R U' r') U' (r U2 R' U' R U' r')",
          "desc": "[SuneOLL]: [RFWAS], [AUF], [RFWAS]",
		  "status": -1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "(r U2' R' U' R U' r') U' (r U2' R' U' R U' r')",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "F (R U R' U') F' f (R U R' U') f'",
          "desc": "[OLL] combination - F [sexy] F', f [sexy] f'",
		  "status": -1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "F (R U R' U') S (R U R' U') f'",
              "desc": "Actual execution applies a cancellation",
              "status": -1,
			  "uses": ["2H"]
			}
		  ]
        }
      ]
    },
    {
      "id": "3",
      "name": "No Edges - Anti-Mouse",
      "wiki": "",
      "algdb": "OLL 3",
      "image": "OLL-03",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "M (R U R' U r U2' r') U M'",
          "desc": "Includes hybrid of [RFS] and [RFWS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r' (R2 U R' U r U2' r') U M'",
              "desc": "Actual execution",
		      "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r' (R2 U R' U r U2' r') U r R'",
              "desc": "Actual execution",
		      "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "f (R U R' U') f' U' F (R U R' U') F'",
          "desc": "[OLL] combination - f [sexy] f', [AUF], F [sexy] F'",
		  "status": -1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "4",
      "name": "No Edges - Mouse",
      "wiki": "",
      "algdb": "OLL 4",
      "image": "OLL-04",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "M' (R' U' R U' r' U2 r) U' M",
          "desc": "Includes hybrid of [RBS] and [RBWS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "M' (R' U' R U' r' U2 r) U' r' R",
              "desc": "Actual execution",
		      "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r (R2 U' R U' r' U2' r) U' r' R",
              "desc": "Actual execution",
		      "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "f (R U R' U') f' U F (R U R' U') F'",
          "desc": "[OLL] combination - f [sexy] f', [AUF], F [sexy] F'",
		  "status": -1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "5",
      "name": "Square Shape - RBWAS",
      "wiki": "",
      "algdb": "OLL 5",
      "image": "OLL-05",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] r' U2' R U R' U r",
          "desc": "[RBWAS] - Extract 2x2x1 block, [AUF], re-insert block",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "6",
      "name": "Square Shape - RFWAS",
      "wiki": "",
      "algdb": "OLL 6",
      "image": "OLL-06",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U] r U2 R' U' R U' r'",
          "desc": "[RFWAS] - Extract 2x2x1 block, [AUF], re-insert block",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U] r U2' R' U' R U' r'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "7",
      "name": "Small Lightning Bolt - RFWS",
      "wiki": "",
      "algdb": "OLL 7",
      "image": "OLL-07",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "r U R' U R U2' r'",
          "desc": "[RFWS] - Extract 2x2x1 block, [AUF], re-insert block",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "8",
      "name": "Small Lightning Bolt - RBWS",
      "wiki": "",
      "algdb": "OLL 8",
      "image": "OLL-08",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "r' U' R U' R' U2 r",
          "desc": "[RBWS] - Extract 2x2x1 block, [AUF], re-insert block",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "r' U' R U' R' U2' r",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "9",
      "name": "Fish Shape - Anti-Kite",
      "wiki": "",
      "algdb": "OLL 9",
      "image": "OLL-09",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] (R U R' U') (R' F R F') F (R U R' U') F'",
          "desc": "[OLL] combination - [sexy-sledge], F [sexy] F'",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (R U R' U') R' F R2 U R' U' F'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "[U] M (R U2 R' U' R U' R') U' M'",
          "desc": "M-slice, [RFAS], [AUF], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] r' (R2 U2' R' U' R U' R') U' r R'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "10",
      "name": "Fish Shape - Kite",
      "wiki": "",
      "algdb": "OLL 10",
      "image": "OLL-10",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] R U R' U (R' F R F') R U2' R'",
          "desc": "[Sledgehammer] in the middle of [RFS]",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "[U'] M' (R' U2' R U R' U R) U M",
          "desc": "M-slice, [RBAS], [AUF], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] r (R2 U2' R U R' U R) U r' R",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "11",
      "name": "Small Lightning Bolt",
      "wiki": "",
      "algdb": "OLL 11",
      "image": "OLL-11",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "M (R U R' U R U2' R') U M'",
          "desc": "M-slice, [RFS], [AUF], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r' (R2 U R' U R U2' R') U M'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r' (R2 U R' U R U2' R') U r R'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "12",
      "name": "Small Lightning Bolt",
      "wiki": "",
      "algdb": "OLL 12",
      "image": "OLL-12",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "M' (R' U' R U' R' U2 R) U' M",
          "desc": "M-slice, [RBS], [AUF], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "M' (R' U' R U' R' U2 R) U' r' R",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r (R2 U' R U' R' U2' R) U' r' R",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "13",
      "name": "Knight Move - Gun",
      "wiki": "",
      "algdb": "OLL 13",
      "image": "OLL-13",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(r U' r' U' r U r') y' R' U R",
		"desc": "Extract [F2L] pair using wide turns, re-insert normally",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "14",
      "name": "Knight Move - Anti-Gun",
      "wiki": "",
      "algdb": "OLL 14",
      "image": "OLL-14",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(r' U r U r' U' r) y R U' R'",
          "desc": "Extract [F2L] pair using wide turns, re-insert normally",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "15",
      "name": "Knight Move - Squeegee",
      "wiki": "",
      "algdb": "OLL 15",
      "image": "OLL-15",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] r' U' r (R' U' R U) r' U r",
          "desc": "[Conjugate] of [sexy] from the back - [r' U' r: R' U' R U]",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "16",
      "name": "Knight Move - Anti-Squeegee",
      "wiki": "",
      "algdb": "OLL 16",
      "image": "OLL-16",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U] r U r' (R U R' U') r U' r'",
          "desc": "[Conjugate] of [sexy] - [r U r': R U R' U']",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "17",
      "name": "No Edges - Slash",
      "wiki": "",
      "algdb": "OLL 17",
      "image": "OLL-17",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U] (R U R' U') U2 (R' F R F') U2 (R' F R F')",
          "desc": "Triggers - [sexy], [AUF], [sledgehammer], [AUF], [sledgehammer]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] (R U R' U) (R' F R F') U2 (R' F R F')",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "[U'] (r U2' R' U' R U' r') U2' (r U R' U R U2' r')",
		  "status": 1,
          "desc": "[SuneOLL]: [RFWAS], [AUF], [RBWS]",
          "uses": ["OH"]
        }
      ]
    },
    {
      "id": "18",
      "name": "No Edges - Crown",
      "wiki": "",
      "algdb": "OLL 18",
      "image": "OLL-18",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] R U2' R' (R' F R F') U2 M' (U R U' r')",
		"desc": "Extract [F2L] pair, [sledgehammer], [AUF], re-insert pair",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] R U2' (R2' F R F') U2 M' (U R U' r')",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
		{
		  "alg": "(r' U' R U' R' U2 r) (r U R' U R U2' r')",
		  "desc": "[SuneOLL]: [RBWS], [RFWS]",
		  "status": 1,
		  "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r' U' R U' R' U2' r2 U R' U R U2' r'",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
		},
        {
          "alg": "[U2] (r U R' U R U2' r') (r' U' R U' R' U2 r)",
          "desc": "[SuneOLL]: [RFWS], [RBWS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] r U R' U R U2' r2 U' R U' R' U2' r",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
		},
      ]
    },
    {
      "id": "19",
      "name": "No Edges - Bunny / Mickey",
      "wiki": "",
      "algdb": "OLL 19",
      "image": "OLL-19",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] M U (R U R' U') M' (R' F R F')",
          "desc": "Triggers - M U, [sexy], M', [sledgehammer]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] r' R U (R U R' U') M' (R' F R F')",
              "desc": "Actual execution avoids the M move",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
		{
		  "alg": "(r U2 R' U' R U' r') (r' U2' R U R' U r)",
		  "desc": "[SuneOLL]: [RFWAS], [RBWAS]",
		  "status": 1,
		  "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r U2' R' U' R U' r2 U2' R U R' U r",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
		},
        {
          "alg": "[U2] (r' U2' R U R' U r) (r U2 R' U' R U' r')",
          "desc": "[SuneOLL]: [RBWAS], [RFWAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] r' U2' R U R' U r2 U2' R' U' R U' r'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "20",
      "name": "No Edges - X / Checkers",
      "wiki": "",
      "algdb": "OLL 20",
      "image": "OLL-20",
      "prob": "1/216",
      "algs" :
      [
        {
          "alg": "M' (R U R' U') M2 (U R U' R') U' M'",
          "desc": "Triggers - M-slice, [sexy], M-slice, [reverse-sexy], [AUF], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(r U R' U') M2' (U R U' R') U' M'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "(r U R' U') r2 R2 (U R U' R') U' r R'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "21",
      "name": "H / Double Sune",
      "wiki": "",
      "algdb": "OLL 21",
      "image": "OLL-21",
      "prob": "1/108",
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
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U' R (U' R' U R) U' R' U2' R",
              "desc": "Actual execution applies cancellations",
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
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] R U2' R' U' (R U R' U') R U' R'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U] F (R U R' U') (R U R' U') (R U R' U') F'",
          "desc": "[Conjugate] of triple [sexy]: [F: [R U R' U']*3]",
		  "status": -1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "22",
      "name": "Pi / Bruno",
      "wiki": "",
      "algdb": "OLL 22",
      "image": "OLL-22",
      "prob": "1/54",
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
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R2 U' R2 U' R2 U2' R",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "(R' U2 R) (R U R') (R' U R) (R U2 R')",
          "desc": "[Palindrome]. Essentially [RBAS] and [RFS] mixed together",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U2 R2 U R2' U R2 U2 R'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U2' R2 U R2 U R2 U2' R'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "f (R U R' U') f' F (R U R' U') F'",
          "desc": "[OLL] combination - f [sexy] f', F [sexy] F'",
		  "status": -1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "f (R U R' U') S' (R U R' U') F'",
              "desc": "Actual execution applies a cancellation",
              "status": -1,
			  "uses": ["2H"]
			}
		  ]
        }
      ]
    },
    {
      "id": "23",
      "name": "U / Headlights",
      "wiki": "",
      "algdb": "OLL 23",
      "image": "OLL-23",
      "prob": "1/54",
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
			  "alg": "R2' D' R U2 R' D R U2 R",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "R2 D' R U2' R' D R U2' R",
              "desc": "Actual execution applies a cancellation",
			  "status": 0,
			  "uses": ["OH"]
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
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] R2 D R' U2' R D' R' U2' R'",
              "desc": "Actual execution applies a cancellation",
              "status": 0,
			  "uses": ["OH"]
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
			  "alg": "R' U' R U' R' U2 R2 U R' U R U2' R'",
              "desc": "Actual execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U' R U' R' U2' R2 U R' U R U2' R'",
              "desc": "Actual execution applies a cancellation",
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
			  "alg": "[U2] R U R' U R U2' R2' U' R U' R' U2 R",
              "desc": "Actual execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] R U R' U R U2' R2 U' R U' R' U2' R",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "24",
      "name": "T / Chameleon",
      "wiki": "",
      "algdb": "OLL 24",
      "image": "OLL-24",
      "prob": "1/54",
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
              "desc": "Actual execution incorporates wide turns",
			  "status": 0,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U2] x' (R U R' D) (R U' R' D') x",
          "desc": "Second half of E-Perm. Basic [commutator] - [R, U R' D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (l U R' D) (R U' R' u') [z']",
              "desc": "Actual execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] x' (R U R' D) (R U' R' u') [z']",
              "desc": "Actual execution incorporates wide turns",
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
			  "alg": "R U2 R' U' R U' R2' U2' R U R' U R",
              "desc": "Actual execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "R U2' R' U' R U' R2 U2' R U R' U R",
              "desc": "Actual execution applies a cancellation",
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
			  "alg": "[U2] R' U2' R U R' U R2 U2 R' U' R U' R'",
              "desc": "Actual execution applies a cancellation",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] R' U2' R U R' U R2 U2' R' U' R U' R'",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "25",
      "name": "L / Bowtie",
      "wiki": "",
      "algdb": "OLL 25",
      "image": "OLL-25",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(F' L F R') (F' L' F R)",
          "desc": "Basic [commutator] - [F' L F, R']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "F' (r U R' U') r' F R",
              "desc": "Actual execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "F' (r U R' U') z U' R u",
              "desc": "Actual execution incorporates wide turns",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "[U2] x' (R U' R' D) (R U R' D') x",
          "desc": "First half of E-Perm. Basic [commutator] - [R U' R', D]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (l U' R' D) (R U R' D') x",
              "desc": "Actual execution incorporates wide turns",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] x' (R U' R' D) (R U R' u') [z']",
              "desc": "Actual execution incorporates wide turns",
			  "status": 0,
			  "uses": ["OH"]
			},
		  ]
        },
        {
          "alg": "(R' U' R U' R' U2 R) * 3",
          "desc": "[SuneOLL]/[2GLL]: Triple [RBS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "R' U' R (U' R' U R) (U' R' U R) U' R' U2 R",
              "desc": "Actual execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "R' U' R (U' R' U R) (U' R' U R) U' R' U2' R",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U] (R U2 R' U' R U' R') * 3",
          "desc": "[SuneOLL]/[2GLL]: Triple [RFAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] R U2 R' U' (R U R' U') (R U R' U') R U' R'",
              "desc": "Actual execution applies cancellations",
			  "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] R U2' R' U' (R U R' U') (R U R' U') R U' R'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U2] R2 (R U2 R' D') (R U2 R' D) R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R U2 R', D']]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] R' U2 R' D' R U2 R' D R2",
              "desc": "Actual execution applies a cancellation",
              "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] R' U2' R' D' R U2' R' D R2",
              "desc": "Actual execution applies a cancellation",
              "status": 0,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U'] R2 (R' U2 R D) (R' U2 R D') R2'",
          "desc": "A9 [commutator] / [conjugate] - [R2: [R' U2 R, D]]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] R U2 R D R' U2 R D' R2'",
              "desc": "Actual execution applies a cancellation",
              "status": 0,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U'] R U2' R D R' U2' R D' R2",
              "desc": "Actual execution applies a cancellation",
              "status": 0,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "26",
      "name": "Anti-Sune",
      "wiki": "",
      "algdb": "OLL 26",
      "image": "OLL-26",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "R' U' R U' R' U2 R",
          "desc": "[RBS] - Extract [F2L] pair, [AUF], re-insert pair",
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
          "desc": "[RFAS] - Extract [F2L] pair, [AUF], re-insert pair",
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
      "id": "27",
      "name": "Sune",
      "wiki": "",
      "algdb": "OLL 27",
      "image": "OLL-27",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "R U R' U R U2' R'",
          "desc": "[RFS] - Extract [F2L] pair, [AUF], re-insert pair",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "[U'] R' U2' R U R' U R",
          "desc": "[RBAS] - Extract [F2L] pair, [AUF], re-insert pair",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "28",
      "name": "Stealth / Angel Fish",
      "wiki": "",
      "algdb": "OLL 28",
      "image": "OLL-28",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] M' (R U R' U') M (U R U' R')",
          "desc": "Triggers - M-slice, [sexy], M-slice, [reverse-sexy]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (r U R' U') r' R (U R U' R')",
              "desc": "Actual execution avoids the M move",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U] (M' U' M) U2' (M' U' M)",
          "desc": "Moo!",
		  "status": 1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "29",
      "name": "Awkward Shape",
      "wiki": "",
      "algdb": "OLL 29",
      "image": "OLL-29",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] (R U R' U') (R U' R') (F' U' F) (R U R')",
          "desc": "Playing with [F2L] pair - track FR corner",
		  "status": 1,
          "uses": ["2H", "OH"]
		},
        {
          "alg": "[U2] B' U' (R' U2 R) U (R' U2 R) U B",
          "desc": "[Palindrome] / [Conjugate] - [B' U' R' U2 R: U]",
		  "status": -1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U2] B' U' (R' U2' R) U (R' U2' R) U B",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U2] M U (R U R' U') (R' F R F') M'",
          "desc": "Includes [sexy-sledge]",
		  "status": -1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] r' R U (R U R' U') (R' F R F') M'",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] r' R U (R U R' U') (x R' U R U' x') r R'",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "(r U2 R' U' R U' r') (R' U2' R U R' U R)",
          "desc": "[SuneOLL]: [RFWAS], [RBAS]",
		  "status": -1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "(r U2' R' U' R U' r') (R' U2' R U R' U R)",
			  "status": -1,
              "desc": "Actual execution",
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "30",
      "name": "Awkward Shape",
      "wiki": "",
      "algdb": "OLL 30",
      "image": "OLL-30",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "F U (R U2 R') U' (R U2 R') U' F'",
          "desc": "[Palindrome] / [Conjugate] - [F U R U2' R': U']",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "F U (R U2' R') U' (R U2' R') U' F'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "M' U' (R' U' R U) (R B' R' B) M",
          "desc": "Includes mirror of [sexy-sledge]",
		  "status": -1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "M' U' (R' U' R U) (R B' R' B) r' R",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r R' U' (R' U' R U) (x' R U' R' U x) r' R",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U2] (r' U2' R U R' U r) (R U2 R' U' R U' R')",
          "desc": "Sune OLL: [RBWAS], [RFAS]",
		  "status": -1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U2] (r' U2' R U R' U r) (R U2' R' U' R U' R')",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "31",
      "name": "P Shape - Little \"q\"",
      "wiki": "",
      "algdb": "OLL 31",
      "image": "OLL-31",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] R' U' F (U R U' R') F' R",
          "desc": "Includes F [reverse-sexy] F'",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "32",
      "name": "P Shape - Little \"d\"",
      "wiki": "",
      "algdb": "OLL 32",
      "image": "OLL-32",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] R U2 R' U' (F' U F) R U' R'",
          "desc": "Basically [RFAS] with an embedded (F' U F')",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U'] R U2' R' U' (F' U F) R U' R'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "[U'] R U B' (U' R' U R) B R'",
          "desc": "Includes mirror of F [reverse-sexy] F'",
		  "status": -1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U'] R U z f' (U' R' U R) z' f R'",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "33",
      "name": "T Shape - Key",
      "wiki": "",
      "algdb": "OLL 33",
      "image": "OLL-33",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] (R U R' U') (R' F R F')",
          "desc": "Trigger combination known as \"[sexy-sledge]\"",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U'] (R U R' U') (x R' U R U' x')",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "34",
      "name": "C Shape - City (C and T)",
      "wiki": "",
      "algdb": "OLL 34",
      "image": "OLL-34",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(R U R' U') B' (R' F R F') B",
          "desc": "Triggers - [sexy], B', [sledgehammer], B",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(R U R' U') x D' (R' U R U') D x'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "(R U R' U') y' (r' U' R U M')",
          "desc": "Triggers - [sexy] then Roux-style insert to back",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(R U R' U') y' (r' U' R U r R')",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
		{
          "alg": "R U R2 U' R' F R U R U' F'",
          "desc": "Playing with [F2L] pairs - track FR + BR + FL",
		  "status": 0,
          "uses": []
        }
      ]
    },
    {
      "id": "35",
      "name": "Fish Shape - Fish Salad",
      "wiki": "",
      "algdb": "OLL 35",
      "image": "OLL-35",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] R U2 R' (R' F R F') R U2 R'",
          "desc": "Extract [F2L] pair, [sledgehammer], re-insert pair",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U'] R U2' (R2' F R F') R U2' R'",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U'] R U2' (R2 F R F') R U2' R'",
              "desc": "Actual execution applies a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "36",
      "name": "W Shape - Wario",
      "wiki": "",
      "algdb": "OLL 36",
      "image": "OLL-36",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] (R' U' R U' R' U2 R) (R' U' R U) (R B' R' B)",
          "desc": "[OLL] combination - [RBS], [sexy-sledge] from the back",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
              "alg": "[U'] (R' U' R U') (R' U R U) (l U' R' U x)",
              "desc": "Actual execution applies cancellations",
              "status": 1,
              "uses": ["2H"],
			},
			{
			  "alg": "[U'] (R' U' R U') (R' U R U) (x' R U' R' U x)",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "37",
      "name": "Fish Shape - Mounted Fish",
      "wiki": "",
      "algdb": "OLL 37",
      "image": "OLL-37",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] F R U' (R' U' R U) R' F'",
          "desc": "Playing with [F2L] pair - track FL",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
        {
          "alg": "[U'] (F R' F' R) (U R U' R')",
          "desc": "Triggers - [hedgeslammer], [reverse-sexy]",
		  "status": -1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "38",
      "name": "W Shape - Mario",
      "wiki": "",
      "algdb": "OLL 38",
      "image": "OLL-38",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] (R U R' U R U2' R') (R U R' U') (R' F R F')",
          "desc": "[OLL] combination - [RFS], [sexy-sledge]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (R U R' U) (R U' R' U') (R' F R F')",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U2] (R U R' U) (R U' R' U') (x R' U R U' x')",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "39",
      "name": "Big Lightning Bolt",
      "wiki": "",
      "algdb": "OLL 39",
      "image": "OLL-39",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "R U R' (F' U' F) U R U2 R'",
          "desc": "Basically [RFS] with an embedded (F' U' F)",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "R U R' (F' U' F) U R U2' R'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        },
        {
          "alg": "R B' (R' U' R U) B U' R'",
          "desc": "Includes mirror of F [sexy] F'",
		  "status": -1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "R z f' (R' U' R U) z' f U' R'",
              "desc": "Actual execution",
			  "status": -1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "40",
      "name": "Big Lightning Bolt",
      "wiki": "",
      "algdb": "OLL 40",
      "image": "OLL-40",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U] R' F (R U R' U') F' U R",
          "desc": "Includes F [sexy] F'",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "41",
      "name": "Awkward Shape",
      "wiki": "",
      "algdb": "OLL 41",
      "image": "OLL-41",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(R U R' U R U2' R') F (R U R' U') F'",
          "desc": "[OLL] combination - [RFS], F [sexy] F'",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "42",
      "name": "Awkward Shape",
      "wiki": "",
      "algdb": "OLL 42",
      "image": "OLL-42",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] (R' U' R U' R' U2 R) F (R U R' U') F'",
          "desc": "[OLL] combination - [RBS], F [sexy] F'",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U2] (R' U' R U' R' U2' R) F (R U R' U') F'",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "43",
      "name": "P Shape - Little \"b\"",
      "wiki": "",
      "algdb": "OLL 43",
      "image": "OLL-43",
      "prob": "1/54",
      "algs" :
      [
        {
		  "alg": "[U] f' (L' U' L U) f",
		  "desc": "[Conjugate] - [f': L' U' L U]",
		  "status": 1,
		  "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U] f' z (U' R' U R) f [z']",
              "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["OH"]
			},
			{
			  "alg": "[U'] F' (U' L' U L) F",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["2H"],
			},
			{
			  "alg": "[U'] F' z (R' U' R U) F [z']",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["OH"]
			},
			{
			  "alg": "[U] B' (U' R' U R) B",
			  "desc": "Executed from a different angle",
			  "status": -1,
			  "uses": ["2H"],
			},
			{
			  "alg": "[U2] R' (U' F' U F) R",
			  "desc": "My execution",
			  "status": 0,
			  "uses": ["2H", "OH"],
			}
		  ]
        },
      ]
    },
    {
      "id": "44",
      "name": "P Shape - Little \"p\"",
      "wiki": "",
      "algdb": "OLL 44",
      "image": "OLL-44",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] f (R U R' U') f'",
          "desc": "[Conjugate] of [sexy] - [f: R U R' U']",
		  "status": 1,
          "uses": ["2H", "OH"],
		  "vars" :
		  [
			{
			  "alg": "[U] F (U R U' R') F'",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["2H", "OH"]
			},
		  ]
        },
      ]
    },
    {
      "id": "45",
      "name": "T Shape - Suit Up",
      "wiki": "",
      "algdb": "OLL 45",
      "image": "OLL-45",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U'] F (R U R' U') F'",
          "desc": "[Conjugate] of [sexy] - [F: R U R' U']",
		  "status": 1,
          "uses": ["2H", "OH"],
		  "vars" :
		  [
			{
			  "alg": "[U] f (U R U' R') f'",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["2H", "OH"]
			},
		  ]
        },
        {
		  "alg": "R' (F' U' F U) R",
		  "desc": "[Conjugate] - [R': F' U' F U]",
		  "status": 0,
		  "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "46",
      "name": "C Shape - Seein' Headlights",
      "wiki": "",
      "algdb": "OLL 46",
      "image": "OLL-46",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U] R' U' (R' F R F') U R",
          "desc": "[Conjugate] of [sledgehammer] - [R' U': R' F R F']",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U] R' U' (x R' U R U' x') U R",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
		}
      ]
    },
    {
      "id": "47",
      "name": "L Shape - Anti-Breakneck",
      "wiki": "",
      "algdb": "OLL 47",
      "image": "OLL-47",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] F' (L' U' L U) (L' U' L U) F",
          "desc": "[Conjugate] of double [sexy] - [F': [L' U' L U]*2]]",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "[U2] F' z (U' R' U R) (U' R' U R) F [z']",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["OH"]
			},
			{
			  "alg": "f' (U' L' U L) (U' L' U L) f",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "f' z (R' U' R U) (R' U' R U) f [z']",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["OH"]
			},
			{
			  "alg": "B' (R' U' R U) (R' U' R U) B",
			  "desc": "Executed from a different angle",
			  "status": -1,
			  "uses": ["2H"]
			},
		  ]
        },
      ]
	},
    {
      "id": "48",
      "name": "L Shape - Breakneck",
      "wiki": "",
      "algdb": "OLL 48",
      "image": "OLL-48",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "F (R U R' U') (R U R' U') F'",
          "desc": "[Conjugate] of double [sexy] - [F: [R U R' U']*2]]",
		  "status": 1,
          "uses": ["2H", "OH"],
		  "vars" :
		  [
			{
			  "alg": "[U2] f (U R U' R') (U R U' R') f'",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["2H", "OH"]
			}
		  ]
        },
      ]
    },
    {
      "id": "49",
      "name": "L Shape - RB Squeezy",
      "wiki": "",
      "algdb": "OLL 49",
      "image": "OLL-49",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(r U' r') (r' U r) (r U r') (r' U' r)",
          "desc": "[Palindrome] / [Commutator] - [r U' r', r' U r]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r U' r2' U r2 U r2' U' r",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r U' r2 U r2 U r2 U' r",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
		}
      ]
	},
    {
      "id": "50",
      "name": "L Shape - RB Squeezy",
      "wiki": "",
      "algdb": "OLL 50",
      "image": "OLL-50",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(r' U r) (r U' r') (r' U' r) (r U r')",
          "desc": "[Palindrome] / [Commutator] - [r' U r, r U' r']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r' U r2 U' r2' U' r2 U r'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r' U r2 U' r2 U' r2 U r'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
		}
      ]
	},
    {
      "id": "51",
      "name": "I Shape - Ant / Bottle Cap",
      "wiki": "",
      "algdb": "OLL 51",
      "image": "OLL-51",
      "prob": "1/54",
      "algs" :
      [
		{
		  "alg": "f (R U R' U') (R U R' U') f'",
		  "desc": "[Conjugate] of double [sexy] - [f: [R U R' U']*2]]",
		  "status": 1,
		  "uses": ["2H", "OH"],
		  "vars" :
		  [
			{
			  "alg": "[U2] F (U R U' R') (U R U' R') F'",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["2H", "OH"]
			},
		  ]
		},
      ]
    },
    {
      "id": "52",
      "name": "I Shape - Rice Cooker",
      "wiki": "",
      "algdb": "OLL 52",
      "image": "OLL-52",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "[U2] (R U R' U) (R U' B U' B' R')",
          "desc": "Extract [F2L] pair, re-insert (oddly)",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U2] (R U R' U) (R U' y R U' R' F')",
              "desc": "Actual execution avoids B moves",
			  "status": 1,
			  "uses": ["2H", "OH"]
			}
		  ]
        },
        {
          "alg": "[U2] (R' U' R U') (R' U F' U F R)",
          "desc": "Extract [F2L] pair, re-insert (oddly)",
		  "status": -1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "53",
      "name": "L Shape - Frying Pan",
      "wiki": "",
      "algdb": "OLL 53",
      "image": "OLL-53",
      "prob": "1/54",
      "algs" :
      [
        {
          "alg": "(r' U' R U' R' U2 r) (r' U' R U' R' U2 r)",
          "desc": "[SuneOLL]: Double [RBWS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r' U' R (U' R' U R) U' R' U2 r",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "r' U' R (U' R' U R) U' R' U2' r",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "54",
      "name": "L Shape - Anti-Frying Pan",
      "wiki": "",
      "algdb": "OLL 54",
      "image": "OLL-54",
      "prob": "1/54",
      "algs" :
      [
		{
          "alg": "(r U R' U R U2' r') (r U R' U R U2' r')",
          "desc": "[SuneOLL]: Double [RFWS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "r U R' (U R U' R') U R U2' r'",
              "desc": "Actual execution applies cancellations",
			  "status": 1,
			  "uses": ["OH", "2H"]
			},
		  ]
		}
      ]
    },
    {
      "id": "55",
      "name": "I Shape - Highway",
      "wiki": "",
      "algdb": "OLL 55",
      "image": "OLL-55",
      "prob": "1/108",
      "algs" :
      [
        {
          "alg": "[U] R' F R U R U' R2' F' R2 U' R' U R U R'",
          "desc": "Fast [OLL] with a [PLL] feel - Collin Burns 5.25 WR",
		  "status": 1,
          "uses": ["2H"]
        },
        {
          "alg": "[U] (R U2' R' U' R U' R') U' (r' U' R U' R' U2' r)",
          "desc": "[SuneOLL]: [RFAS], [AUF], [RBWS]",
		  "status": 1,
          "uses": ["OH"]
        },
        {
          "alg": "[U] (R U2' R2' U' R) U' (R' U2' F R F')",
          "desc": "I used this before finding the Collin Burns algorithm",
		  "status": -1,
          "uses": ["2H"]
        }
      ]
    },
    {
      "id": "56",
      "name": "I Shape - Street Lights",
      "wiki": "",
      "algdb": "OLL 56",
      "image": "OLL-56",
      "prob": "1/108",
      "algs" :
      [
        {
          "alg": "r U r' (U R U' R') (U R U' R') r U' r'",
          "desc": "[Conjugate] of double [reverse-sexy] - [r U r': [U R U' R']*2]]",
		  "status": 1,
          "uses": ["2H", "OH"]
        }
      ]
    },
    {
      "id": "57",
      "name": "H / I",
      "wiki": "",
      "algdb": "OLL 57",
      "image": "OLL-57",
      "prob": "1/108",
      "algs" :
      [
        {
          "alg": "[U] (R U R' U') M' (U R U' R') M",
          "desc": "Triggers - [sexy], M-slice, [reverse-sexy], M-slice",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "[U] (R U R' U') M' (U R U' r')",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "[U] (R U R' U') r R' (U R U' r')",
              "desc": "Actual execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "Skip",
      "name": "Orientation of the Last Layer",
      "wiki": "",
      "algdb": "",
      "image": "OLL",
      "prob": "1/216",
      "algs" :
	  [
        {
          "alg": "Yay!",
          "desc": "",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
	  ]
    },
  ],
  "views":
  [
    {
      "id": "numeric",
      "name": "Numeric",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "Numerical",
          "name": "",
          "cases": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
					"31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
					"41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
					"51", "52", "53", "54", "55", "56", "57", "Skip"]
        },
      ]
    },
    {
      "id": "shapes",
      "name": "Shapes",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "alledges",
          "name": "All Edges Oriented",
		  "desc": "These are the 7 [OCLL] cases, offering the chance to use [COLL]. Advanced [CFOP] users may try to force these cases using [VHLS].",
          "wiki": "#All_edges_flipped_correctly",
          "cases": ["26", "27", "25", "23", "24", "22", "21"]
        },
        {
          "id": "noedges",
          "name": "No Edges Oriented",
		  "desc": "These are known as the \"dot\" cases. Competent [CFOP] users will often avoid them using partial edge control - e.g. [sledgehammer].",
          "wiki": "#No_edges_flipped_correctly",
          "cases": ["4", "3", "17", "18", "19", "2", "1"]
        },
        {
          "id": "allcorners",
          "name": "All Corners Oriented",
		  "desc": "These are the 3 [EOLL] cases. Most of these algorithms also preserve the corner permutation.",
          "wiki": "#All_Corners_Oriented",
          "cases": ["28", "57", "20"]
        },
        {
          "id": "pshapes",
          "name": "\"P\" Shapes",
		  "desc": "",
          "wiki": "#.22P.22_shapes",
          "cases": ["43", "44", "31", "32"]
        },
        {
          "id": "wshapes",
          "name": "\"W\" Shapes",
		  "desc": "",
          "wiki": "#.22W.22_shapes",
          "cases": ["38", "36"]
        },
        {
          "id": "lshapes",
          "name": "\"L\" Shapes",
		  "desc": "",
          "wiki": "#.22L.22_shapes",
          "cases": ["50", "49", "47", "48", "53", "54"]
        },
        {
          "id": "cshapes",
          "name": "\"C\" Shapes",
		  "desc": "",
          "wiki": "#.22C.22_shapes",
          "cases": ["46", "34"]
        },
        {
          "id": "tshapes",
          "name": "\"T\" Shapes",
		  "desc": "",
          "wiki": "#.22T.22_shapes",
          "cases": ["45", "33"]
        },
        {
          "id": "ishapes",
          "name": "\"I\" Shapes",
		  "desc": "",
          "wiki": "#.22I.22_shapes",
          "cases": ["51", "52", "56", "55"]
        },
        {
          "id": "squares",
          "name": "Square Shapes",
		  "desc": "",
          "wiki": "#Square_shapes",
          "cases": ["6", "5"]
        },
        {
          "id": "bigbolts",
          "name": "Big Lightning Bolt Shapes",
		  "desc": "",
          "wiki": "#Big_lightning_bolt_shapes",
          "cases": ["39", "40"]
        },
        {
          "id": "smallbolts",
          "name": "Small Lightning Bolt Shapes",
		  "desc": "",
          "wiki": "#Small_lightning_bolt_shapes",
          "cases": ["12", "8", "11", "7"]
        },
        {
          "id": "fishes",
          "name": "Fish Shapes",
		  "desc": "",
          "wiki": "#Fish_shapes",
          "cases": ["9", "10", "37", "35"]
        },
        {
          "id": "knightmoves",
          "name": "Knight Move Shapes",
		  "desc": "",
          "wiki": "#Knight_move_shapes",
          "cases": ["14", "16", "13", "15"]
        },
        {
          "id": "awkwards",
          "name": "Awkward Shapes",
		  "desc": "",
          "wiki": "#Awkward_shapes",
          "cases": ["42", "41", "29", "30"]
        },
        {
          "id": "lucky",
          "name": "Lucky",
          "cases": ["Skip"]
        },
      ]
    },
    {
      "id": "edges",
      "name": "Edges",
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "crosses",
          "name": "Cross Cases",
		  "desc": "These are the 7 [OCLL] cases, offering the chance to use [COLL]. Advanced [CFOP] users may try to force these cases using [VHLS].",
          "cases": ["26", "27", "25", "23", "24", "22", "21"]
        },
        {
          "id": "dots",
          "name": "Dot Cases",
		  "desc": "These are known as the \"dot\" cases. Competent [CFOP] users will often avoid them using partial edge control - e.g. [sledgehammer].",
          "cases": ["4", "3", "17", "18", "19", "2", "1", "20"]
        },
        {
          "id": "lines",
          "name": "Line Cases",
          "cases": ["14", "16", "13", "15", "39", "40", "46", "45",
					"34", "33", "51", "52", "56", "55", "57"]
        },
        {
          "id": "adjacents",
          "name": "Adjacent Cases",
          "cases": ["9", "12", "8", "6", "11", "10", "5", "7",
					"38", "37", "35", "36", "43", "42", "44", "41",
					"31", "29", "32", "30", "50", "49", "47", "48",
					"53", "54",  "28"]
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
      "uses": ["2H", "OH"],
      "groups":
      [
        {
          "id": "oriented",
          "name": "All Corners Oriented",
		  "desc": "These are the 3 [EOLL] cases. Most of these algorithms also preserve the corner permutation.",
          "cases": ["28", "57", "20"]
        },
        {
          "id": "antisune",
          "name": "Anti-Sune",
          "cases": ["26", "9", "12", "8", "6", "14", "16", "4"]
        },
        {
          "id": "sune",
          "name": "Sune",
          "cases": ["27", "11", "10", "5", "7", "13", "15", "3"]
        },
        {
          "id": "bowtie",
          "name": "L / Bowtie",
          "cases": ["25", "38", "37", "35", "36", "39", "40", "17"]
        },
        {
          "id": "headlights",
          "name": "U / Headlights",
          "cases": ["23", "43", "42", "44", "41", "46", "45", "18"]
        },
        {
          "id": "chameleon",
          "name": "T / Chameleon",
          "cases": ["24", "31", "29", "32", "30", "34", "33", "19"]
        },
        {
          "id": "bruno",
          "name": "Pi / Bruno",
          "cases": ["22", "50", "49", "47", "48", "51", "52", "2"]
        },
        {
          "id": "doublesune",
          "name": "H / Double Sune",
          "cases": ["21", "53", "54", "56", "55", "1"]
        },
        {
          "id": "lucky",
          "name": "Lucky",
          "cases": ["Skip"]
        },
	  ]
    },
    {
      "id": "grid",
      "name": "Grid",
      "headers": ["OCLL", "Flip-LB", "Flip-LF", "Flip-RB", "Flip-RF", "Flip-FB", "Flip-LR", "Flip-All"],
      "rows":
      [
        {
          "id": "eoll",
          "name": "EOLL",
          "cases": ["Skip", "28", null, null, null, null, "57", "20"]
        },
        {
          "id": "antisune",
          "name": "Anti-Sune",
          "cases": ["26", "9", "12", "8", "6", "14", "16", "4"]
        },
        {
          "id": "sune",
          "name": "Sune",
          "cases": ["27", "11", "10", "5", "7", "13", "15", "3"]
        },
        {
          "id": "bowtie",
          "name": "L / Bowtie",
          "cases": ["25", "38", "37", "35", "36", "39", "40", "17"]
        },
        {
          "id": "headlights",
          "name": "U / Headlights",
          "cases": ["23", "43", "42", "44", "41", "46", "45", "18"]
        },
        {
          "id": "chameleon",
          "name": "T / Chameleon",
          "cases": ["24", "31", "29", "32", "30", "34", "33", "19"]
        },
        {
          "id": "bruno",
          "name": "Pi / Bruno",
          "cases": ["22", "50", "49", "47", "48", "51", "52", "2"]
        },
        {
          "id": "doublesune",
          "name": "H / Double Sune",
          "cases": ["21", "53", "54", null, null, "56", "55", "1"]
        },
      ]
    },
  ]
}
