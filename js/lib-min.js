function header(a){var b="";if(getViewportWidth()<a&&getViewportWidth()<getViewportHeight()){b='<p class="alert">Best viewed in landscape (horizontal) orientation</p>'}return b}function footer(){return'<div id="tooltip"></div>'}const IPAD_LANDSCAPE=1024;const IPAD_PORTRAIT=768;const GALAXY_S3_LANDSCAPE=640;const GALAXY_S3_PORTRAIT=360;const IPHONE_LANDSCAPE=480;const IPHONE_PORTRAIT=320;function getViewportWidth(){return document.documentElement.clientWidth}function getViewportHeight(){return document.documentElement.clientHeight}var caseIds=[];function getCaseIds(){if(caseIds.length==0){for(var b=0;b<algSet.cases.length;b++){var a=algSet.cases[b];caseIds.push(a.id)}}return caseIds}function getUses(e){var c="";if(e.uses.length<algSet.header.uses.length){var a=e.uses.slice();var b=a.indexOf("2H");if(b>=0){a.splice(b,1)}if(a.length>0){for(var d=0;d<e.uses.length;d++){if(d>0){c+=", "}c+=e.uses[d]}}}return c}function initAbbrTouch(){abbrTouch(document.querySelector("#view"),function(e,f,b,a){var d=document.querySelector("#tooltip");d.innerHTML=f;d.style.left=((b-d.clientWidth/2)>window.pageXOffset?(b-d.clientWidth/2):window.pageXOffset)+"px";d.style.top=((a-50)>window.pageYOffset?(a-50):window.pageYOffset)+"px";var c=(new Date()).getTime();d.setAttribute("data-timestamp",c);document.body.appendChild(d);setTimeout(function(){if(d.getAttribute("data-timestamp")==c){d.removeAttribute("data-timestamp")}},3000)},true)}var lastFragment="n/a";var lastViewportWidth=getViewportWidth();function processHash(){var c=getViewportWidth();var f=window.location.hash.substring(1);if(f!=lastFragment||c!=lastViewportWidth){var g=f.split("_");var b=g[0];var a=g[1];try{if(b=="case"){renderCase(a,c)}else{renderView(b,c)}}catch(e){var d="";d+="<h2>Hmmm. You may be a victim of the following...</h2>";d+="<h3>Javascript</h3><p>Is it enabled in your browser? Javascript is required for this page to work</p>";d+="<h3>Browser</h3><p>You need at least IE 9, Chrome 4.0, Firefox 6.0, Safari 5.0 or Opera 11</p>";d+="<h3>Error</h3><p>"+e.message+"</p>";document.getElementById("view").innerHTML=d}lastFragment=f;lastViewportWidth=c;initAbbrTouch()}}function renderPage(){window.addEventListener("hashchange",processHash);window.addEventListener("resize",processHash);window.addEventListener("popstate",function(a){if(a.state!=null){if(a.state.hash!=""){window.location.hash=a.state.hash}processHash();setTimeout(function(){window.scrollTo(a.state.xOffset,a.state.yOffset)},1)}else{processHash()}});processHash()}function storeWindowOffset(){try{var c={hash:window.location.hash,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var d=document.title;var a=window.location.href;history.replaceState(c,d,a)}catch(b){}}window.addEventListener("load",renderPage);