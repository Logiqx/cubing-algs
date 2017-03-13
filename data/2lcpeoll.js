var algSet = {
  "header":
  {
    "id": "2LCPEOLL",
    "name": "2-Look Corner Permutation and Edge Orientation of the Last Layer",
    "wiki": "https://www.speedsolving.com/wiki/index.php/",
    "algdb": "http://algdb.net/",
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
      "id": "Clock",
      "name": "Clock",
      "desc": "This case resembles an analog clock at 9 o'clock. It is typically solved using the algorithm(s) for [OLL] 44.",
      "wiki": "",
      "algdb": "Set/OLL/OLL 44",
      "image": "EOLL-L",
      "prob": "4/8",
      "algs" :
      [
        {
          "alg": "F (U R U' R') F'",
          "name": "OLL 44",
          "desc": "[Conjugate] of [reverse-sexy] - [F: U R U' R']",
		  "status": 1,
          "uses": ["2H"],
		  "vars" :
		  [
			{
			  "alg": "U2 f (R U R' U') f'",
			  "desc": "Executed from a different angle",
			  "status": 1,
			  "uses": ["2H"]
			},
		  ]
        },
        {
          "alg": "U r U2 R' U' R U' r'",
          "name": "OLL 6",
          "desc": "[RFWAS] - Extract 2x2x1 block, [AUF], re-insert block",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "U r U2' R' U' R U' r'",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
        }
      ]
    },
    {
      "id": "Line",
      "name": "Line",
      "desc": "This case is typically solved using the algorithm for [OLL] 45.",
      "wiki": "",
      "algdb": "Set/OLL/OLL 45",
      "image": "EOLL-I",
      "prob": "2/8",
      "algs" :
      [
        {
          "alg": "F (R U R' U') F'",
          "name": "OLL 45",
          "desc": "[Conjugate] of [sexy] - [F: R U R' U']",
		  "status": 1,
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Dot",
      "name": "Dot",
      "desc": "This case is typically solved using the algorithm(s) for [OLL] 2.",
      "wiki": "",
      "algdb": "Set/OLL/OLL 2",
      "image": "EOLL-D",
      "prob": "1/8",
      "algs" :
      [
        {
          "alg": "F (R U R' U') F' f (R U R' U') f'",
          "name": "OLL 2",
          "desc": "[OLL] combination - F [sexy] F', f [sexy] f'",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "F (R U R' U') S (R U R' U') f'",
              "desc": "Two-handed execution applies a cancellation",
              "status": 1,
			  "uses": ["2H"]
			}
		  ]
        },
        {
          "alg": "(r U2 R' U' R U' r') U' (r U2 R' U' R U' r')",
          "name": "OLL 2",
          "desc": "[SuneOLL]: [RFWAS], [AUF], [RFWAS]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(r U2' R' U' R U' r') U' (r U2' R' U' R U' r')",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
		  ]
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
          "uses": ["2H", "OH"]
        },
      ]
    },
    {
      "id": "Adj",
      "name": "Adjacent Corner Swap",
      "desc": "This case can be solved with the [Niklas] algorithm.",
      "wiki": "",
      "algdb": ".",
      "image": "CPLL-A",
      "prob": "4/6",
      "algs" :
      [
        {
          "alg": "(L' U R U') (L U R' U')",
          "name": "Niklas",
          "desc": "Basic commutator - [L', U R U']",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "L' U R U' L U R'",
              "desc": "Two-handed execution",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": "z (U' R D R' U R D') [z']",
              "desc": "One-handed execution",
			  "status": 1,
			  "uses": ["OH"]
			}
          ]
        }
      ]
    },
    {
      "id": "Diag",
      "name": "Diagonal Corner Swap",
      "desc": "This case can be solved using a [Niklas] combination.",
      "wiki": "",
      "algdb": ".",
      "image": "CPLL-O",
      "prob": "1/6",
      "algs" :
      [
        {
          "alg": "(L' U R U') (L U R' U') U (L' U R U') (L U R' U')",
          "desc": "[Niklas] combination - [LFN], U, [LFN]",
		  "status": 1,
          "uses": [],
		  "vars" :
		  [
			{
			  "alg": "(L' U R U' L U R') (L' U R U' L U R')",
              "desc": "Two-handed execution includes a cancellation",
			  "status": 1,
			  "uses": ["2H"]
			},
			{
			  "alg": " z (U' R D R' U R D') (U' R D R' U R D') [z']",
              "desc": "One-handed execution includes a cancellation",
			  "status": 1,
			  "uses": ["OH"]
			}
          ]
        }
      ]
    },
    {
      "id": "CPLL",
      "name": "Corners Permuted",
      "wiki": "",
      "algdb": ".",
      "image": "CPLL",
      "prob": "1/6",
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
      "id": "steps",
      "name": "Steps",
      "groups":
      [
        {
          "id": "edges",
          "name": "Edge Orientation",
          "wiki": "EOLL",
          "algdb": "Set/OLL",
          "desc": "These are the 3 [EOLL] cases. They are solved using the fastest [OLL] algorithms with the desired effect. There is a 1/8 chance of skipping this step and going straight to [CPLL].",
          "cases": ["Clock", "Line", "Dot", "EOLL"]
        },
        {
          "id": "corners",
          "name": "Corner Permutation",
          "wiki": "CPEOLL",
          "desc": "These are the 2 [CPLL] cases. All of these cases can be solved using the [Niklas] algorithm. There is a 1/6 chance of skipping this step and going straight to [2GLL].",
          "cases": ["Adj", "Diag", "CPLL"]
        },
      ]
    },
  ]
}
