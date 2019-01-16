//
// Simple function to determine the display name for the case
//
function getDisplayName(caseObj)
{
	var id = caseObj.id;
	var dotIdx = id.indexOf(".");
	var dispName = "";

	// Ignore the part of id after the first dot, if present
	if (dotIdx >= 0)
	{
		id = id.substr(0, dotIdx);
	}
	// No need to prefix with the id if it appears in the description
	if (caseObj.name.indexOf(id) < 0)
	{
		dispName += id + " - ";
	}
	// Case description
	dispName += caseObj.name;

	return dispName;
}

//
// Simple function to determine the tooltip for the case (shown on mouse hover)
//
function getTooltip(caseObj)
{
	var tooltip = "";

	// Simple assumption determines the need to prefix with algSet.header.id
	if (caseObj.algdb.indexOf(algSet.header.id) >= 0)
	{
		tooltip = algSet.header.id + " ";
	}
	// Use the standard display name
	tooltip += getDisplayName(caseObj);

	return tooltip;
}

//
// Render grid header row
//
function renderGridHeaderRow(viewObj, width)
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
function renderGridDataRows(viewObj, width)
{
	// Initialisation
	var out = "";
	
	// Determine the image sizes for the grid
	// Large icons are perfect for 8 columns (e.g. OLL) on the iPad (landscape) or 6 columns (e.g. COLL) on the iPad (portrait)
	var numCols = viewObj.rows[0].cases.length - 1;
	var imgSize = (numCols <= 8 && width >= IPAD_LANDSCAPE) || (numCols <= 6 && width >= IPAD_PORTRAIT) ? "96" : "64";
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	out += "<tbody>";

	// Iterate through the groups
	for (var rowIdx = 0; rowIdx < viewObj.rows.length; rowIdx++)
	{
		var rowObj = viewObj.rows[rowIdx];

		// IE8 gets confused by a comma at the end of a list
		if (rowObj != null)
		{
			// Render the table row
			out += "<tr>";
					
			out += "<th class=\"name\">" + rowObj.name + "</th>";
				
			// Iterate through the cases in the group
			for (var caseIdx = 0; caseIdx < rowObj.cases.length; caseIdx++)
			{
				out += "<td>";
				
				var caseId = rowObj.cases[caseIdx];
		
				// Empty table cells are represented by NULL
				if (caseId != null)
				{
					// Get the actual case object
					var caseObj = algSet.cases[caseIds.indexOf(caseId)];

					// Defence coding prevents crash when refering to non-existent cases
					if (caseObj != null)
					{
						// Render the Id and Name
						var css = algSet.header.hasOwnProperty("css") ? algSet.header.css : algSet.header.id;
						var style = caseObj.style != null ? caseObj.style : "";
						out += "<abbr title=\"" + getTooltip(caseObj) + "\"><i class=\"clicky " + style + " s" + imgSize + "-" + css.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
								"\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + "><br/></i></abbr>";
					}
				}
				
				out += "</td>";
			}

			out += "</tr>";
		}
	}
	
	out += "</tbody>";

	return out;
}

//
// Render an algorithm
//
function renderViewAlg(algObj, width)
{
	// Initialisation
	var out = "";
	var uses = getUses(algObj);
	
	// Show "uses" as superscript
	if (uses.length > 0)
	{
		uses = " <sup>" + uses + "</sup>";
	}

	// Output the algorithm
	out += algObj.alg + uses;
	
	// Ensure the next algorithm is on a new line
	out += "<br/>";
	
	return out;
}

