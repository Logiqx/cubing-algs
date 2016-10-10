/*

Browser Support
===============

Latest browsers - tested and working:

1) Edge 38.14393 (2016-08-02) - Windows 10
2) IE 11 (2015-07-29) - Windows 10
3) Chrome 53.0.2785 (2016-08-31) - Windows 10
4) Firefox 47.0.1 (2016-06-28) - Windows 7
5) Safari 9.1.3 (2016-09-01) - OS X El Capitan
6) Opera 36 (2016-03-14) - browserling.com

Old *working* browsers - tested using browserling.com:

1) IE 9 (2011-03-14)
2) Chrome 4.0.249 (2010-01-25)
3) Firefox 6.0 (2011-08-16)
4) Safari 5.0.5 (2010-06-07)
5) Opera 11 (2010-12-16)

Old *non-working* browsers - tested using browserling.com:

1) IE 8 (2010-06-07) - fails to render
2) Chrome 3.0.195 (2009-10-12) - renders but interactions are ignored
3) Firefox 5.0.1 (2011-07-11) - fails to render
4) Safari 4.0 (2009-2010) - renders but interactions are ignored
5) Opera 10.60 (2010-07-01) - fails to render

Mobile browsers - tested and working:

1) Safari 9 (2016-08-25) - iOS 9.3.5 (iPad)
2) Safari 7 (2013-06-10) - iOS 7 (iPad)
3) Samsung Browser 4.0.20 - Samsung Galaxy S7
4) Android 4.4.4 - Samsung Galaxy S3


Navigation
==========

It is desirable for the pages to run locally (file://) and remotely (http://).

The pushState() method forms the basis for navigation history within the browser.
A "popstate" event handler handles the back/forward buttons and renders pages accordingly.
Unfortunately there are a number of subtle complications which are described below!

1) Problem: pushState() is not allowed in Chrome when used locally (file://)
   Solution: Use try/catch and set window.location.hash in the "catch", provoking "popstate"
   Note: Chrome works in two ways... remote = pushstate(), local = window.location.hash
2) Problem: Browser back button causes the page to scroll to top and is somewhat irritating
   Solution: Use replaceState() and a "popstate" event handler which re-applies the x/y offsets
   Note: Need a small delay for Chrome otherwise the default scroll happens after the fix
3) Problem: replaceState() is not allowed in Chrome when used locally (file://)
   Solution: try/catch block which which treats the replaceState() exception as non-fatal
   Note: The scrolling fix (described above) does not work on Chrome when viewing locally
4) Problem: Browser back button does not display the full URL on IE, missing the # fragment
   Solution: Fix by setting window.location.hash within the "popstate" event handler
   Note: This causes an additional "popstate" event on Chrome and potential re-rendering
5) Problem: Updates to the # fragment of the URL in the address bar has no effect in IE
   Solution: Fix with <body onhashchange="handleHash();">
   Note: This causes duplicate rendering in Chrome; "popstate" event and handleHash()
6) Problem: Changes to the hash segment of the URL can cause re-rendering of the same page
   Solution: Rendering is initiated from a single method and will skip unnecessary rendering
   Note: Some browsers have more events than others but it doesn't matter with this fix!


Summary
=======

1) Works fine on IE 11 (laptop), Chrome 45 (laptop) and Safari (iPad)
2) Works fine when running locally (file://) and remotely (http://)
3) Hyperlinks / bookmarks link to the current page. Other clicks are handled by Javascript
4) Chrome fires more "popstate" events than IE due to window.location.hash being updated
5) Chrome works in two ways... remote = pushstate(), local = window.location.hash

*/


//
// Generic message to be displayed at top of every page
// "<p>IMPORTANT: This page is still WIP and is meant to be PRIVATE. Please do not share the URL!</p>"
//
function important()
{
	return "";
}

//
// Determine if viewport is narrow (e.g. mobile phone, portrait)
//
// iPad: portrait = 768, landscape = 1024
// Galaxy S3: portrait = 360 (narrow), landscape = 640
// iPhone 4: portrait = 320 (narrow), landscape = 480
//
function isDisplayNarrow()
{
	// Check client width... iPhone 4 in landscape mode is 480
	return document.documentElement.clientWidth < 480 ? true : false;
}

//
// List of cases can be used as a convenient index for the cases
//
var caseIds = [];

//
// Populate pseudo dictionary as an index for the cases
// Map() would be better / faster but it doesn't work on my iPad!
//
function getCaseIds()
{
	// No need to do this repeatedly once the page is loaded!
	if (caseIds.length == 0)
	{
		// Iterate through the cases
		for (var caseIdx = 0; caseIdx < algSet.cases.length; caseIdx++)
		{
			// Current case
			var caseObj = algSet.cases[caseIdx];
			
			// Add case ID to the list
			caseIds.push(caseObj.id);
		}
	}
	
	// Return HTML
	return caseIds;
}

//
// Remember the last URL fragment so unnecessary re-rendering can be avoided
//
var lastFragment = "n/a";
var lastNarrow = isDisplayNarrow();

//
// Process the URL fragment which starts with a hash
//
function processHash()
{
	// Is this a narrow display?
    var narrow = isDisplayNarrow();

	// Interpret the URL fragment (everything after the hash) as a parameter
	var urlFragment = window.location.hash.substring(1);

	if (urlFragment != lastFragment || narrow != lastNarrow)
	{
		// First part is the parameter name 
		var viewParts = urlFragment.split("_");
		var viewType = viewParts[0];
		var viewId = viewParts[1];

		// Render the page
		if (viewType == "case")
		{
			renderCase(viewId, narrow);
		}
		else
		{
			renderView(viewType, narrow);
		}
		
		lastFragment = urlFragment;
		lastNarrow = narrow;
	}
}

//
// Render the page whether it be a view of multiple cases or a specific case
// Additionally, restore the full URL and scroll to the appropriate x / y offsets
//
function renderPage()
{
	// Event handler for hash change
	window.addEventListener("hashchange", processHash);

	// Event handler for resize / screen rotation
	window.addEventListener("resize", processHash);

	// Event handler for browser controls (back/forward)
	window.addEventListener("popstate", function(e)
	{
		if (e.state != null)
		{
			// Internet Explorer doesn't show the hash portion of the URL when pressing back/forward
			if (e.state.hash != "")
			{
				window.location.hash = e.state.hash;
			}
			
			// Process the hash
			processHash();

			// Scroll to the correct position but wait a second or Chrome will not do it!
			setTimeout(function() {window.scrollTo(e.state.xOffset, e.state.yOffset);}, 1);
		}
		else
		{
			// Process the hash
			processHash();
		}
	});

	// Process the hash
	processHash();
}

//
// Store the current window offsets (x and Y) in the current state object
// They can then be restored when the user presses the browser "back" button
//
function storeWindowOffset()
{
	// Some browsers (e.g. Chrome) do not allow replaceState() when viewing locally
	try
	{
		// Prepare state
		var obj = { "hash": window.location.hash, "xOffset": window.pageXOffset, "yOffset": window.pageYOffset };
		var title = document.title;
		var url = window.location.href;

		// Replace state in history
		history.replaceState(obj, title, url);
	}
	catch (e)
	{
		// Nothing to do here!
	}
}

//
// Render the page when parsing is complete and all content is loaded (including images, script files, CSS files, etc)
//
window.addEventListener("load", renderPage);