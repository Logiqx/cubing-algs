//
// Render algorithm
//
function renderCaseAlg(algObj, style, narrow)
{
	// Initialisation
    var out = "";
	
	// Row - start
	out += "<tr>";
	
	// Algorithm
	out += "<td class=\"" + style + "\">" + algObj.alg + "</td>";

	if (narrow == false)
	{
		// Uses
		out += "<td class=\"uses\">";
		for (var useIdx = 0; useIdx < algObj.uses.length; useIdx++)
		{
			if (useIdx > 0)
			{
				out += ", ";
			}
			
			out += algObj.uses[useIdx];
		}
		out += "</td>";

		var desc = algObj.desc;
		
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

		// Description
		out += "<td class=\"desc\">" + desc + "</td>";
	}
	
	// Row - end
	out += "</tr>";
	
	return out;
}

//
// Render algorithms for a specific case
//
function renderCaseAlgs(caseObj, narrow)
{
	// Initialisation
    var out = "";
	var option = 1;
	
	// Iterate through the algorithms
	for (var algIdx = 0; algIdx < caseObj.algs.length; algIdx++)
	{
		// Get the actual algorithm object
		var algObj = caseObj.algs[algIdx];
	
		// Output case name as the title
		out += "<h3>Alg " + option + "</h3>";
		
		// Status
		switch (algObj.status)
		{
			case 0:
				out += "<p>I don't use this algorithm yet.</p>";
				break;
			case -1:
				out += "<p>I don't use this algorithm nowadays.</p>";
				break;
		}

		// Render the table
		out += "<table>";

		// Render the alg
		out += renderCaseAlg(algObj, "alg", narrow);
		
		// Do any variations of the algorithm exist?
		if (algObj.hasOwnProperty("vars"))
		{
			// Iterate through the variations of the algorithm
			for (var varIdx = 0; varIdx < algObj.vars.length; varIdx++)
			{
				// Get the actual variation object
				var varObj = algObj.vars[varIdx];
				
				// Render the variation
				out += renderCaseAlg(varObj, "var", narrow);
			}
		}
		
		out += "</table>";
		
		option++;
	}

	return out;
}

//
// Render links for a specific case
//
function renderCaseLinks(caseObj)
{
	// Initialisation
    var out = "";

	// Output links title
	out += "<h3>Links</h3>";

	// Wiki anchor is based on the shape
	var wikiAnchor = "";
	
	// Iterate through the views
    for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		var viewObj = algSet.views[viewIdx];
	
		if (viewObj.hasOwnProperty("groups"))
		{
			// Iterate through the groups
			for (var groupIdx = 0; groupIdx < viewObj.groups.length; groupIdx++)
			{
				var groupObj = viewObj.groups[groupIdx];

				if (groupObj.hasOwnProperty("wiki"))
				{
					// Iterate through the cases in the group
					for (var caseIdx = 0; caseIdx < groupObj.cases.length; caseIdx++)
					{
						// If this case has been found we have found the  anchor for the Wiki page!
						if (groupObj.cases.indexOf(caseObj.id) >= 0)
						{
							wikiAnchor = groupObj.wiki;
						}
					}
				}
			}
		}
	}
	
	// Wiki
	out += "<p>SpeedSolving Wiki: <a href=\"" + algSet.header.wiki + wikiAnchor + "\" target=\"_blank\">" + caseObj.wiki + "</a><p>";

	// AlgDb.Net
	out += "<p>AlgDb.Net: <a href=\"" + algSet.header.algdb + caseObj.algdb + "\" target=\"_blank\">" + caseObj.algdb + "</a><p>";

	return out;
}

//
// Render the case
//
function renderCase(caseId, narrow)
{
	// Initialisation
    var out = "";
	
	// Determine the image size
	var imgSize = narrow == false ? "128" : "96";
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	// Output the case name
	out += "<h1>" + algSet.header.id + " " + caseId + "</h1>";
	
	// Output important message
	out += important();
	
	// Check if the case exists
	if (caseIds.indexOf(caseId) >= 0)
	{
		// Get the actual case
		var caseObj = algSet.cases[caseIds.indexOf(caseId)];

		// Output case name as the title
		out += "<h2>" + caseObj.name + "</h2>";
		
		// Browser title
		document.title = algSet.header.id + " " + caseId;
		
		// Image
		out += "<img class=\"ll" + imgSize + "\" src=\"img/" + algSet.header.id + "/" + imgSize + "/" + caseObj.image + "\" />";

		// Description
		if (caseObj.desc)
		{
			out += "<p>" + caseObj.desc + "</p>";
		}

		// Probability
		out += "<p>Probability = " + caseObj.prob + "</p>";

		// Render the algs
		out += renderCaseAlgs(caseObj, narrow);

		// Render the links
		out += renderCaseLinks(caseObj);
	}
	else
	{
		out += "Missing case " + caseId; 
	}

	// Update the HTML document
    document.getElementById("view").innerHTML = out;
}

//
// Switch to a specific case
//
function switchCase(caseId)
{
	// Store the current window offset
	storeWindowOffset();

	// Prepare the hash
	var hash = "#case_" + caseId;

	// Some browsers (e.g. Chrome) do not allow pushState() when viewing locally
	try
	{
		// Prepare state
		var obj = { "hash": hash, "xOffset": 0, "yOffset": 0 };
		var title = algSet.header.id + " " + caseId;
		var url = hash;
		
		// Push state to history
		history.pushState(obj, title, url);
	
		// Render the view
		processHash();
	}
	catch (e)
	{
		// Update the URL, forcing a pop event in Chrome and thus the page to be rendered
		window.location.hash = hash;
	}

	// Scroll to the top - no need to wait like we do in the "popstate" event
	window.scrollTo(0, 0);
}
