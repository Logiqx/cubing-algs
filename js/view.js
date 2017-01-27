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
	
	// Determine the image sizes for the grid - large icons are perfect on the iPad (landscape)
	// Constant of 1000 allows 1024 pixel displays with a scroll bar (clientWidth ~1008 pixels)
	var imgSize = width >= 1000 ? "96" : "64";
	
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
						// Tooltip is shown on mouse hover
						var tooltip = algSet.header.id + " " + caseObj.id;
						if (caseObj.name != caseObj.id)
						{
							tooltip += " - " + caseObj.name;
						}
						
						// Render the Id and Name
						var css = algSet.header.hasOwnProperty("css") ? algSet.header.css : algSet.header.id;
						out += "<abbr title=\"" + tooltip + "\"><i class=\"clicky s" + imgSize + "-" + css.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
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
function renderTableDataCell(caseObj, useId, width)
{
	var out = "";
	var uses = [];
	var algCount = 0;
	var maxCount = width >= IPHONE_LANDSCAPE ? 4 : 2;
		
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
				// Algorithm needs to have at least one "use"
				for (var useIdx = 0; useIdx < algObj.uses.length; useIdx++)
				{
					// Algorithm needs to have the desired "use"
					if (useId == null || algObj.uses[useIdx] == useId)
					{
						// width < IPHONE_LANDSCAPE can only show one alg for each "use"
						if (width >= IPHONE_LANDSCAPE || uses.indexOf(algObj.uses[useIdx]) < 0)
						{
							out += renderViewAlg(algObj, width);
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
					
					// IE8 gets confused by a comma at the end of a list
					if (varObj != null)
					{
						// Consider rendering the algorithm
						if (varObj.status == 1)
						{
							// Variation needs to have at least one "use"
							for (var useIdx = 0; useIdx < varObj.uses.length; useIdx++)
							{
								// Variation needs to have the desired "use"
								if (useId == null || varObj.uses[useIdx] == useId)
								{
									// width < IPHONE_LANDSCAPE can only show one alg for each "use"
									if (width >= IPHONE_LANDSCAPE || uses.indexOf(varObj.uses[useIdx]) < 0)
									{
										out += renderViewAlg(varObj, width);
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
function renderTableDataRows(viewObj, groupObj, width)
{
	// Initialisation
	var out = "";
	
	// Determine the image size - Phones should use small icons when in portrait mode
	var imgSize = width >= IPHONE_LANDSCAPE ? "96" : "64";
	
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
				// Render the table row
				out += "<tr>";
				
				// Do not display id on phones (portrait)
				if (width >= IPHONE_LANDSCAPE)
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
				var css = algSet.header.hasOwnProperty("css") ? algSet.header.css : algSet.header.id;
				out += "<td><abbr title=\"" + tooltip + "\"><i class=\"clicky s" + imgSize + "-" + css.toLowerCase() + " s" + imgSize + "-" + caseObj.image.toLowerCase() +
						"\" onclick=\"switchCase(\'" + caseObj.id + "\')\"" + "><br/></i></abbr></td>";

				// Iterate through the uses - 2 columns are perfect on the iPad (landscape)
				// Constant of 1000 allows 1024 pixel displays with a scroll bar (clientWidth ~1008 pixels)
				if (width >= 1000)
				{
					for (var useIdx in algSet.header.uses)
					{
						// Render the algs (specific use)
						out += "<td class=\"alg\">";
						out += renderTableDataCell(caseObj, algSet.header.uses[useIdx].id, width);
						out += "</td>";
					}
				}
				else
				{
					// Render the algs (any use)
					out += "<td class=\"alg\">";
					out += renderTableDataCell(caseObj, null, width);
					out += "</td>";
				}
					
				// Do not display probability on phones (portrait)
				if (width >= IPHONE_LANDSCAPE)
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
				out += ", ";
			}
			
			// Output the group title
			if (groupObj.name != "")
			{
				out += "<a href=\"#" + viewObj.id + "-" + groupObj.id + "\">" + groupObj.name + "</a>";
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
	out += "<h1><span class=\"menu-btn\">&#9776;</span> " + algSet.header.name + " (" + algSet.header.id + ")</h1>";
	
	// Output header message - mobiles are best viewed in landscape
	out += header(IPHONE_LANDSCAPE);
	
	// Output instructional messages
	var instructions = "<p>";
	if (viewId != "grid")
	{
		if (algSet.header.hasOwnProperty("level"))
		{
			switch (algSet.header.level.toLowerCase())
			{
				case "beginner":
					instructions += "This page lists the algorithms that I teach to beginners. The algorithms have all been chosen for their simplicity and ease of learning.</p><p>";
					break;
				case "improver":
					instructions += "This page lists the algorithms that I teach to improvers. It includes all of the beginner algorithms and some [inverse] algorithms.</p><p>";
					break;
				case "intermediate":
					instructions += "This page lists the algorithms that I teach to intermediates. They are good algorithms and have been chosen for their execution speed.</p><p>";
					break;
				default:
					instructions += "This page lists the algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.</p><p>";
					break;
			}
		}
		else
		{
			instructions += "This page lists the algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.</p><p>";
		}
	}
	if (algSet.views.length > 1)
	{
		instructions += " Use the dropdown below to switch views.";
	}
	instructions += " Click on an image for details about the case; e.g. algorithms, comments, breakdowns.</p>";
	out += replaceAbbr(instructions);

	// Dropdowns aren't always required
	if (algSet.views.length > 1)
	{
		// Render the options
		out += renderViewOptions(viewId, width);
	}

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
				
				if (viewObj.hasOwnProperty("rows"))
				{
					// TODO - Estimate grid size; OLL has 8 columns, COLL has 6 columns, PLL has 5 columns
					if (width < GALAXY_S3_LANDSCAPE)
					{
						if (getViewportHeight() >= GALAXY_S3_LANDSCAPE)
						{
							out += "<p class=\"alert\">Rotate to view in landscape (horizontal) orientation</p>";
						}
						else
						{
							out += "<p class=\"alert\">Sorry. Your display is too small for the grid view!</p>";
						}
					}
					else
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
	
	// Output footer message
	out += footer();
	
	// Update the HTML
	document.getElementById("container").innerHTML = out;
}
