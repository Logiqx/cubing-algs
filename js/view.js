//
// Render grid header row
//
function renderGridHeaderRow(viewObj)
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
function renderGridDataRows(viewObj)
{
	// Initialisation
    var out = "";
	
	// Determine the image size
	var imgSize = "64";
	
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
					// Render the Id and Name
					out += "<i class=\"clicky s" + imgSize + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
							"\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + "/>";
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
function renderTableHeaderRow(viewObj, narrow)
{
    var out = "";
	
	// Render the table header
	out += "<thead>";
	out += "<tr>";
	if (narrow == false)
	{
		out += "<th>#</th>";
	}
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
			
			// Only display one use on narrow display
			if (narrow == true)
			{
				break;
			}
		}
	}
	
	// Only display probability on a wide display
	if (narrow == false)
	{
		out += "<th class=\"prob\">P</th>";
	}
	
	out += "</tr>";
	out += "</thead>";

	return out;
}

//
// Render an algorithm
//
function renderViewAlg(algObj, useId)
{
	// Initialisation
    var out = "";
	var status = 0;
	
	// Get the status
	if (algObj.hasOwnProperty("status"))
	{
		status = algObj.status;
	}

	// Status must be 1 to be shown in this view
	if (status == 1)
	{
		// Iterate through the uses for the algorithm
		for (var useIdx = 0; useIdx < algObj.uses.length; useIdx++)
		{
			// Is this the desired use?
			if (algObj.uses[useIdx] == useId)
			{
				// Output the algorithm
				out += algObj.alg + "<br/>";
			}
		}
	}
	
	return out;
}

//
// Render algs for a table data cell
//
function renderTableDataCell(caseObj, useId)
{
    var out = "";
		
	// Iterate through the algorithms
	for (var algIdx = 0; algIdx < caseObj.algs.length; algIdx++)
	{
		// Get the actual algorithm object
		var algObj = caseObj.algs[algIdx];
	
		// Render the alg
		out += renderViewAlg(algObj, useId);
		
		// Do any variations of the algorithm exist?
		if (algObj.hasOwnProperty("vars"))
		{
			// Iterate through the variations of the algorithm
			for (var varIdx = 0; varIdx < algObj.vars.length; varIdx++)
			{
				// Get the actual variation object
				var varObj = algObj.vars[varIdx];
				
				// Render the variation
				out += renderViewAlg(varObj, useId);
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
function renderTableDataRows(viewObj, groupObj, narrow)
{
	// Initialisation
    var out = "";
	
	// Determine the image size
	var imgSize = narrow == false ? "96" : "64";
	
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
				if (narrow == false)
				{
					// Render the Id
					out += "<td>" + caseObj.id + "</td>";
				}

				// Render the image
				out += "<td><i class=\"clicky s" + imgSize + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
						"\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + "/></td>";

				// Iterate through the uses
				for (var useIdx in viewObj.uses)
				{
					// Render the algs
					out += "<td>";
					out += renderTableDataCell(caseObj, viewObj.uses[useIdx]);
					out += "</td>";
					
					// Only display one use on narrow display
					if (narrow == true)
					{
						break;
					}
				}
					
				// Only display probability on a wide display
				if (narrow == false)
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
function renderViewOptions(viewId, narrow)
{
    var out = "";

	// Create select element for available views
	out += "<p>Select view: <select id=\"viewList\" onChange=\"switchView()\"></p>";

	// Iterate through the views
    for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		var viewObj = algSet.views[viewIdx];
	
		// Narrow displays do not support grid view!
		if (viewObj.id != "grid" || narrow == false)
		{
			out += "<option value=\"" + viewObj.id + "\"";
			
			// Is this the selected view?
			if (viewObj.id == viewId)
			{
				out += " selected";
			}
			
			out += ">" + viewObj.name + "</option>";
		}
	}
	
	// End of select element
	out += "</select>";
	
	return out;
}

//
// Render contents - links to sections
//
function renderViewLinks(viewObj)
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
function renderView(viewId, narrow)
{
	// Initialisation
    var out = "";
	
	// Default to the the first view
	if (viewId == "")
	{
		viewId = algSet.views[0].id;

		// Narrow displays do not support grid view!
		if (viewId == "grid" && narrow == true)
		{
			viewId = algSet.views[1].id;
		}
	}
	
    // Was the view found?
	var found = false;

	// Output the set title
	out += "<h1>" + algSet.header.name + " (" + algSet.header.id + ")</h1>";
	
	// Output important message
	out += important();
	
	// Render the options
	out += renderViewOptions(viewId, narrow);

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
				if (narrow == true)
				{
					out += "<p>Sorry... Grid is too large for this display!</p>";
				}
				else
				{
					// Render the table
					out += "<table>";
					out += renderGridHeaderRow(viewObj);
					out += renderGridDataRows(viewObj);
					out += "</table>";
				}
			}
			else if (viewObj.hasOwnProperty("groups"))
			{
				// Render the links, except on a mobile device
				if (narrow == false)
				{
					out += renderViewLinks(viewObj);
				}
				
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

					// Render the table
					out += "<table>";
					out += renderTableHeaderRow(viewObj, narrow);
					out += renderTableDataRows(viewObj, groupObj, narrow);
					out += "</table>";
				}
			}
			
			found = true;
		}
    }
	
	if (found == false)
	{
		out += "Missing view " + viewId; 
	}
	 
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
