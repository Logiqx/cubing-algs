/*

Summary
=======

1) Originally developed / tested on Chrome 45 (laptop), IE11 (laptop) and Safari 7 (iPad)
2) Requires at least Chrome 6, Firefox 4, IE8, Safari 4 or Opera 10
3) Works fine when running locally (file://) and remotely (http://)
4) Comments throughout the code describe how the different browsers are supported


History
=======

The back/forward buttons fire "popstate" and / or "hashchange" events:

Chrome 1 to 4 = "hashchange" only      Chrome 5 = back/forward unavailable, Chrome 6 onwards = "popstate" then "hashchange"
Firefox 3.0 + 3.5 + 3.6 = TBC          Firefox 4 + 5 = "popstate" only, Firefox 6 onwards = "popstate" then "hashchange" 
IE8 + IE9 = "hashchange" only          IE10 = "popstate" then "hashchange", *IE11* = "hashchange" then "popstate"
Opera 10 + 10.50 = "hashchange" only   Opera 11 = "popstate" then "hashchange"
Safari 4 = "hashchange" only           Safari 5 = "popstate" then "hashchange" + unexpectedly calls "popstate" on load
Edge = "popstate" then "hashchange"    N.B. window.alert() is unreliable in Edge, especially inside "popstate" handler

Useful reference - https://github.com/browserstate/history.js/wiki/The-State-of-the-HTML5-History-API

*/


//
// Generic debug message
//
function debugMessage(method, message)
{
	var out = "";
	
	out += "<h2>Houston, we have a problem</h2>";
	out += "<h3>Browser</h3><p>You need at least Chrome 6, Firefox 4, IE8, Safari 4 or Opera 10</p>";
	out += "<h3>Debug</h3><p>" + method + ": " + message + "</p>";

	return out;
}

//
// Generic message to be displayed at top of every page
// e.g. "<p>IMPORTANT: This page is still WIP and is meant to be PRIVATE. Please do not share the URL!</p>"
//
function header(idealWidth)
{
	var msg = "";
	
	if (getViewportWidth() < idealWidth && getViewportWidth() < getViewportHeight())
	{
		msg = "<p class=\"alert\">Best viewed in landscape (horizontal) orientation</p>";
	}
	
	return msg;
}

//
// Generic message to be displayed at bottom of every page
// e.g. "<p>DEBUG: clientWidth = " + getViewportWidth() + ", clientHeight = " + getViewportHeight() + "</p>"
//
function footer()
{
	return "<div id=\"tooltip\"></div>";
}

//
// Viewport widths
//
// Tablets:
// iPad, iPad 2 + 3, iPad Mini, iPad Air 		portrait = 768, landscape = 1024	aspect = 1:1.333
// Samsung Galaxy Tab 3 8.0 T310				portrait = 602, landscape = 962		aspect = 1:1.598
// Various										portrait = 600, landscape = 960		aspect = 1:1.600
//
// Phones:
// Samsung Galaxy S3 to  S7						portrait = 360, landscape = 640		aspect = 1:1.778
// iPhone6 Plus 								portrait = 414, landscape = 736		aspect = 1:1.778
// iPhone6 										portrait = 375, landscape = 667		aspect = 1:1.779
// iPhone5 										portrait = 320, landscape = 568		aspect = 1:1.775
// iPhone, iPhone 3G, iPhone 4 					portrait = 320, landscape = 480		aspect = 1:1.500
//
// N.B. "const" was not supported prior to IE11, hence the use of "var"
var IPAD_LANDSCAPE = 1024;
var IPAD_PORTRAIT = 768;
var GALAXY_S3_LANDSCAPE = 640;
var GALAXY_S3_PORTRAIT = 360;
var IPHONE_LANDSCAPE = 480;
var IPHONE_PORTRAIT = 320;

//
// Determine viewport width
//
function getViewportWidth()
{
	return document.documentElement.clientWidth;
}

//
// Determine viewport height
//
function getViewportHeight()
{
	return document.documentElement.clientHeight;
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
			
			// IE8 gets confused by a comma at the end of a list
			if (caseObj != null)
			{
				// Add case ID to the list
				caseIds.push(caseObj.id);
			}
		}
	}
	
	// Return HTML
	return caseIds;
}

