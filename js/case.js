//
// Render algorithm
//
function renderCaseAlg(algObj, style, viewportWidth)
{
	// Initialisation
    var out = "";
	
	// Row - start
	out += "<tr>";
	
	// Algorithm
	out += "<td class=\"" + style + "\">" + algObj.alg + "</td>";

	// Uses is hidden on narrow displays
	if (viewportWidth >= PHONE_LANDSCAPE)
	{
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
	}

	// Description of algorithm is only shown on wide displays
	if (viewportWidth >= TABLET_LANDSCAPE)
	{
		out += "<td class=\"desc\">" + replaceAbbr(algObj.desc) + "</td>";
	}
	
	// Row - end
	out += "</tr>";
	
	return out;
}

//
// Render algorithms for a specific case
//
function renderCaseAlgs(caseObj, viewportWidth)
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
		out += renderCaseAlg(algObj, "alg", viewportWidth);
		
		// Do any variations of the algorithm exist?
		if (algObj.hasOwnProperty("vars"))
		{
			// Iterate through the variations of the algorithm
			for (var varIdx = 0; varIdx < algObj.vars.length; varIdx++)
			{
				// Get the actual variation object
				var varObj = algObj.vars[varIdx];
				
				// Render the variation
				out += renderCaseAlg(varObj, "var", viewportWidth);
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
function renderCaseLinks(caseObj, viewportWidth)
{
	// Initialisation
    var out = "";

	// Output links title
	out += "<h3>Links</h3>";

	// Wiki anchor and label may be based on a group
	var wikiAnchor = caseObj.wiki;
	var wikiLabel = algSet.header.id;
	if (wikiAnchor != "")
	{
		if (caseObj.wiki.indexOf("#") >= 0)
		{
			wikiLabel = algSet.header.id;
		}
		else
		{
			wikiLabel = caseObj.wiki;
		}
	}

	// AlgDB anchor and label are unique to the case
	var algdbPage = caseObj.algdb;
	var algdbLabel = algSet.header.id
	if (algdbPage != "")
	{
		algdbLabel = caseObj.algdb;
	}
	
	// Iterate through the views
    for (var viewIdx = 0; wikiAnchor == "" && viewIdx < algSet.views.length; viewIdx++)
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
							if (groupObj.wiki.indexOf("#") >= 0)
							{
								wikiLabel = algSet.header.id;
							}
							else
							{
								wikiLabel = groupObj.wiki;
							}
						}
					}
				}
			}
		}
	}
	
	// Wiki
	out += "<p>SpeedSolving Wiki: <a href=\"" + algSet.header.wiki + wikiAnchor + "\" target=\"_blank\">" + wikiLabel + "</a><p>";

	// AlgDb.Net
	out += "<p>AlgDb.Net: <a href=\"" + algSet.header.algdb + algdbPage + "\" target=\"_blank\">" + algdbLabel + "</a><p>";

	return out;
}

//
// Render the case
//
function renderCase(caseId, viewportWidth)
{
	// Initialisation
    var out = "";
	
	// Determine the image size
	var imgSize = viewportWidth >= PHONE_LANDSCAPE ? "128" : "96";
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	// Output the case name
	out += "<h1>" + algSet.header.id + " " + caseId + "</h1>";
	
	// Output header message
	out += header();
	
	// Check if the case exists
	if (caseIds.indexOf(caseId) >= 0)
	{
		// Get the actual case
		var caseObj = algSet.cases[caseIds.indexOf(caseId)];

		// Output case name as the title
		if (caseObj.name != caseId)
		{
			out += "<h2>" + caseObj.name + "</h2>";
		}
		
		// Browser title
		document.title = algSet.header.id + " " + caseId;
		
		// Image
		out += "<p><i class=\"s" + imgSize + "-" + algSet.header.id.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() + "\"></i></p>";

		// Description
		if (caseObj.desc)
		{
			out += "<p>" + replaceAbbr(caseObj.desc) + "</p>";
		}

		// Probability
		out += "<p>Probability = " + caseObj.prob + "</p>";

		// Render the algs
		out += renderCaseAlgs(caseObj, viewportWidth);

		// Render the links
		out += renderCaseLinks(caseObj, viewportWidth);
	}
	else
	{
		out += "Missing case " + caseId; 
	}

	// Output footer message
	out += footer();
	
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
