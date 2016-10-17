//
// Render grid header row
//
function renderGridHeaderRow(viewObj, viewportWidth)
{
    var out = "";
	
	// Render the table header
	out += "<thead>";
	out += "<tr>";
	out += "<th></th>";
	
	// Dynamic headers
	for (var headerIdx = 0; headerIdx < viewObj.headers.length; headerIdx++)
	{
		// Get the actual header
		var header = viewObj.headers[headerIdx];
	
		out += "<th>" + header + "</th>";
	}
	
	out += "</tr>";
	out += "</thead>";

	return out;
}

//
// Render grid data rows
//
function renderGridDataRows(viewObj, viewportWidth)
{
	// Initialisation
    var out = "";
	
	// Determine the image sizes for the grid
	var imgSize = viewportWidth >= TABLET_LANDSCAPE ? "96" : "64";
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	out += "<tbody>";

	// Iterate through the groups
	for (var rowIdx = 0; rowIdx < viewObj.rows.length; rowIdx++)
	{
		var rowObj = viewObj.rows[rowIdx];

		// Render the table row
		out += "<tr>";
				
		out += "<th class=\"name\">" + rowObj.name + "</th>";
			
		// Iterate through the cases in the group
		for (var caseIdx = 0; caseIdx < rowObj.cases.length; caseIdx++)
		{
			out += "<td>";
			
			if (rowObj.cases[caseIdx] != null)
			{
				// Get the actual case object
				var caseObj = algSet.cases[caseIds.indexOf(rowObj.cases[caseIdx])];

				if (caseObj != null)
				{
					// Tooltip is shown on mouse hover
					var tooltip = algSet.header.id + " " + caseObj.id;
					if (caseObj.name != caseObj.id)
					{
						tooltip += " - " + caseObj.name;
					}
					
					// Render the Id and Name
					out += "<abbr title=\"" + tooltip + "\"><i class=\"clicky s" + imgSize + "-" + algSet.header.id.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
							"\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + "/></abbr>";
				}
			}
			
			out += "</td>";
		}

		out += "</tr>";
	}
	
	out += "</tbody>";

	return out;
}

//
// Render table header row
//
function renderTableHeaderRow(viewObj, viewportWidth)
{
    var out = "";

	if (viewportWidth >= TABLET_LANDSCAPE)
	{
		// Render the table header
		out += "<thead>";
		out += "<tr>";
		out += "<th class=\"id\"></th>";
		out += "<th></th>";

		// Dynamic headers
		for (var useIdx in viewObj.uses)
		{
			for (var refIdx = 0; refIdx < algSet.header.uses.length; refIdx++)
			{
				var refObj = algSet.header.uses[refIdx];

				if (refObj.id == viewObj.uses[useIdx])
				{
					out += "<th class=\"alg\">" + refObj.name + "</th>";
				}
			}
		}

		out += "<th class=\"prob\">P</th>";
		out += "</tr>";
		out += "</thead>";
	}

	return out;
}

//
// Render an algorithm
//
function renderViewAlg(algObj, viewportWidth)
{
	// Initialisation
    var out = "";
	
	// Output the algorithm
	if (viewportWidth >=  TABLET_LANDSCAPE)
	{
		out += algObj.alg + "<br/>";
	}
	else
	{
		out += algObj.alg + " <sup>";
		
		// Output the uses in superscript
		for (var useIdx = 0; useIdx < algObj.uses.length; useIdx++)
		{
			if (useIdx > 0)
			{
				out += ", ";
			}
			out += algObj.uses[useIdx];
		}
		
		out += "</sup><br/>";
	}
	
	return out;
}