//
// Render algs for a table data cell
//
function renderTableDataCell(caseObj, width)
{
	var out = "";
	var useCount = {};
	var algCount = 0;
	var maxCount = width >= IPHONE_LANDSCAPE ? 4 : 2;
		
	// Show the title
	out += "<span class=\"clicky\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + ">" + getDisplayName(caseObj);
	out += "</span>";
	out += " - " + caseObj.prob;
	out += "<br/>";
	
	// Initialise use counters
	for (var useIdx = 0; useIdx < algSet.header.uses.length; useIdx++)
	{
		useId = algSet.header.uses[useIdx].id;
		useCount[useId] = 0;
	}
	
	// Iterate through the algorithms
	for (var algIdx = 0; algIdx < caseObj.algs.length && algCount < maxCount; algIdx++)
	{
		// Get the actual algorithm object
		var algObj = caseObj.algs[algIdx];
	
		// IE8 gets confused by a comma at the end of a list
		if (algObj != null)
		{
			// Consider rendering the algorithm
			if (algObj.status == 1)
			{
				var renderAlg = false;
				
				// Determine whether the alg should be rendered and update counters
				for (var useIdx = 0; useIdx < algObj.uses.length; useIdx++)
				{
					if (useCount[algObj.uses[useIdx]] < maxCount)
					{
						renderAlg = true;
						useCount[algObj.uses[useIdx]] += algSet.header.uses.length / algObj.uses.length;
					}
				}
				
				// Render the alg if necessary
				if (renderAlg == true)
				{
					out += renderViewAlg(algObj, width);
					algCount++;
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
					
					// IE8 gets confused by a comma at the end of a list
					if (varObj != null)
					{
						// Consider rendering the algorithm
						if (varObj.status == 1)
						{
							var renderAlg = false;
				
							// Determine whether the alg should be rendered and update counters
							for (var useIdx = 0; useIdx < varObj.uses.length; useIdx++)
							{
								if (useCount[varObj.uses[useIdx]] < maxCount)
								{
									renderAlg = true;
									useCount[varObj.uses[useIdx]] += algSet.header.uses.length / varObj.uses.length;
								}
							}
				
							// Render the alg if necessary
							if (renderAlg == true)
							{
								out += renderViewAlg(varObj, width);
								algCount++;
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
		out += "Missing case " + caseObj.id; 
	}
	
	return out;
}

//
// Render table data rows
//
function renderTableDataRows(viewObj, groupObj, width)
{
	// Initialisation
	var out = "";
	
	// Determine the image size - Phones should use small icons when in portrait mode
	var imgSize = width >= IPHONE_LANDSCAPE ? "96" : "64";
	
	// Column width is assumed to be 96 (image) + 16 (space) + 400 (td.alg) = 512
	var numCols = width >= IPAD_LANDSCAPE ? Math.floor(width / 512) : 1;
	var colIdx = 0;
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	out += "<tbody>";

	// Iterate through the cases in the group
	for (var caseIdx = 0; caseIdx < groupObj.cases.length; caseIdx++)
	{
		var caseId = groupObj.cases[caseIdx];
		
		// IE8 gets confused by a comma at the end of a list
		if (caseId != null)
		{
			// Get the actual case object
			var caseObj = algSet.cases[caseIds.indexOf(caseId)];

			if (caseObj != null)
			{
				// Possibly the start of a table row
				if (colIdx == 0)
				{
					out += "<tr>";
				}
				
				// Render the image
				var css = algSet.header.hasOwnProperty("css") ? algSet.header.css : algSet.header.id;
				var style = caseObj.style != null ? caseObj.style : "";
				out += "<td><abbr title=\"" + getTooltip(caseObj) + "\"><i class=\"clicky " + style + " s" + imgSize + "-" + css.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
						"\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + "><br/></i></abbr></td>";

				// Render the algs
				out += "<td class=\"alg\">";
				out += renderTableDataCell(caseObj, width);
				out += "</td>";
				
				colIdx++;
				
				// Possibly the end of the table row
				if (colIdx == numCols)
				{
					out += "</tr>";
					colIdx = 0;
				}
			}
		}
	}

	// Possibly the end of the table row
	if (colIdx > 0)
	{
		out += "</tr>";
	}
	
	out += "</tbody>";

	return out;
}

//
// Render options as drop-down lists
//
function renderViewOptions(viewId, width)
{
	var out = "";

	// Create select element for available views
	out += "<p>Select view: <select id=\"viewList\" onChange=\"switchView()\"></p>";

	// Iterate through the views
	for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		var viewObj = algSet.views[viewIdx];
	
		// IE8 gets confused by a comma at the end of a list
		if (viewObj != null)
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
function renderViewLinks(viewObj, width)
{
	var out = "";
	var length = 0;

	out += "<p>";
	
	// Iterate through the groups
	for (var groupIdx = 0; groupIdx < viewObj.groups.length; groupIdx++)
	{
		var groupObj = viewObj.groups[groupIdx];

		// IE8 gets confused by a comma at the end of a list
		if (groupObj != null)
		{
			if (groupIdx > 0 && length > 0)
			{
				out += " | ";
			}
			
			// Output the group title
			if (groupObj.name != "")
			{
				out += "<a class=\"clicky\" href=\"#" + viewObj.id + "-" + groupObj.id + "\">" + groupObj.name + "</a>";
			}
			
			length += groupObj.name.length;
			
			if (viewObj.groups.length > 8 && length > 110)
			{
				out += "</p><p>";
				length = 0;
			}
		}
	}

	out += "</p>";
	
	return out;
}

//
// Render the list of contents
//
function renderContents()
{
	// Initialisation
	var out = "";
	
	// Windsurfing
	out += "<a class=\"clicky\" href=\"https://youtu.be/kETStPTH3tE\"><img class=\"contents\" src=\"../img/mikegeorge.jpg\"/></a>";
	
	// Iterate through the menu items
	for (var itemIdx = 0; itemIdx < menuItems.length; itemIdx++)
	{
		var menuItem = menuItems[itemIdx];
		
		switch (menuItem.type)
		{
			case "h1":
				out += "<hr/>"
				out += "<h2>" + menuItem.desc + "</h2>";
				break;
			case "h2":
				out += "<h3>" + menuItem.desc + "</h3>";
				break;
			case "submenu":
				out += "<p>" + menuItem.desc + " - ";
				for (var subIdx = 0; subIdx < menuItem.items.length; subIdx++)
				{
					var subItem = menuItem.items[subIdx];
					
					switch (subItem.type)
					{
						case "link":
							if (subIdx > 0)
							{
								out += " + ";
							}
							out += "<a class=\"clicky\" href=\"" + subItem.href + "\">" + subItem.desc + "</a>";
							break;
					}
				}
				out += "</p>";
				break;
		}
	}

	return out;
}

//
// Render the selected view
//
function renderView(viewId, width)
{
	// Initialisation
	var out = "";
	
	// Search for the viewId
	var found = false;

	// Iterate through the views
	for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		var viewObj = algSet.views[viewIdx];
		
		// IE8 gets confused by a comma at the end of a list
		if (viewObj != null)
		{
			// Is this the desired view?
			if (viewObj.id == viewId)
			{
				found = true;
				break;
			}
		}
	}

	// Default to the the first view if viewId was not found
	if (found == false)
	{
		viewId = algSet.views[0].id;
	}
	
	// Output the set title
	var h1 = algSet.header.name;
	if (algSet.header.name.indexOf(algSet.header.id) < 0)
	{
		h1 += " (" + algSet.header.id + ")";
	}
	out += "<h1><span class=\"menu-btn\">&#9776;</span> " + h1 + "</h1>";
	
	// Iterate through the views
	for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		var viewObj = algSet.views[viewIdx];
			
		// IE8 gets confused by a comma at the end of a list
		if (viewObj != null)
		{
			// Is this the desired view?
			if (viewObj.id == viewId)
			{
				// Output the view title
				if (viewObj.name != "")
				{
					// View title
					out += "<h2>" + viewObj.name + "</h2>";

					// Browser title
					document.title = algSet.header.id;
				}
				
				// Quickly check to see whether a phone needs to be rotated
				if (viewObj.hasOwnProperty("rows") && width < GALAXY_S3_LANDSCAPE)
				{
					// Allow 128 pixels for the browser's navigation bar
					if (getViewportHeight() >= GALAXY_S3_LANDSCAPE - 128)
					{
						out += "<p class=\"alert\">Rotate to landscape (horizontal) for the grid view.</p>";
					}
					else
					{
						out += "<p class=\"alert\">Sorry. Your display is too small for the grid view!</p>";
					}
				}
				else
				{
					// Mobiles are best viewed in landscape
					out += header(IPHONE_LANDSCAPE);

					// General description
					if (algSet.header.hasOwnProperty("desc"))
					{
						out += "<p>" + replaceAbbr(algSet.header.desc) + "</p>";
					}

					// View description
					if (viewObj.hasOwnProperty("desc"))
					{
						out += "<p>" + replaceAbbr(viewObj.desc) + "</p>";
					}

					// Instructional message
					if (algSet.cases.length > 0)
					{
						out += "<p>" + " Click on an <strong>image</strong> or <strong>name</strong> for details about the case; e.g. algorithms, comments, breakdowns.</p>";
					}
				}

				// Dropdowns aren't always required
				if (algSet.views.length > 1)
				{
					// Instructional message
					out += "<p>" + " Use the <strong>dropdown</strong> to switch between views." + "</p>";
					
					// The dropdown itself
					out += renderViewOptions(viewId, width);
				}
				
				if (viewObj.hasOwnProperty("rows"))
				{
					// Check the display width to see if it supports grid view
					if (width >= GALAXY_S3_LANDSCAPE)
					{
						// Render the table
						out += "<table>";
						out += renderGridHeaderRow(viewObj, width);
						out += renderGridDataRows(viewObj, width);
						out += "</table>";
					}
				}
				else if (viewObj.hasOwnProperty("groups"))
				{
					// Render the view links (i.e. links to headers / anchors)
					// Constant of 1000 allows 1024 pixel displays with a scroll bar (clientWidth ~1008 pixels)
					if (width >= 1000)
					{
						out += "<h2>Shortcuts</h2>";
						out += renderViewLinks(viewObj, width);
					}
					
					// Iterate through the groups
					for (var groupIdx = 0; groupIdx < viewObj.groups.length; groupIdx++)
					{
						var groupObj = viewObj.groups[groupIdx];
				
						// IE8 gets confused by a comma at the end of a list
						if (groupObj != null)
						{
							// Create anchor for the group
							out += "<a id=\"" + viewObj.id + "-" + groupObj.id + "\" />";
					
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
							out += renderTableDataRows(viewObj, groupObj, width);
							out += "</table>";
						}
					}
				}
				
				found = true;
			}
		}
	}
	
	// Contents page
	if (viewId == "contents" && algSet.cases.length == 0)
	{
		out += renderContents();
	}
	
	// Output footer message
	out += footer();
	
	// Update the HTML
	document.getElementById("container").innerHTML = out;
}
