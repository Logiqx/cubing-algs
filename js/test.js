//
// Validate the algs
//
function validateAlg(algObj)
{
	// Output HTML
    var out = "";
	
	// Is this a one handed algorithm?
	if (algObj.uses.indexOf("OH") >= 0)
	{
		// Check that U2' is never U2 but allow it for the initial AUF
		if (algObj.alg.indexOf("U2 ") >= 1)
		{
			out += "<p>U2 instead of U2' for OH alg - " + algObj.alg + "</p>";
		}

		// Check that R2 is never R2'
		if (algObj.alg.indexOf("R2'") >= 0)
		{
			out += "<p>R2' instead of R2 for OH alg - " + algObj.alg + "</p>";
		}
	}
	
	return out;
}

//
// Validate the algs
//
function validateAlgs()
{
	// Output HTML
    var out = "";
	var totalAlgs = 0;
	var activeAlgs = 0;
	
	// Output the main title
	out += "<h2>Algs</h2>";
	
	// Iterate through the cases
    for (var caseIdx = 0; caseIdx < algSet.cases.length; caseIdx++)
	{
		// Current case
		var caseObj = algSet.cases[caseIdx];
		
		// IE8 gets confused by a comma at the end of a list
		if (caseObj != null)
		{
			// Iterate through the algorithms
			for (var algIdx = 0; algIdx < caseObj.algs.length; algIdx++)
			{
				// Get the actual algorithm object
				var algObj = caseObj.algs[algIdx];
				
				// IE8 gets confused by a comma at the end of a list
				if (algObj != null)
				{
					// Active indicator
					var active = 0;

					// Validate the algorithm
					out += validateAlg(algObj);
					
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
								// Validate the algorithm
								out += validateAlg(varObj);
								
								// Is this alg being actively used?
								if (varObj.status > 0 && varObj.uses.length > 0)
								{
									active = 1;
								}
							}
						}
					}
					
					// Is this alg being actively used?
					if (algObj.status > 0 && algObj.uses.length > 0)
					{
						active = 1;
					}

					// Increment active counter
					activeAlgs += active;

					// Increment total
					totalAlgs++;
				}
			}
		}
	}
	
	out += "Validated "+ totalAlgs + " algs (" + activeAlgs + " active)";

	return out;
}

//
// Function to add probabilities
//
function addProbabilities(probs)
{
	// Total probability
	var totNum = 0;
	var totDen = 1;
	
	// Iterate through the values
    for (var probIdx = 0; probIdx < probs.length; probIdx++)
	{
		// Current case
		var probVal = probs[probIdx];
		
		// Case probability
		var caseProb = probVal.split("/");
		var caseNum = parseInt(caseProb[0]);
		var caseDen = parseInt(caseProb[1]);
		
		// Has denominator increased?
		if (caseProb[1] > totDen)
		{
			// Update numerator
			totNum *= (caseDen / totDen);
			totDen = caseDen;
		}
		
		// Update numerator
		totNum += caseNum * (totDen / caseDen);
	}
	
	// Return probability
	return totNum + "/" + totDen;
}

//
// Validate the cases
//
function validateCases()
{
	// Output HTML
    var out = "";
	
	// Array for probabilities
	var probs = [];

	// Output the main title
	out += "<h2>Cases</h2>";
	
	// Iterate through the cases
    for (var caseIdx = 0; caseIdx < algSet.cases.length; caseIdx++)
	{
		// Current case
		var caseObj = algSet.cases[caseIdx];
		
		// IE8 gets confused by a comma at the end of a list
		if (caseObj != null)
		{
			// Add probability to the array
			probs.push(caseObj.prob);
		}
	}
	
	// Add probability to HTML output
	out += "Total probability = " + addProbabilities(probs);
	
	// Return HTML
	return out;
}

//
// Validate the views
//
function validateViews()
{
	// Output HTML
    var out = "";
	
	// Array is used instead of Map() which doesn't work on my iPad
	var caseIds = getCaseIds();
	
	// Output the main title
	out += "<h2>Views</h2>";
	
	// Iterate through the views
    for (var viewIdx = 0; viewIdx < algSet.views.length; viewIdx++)
	{
		// Current view
		var viewObj = algSet.views[viewIdx];
		
		// IE8 gets confused by a comma at the end of a list
		if (viewObj != null)
		{
			// Output the view title
			out += "<h3>" + viewObj.name + "</h3>";
		
			// Array for probabilities
			var probs = [];
			
			// Do groups exist?
			if (viewObj.hasOwnProperty("groups"))
			{
				// Iterate through the groups in the view
				for (var groupIdx = 0; groupIdx < viewObj.groups.length; groupIdx++)
				{
					// Current group
					var groupObj = viewObj.groups[groupIdx];

					// IE8 gets confused by a comma at the end of a list
					if (groupObj != null)
					{
						// Iterate through the cases in the group
						for (var caseIdx = 0; caseIdx < groupObj.cases.length; caseIdx++)
						{
							// Current case
							var caseObj = algSet.cases[caseIds.indexOf(groupObj.cases[caseIdx])];

							// IE8 gets confused by a comma at the end of a list
							if (caseObj != null)
							{
								// Add probability to the array
								probs.push(caseObj.prob);
							}
						}
					}
				}
			}
			
			// Is this a matrix view - i.e. single table with multiple rows?
			else if (viewObj.hasOwnProperty("rows"))
			{
				// Iterate through the rows in the view
				for (var rowIdx = 0; rowIdx < viewObj.rows.length; rowIdx++)
				{
					// Current row
					var rowObj = viewObj.rows[rowIdx];

					// IE8 gets confused by a comma at the end of a list
					if (rowObj != null)
					{
						// Iterate through the cases in the row
						for (var caseIdx = 0; caseIdx < rowObj.cases.length; caseIdx++)
						{
							// Empty table cells are represented by NULL
							if (rowObj.cases[caseIdx] != null)
							{
								// Current case
								var caseObj = algSet.cases[caseIds.indexOf(rowObj.cases[caseIdx])];

								// Add probability to the array
								probs.push(caseObj.prob);
							}
						}
					}
				}
			}
		}
		
		// Add probability to HTML output
		out += "Total probability = " + addProbabilities(probs);
	}
	
	// Return HTML
	return out;
}

//
// Render the test results
//
function renderView()
{
	// Initialisation
    var out = "";
	
	// Output the main title
	out += "<h1>" + algSet.header.id + " (validation)</h1>";
	
	// Output important message
	out += header();
	
	// Validate the algs
	out += validateAlgs();
	
	// Validate the cases
	out += validateCases();
	
	// Validate the views
	out += validateViews();
	
	// Update the HTML document
    document.getElementById("view").innerHTML = out;
}
