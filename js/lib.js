/*

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

1) Originally developed / tested on IE11 (laptop), Chrome 45 (laptop) and Safari (iPad)
2) Works fine when running locally (file://) and remotely (http://)
3) Hyperlinks / bookmarks link to the current page. Other clicks are handled by Javascript
4) Chrome fires more "popstate" events than IE due to window.location.hash being updated
5) Chrome works in two ways... remote = pushstate(), local = window.location.hash

*/


//
// Generic debug message
//
function debugMessage(method, message)
{
	var out = "";
	
	out += "<h2>Houston, we have a problem</h2>";
	out += "<h3>Browser</h3><p>You need at least IE8, Chrome 6.0, Firefox 3.5, Safari 4.0 or Opera 10</p>";
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
		// The addEventListener() method is supported by most browsers, including IE9 and newer
		if (target.addEventListener)
		{
			target.addEventListener(eventType, handler, false);
		}
		// The attachEvent() method is supported by IE5 to IE10
		else if (target.attachEvent)
		{
			target.attachEvent(eventAttribute, handler);
		}
	}
}

//
// Fallback for the "hashchange" event which is not implemented in legacy browsers
// Required prior to Chrome 5.0, Firefox 3.6, IE8.0, Opera 10.6, Safari 5.0
// https://developer.mozilla.org/en-US/docs/Web/Events/hashchange
// https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange
// http://stackoverflow.com/questions/9339865/get-the-hashchange-event-to-work-in-all-browsers-including-ie7
//
function hashChangeFallback(target, handler)
{
	// Bind the handler
	target.onhashchange = handler;
	
	(function(target) {
		var location = target.location,
			oldURL = location.href,
			oldHash = location.hash;

		// check the location hash on a 100ms interval
		setInterval(function() {
			var newURL = location.href,
				newHash = location.hash;

			// if the hash has changed and a handler has been bound...
			if ( newHash != oldHash && typeof target.onhashchange === "function" ) {
				// execute the handler
				target.onhashchange({
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
var lastFragment = "n/a";
var lastViewportWidth = getViewportWidth();

//
// Process the URL fragment which starts with a hash
//
function processHash()
{
	try
	{
		// Get the viewport width
		var viewportWidth = getViewportWidth();

		// Interpret the URL fragment (everything after the hash) as a parameter
		var urlFragment = window.location.hash.substring(1);

		if (urlFragment != lastFragment || viewportWidth != lastViewportWidth)
		{
			// First part is the parameter name 
			var viewParts = urlFragment.split("_");
			var viewType = viewParts[0];
			var viewId = viewParts[1];

			// Render the page
			if (viewType == "case")
			{
				renderCase(viewId, viewportWidth);
			}
			else
			{
				renderView(viewType, viewportWidth);
			}
		
			// Record rendering arguments
			lastFragment = urlFragment;
			lastViewportWidth = viewportWidth;

			// Initialise abbreviations on touch screen devices
			try
			{
				initAbbrTouch();
			}
			catch (err)
			{
				// Non-critical error can be ignored
			}
		}
	}
	catch (err)
	{
		var message = debugMessage("processHash", err.message);
		
		document.getElementById("view").innerHTML = message;
	}
}


//
// Polyfill the missing Array.indexOf() method in IE8 and earlier
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
// Render the page whether it be a view of multiple cases or a specific case
// Additionally, restore the full URL and scroll to the appropriate x / y offsets
//
function renderPage()
{
	try
	{
		// IE8 and earlier do not support Array.indexOf() so it needs to be "polyfilled"
		polyfillIndexOf();
		
		// Event handler for hash change
		addEventHandler(window, "hashchange", processHash);

		// Event handler for resize / screen rotation
		addEventHandler(window, "resize", processHash);

		// Event handler for browser controls (back/forward)
		addEventHandler(window, "popstate", function(e)
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
	catch (err)
	{
		var message = debugMessage("renderPage", err.message);
		
		document.getElementById("view").innerHTML = message;
	}
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
	catch (err)
	{
		// Nothing to do here!
	}
}

//
// Render the page when parsing is complete and all content is loaded (including images, script files, CSS files, etc)
//
addEventHandler(window, "load", renderPage);