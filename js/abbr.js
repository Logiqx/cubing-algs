var abbrs =
[
  {
    "name": "2GLL",
    "desc": "2-Gen Last Layer. Solved using R and U moves"
  },
  {
    "name": "2H",
    "desc": "Two-handed"
  },
  {
    "name": "AUF",
    "desc": "Adjust U Face"
  },
  {
    "name": "BRU",
    "desc": "B' (R' U' R U) B" 
  },
  {
    "name": "BUR",
    "desc": "B' (U' R' U R) B"
  },
  {
    "name": "CFOP",
    "desc": "Cross, F2L, OLL, PLL"
  },
  {
    "name": "COLL",
    "desc": "Corners and Orientation of the Last Layer"
  },
  {
    "name": "CPLL",
    "desc": "Corner Permutation of the Last Layer"
  },
  {
    "name": "Commutator",
    "desc": "[A, B] = A B A' B'"
  },
  {
    "name": "Conjugate",
    "desc": "[A: B] = A B A'"
  },
  {
    "name": "EOLL",
    "desc": "Edge Orientation of the Last Layer"
  },
  {
    "name": "EPLL",
    "desc": "Edge Permutation of the Last Layer"
  },
  {
    "name": "F2L",
    "desc": "First Two Layers"
  },
  {
    "name": "FRU",
    "desc": "F (R U R' U') F'"
  },
  {
    "name": "FUR",
    "desc": "F (U R U' R') F'"
  },
  {
    "name": "Hedgeslammer",
    "desc": "(F R' F' R)"
  },
  {
    "name": "LL",
    "desc": "Last Layer"
  },
  {
    "name": "OH",
    "desc": "One-handed"
  },
  {
    "name": "OCLL",
    "desc": "Orient Corners of the Last Layer"
  },
  {
    "name": "OLL",
    "desc": "Orientation of the Last Layer"
  },
  {
    "name": "OLLCP",
    "desc": "Orientation of the Last Layer and Corner Permutation"
  },
  {
    "name": "PLL",
    "desc": "Permutation of the Last Layer"
  },
  {
    "name": "LBAS",
    "desc": "Left Back Anti-Sune"
  },
  {
    "name": "LBS",
    "desc": "Left Back Sune"
  },
  {
    "name": "LBWAS",
    "desc": "Left Back Wide Anti-Sune"
  },
  {
    "name": "LBWS",
    "desc": "Left Back Wide Sune"
  },
  {
    "name": "LFAS",
    "desc": "Left Front Anti-Sune"
  },
  {
    "name": "LFS",
    "desc": "Left Front Sune"
  },
  {
    "name": "LFWAS",
    "desc": "Left Front Wide Anti-Sune"
  },
  {
    "name": "LFWS",
    "desc": "Left Front Wide Sune"
  },
  {
    "name": "Niklas",
    "desc": "The 8-move commutator named by Lars Petrus"
  },
  {
    "name": "Palindrome",
    "desc": "The algorithm is the same when read backwards"
  },
  {
    "name": "RBAS",
    "desc": "Right Back Anti-Sune"
  },
  {
    "name": "RBS",
    "desc": "Right Back Sune"
  },
  {
    "name": "RBWAS",
    "desc": "Right Back Wide Anti-Sune"
  },
  {
    "name": "RBWS",
    "desc": "Right Back Wide Sune"
  },
  {
    "name": "Reverse-sexy",
    "desc": "U R U' R'"
  },
  {
    "name": "RFAS",
    "desc": "Right Front Anti-Sune"
  },
  {
    "name": "RFS",
    "desc": "Right Front Sune"
  },
  {
    "name": "RFWAS",
    "desc": "Right Front Wide Anti-Sune"
  },
  {
    "name": "RFWS",
    "desc": "Right Front Wide Sune"
  },
  {
    "name": "Sexy",
    "desc": "R U R' U'"
  },
  {
    "name": "Sexy-sledge",
    "desc": "(R U R' U') (R' F R F')"
  },
  {
    "name": "Sledgehammer",
    "desc": "(R' F R F')"
  },
  {
    "name": "Sune",
    "desc": "Extract F2L pair, AUF, re-insert F2L pair"
  },
  {
    "name": "SuneOLL",
    "desc": "Solving an OLL case using Sune variations"
  },
  {
    "name": "VHLS",
    "desc": "Vandenbergh-Harris Last Slot"
  },
]

//
// Replace abbreviations within a description
//
function replaceAbbr(desc)
{
	// Iterate through the cases
	for (var abbrIdx = 0; abbrIdx < abbrs.length; abbrIdx++)
	{
		// Current case
		var tokenUpper = "[" + abbrs[abbrIdx].name + "]";

		// Handle abbreviation
		while (desc.indexOf(tokenUpper) >= 0)
		{
			var abbr = "<abbr title=\"" + abbrs[abbrIdx].desc + "\">" + abbrs[abbrIdx].name + "</abbr>";

			desc = desc.replace(tokenUpper, abbr);
		}

		// Current case
		var tokenLower = "[" + abbrs[abbrIdx].name.toLowerCase() + "]";

		// Handle abbreviation
		while (desc.indexOf(tokenLower) >= 0)
		{
			var abbr = "<abbr title=\"" + abbrs[abbrIdx].desc + "\">" + abbrs[abbrIdx].name.toLowerCase() + "</abbr>";

			desc = desc.replace(tokenLower, abbr);
		}
	}

	return desc;
}