//
// getUses() returns a list of uses to be shown as superscript text
//
function getUses(algObj)
{
	var out = "";
	
	// Avoid stating the obvious such as "2H, OH"
	if (algObj.uses.length < algSet.header.uses.length)
	{
		// Copy the "uses" array prior to removing "2H"
		var uses = algObj.uses.slice();
		
		// Remove "2H" from the copied array
		var index = uses.indexOf("2H");
		if (index >= 0)
		{
			uses.splice(index, 1);
		}
		
		// List the remaining "uses"
		if (uses.length > 0)
		{
			// Output the uses in superscript
			for (var useIdx = 0; useIdx < algObj.uses.length; useIdx++)
			{
				var useId = algObj.uses[useIdx];
				
				// IE8 gets confused by a comma at the end of a list
				if (useId != null)
				{
					if (useIdx > 0)
					{
						out += ", ";
					}
					out += useId;
				}
			}
		}
	}
	
	return out;
}

//
// Abbreviations on touchscreen devices use abbr-touch + touchtap-event
// https://github.com/Tyriar/abbr-touch
// https://github.com/Tyriar/touchtap-event
//
function initAbbrTouch()
{
	try
	{
		// Initialise abbr-touch for the "view" division, providing a custom tap handler
		abbrTouch(document.querySelector('#view'), function (target, title, touchX, touchY) {
			var tooltip = document.querySelector('#tooltip');
			tooltip.innerHTML = title;
			tooltip.style.left = ((touchX - tooltip.clientWidth / 2) > window.pageXOffset ? (touchX - tooltip.clientWidth / 2) : window.pageXOffset) + 'px';
			tooltip.style.top = ((touchY - 50) > window.pageYOffset ? (touchY - 50) : window.pageYOffset) + 'px';
			var timestamp = (new Date()).getTime();
			tooltip.setAttribute('data-timestamp', timestamp);
			document.body.appendChild(tooltip);

			setTimeout(function () {
				if (tooltip.getAttribute('data-timestamp') == timestamp) {
					tooltip.removeAttribute('data-timestamp');
				}
			}, 3000);
		}, true);
	}
	catch (err)
	{
		// Some old browsers do not support Document.querySelector() - e.g. prior to IE8
		// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#Browser_Compatibility
	}
}

//
// Generic method to add event handlers in modern browsers and old versions of IE
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// http://www.javascripter.net/faq/addeventlistenerattachevent.htm
// http://stackoverflow.com/questions/9769868/addeventlistener-not-working-in-ie8
//
function addEventHandler(target, eventType, handler)
{
	// The attribute for the event
	var eventAttribute = "on" + eventType;
	
	// The "hashchange" event is not supported by some old browsers
	if (eventType == "hashchange" && !(eventAttribute in target))
	{
		// Implement the fallback
		hashChangeFallback(target, handler);
	}
	else
	{
		// EventTarget.addEventListener() is supported by most browsers, including IE9 and newer
		if (target.addEventListener)
		{
			target.addEventListener(eventType, handler, false);
		}
		// EventTarget.attachEvent() was a proprietary method supported by IE5 to IE10
		else if (target.attachEvent)
		{
			target.attachEvent(eventAttribute, handler);
		}
	}
}

//
// Fallback for the "hashchange" event which is not implemented in legacy browsers
// Required prior to Chrome 4, Firefox 3.6, IE8, Safari 5, Opera 10.6
// http://stackoverflow.com/questions/9339865/get-the-hashchange-event-to-work-in-all-browsers-including-ie7
//
function hashChangeFallback(target, handler)
{
	// Bind the handler
	target.onhashchange = handler;
	
	(function(target)
	{
		var location = target.location,
			oldURL = location.href,
			oldHash = location.hash;

		// check the location hash on a 100ms interval
		setInterval(function()
		{
			var newURL = location.href,
				newHash = location.hash;

			// if the hash has changed and a handler has been bound...
			if (newHash != oldHash && typeof target.onhashchange === "function")
			{
				// execute the handler
				target.onhashchange(
				{
					type: "hashchange",
					oldURL: oldURL,
					newURL: newURL
				});

				oldURL = newURL;
				oldHash = newHash;
			}
		}, 100);
	})(window);
}

//
// Remember the last URL fragment so unnecessary re-rendering can be avoided
//
var lastHash = "n/a";
var lastWidth = getViewportWidth();