//
// Render algs for a table data cell
//
function renderTableDataCell(caseObj, useId, viewportWidth)
{
    var out = "";
	var uses = [];
	var algCount = 0;
	var maxCount = viewportWidth >= PHONE_LANDSCAPE ? 4 : 2;
		
	// Iterate through the algorithms
	for (var algIdx = 0; algIdx < caseObj.algs.length && algCount < maxCount; algIdx++)
	{
		// Get the actual algorithm object
		var algObj = caseObj.algs[algIdx];
	
		// Consider rendering the algorithm
		if (algObj.status == 1)
		{
			// Algorithm needs to have at least one "use"
			for (var useIdx = 0; useIdx < algObj.uses.length; useIdx++)
			{
				// Algorithm needs to have the desired "use"
				if (useId == null || algObj.uses[useIdx] == useId)
				{
					// viewportWidth < PHONE_LANDSCAPE can only show one alg for each "use"
					if (viewportWidth >= PHONE_LANDSCAPE || uses.indexOf(algObj.uses[useIdx]) < 0)
					{
						out += renderViewAlg(algObj, viewportWidth);
						uses = uses.concat(algObj.uses)
						algCount++;
						break;
					}
				}
			}
		}
		
		// Do any variations of the algorithm exist?
		if (algObj.hasOwnProperty("vars"))
		{
			// Iterate through the variations of the algorithm
			for (var varIdx = 0; varIdx < algObj.vars.length && algCount < maxCount; varIdx++)
			{
				// Get the actual variation object
				var varObj = algObj.vars[varIdx];
				
				// Consider rendering the algorithm
				if (varObj.status == 1)
				{
					// Variation needs to have at least one "use"
					for (var useIdx = 0; useIdx < varObj.uses.length; useIdx++)
					{
						// Variation needs to have the desired "use"
						if (useId == null || varObj.uses[useIdx] == useId)
						{
							// viewportWidth < PHONE_LANDSCAPE can only show one alg for each "use"
							if (viewportWidth >= PHONE_LANDSCAPE || uses.indexOf(varObj.uses[useIdx]) < 0)
							{
								out += renderViewAlg(varObj, viewportWidth);
								uses = uses.concat(varObj.uses)
								algCount++;
								break;
							}
						}
					}
				}
			}
		}
	}

	// Ensure something is returned if no algorithms were found
	if (out == "")
	{
		out += "Missing case " + caseObj.id + " for " + useId; 
	}
	
	return out;
}

//
// Render table data rows
//
function renderTableDataRows(viewObj, groupObj, viewportWidth)
{
	// Initialisation
    var out = "";
	
	// Determine the image size
	var imgSize = viewportWidth >= PHONE_LANDSCAPE ? "96" : "64";
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	out += "<tbody>";

	// Iterate through the cases in the group
	for (var caseIdx = 0; caseIdx < groupObj.cases.length; caseIdx++)
	{
		if (groupObj.cases[caseIdx] != null)
		{
			// Get the actual case object
			var caseObj = algSet.cases[caseIds.indexOf(groupObj.cases[caseIdx])];

			if (caseObj != null)
			{
				// Render the table row
				out += "<tr>";
				
				// Only display probability on a wide display
				if (viewportWidth >= PHONE_LANDSCAPE)
				{
					// Render the Id
					out += "<td class=\"id\">" + caseObj.id + "</td>";
				}

				// Tooltip is shown on mouse hover
				var tooltip = algSet.header.id + " " + caseObj.id;
				if (caseObj.name != caseObj.id)
				{
					tooltip += " - " + caseObj.name;
				}

				// Render the image
				out += "<td><abbr title=\"" + tooltip + "\"><i class=\"clicky s" + imgSize + "-" + algSet.header.id.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
						"\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + "/></abbr></td>";

				// Iterate through the uses
				if (viewportWidth >= TABLET_LANDSCAPE)
				{
					for (var useIdx in viewObj.uses)
					{
						// Render the algs (specific use)
						out += "<td class=\"alg\">";
						out += renderTableDataCell(caseObj, viewObj.uses[useIdx], viewportWidth);
						out += "</td>";
					}
				}
				else
				{
					// Render the algs (any use)
					out += "<td class=\"alg\">";
					out += renderTableDataCell(caseObj, null, viewportWidth);
					out += "</td>";
				}
					
				// Only display probability on a medium display
				if (viewportWidth >= PHONE_LANDSCAPE)
				{
					out += "<td class=\"prob\">" + caseObj.prob + "</td>";
				}
				
				out += "</tr>";
			}
		}
	}
	
	out += "</tbody>";

	return out;
}

//
// Render options as drop-down lists
//
function renderViewOptions(viewId, viewportWidth)
{
    var out = "";

	// Create select element for available views
	out += "<p>Select view: <select id=\"viewList\" onChange=\"switchView()\"></p>";

	// Iterate through the views
    for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		var viewObj = algSet.views[viewIdx];
	
		out += "<option value=\"" + viewObj.id + "\"";
		
		// Is this the selected view?
		if (viewObj.id == viewId)
		{
			out += " selected";
		}
		
		out += ">" + viewObj.name + "</option>";
	}
	
	// End of select element
	out += "</select>";
	
	return out;
}

