function debugMessage(c,b){var a="";a+="<h2>Houston, we have a problem</h2>";a+="<h3>Browser</h3><p>You need at least Chrome 1, Firefox 4, IE8, Safari 4 or Opera 10</p>";a+="<h3>Debug</h3><p>"+c+": "+b+"</p>";return a}function header(a){var b="";if(getViewportWidth()<a&&getViewportWidth()<getViewportHeight()){b='<p class="alert">Best viewed in landscape (horizontal) orientation</p>'}return b}function footer(){return'<div id="tooltip"></div>'}var IPAD_LANDSCAPE=1024;var IPAD_PORTRAIT=768;var GALAXY_S3_LANDSCAPE=640;var GALAXY_S3_PORTRAIT=360;var IPHONE_LANDSCAPE=480;var IPHONE_PORTRAIT=320;function getViewportWidth(){return document.documentElement.clientWidth}function getViewportHeight(){return document.documentElement.clientHeight}var caseIds=[];function getCaseIds(){if(caseIds.length==0){for(var b=0;b<algSet.cases.length;b++){var a=algSet.cases[b];if(a!=null){caseIds.push(a.id)}}}return caseIds}function getUses(c){var a="";if(c.uses.length<algSet.header.uses.length){for(var b=0;b<c.uses.length;b++){var d=c.uses[b];if(d!=null){if(b>0){a+=", "}a+=d}}}return a}function initAbbrTouch(){try{abbrTouch(document.querySelector("#container"),function(f,g,c,b){var e=document.querySelector("#tooltip");e.innerHTML=g;e.style.left=((c-e.clientWidth/2)>window.pageXOffset?(c-e.clientWidth/2):window.pageXOffset)+"px";e.style.top=((b-50)>window.pageYOffset?(b-50):window.pageYOffset)+"px";var d=(new Date()).getTime();e.setAttribute("data-timestamp",d);document.body.appendChild(e);setTimeout(function(){if(e.getAttribute("data-timestamp")==d){e.removeAttribute("data-timestamp")}},3000)},true)}catch(a){}}function addEventHandler(d,b,c){var a="on"+b;if(b=="hashchange"&&!(a in d)){hashChangeFallback(d,c)}else{if(d.addEventListener){d.addEventListener(b,c,false)}else{if(d.attachEvent){d.attachEvent(a,c)}}}}function hashChangeFallback(b,a){b.onhashchange=a;(function(e){var c=e.location,d=c.href,f=c.hash;setInterval(function(){var h=c.href,g=c.hash;if(g!=f&&typeof e.onhashchange==="function"){e.onhashchange({type:"hashchange",oldURL:d,newURL:h});d=h;f=g}},100)})(window)}var lastHash="n/a";var lastWidth=getViewportWidth();function renderPage(h){try{var d=false;var g=lastHash.substring(1).split("-");var i=g[0]?g[0]:algSet.views[0].id;var c=g[1];var a=h.substring(1).split("-");var j=a[0]?a[0]:algSet.views[0].id;var e=a[1];if(j=="case"&&e!=c){d=true}else{if(j=="random"){d=true}else{if(j!=i){d=true}}}var b=getViewportWidth();if(b!=lastWidth){d=true}if(d){if(j=="random"){e=algSet.cases[Math.floor(Math.random()*algSet.cases.length)].id;renderCase(e,b)}else{if(j=="case"){renderCase(e,b)}else{renderView(j,b)}}initAbbrTouch();try{pushy()}catch(f){}lastHash=h;lastWidth=b}}catch(f){var k=debugMessage("renderPage",f.message);document.getElementById("container").innerHTML=k}}function hashChangeHandler(){try{var c=window.location.hash;renderPage(c)}catch(b){var a=debugMessage("hashChangeHandler",b.message);document.getElementById("container").innerHTML=a}}function resizeHandler(){try{var c=lastHash;renderPage(c)}catch(b){var a=debugMessage("resizeHandler",b.message);document.getElementById("container").innerHTML=a}}function popStateHandler(d){try{if(d.state!=null){var c=d.state.hash;renderPage(c);setTimeout(function(){window.scrollTo(d.state.xOffset,d.state.yOffset)},1)}else{var c=window.location.hash;renderPage(c)}}catch(b){var a=debugMessage("popStateHandler",b.message);document.getElementById("container").innerHTML=a}}function polyfillIndexOf(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,d){var b;if(this==null){throw new TypeError('"this" is null or not defined')}var e=Object(this);var a=e.length>>>0;if(a===0){return -1}var f=d|0;if(f>=a){return -1}b=Math.max(f>=0?f:a-Math.abs(f),0);while(b<a){if(b in e&&e[b]===c){return b}b++}return -1}}}function loadHandler(){try{polyfillIndexOf();addEventHandler(window,"hashchange",hashChangeHandler);addEventHandler(window,"resize",resizeHandler);addEventHandler(window,"popstate",popStateHandler);try{initMenu()}catch(b){}hashChangeHandler()}catch(b){var a=debugMessage("loadHandler",b.message);document.getElementById("container").innerHTML=a}}function storeWindowOffset(){try{var c={hash:lastHash,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var d=document.title;var a=window.location.href;history.replaceState(c,d,a)}catch(b){}}function switchCase(a){storeWindowOffset();var e="#case-"+a;try{if(navigator.userAgent.indexOf("Chrome/5.0")>-1){throw"Chrome/5.0"}var d={hash:e,xOffset:0,yOffset:0};var f=algSet.header.id+" "+a;var b=e;history.pushState(d,f,b);renderPage(e)}catch(c){window.location.hash=e}window.scrollTo(0,0)}function switchView(){storeWindowOffset();var c=document.getElementById("viewList");var a=c.options[c.selectedIndex].value;var f="#"+a;try{if(navigator.userAgent.indexOf("Chrome/5.0")>-1){throw"Chrome/5.0"}var e={hash:f,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var g=algSet.header.id+" - "+c.options[c.selectedIndex].text;var b=f;history.pushState(e,g,b);renderPage(f)}catch(d){window.location.hash=f}}addEventHandler(window,"load",loadHandler);