//
// Process the URL fragment which starts with a hash
//
function renderPage(hash)
{
	try
	{
		// Boolean flag to indicate whether the page needs to be rendered
		var renderRequired = false;
		
		// Interpret the old hash to determine the current view
		var oldHashParts = lastHash.substring(1).split("_");
		var oldViewId = oldHashParts[0] ? oldHashParts[0] : algSet.views[0].id;
		var oldCaseId = oldHashParts[1];

		// Interpret the location hash to determine the required view
		var newHashParts = hash.substring(1).split("_");
		var newViewId = newHashParts[0] ? newHashParts[0] : algSet.views[0].id;
		var newCaseId = newHashParts[1];

		// Has the view changed?
		if (newViewId == "case" && newCaseId != oldCaseId)
		{
			renderRequired = true;
		}
		else if (newViewId != oldViewId)
		{
			renderRequired = true;
		}
		
		// Get the viewport width
		var width = getViewportWidth();

		// Has the width changed?
		if (width != lastWidth)
		{
			// TODO - intelligent handling of width changes
			renderRequired = true;
		}

		// Is the render required?
		if (renderRequired)
		{
			// Call the appropriate rendering function
			if (newViewId == "case")
			{
				renderCase(newCaseId, width);
			}
			else
			{
				renderView(newViewId, width);
			}

			// Initialise abbreviations on touch screen devices
			initAbbrTouch();

			// Record rendering arguments
			lastHash = hash;
			lastWidth = width;
		}
	}
	catch (err)
	{
		// Unxpected error - display error message
		var message = debugMessage("renderPage", err.message);
		
		document.getElementById("view").innerHTML = message;
	}
}

//
// This runs when the has portion of the URL changes (i.e. "onhashchange" event handler)
// https://developer.mozilla.org/en-US/docs/Web/Events/hashchange
// https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange
//
function hashChangeHandler()
{
	try
	{
		// Get the hash information from the URL
		var hash = window.location.hash;

		// Render the page - if required
		renderPage(hash);
	}
	catch (err)
	{
		// Unxpected error - display error message
		var message = debugMessage("hashChangeHandler", err.message);
		
		document.getElementById("view").innerHTML = message;
	}
}

//
// This runs when the browser is resized (i.e. "onresize" event handler)
//
function resizeHandler()
{
	try
	{
		// Get the hash information from the global variable
		var hash = lastHash;

		// Render the page - if required
		renderPage(hash);
	}
	catch (err)
	{
		// Unxpected error - display error message
		var message = debugMessage("resizeHandler", err.message);
		
		document.getElementById("view").innerHTML = message;
	}
}

//
// This runs when the browser is resized (i.e. "onresize" event handler)
//
function popStateHandler(e)
{
	try
	{
		if (e.state != null)
		{
			// Hash is provided by the event state
			var hash = e.state.hash;
			
			// Render the page - if required
			renderPage(hash);
			
			// Scroll to the correct position but wait a second or Chrome will not do it!
			setTimeout(function() {window.scrollTo(e.state.xOffset, e.state.yOffset);}, 1);
		}
		else
		{
			// Hash is missing - Safari unexpectedly calls "popstate" on load
			var hash = window.location.hash;
			
			// Render the page - if required
			renderPage(hash);
		}
	}
	catch (err)
	{
		// Unxpected error - display error message
		var message = debugMessage("popStateHandler", err.message);
		
		document.getElementById("view").innerHTML = message;
	}
}