//
// Render contents - links to sections
//
function renderViewLinks(viewObj, viewportWidth)
{
    var out = "";
	var length = 0;

	out += "<p>";
	
	// Iterate through the groups
	for (var groupIdx = 0; groupIdx < viewObj.groups.length; groupIdx++)
	{
		var groupObj = viewObj.groups[groupIdx];

		if (groupIdx > 0 && length > 0)
		{
			out += ", ";
		}
		
		// Output the group title
		if (groupObj.name != "")
		{
			out += "<a href=\"#" + viewObj.id + "_" + groupObj.id + "\">" + groupObj.name + "</a>";
		}
		
		length += groupObj.name.length;
		
		if (viewObj.groups.length > 8 && length > 110)
		{
			out += "</p><p>";
			length = 0;
		}
	}

	out += "</p>";
	
	return out;
}

//
// Render the selected view
//
function renderView(viewId, viewportWidth)
{
	// Initialisation
    var out = "";
	
    // Search for the viewId
	var found = false;

	// Iterate through the views
	for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		// Is this the desired view?
		if (algSet.views[viewIdx].id == viewId)
		{
			found = true;
			break;
		}
	}
	
	// Default to the the first view if viewId was not found
	if (found == false)
	{
		viewId = algSet.views[0].id;
	}
	
	// Output the set title
	out += "<h1>" + algSet.header.name + " (" + algSet.header.id + ")</h1>";
	
	// Output header message
	out += header();
	
	// Output instructional messages
	var instructions = "<p>";
	if (viewId != "grid")
	{
		instructions += "This page lists the algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.</p><p>";
	}
	if (algSet.views.length > 1)
	{
		instructions += " Use the dropdown below to switch views.";
	}
	instructions += " Click on an image for details about the case; e.g. algorithms, comments, breakdowns.</p>";
	out += instructions;

	// Dropdowns aren't always required
	if (algSet.views.length > 1)
	{
		// Render the options
		out += renderViewOptions(viewId, viewportWidth);
	}

	// Iterate through the views
	for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		// Is this the desired view?
		if (algSet.views[viewIdx].id == viewId)
		{
			var viewObj = algSet.views[viewIdx];
		
			// Output the view title
			if (viewObj.name != "")
			{
				// View title
				out += "<h2>" + viewObj.name + "</h2>";
				
				// Browser title
				document.title = algSet.header.id + " - " + viewObj.name;
			}
			
			if (viewObj.hasOwnProperty("rows"))
			{
				if (viewportWidth < PHONE_LANDSCAPE)
				{
					out += "<p class=\"alert\">Rotate to view in landscape (horizontal) orientation</p>";
				}
				else
				{
					// Render the table
					out += "<table>";
					out += renderGridHeaderRow(viewObj, viewportWidth);
					out += renderGridDataRows(viewObj, viewportWidth);
					out += "</table>";
				}
			}
			else if (viewObj.hasOwnProperty("groups"))
			{
				// Render the view links (i.e. links to headers / anchors)
				out += renderViewLinks(viewObj, viewportWidth);
				
				// Iterate through the groups
				for (var groupIdx = 0; groupIdx < viewObj.groups.length; groupIdx++)
				{
					var groupObj = viewObj.groups[groupIdx];
			
					// Create anchor for the group
					out += "<a name=\"" + viewObj.id + "_" + groupObj.id + "\" />";
			
					// Output the group title
					if (groupObj.name != "")
					{
						out += "<h3>" + groupObj.name + "</h3>";
					}

					// Output the group description
					if (groupObj.desc)
					{
						out += "<p>" + replaceAbbr(groupObj.desc) + "</p>";
					}

					// Render the table
					out += "<table>";
					out += renderTableHeaderRow(viewObj, viewportWidth);
					out += renderTableDataRows(viewObj, groupObj, viewportWidth);
					out += "</table>";
				}
			}
			
			found = true;
		}
	}
	
	// Output footer message
	out += footer();
	
    document.getElementById("view").innerHTML = out;
}

//
// Switch to the selected view
//
function switchView()
{
	// Store the current window offset
	storeWindowOffset();

	// Determine the view from the dropdown box
	var selectElement = document.getElementById("viewList");
	var viewId = selectElement.options[selectElement.selectedIndex].value;

	// Prepare the hash
	var hash = "#" + viewId;

	// Some browsers (e.g. Chrome) do not allow pushState() when viewing locally
	try
	{
		// Prepare state
		var obj = { "hash": hash, "xOffset": window.pageXOffset, "yOffset": window.pageYOffset };
		var title = algSet.header.id + " - " + selectElement.options[selectElement.selectedIndex].text;
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
}
