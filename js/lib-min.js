function header(a){var b="";if(getViewportWidth()<a&&getViewportWidth()<getViewportHeight()){b='<p class="alert">Best viewed in landscape (horizontal) orientation</p>'}return b}function footer(){return'<div id="tooltip"></div>'}const IPAD_LANDSCAPE=1024;const IPAD_PORTRAIT=768;const GALAXY_S3_LANDSCAPE=640;const GALAXY_S3_PORTRAIT=360;const IPHONE_LANDSCAPE=480;const IPHONE_PORTRAIT=320;function getViewportWidth(){return document.documentElement.clientWidth}function getViewportHeight(){return document.documentElement.clientHeight}var caseIds=[];function getCaseIds(){if(caseIds.length==0){for(var b=0;b<algSet.cases.length;b++){var a=algSet.cases[b];caseIds.push(a.id)}}return caseIds}function getUses(e){var c="";if(e.uses.length<algSet.header.uses.length){var a=e.uses.slice();var b=a.indexOf("2H");if(b>=0){a.splice(b,1)}if(a.length>0){for(var d=0;d<e.uses.length;d++){if(d>0){c+=", "}c+=e.uses[d]}}}return c}function initAbbrTouch(){abbrTouch(document.querySelector("#view"),function(e,f,b,a){var d=document.querySelector("#tooltip");d.innerHTML=f;d.style.left=((b-d.clientWidth/2)>window.pageXOffset?(b-d.clientWidth/2):window.pageXOffset)+"px";d.style.top=((a-50)>window.pageYOffset?(a-50):window.pageYOffset)+"px";var c=(new Date()).getTime();d.setAttribute("data-timestamp",c);document.body.appendChild(d);setTimeout(function(){if(d.getAttribute("data-timestamp")==c){d.removeAttribute("data-timestamp")}},3000)},true)}var tracked=false;function initTracking(){if(tracked==false){(function(d,e,j,h,f,c,b){d.GoogleAnalyticsObject=f;d[f]=d[f]||function(){(d[f].q=d[f].q||[]).push(arguments)},d[f].l=1*new Date();c=e.createElement(j),b=e.getElementsByTagName(j)[0];c.async=1;c.src=h;b.parentNode.insertBefore(c,b)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");ga("create","UA-86348435-1","auto");ga("send","pageview");tracked=true}}var lastFragment="n/a";var lastViewportWidth=getViewportWidth();function processHash(){var c=getViewportWidth();var d=window.location.hash.substring(1);if(d!=lastFragment||c!=lastViewportWidth){var e=d.split("_");var b=e[0];var a=e[1];if(b=="case"){renderCase(a,c)}else{renderView(b,c)}lastFragment=d;lastViewportWidth=c;initAbbrTouch();initTracking()}}function renderPage(){window.addEventListener("hashchange",processHash);window.addEventListener("resize",processHash);window.addEventListener("popstate",function(a){if(a.state!=null){if(a.state.hash!=""){window.location.hash=a.state.hash}processHash();setTimeout(function(){window.scrollTo(a.state.xOffset,a.state.yOffset)},1)}else{processHash()}});processHash()}function storeWindowOffset(){try{var c={hash:window.location.hash,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var d=document.title;var a=window.location.href;history.replaceState(c,d,a)}catch(b){}}window.addEventListener("load",renderPage);