//
// Array.indexOf() is not implemented prior to IE9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Compatibility
//
function polyfillIndexOf()
{
	// Production steps of ECMA-262, Edition 5, 15.4.4.14
	// Reference: http://es5.github.io/#x15.4.4.14
	if (!Array.prototype.indexOf)
	{
		Array.prototype.indexOf = function(searchElement, fromIndex)
		{
			var k;

			// 1. Let o be the result of calling ToObject passing
			//    the this value as the argument.
			if (this == null)
			{
				throw new TypeError('"this" is null or not defined');
			}

			var o = Object(this);

			// 2. Let lenValue be the result of calling the Get
			//    internal method of o with the argument "length".
			// 3. Let len be ToUint32(lenValue).
			var len = o.length >>> 0;

			// 4. If len is 0, return -1.
			if (len === 0)
			{
				return -1;
			}

			// 5. If argument fromIndex was passed let n be
			//    ToInteger(fromIndex); else let n be 0.
			var n = fromIndex | 0;

			// 6. If n >= len, return -1.
			if (n >= len)
			{
				return -1;
			}

			// 7. If n >= 0, then Let k be n.
			// 8. Else, n<0, Let k be len - abs(n).
			//    If k is less than 0, then let k be 0.
			k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

			// 9. Repeat, while k < len
			while (k < len)
			{
				// a. Let Pk be ToString(k).
				//   This is implicit for LHS operands of the in operator
				// b. Let kPresent be the result of calling the
				//    HasProperty internal method of o with argument Pk.
				//   This step can be combined with c
				// c. If kPresent is true, then
				//    i.  Let elementK be the result of calling the Get
				//        internal method of o with the argument ToString(k).
				//   ii.  Let same be the result of applying the
				//        Strict Equality Comparison Algorithm to
				//        searchElement and elementK.
				//  iii.  If same is true, return k.
				if (k in o && o[k] === searchElement)
				{
					return k;
				}
				k++;
			}
			return -1;
		};
	}
}

//
// This runs when all of the page resources have loaded (i.e. "onload" event handler)
//
function loadHandler()
{
	try
	{
		// Array.indexOf() is not implemented prior to IE9
		polyfillIndexOf();
		
		// Event handler for hash change
		addEventHandler(window, "hashchange", hashChangeHandler);

		// Event handler for resize / screen rotation
		addEventHandler(window, "resize", resizeHandler);

		// Event handler for browser controls (back/forward)
		addEventHandler(window, "popstate", popStateHandler);

		// Use the "hashchange" handler to render the page on load
		hashChangeHandler();
	}
	catch (err)
	{
		// Unxpected error - display error message
		var message = debugMessage("loadHandler", err.message);
		
		document.getElementById("view").innerHTML = message;
	}
}

//
// Store the current window offsets (x and Y) in the current state object
// They can then be restored when the user presses the browser "back" button
//
function storeWindowOffset()
{
	try
	{
		// Prepare state using lastHash instead of window.location.hash (slightly more reliable)
		var obj = { "hash": lastHash, "xOffset": window.pageXOffset, "yOffset": window.pageYOffset };
		var title = document.title;
		var url = window.location.href;

		// Replace state in history
		history.replaceState(obj, title, url);
	}
	catch (err)
	{
		// Some browsers do not support history.replaceState()
		// e.g. Prior to Chrome 5, Firefox 4 (unconfirmed), IE10, Safari 5, Opera 11
		// https://developer.mozilla.org/en-US/docs/Web/API/History_API#Browser_compatibility
	}
}

//
// Switch to a specific case
// Invoked from <i class="clicky ..." onclick="switchCase('...')"><br /></i>
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
	
		// Render the page - pushState() never causes a "popstate" or "hashchange" event
		renderPage(hash);
	}
	catch (err)
	{
		// Some browsers do not support history.pushState()
		// e.g. Prior to Chrome 5, Firefox 4 (unconfirmed), IE10, Safari 5, Opera 11
		// https://developer.mozilla.org/en-US/docs/Web/API/History_API#Browser_compatibility
		
		// Update the browser history and render the page via a "hashchange" event
		// https://developer.mozilla.org/en-US/docs/Web/API/Window/location
		window.location.hash = hash;
	}

	// Scroll to the top - no need to wait like we do in the "popstate" event
	window.scrollTo(0, 0);
}

//
// Switch to the selected view
// Invoked from <select id="viewList" onChange="switchView()">
//
function switchView()
{
	// Store the current window offset
	storeWindowOffset();

	// Determine the view from the dropdown box
	// TODO - parameter for "listId"
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

		// Render the page - pushState() never causes a "popstate" or "hashchange" event
		renderPage(hash);		
	}
	catch (err)
	{
		// Some browsers do not support history.pushState()
		// e.g. Prior to Chrome 5, Firefox 4 (unconfirmed), IE10, Safari 5, Opera 11
		// https://developer.mozilla.org/en-US/docs/Web/API/History_API#Browser_compatibility
		
		// Update the browser history and render the page via a "hashchange" event
		// https://developer.mozilla.org/en-US/docs/Web/API/Window/location
		window.location.hash = hash;
	}
}

//
// Render the page when parsing is complete and all content is loaded (including images, script files, CSS files, etc)
//
addEventHandler(window, "load", loadHandler);