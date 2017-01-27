//
// Render algorithm
//
function renderCaseAlg(algObj, style, padding, width)
{
	// Initialisation
	var out = "";
	var uses = getUses(algObj);
	
	// Show "uses" as superscript
	if (uses.length > 0)
	{
		uses = " <sup>" + uses + "</sup>";
	}

	// "Inactive" algorithms are shown in grey
	var inactive = "";
	if (algObj.status < 1 || algObj.uses.length < 1)
	{
		inactive = " inactive"
	}
	
	// Wide displays - near perfect on iPad (portrait)
	// TODO - Two columns of 384 pixels wide?
	if (width >= IPAD_PORTRAIT)
	{
		out += "<tr>";
		out += "<td class=\"" + style + inactive + "\">" + algObj.alg + uses + "</td>";
		out += "<td class=\"desc" + inactive + "\">" + replaceAbbr(algObj.desc) + "</td>";
		out += "</tr>";
	}

	// Narrow displays
	else
	{
		if (padding)
		{
			out += "<tr><td>&nbsp;</td></tr>";
		}
		
		out += "<tr><td class=\"" + style + inactive + "\">" + algObj.alg + uses + "</td></tr>";
		out += "<tr><td class=\"" + style + inactive + "\"><em>" + replaceAbbr(algObj.desc) + "</em></td></tr>";
	}
	
	return out;
}

//
// Render algorithms for a specific case
//
function renderCaseAlgs(caseObj, width)
{
	// Initialisation
	var out = "";
	var option = 1;
	
	// Iterate through the algorithms
	for (var algIdx = 0; algIdx < caseObj.algs.length; algIdx++)
	{
		// Get the actual algorithm object
		var algObj = caseObj.algs[algIdx];
	
		// IE8 gets confused by a comma at the end of a list
		if (algObj != null)
		{
			// Output case name as the title
			if (algObj.hasOwnProperty("name"))
			{
				out += "<h3>Alg " + option + " - " + algObj.name + "</h3>";
			}
			else
			{
				out += "<h3>Alg " + option + "</h3>";
			}
			
			// Status
			switch (algObj.status)
			{
				case 0:
					out += "<p class=\"inactive\">I don't use this algorithm yet.</p>";
					break;
				case -1:
					out += "<p class=\"inactive\">I don't use this algorithm nowadays.</p>";
					break;
			}

			// Render the table
			out += "<table>";

			// Render the alg
			out += renderCaseAlg(algObj, "alg", false, width);
			
			// Do any variations of the algorithm exist?
			if (algObj.hasOwnProperty("vars"))
			{
				// Iterate through the variations of the algorithm
				for (var varIdx = 0; varIdx < algObj.vars.length; varIdx++)
				{
					// Get the actual variation object
					var varObj = algObj.vars[varIdx];
					
					// IE8 gets confused by a comma at the end of a list
					if (varObj != null)
					{
						// Render the variation
						out += renderCaseAlg(varObj, "var", true, width);
					}
				}
			}
			
			out += "</table>";
			
			option++;
		}
	}

	return out;
}

//
// Render links for a specific case
//
function renderCaseLinks(caseObj, width)
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
	
		// IE8 gets confused by a comma at the end of a list
		if (viewObj != null)
		{
			if (viewObj.hasOwnProperty("groups"))
			{
				// Iterate through the groups
				for (var groupIdx = 0; groupIdx < viewObj.groups.length; groupIdx++)
				{
					var groupObj = viewObj.groups[groupIdx];

					// IE8 gets confused by a comma at the end of a list
					if (groupObj != null)
					{
						if (groupObj.hasOwnProperty("wiki"))
						{
							// If this case has been found we have found the anchor for the Wiki page!
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
function renderCase(caseId, width)
{
	// Initialisation
	var out = "";
	
	// Determine the image size
	var imgSize = width >= IPHONE_LANDSCAPE ? "128" : "96";
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	// Output the case name
	out += "<h1><span class=\"menu-btn\">&#9776;</span> " + algSet.header.id + " - " + caseId + "</h1>";
	
	// Output header message - looks fine on Galaxy S3 (portrait)
	out += header(GALAXY_S3_PORTRAIT);
	
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
		var css = algSet.header.hasOwnProperty("css") ? algSet.header.css : algSet.header.id;
		out += "<p><i class=\"s" + imgSize + "-" + css.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() + "\"></i></p>";

		// Description
		if (caseObj.desc)
		{
			out += "<p>" + replaceAbbr(caseObj.desc) + "</p>";
		}

		// Probability
		out += "<p>Probability = " + caseObj.prob + "</p>";

		// Render the algs
		out += renderCaseAlgs(caseObj, width);

		// Render the links
		out += renderCaseLinks(caseObj, width);
	}
	else
	{
		out += "Missing case " + caseId; 
	}

	// Output footer message
	out += footer();
	
	// Update the HTML
	document.getElementById("container").innerHTML = out;
}

