var abbrs=[{name:"2GLL",desc:"2-Gen Last Layer. Solved using R and U moves"},{name:"2H",desc:"Two-handed"},{name:"2LLL",desc:"2-Look Last Layer"},{name:"4LLL",desc:"4-Look Last Layer"},{name:"6LLL",desc:"6-Look Last Layer"},{name:"Anti-Sune",desc:"Extract F2L pair, AUF, re-insert pair"},{name:"AUF",desc:"Adjust U Face"},{name:"CFOP",desc:"Cross, F2L, OLL, PLL"},{name:"COLL",desc:"Corners of the Last Layer - Preserving Edge Orientation"},{name:"CLL",desc:"Corners of the Last Layer"},{name:"CPEOLL",desc:"Corner Permutation and Edge Orientation of the Last Layer"},{name:"CPLL",desc:"Corner Permutation of the Last Layer"},{name:"Commutator",desc:"[A, B] = A B A' B'"},{name:"Conjugate",desc:"[A: B] = A B A'"},{name:"Double-Sexy",desc:"(R U R' U') (R U R' U')"},{name:"ELL",desc:"Edges of the Last Layer"},{name:"EOLL",desc:"Edge Orientation of the Last Layer"},{name:"EPLL",desc:"Edge Permutation of the Last Layer"},{name:"F2L",desc:"First Two Layers"},{name:"Hedgeslammer",desc:"(F R' F' R)"},{name:"Inverse",desc:"Executing an algorithm in reverse"},{name:"L4C",desc:"Last Four Corners"},{name:"LL",desc:"Last Layer"},{name:"LLEF",desc:"Last Layer Edges First"},{name:"OH",desc:"One-handed"},{name:"OCLL",desc:"Orient Corners of the Last Layer"},{name:"OCLL-EPP",desc:"Orient Corners of the Last Layer - Edges Permutation Preserved"},{name:"OLL",desc:"Orientation of the Last Layer"},{name:"OLLCP",desc:"Orientation of the Last Layer and Corner Permutation"},{name:"OLLCP-A",desc:"Orientation of the Last Layer and Corner Permutation"},{name:"PBL",desc:"Permutation of Both Layers"},{name:"PLL",desc:"Permutation of the Last Layer"},{name:"LBAS",desc:"Left-Back Anti-Sune"},{name:"LBL",desc:"Layer-by-Layer"},{name:"LBN",desc:"Left-Back Niklas"},{name:"LBS",desc:"Left-Back Sune"},{name:"LBWAS",desc:"Left-Back Wide-Anti-Sune"},{name:"LBWS",desc:"Left-Back Wide-Sune"},{name:"LFAS",desc:"Left-Front Anti-Sune"},{name:"LFN",desc:"Left-Front Niklas"},{name:"LFS",desc:"Left-Front Sune"},{name:"LFWAS",desc:"Left-Front Wide-Anti-Sune"},{name:"LFWS",desc:"Left-Front Wide-Sune"},{name:"Mounted-Fish",desc:"OLL #37 - F R U' (R' U' R U) R' F'"},{name:"MU",desc:"Algorithm consisting of M and U moves"},{name:"Niklas",desc:"The 8-move commutator named by Lars Petrus"},{name:"Palindrome",desc:"The algorithm is the same when read backwards"},{name:"RBAS",desc:"Right-Back Anti-Sune"},{name:"RBN",desc:"Right-Back Niklas"},{name:"RBS",desc:"Right-Back Sune"},{name:"RBWAS",desc:"Right-Back Wide-Anti-Sune"},{name:"RBWS",desc:"Right-Back Wide-Sune"},{name:"Reverse-sexy",desc:"U R U' R'"},{name:"RFAS",desc:"Right-Front Anti-Sune"},{name:"RFN",desc:"Right-Front Niklas"},{name:"RFS",desc:"Right-Front Sune"},{name:"RFWAS",desc:"Right-Front Wide-Anti-Sune"},{name:"RFWS",desc:"Right-Front Wide-Sune"},{name:"RU",desc:"Algorithm consisting of R and U moves"},{name:"RUD",desc:"Algorithm consisting of R, U and D moves"},{name:"RUF",desc:"Algorithm consisting of R, U and F moves"},{name:"RUL",desc:"Algorithm consisting of R, U and L moves"},{name:"Sexy",desc:"R U R' U'"},{name:"Sexy-sledge",desc:"OLL #33 - (R U R' U') (R' F R F')"},{name:"Sledgehammer",desc:"(R' F R F')"},{name:"Sune",desc:"Extract F2L pair, AUF, re-insert pair"},{name:"SuneOLL",desc:"Solving an OLL case using Sune variations"},{name:"TPS",desc:"Turns Per Second"},{name:"Triple-Sexy",desc:"(R U R' U') (R U R' U') (R U R' U')"},{name:"VHLS",desc:"Vandenbergh-Harris Last Slot"}];function replaceAbbr(e){for(var b=0;b<abbrs.length;b++){var f=abbrs[b];if(f!=null){var d="["+f.name+"]";while(e.indexOf(d)>=0){var c='<abbr class="dotted" title="'+f.desc+'">'+f.name+"</abbr>";e=e.replace(d,c)}var a="["+f.name.toLowerCase()+"]";while(e.indexOf(a)>=0){var c='<abbr class="dotted" title="'+f.desc+'">'+f.name.toLowerCase()+"</abbr>";e=e.replace(a,c)}}}return e};