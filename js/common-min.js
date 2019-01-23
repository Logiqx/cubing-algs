menuItems=[{type:"h1",desc:"3x3x3"},{type:"h2",desc:"CFOP"},{type:"submenu",desc:"Beginner",items:[{type:"link",desc:"2AOLL",href:"2aoll.html"},{type:"link",desc:"2APLL",href:"2apll.html"}]},{type:"submenu",desc:"Improver",items:[{type:"link",desc:"4AOLL",href:"4aoll.html"},{type:"link",desc:"4APLL",href:"4apll.html"}]},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"Intuitive F2L",href:"if2l.html"},{type:"link",desc:"2LOLL",href:"2loll.html"},{type:"link",desc:"2LPLL",href:"2lpll.html"}]},{type:"submenu",desc:"Advanced",items:[{type:"link",desc:"OLL",href:"oll.html"},{type:"link",desc:"COLL",href:"coll.html"},{type:"link",desc:"PLL",href:"pll.html"},{type:"link",desc:"PLL Recognition",href:"2spll.html"}]},{type:"h2",desc:"CFCE"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"2LCLL",href:"2lcll.html"},{type:"link",desc:"2LELL",href:"2lell.html"}]},{type:"h2",desc:"Roux"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"2LCLL",href:"2lcll.html"}]},{type:"h2",desc:"4LLL"},{type:"submenu",desc:"CO CP EO EP",items:[{type:"link",desc:"2LCLL",href:"2lcll.html"},{type:"link",desc:"2LELL",href:"2lell.html"}]},{type:"submenu",desc:"EO CO CP EP",items:[{type:"link",desc:"2LOLL",href:"2loll.html"},{type:"link",desc:"2LPLL",href:"2lpll.html"}]},{type:"submenu",desc:"EO CP CO EP",items:[{type:"link",desc:"2LCPEOLL",href:"2lcpeoll.html"},{type:"link",desc:"2L2GLL",href:"2l2gll.html"}]},{type:"submenu",desc:"EO EP CO CP",items:[{type:"link",desc:"2LLLEF",href:"2lllef.html"},{type:"link",desc:"2LL4C",href:"2ll4c.html"}]},{type:"h1",desc:"2x2x2"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"OLL",href:"poll.html"},{type:"link",desc:"PBL",href:"pbl.html"}]},{type:"h1",desc:"Big Cubes"},{type:"submenu",desc:"4x4x4",items:[{type:"link",desc:"PPLL",href:"ppll.html"}]},{type:"submenu",desc:"5x5x5",items:[{type:"link",desc:"L2E",href:"l2e.html"}]},{type:"h1",desc:"Pyraminx"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"L3E",href:"l3e.html"}]},{type:"submenu",desc:"Advanced",items:[{type:"link",desc:"L4E",href:"l4e.html"}]}];var initMenu=(function(){function a(){try{var b='<nav class="pushy pushy-left"><h1>Cube Algs</h1><ul>';for(var f=0;f<menuItems.length;f++){var d=menuItems[f];switch(d.type){case"h1":b+='<li class="pushy-h1">'+d.desc+"</li>";break;case"h2":b+='<li class="pushy-h2">'+d.desc+"</li>";break;case"submenu":b+='<li class="pushy-submenu"><span>'+d.desc+"</span><ul>";for(var c=0;c<d.items.length;c++){var g=d.items[c];switch(g.type){case"link":b+='<li class="pushy-link"><a href="'+g.href+'">'+g.desc+"</a></li>";break}}b+="</ul></li>";break}}b+="</ul></nav>";document.getElementById("navigation").innerHTML=b}catch(e){window.alert(e.message)}}return a})();/*! Pushy - v1.0.0 - 2016-3-1
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */
;var pushy;try{pushy=(function(g){var z=g(".pushy"),k=g("body"),n=g("#container"),j=g(".push"),f="pushy-left",o="pushy-open-left",t="pushy-open-right",r=g(".site-overlay"),v=g(".menu-btn, .pushy-link"),d=200,a=z.width()+"px",c=".pushy-submenu",q="pushy-submenu-open",y="pushy-submenu-closed",l=g(c);function e(){if(z.hasClass(f)){k.toggleClass(o)}else{k.toggleClass(t)}}function p(){if(z.hasClass(f)){k.addClass(o);z.animate({left:"0px"},d);n.animate({left:a},d);j.animate({left:a},d)}else{k.addClass(t);z.animate({right:"0px"},d);n.animate({right:a},d);j.animate({right:a},d)}}function b(){if(z.hasClass(f)){k.removeClass(o);z.animate({left:"-"+a},d);n.animate({left:"0px"},d);j.animate({left:"0px"},d)}else{k.removeClass(t);z.animate({right:"-"+a},d);n.animate({right:"0px"},d);j.animate({right:"0px"},d)}}function m(){g(c).addClass(y);g(c).on("click",function(){var B=g(this);if(B.hasClass(y)){g(c).addClass(y).removeClass(q);B.removeClass(y).addClass(q)}else{B.addClass(y).removeClass(q)}})}function h(){g(c).addClass(y);l.children("span").on("click",function(B){B.preventDefault();g(this).toggleClass(q).next(".pushy-submenu ul").slideToggle(200).end().parent(c).siblings(c).children("span").removeClass(q).next(".pushy-submenu ul").slideUp(200)})}function i(){var E=document.createElement("p"),B=false,D={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(E,null);for(var C in D){if(E.style[C]!==undefined){E.style[C]="translate3d(1px,1px,1px)";B=window.getComputedStyle(E).getPropertyValue(D[C])}}document.body.removeChild(E);return(B!==undefined&&B.length>0&&B!=="none")}var w=false;function s(){z=g(".pushy");k=g("body");n=g("#container");j=g(".push");f="pushy-left";o="pushy-open-left";t="pushy-open-right";r=g(".site-overlay");v=g(".menu-btn, .pushy-link");d=200;a=z.width()+"px";c=".pushy-submenu";q="pushy-submenu-open";y="pushy-submenu-closed";l=g(c);if(i()){z.css({visibility:"visible"});m();v.on("click",function(){e()});r.on("click",function(){e()})}else{k.addClass("no-csstransforms3d");if(z.hasClass(f)){z.css({left:"-"+a})}else{z.css({right:"-"+a})}z.css({visibility:"visible"});n.css({"overflow-x":"hidden"});h();v.on("click",function(){if(w){b();w=false}else{p();w=true}});r.on("click",function(){if(w){b();w=false}else{p();w=true}})}}function x(){v=g(".menu-btn, .pushy-link");try{if(i()){v.on("click",function(){e()})}else{v.on("click",function(){if(w){b();w=false}else{p();w=true}})}}catch(B){}}var A=0;function u(){if(A==0){s()}else{x()}A++}return u}(jQuery))}catch(err){};(function(){var g;var h;var i;var e={x:-1,y:-1};var b={x:-1,y:-1};function a(l){if(l.originalEvent&&l.originalEvent.targetTouches){return l.originalEvent.targetTouches[0]}if(l.targetTouches){return l.targetTouches[0]}return l}function c(m,l){return Math.abs(m-l)<2}function f(m){var l=a(m);e.x=l.pageX;e.y=l.pageY;b.x=l.pageX;b.y=l.pageY;h=true;if(i){clearTimeout(i)}i=setTimeout(function(){h=false},200)}function j(l){if(h&&c(e.x,b.x)&&c(e.y,b.y)){g.customData={touchX:b.x,touchY:b.y};l.target.dispatchEvent(g)}}function d(m){var l=a(m);b.x=l.pageX;b.y=l.pageY}function k(){try{g=document.createEvent("Event");g.initEvent("touchtap",true,true);document.addEventListener("touchstart",f,false);document.addEventListener("touchend",j,false);document.addEventListener("touchcancel",j,false);document.addEventListener("touchmove",d,false)}catch(l){}}k()})();var abbrTouch=(function(){function b(d){return function(f){d(f.currentTarget,f.currentTarget.title,f.customData.touchX,f.customData.touchY)}}function a(f,g,e,d){alert(g)}function c(j,g){try{if(!j){j=document}var k=g||a;var h=j.querySelectorAll("abbr[title]");var d=b(k);for(var e=0;e<h.length;e++){if(h[e].children.length==0){if(h[e].addEventListener){h[e].addEventListener("touchtap",d,false)}else{break}}}}catch(f){}}return c})();var abbrs=[{name:"2GLL",desc:"2-Gen Last Layer. Solved using R and U moves"},{name:"2H",desc:"Two-handed"},{name:"2LLL",desc:"2-Look Last Layer"},{name:"4LLL",desc:"4-Look Last Layer"},{name:"6LLL",desc:"6-Look Last Layer"},{name:"Anti-Sune",desc:"Extract F2L pair, AUF, re-insert pair"},{name:"AUF",desc:"Adjust U Face"},{name:"CFOP",desc:"Cross, F2L, OLL, PLL"},{name:"COLL",desc:"Corners of the Last Layer - Preserving Edge Orientation"},{name:"CLL",desc:"Corners of the Last Layer"},{name:"CPEOLL",desc:"Corner Permutation and Edge Orientation of the Last Layer"},{name:"CPLL",desc:"Corner Permutation of the Last Layer"},{name:"Commutator",desc:"[A, B] = A B A' B'"},{name:"Conjugate",desc:"[A: B] = A B A'"},{name:"Double-Sexy",desc:"(R U R' U') (R U R' U')"},{name:"ELL",desc:"Edges of the Last Layer"},{name:"EOLL",desc:"Edge Orientation of the Last Layer"},{name:"EPLL",desc:"Edge Permutation of the Last Layer"},{name:"F2L",desc:"First Two Layers"},{name:"Hedgeslammer",desc:"(F R' F' R)"},{name:"Inverse",desc:"Executing an algorithm in reverse"},{name:"L4C",desc:"Last Four Corners"},{name:"LL",desc:"Last Layer"},{name:"LLEF",desc:"Last Layer Edges First"},{name:"OH",desc:"One-handed"},{name:"OCLL",desc:"Orient Corners of the Last Layer"},{name:"OCLL-EPP",desc:"Orient Corners of the Last Layer - Edges Permutation Preserved"},{name:"OLL",desc:"Orientation of the Last Layer"},{name:"OLLCP",desc:"Orientation of the Last Layer and Corner Permutation"},{name:"OLLCP-A",desc:"Orientation of the Last Layer and Corner Permutation"},{name:"PBL",desc:"Permutation of Both Layers"},{name:"PLL",desc:"Permutation of the Last Layer"},{name:"LBAS",desc:"Left-Back Anti-Sune"},{name:"L2E",desc:"Last 2 Edges"},{name:"L3E",desc:"Last 3 Edges"},{name:"L4E",desc:"Last 4 Edges"},{name:"LBL",desc:"Layer-by-Layer"},{name:"LBN",desc:"Left-Back Niklas"},{name:"LBS",desc:"Left-Back Sune"},{name:"LBWAS",desc:"Left-Back Wide-Anti-Sune"},{name:"LBWS",desc:"Left-Back Wide-Sune"},{name:"LFAS",desc:"Left-Front Anti-Sune"},{name:"LFN",desc:"Left-Front Niklas"},{name:"LFS",desc:"Left-Front Sune"},{name:"LFWAS",desc:"Left-Front Wide-Anti-Sune"},{name:"LFWS",desc:"Left-Front Wide-Sune"},{name:"Mounted-Fish",desc:"OLL #37 - F R U' (R' U' R U) R' F'"},{name:"MU",desc:"Algorithm consisting of M and U moves"},{name:"Niklas",desc:"The 8-move commutator named by Lars Petrus"},{name:"Palindrome",desc:"The algorithm is the same when read backwards"},{name:"RBAS",desc:"Right-Back Anti-Sune"},{name:"RBN",desc:"Right-Back Niklas"},{name:"RBS",desc:"Right-Back Sune"},{name:"RBWAS",desc:"Right-Back Wide-Anti-Sune"},{name:"RBWS",desc:"Right-Back Wide-Sune"},{name:"Reverse-sexy",desc:"U R U' R'"},{name:"RFAS",desc:"Right-Front Anti-Sune"},{name:"RFN",desc:"Right-Front Niklas"},{name:"RFS",desc:"Right-Front Sune"},{name:"RFWAS",desc:"Right-Front Wide-Anti-Sune"},{name:"RFWS",desc:"Right-Front Wide-Sune"},{name:"RU",desc:"Algorithm consisting of R and U moves"},{name:"RUD",desc:"Algorithm consisting of R, U and D moves"},{name:"RUF",desc:"Algorithm consisting of R, U and F moves"},{name:"RUL",desc:"Algorithm consisting of R, U and L moves"},{name:"Sexy",desc:"R U R' U'"},{name:"Sexy-sledge",desc:"OLL #33 - (R U R' U') (R' F R F')"},{name:"Sledgehammer",desc:"(R' F R F')"},{name:"Sune",desc:"Extract F2L pair, AUF, re-insert pair"},{name:"SuneOLL",desc:"Solving an OLL case using Sune variations"},{name:"TPS",desc:"Turns Per Second"},{name:"Triple-Sexy",desc:"(R U R' U') (R U R' U') (R U R' U')"},{name:"VHLS",desc:"Vandenbergh-Harris Last Slot"}];function replaceAbbr(e){for(var b=0;b<abbrs.length;b++){var f=abbrs[b];if(f!=null){var d="["+f.name+"]";while(e.indexOf(d)>=0){var c='<abbr class="dotted" title="'+f.desc+'">'+f.name+"</abbr>";e=e.replace(d,c)}var a="["+f.name.toLowerCase()+"]";while(e.indexOf(a)>=0){var c='<abbr class="dotted" title="'+f.desc+'">'+f.name.toLowerCase()+"</abbr>";e=e.replace(a,c)}}}return e};function debugMessage(c,b){var a="";a+="<h2>Houston, we have a problem</h2>";a+="<h3>Browser</h3><p>You need at least Chrome 1, Firefox 4, IE8, Safari 4 or Opera 10</p>";a+="<h3>Debug</h3><p>"+c+": "+b+"</p>";return a}function header(a){var b="";if(algSet.header.hasOwnProperty("rotate")&&algSet.header.rotate=="true"){if(getViewportWidth()<a&&getViewportWidth()<getViewportHeight()){b='<p class="alert">Best viewed in landscape (horizontal) orientation</p>'}}return b}function footer(){return'<div id="tooltip"></div>'}var IPAD_LANDSCAPE=1024;var IPAD_PORTRAIT=768;var GALAXY_S3_LANDSCAPE=640;var GALAXY_S3_PORTRAIT=360;var IPHONE_LANDSCAPE=480;var IPHONE_PORTRAIT=320;function getViewportWidth(){return document.documentElement.clientWidth}function getViewportHeight(){return document.documentElement.clientHeight}var caseIds=[];function getCaseIds(){if(caseIds.length==0){for(var b=0;b<algSet.cases.length;b++){var a=algSet.cases[b];if(a!=null){caseIds.push(a.id)}}}return caseIds}function getUses(c){var a="";if(c.uses.length<algSet.header.uses.length){for(var b=0;b<c.uses.length;b++){var d=c.uses[b];if(d!=null){if(b>0){a+=", "}a+=d}}}return a}function initAbbrTouch(){try{abbrTouch(document.querySelector("#container"),function(f,g,c,b){var e=document.querySelector("#tooltip");e.innerHTML=g;e.style.left=((c-e.clientWidth/2)>window.pageXOffset?(c-e.clientWidth/2):window.pageXOffset)+"px";e.style.top=((b-50)>window.pageYOffset?(b-50):window.pageYOffset)+"px";var d=(new Date()).getTime();e.setAttribute("data-timestamp",d);document.body.appendChild(e);setTimeout(function(){if(e.getAttribute("data-timestamp")==d){e.removeAttribute("data-timestamp")}},3000)},true)}catch(a){}}function addEventHandler(d,b,c){var a="on"+b;if(b=="hashchange"&&!(a in d)){hashChangeFallback(d,c)}else{if(d.addEventListener){d.addEventListener(b,c,false)}else{if(d.attachEvent){d.attachEvent(a,c)}}}}function hashChangeFallback(b,a){b.onhashchange=a;(function(e){var c=e.location,d=c.href,f=c.hash;setInterval(function(){var h=c.href,g=c.hash;if(g!=f&&typeof e.onhashchange==="function"){e.onhashchange({type:"hashchange",oldURL:d,newURL:h});d=h;f=g}},100)})(window)}var lastHash="n/a";var lastWidth=getViewportWidth();function renderPage(h){try{var d=false;var g=lastHash.substring(1).split("-");var i=g[0]?g[0]:algSet.views[0].id;var c=g[1];var a=h.substring(1).split("-");var j=a[0]?a[0]:algSet.views[0].id;var e=a[1];if(j=="case"&&e!=c){d=true}else{if(j=="random"){d=true}else{if(j!=i){d=true}}}var b=getViewportWidth();if(b!=lastWidth){d=true}if(d){if(j=="random"){e=algSet.cases[Math.floor(Math.random()*algSet.cases.length)].id;renderCase(e,b)}else{if(j=="case"){renderCase(e,b)}else{renderView(j,b)}}initAbbrTouch();try{pushy()}catch(f){}lastHash=h;lastWidth=b}}catch(f){var k=debugMessage("renderPage",f.message);document.getElementById("container").innerHTML=k}}function hashChangeHandler(){try{var c=window.location.hash;renderPage(c)}catch(b){var a=debugMessage("hashChangeHandler",b.message);document.getElementById("container").innerHTML=a}}function resizeHandler(){try{var c=lastHash;renderPage(c)}catch(b){var a=debugMessage("resizeHandler",b.message);document.getElementById("container").innerHTML=a}}function popStateHandler(d){try{if(d.state!=null){var c=d.state.hash;renderPage(c);setTimeout(function(){window.scrollTo(d.state.xOffset,d.state.yOffset)},1)}else{var c=window.location.hash;renderPage(c)}}catch(b){var a=debugMessage("popStateHandler",b.message);document.getElementById("container").innerHTML=a}}function polyfillIndexOf(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,d){var b;if(this==null){throw new TypeError('"this" is null or not defined')}var e=Object(this);var a=e.length>>>0;if(a===0){return -1}var f=d|0;if(f>=a){return -1}b=Math.max(f>=0?f:a-Math.abs(f),0);while(b<a){if(b in e&&e[b]===c){return b}b++}return -1}}}function loadHandler(){try{polyfillIndexOf();addEventHandler(window,"hashchange",hashChangeHandler);addEventHandler(window,"resize",resizeHandler);addEventHandler(window,"popstate",popStateHandler);try{initMenu()}catch(b){}hashChangeHandler()}catch(b){var a=debugMessage("loadHandler",b.message);document.getElementById("container").innerHTML=a}}function storeWindowOffset(){try{var c={hash:lastHash,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var d=document.title;var a=window.location.href;history.replaceState(c,d,a)}catch(b){}}function switchCase(a){storeWindowOffset();var e="#case-"+a;try{if(navigator.userAgent.indexOf("Chrome/5.0")>-1){throw"Chrome/5.0"}var d={hash:e,xOffset:0,yOffset:0};var f=algSet.header.id+" "+a;var b=e;history.pushState(d,f,b);renderPage(e)}catch(c){window.location.hash=e}window.scrollTo(0,0)}function switchView(){storeWindowOffset();var c=document.getElementById("viewList");var a=c.options[c.selectedIndex].value;var f="#"+a;try{if(navigator.userAgent.indexOf("Chrome/5.0")>-1){throw"Chrome/5.0"}var e={hash:f,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var g=algSet.header.id+" - "+c.options[c.selectedIndex].text;var b=f;history.pushState(e,g,b);renderPage(f)}catch(d){window.location.hash=f}}addEventHandler(window,"load",loadHandler);function getDisplayName(a){var d=a.id;var c=d.indexOf(".");var b="";if(c>=0){d=d.substr(0,c)}if(a.name.indexOf(d)<0){b+=d+" - "}b+=a.name;return b}function getTooltip(a){var b="";if(a.algdb.indexOf(algSet.header.id)>=0){b=algSet.header.id+" "}b+=getDisplayName(a);return b}function renderGridHeaderRow(a,c){var b="";b+="<thead>";b+="<tr>";b+="<th></th>";for(var d=0;d<a.headers.length;d++){var e=a.headers[d];b+="<th>"+e+"</th>"}b+="</tr>";b+="</thead>";return b}function renderGridDataRows(m,d){var h="";var g=m.rows[0].cases.length-1;var k=(g<=8&&d>=IPAD_LANDSCAPE)||(g<=6&&d>=IPAD_PORTRAIT)?"96":"64";var f=getCaseIds();h+="<tbody>";for(var c=0;c<m.rows.length;c++){var l=m.rows[c];if(l!=null){h+="<tr>";h+='<th class="name">'+l.name+"</th>";for(var a=0;a<l.cases.length;a++){h+="<td>";var e=l.cases[a];if(e!=null){var j=algSet.cases[f.indexOf(e)];if(j!=null){var i=algSet.header.hasOwnProperty("css")?algSet.header.css:algSet.header.id;var b=j.style!=null?j.style:"";h+='<abbr title="'+getTooltip(j)+'"><i class="clicky '+b+" s"+k+"-"+i.toLowerCase()+" s"+k+"-"+j.image.toLowerCase()+'" onclick="switchCase(\''+j.id+"')\"><br/></i></abbr>"}}h+="</td>"}h+="</tr>"}}h+="</tbody>";return h}function renderViewAlg(d,c){var b="";var a=getUses(d);if(a.length>0){a=" <sup>"+a+"</sup>"}b+=d.alg+a;b+="<br/>";return b}function renderTableDataCell(i,b){var f="";var h={};var a=0;var c=b>=IPHONE_LANDSCAPE?4:2;f+='<span class="clicky" onclick="switchCase(\''+i.id+"')\">"+getDisplayName(i);f+="</span>";f+=" - "+i.prob;f+="<br/>";for(var e=0;e<algSet.header.uses.length;e++){useId=algSet.header.uses[e].id;h[useId]=0}for(var d=0;d<i.algs.length&&a<c;d++){var l=i.algs[d];if(l!=null){if(l.status==1){var k=false;for(var e=0;e<l.uses.length;e++){if(h[l.uses[e]]<c){k=true;h[l.uses[e]]+=algSet.header.uses.length/l.uses.length}}if(k==true){f+=renderViewAlg(l,b);a++}}if(l.hasOwnProperty("vars")){for(var j=0;j<l.vars.length&&a<c;j++){var g=l.vars[j];if(g!=null){if(g.status==1){var k=false;for(var e=0;e<g.uses.length;e++){if(h[g.uses[e]]<c){k=true;h[g.uses[e]]+=algSet.header.uses.length/g.uses.length}}if(k==true){f+=renderViewAlg(g,b);a++}}}}}}}if(f==""){f+="Missing case "+i.id}return f}function renderTableDataRows(m,j,c){var g="";var l=c>=IPHONE_LANDSCAPE?"96":"64";var f=c>=IPAD_LANDSCAPE?Math.floor(c/512):1;var h=0;var e=getCaseIds();g+="<tbody>";for(var a=0;a<j.cases.length;a++){var d=j.cases[a];if(d!=null){var k=algSet.cases[e.indexOf(d)];if(k!=null){if(h==0){g+="<tr>"}var i=algSet.header.hasOwnProperty("css")?algSet.header.css:algSet.header.id;var b=k.style!=null?k.style:"";g+='<td><abbr title="'+getTooltip(k)+'"><i class="clicky '+b+" s"+l+"-"+i.toLowerCase()+" s"+l+"-"+k.image.toLowerCase()+'" onclick="switchCase(\''+k.id+"')\"><br/></i></abbr></td>";g+='<td class="alg">';g+=renderTableDataCell(k,c);g+="</td>";h++;if(h==f){g+="</tr>";h=0}}}}if(h>0){g+="</tr>"}g+="</tbody>";return g}function renderViewOptions(b,e){var d="";d+='<p>Select view: <select id="viewList" onChange="switchView()"></p>';for(var c=0;c<algSet.views.length;c++){var a=algSet.views[c];if(a!=null){d+='<option value="'+a.id+'"';if(a.id==b){d+=" selected"}d+=">"+a.name+"</option>"}}d+="</select>";return d}function renderViewLinks(a,c){var b="";var e=0;b+="<p>";for(var f=0;f<a.groups.length;f++){var d=a.groups[f];if(d!=null){if(f>0&&e>0){b+=" | "}if(d.name!=""){b+='<a class="clicky" href="#'+a.id+"-"+d.id+'">'+d.name+"</a>"}e+=d.name.length;if(a.groups.length>8&&e>110){b+="</p><p>";e=0}}}b+="</p>";return b}function renderContents(){var a="";a+='<a class="clicky" href="https://youtu.be/kETStPTH3tE"><img class="contents" src="../img/mikegeorge.jpg"/></a>';for(var d=0;d<menuItems.length;d++){var c=menuItems[d];switch(c.type){case"h1":a+="<hr/>";a+="<h2>"+c.desc+"</h2>";break;case"h2":a+="<h3>"+c.desc+"</h3>";break;case"submenu":a+="<p>"+c.desc+" - ";for(var b=0;b<c.items.length;b++){var e=c.items[b];switch(e.type){case"link":if(b>0){a+=" + "}a+='<a class="clicky" href="'+e.href+'">'+e.desc+"</a>";break}}a+="</p>";break}}return a}function renderView(f,a){var c="";var i=false;for(var b=0;b<algSet.views.length;b++){var h=algSet.views[b];if(h!=null){if(h.id==f){i=true;break}}}if(i==false){f=algSet.views[0].id}var e=algSet.header.name;if(algSet.header.name.indexOf(algSet.header.id)<0){e+=" ("+algSet.header.id+")"}c+='<h1><span class="menu-btn">&#9776;</span> '+e+"</h1>";for(var b=0;b<algSet.views.length;b++){var h=algSet.views[b];if(h!=null){if(h.id==f){if(h.name!=""){c+="<h2>"+h.name+"</h2>";document.title=algSet.header.id}if(h.hasOwnProperty("rows")&&a<GALAXY_S3_LANDSCAPE){if(getViewportHeight()>=GALAXY_S3_LANDSCAPE-128){c+='<p class="alert">Rotate to landscape (horizontal) for the grid view.</p>'}else{c+='<p class="alert">Sorry. Your display is too small for the grid view!</p>'}}else{c+=header(IPHONE_LANDSCAPE);if(algSet.header.hasOwnProperty("desc")){c+="<p>"+replaceAbbr(algSet.header.desc)+"</p>"}if(h.hasOwnProperty("desc")){c+="<p>"+replaceAbbr(h.desc)+"</p>"}if(algSet.cases.length>0){c+="<p> Click on an <strong>image</strong> or <strong>name</strong> for details about the case; e.g. algorithms, comments, breakdowns.</p>"}}if(algSet.views.length>1){c+="<p> Use the <strong>dropdown</strong> to switch between views.</p>";c+=renderViewOptions(f,a)}if(h.hasOwnProperty("rows")){if(a>=GALAXY_S3_LANDSCAPE){c+="<table>";c+=renderGridHeaderRow(h,a);c+=renderGridDataRows(h,a);c+="</table>"}}else{if(h.hasOwnProperty("groups")){if(a>=1000){c+="<h2>Shortcuts</h2>";c+=renderViewLinks(h,a)}for(var g=0;g<h.groups.length;g++){var d=h.groups[g];if(d!=null){c+='<a id="'+h.id+"-"+d.id+'" />';if(d.name!=""){c+="<h3>"+d.name+"</h3>"}if(d.desc){c+="<p>"+replaceAbbr(d.desc)+"</p>"}c+="<table>";c+=renderTableDataRows(h,d,a);c+="</table>"}}}}i=true}}}if(f=="contents"&&algSet.cases.length==0){c+=renderContents()}c+=footer();document.getElementById("container").innerHTML=c};function renderCaseAlg(f,e,g,d){var b="";var a=getUses(f);if(a.length>0){a=" <sup>"+a+"</sup>"}var c="";if(f.status<1||f.uses.length<1){c=" inactive"}if(d>=IPAD_LANDSCAPE){b+="<tr>";b+='<td class="'+e+c+'">'+f.alg+a+"</td>";b+='<td class="desc'+c+'">'+replaceAbbr(f.desc)+"</td>";b+="</tr>"}else{if(g){b+="<tr><td>&nbsp;</td></tr>"}b+='<tr><td class="'+e+c+'">'+f.alg+a+"</td></tr>";b+='<tr><td class="'+e+c+'"><em>'+replaceAbbr(f.desc)+"</em></td></tr>"}return b}function renderCaseAlgs(b,d){var a="";var c=1;for(var g=0;g<b.algs.length;g++){var e=b.algs[g];if(e!=null){if(e.hasOwnProperty("name")){a+="<h3>"+e.name+"</h3>"}else{a+="<h3>Alg "+c+"</h3>"}switch(e.status){case 0:a+='<p class="inactive">I don\'t use this algorithm yet.</p>';break;case -1:a+='<p class="inactive">I don\'t use this algorithm nowadays.</p>';break}a+="<table>";a+=renderCaseAlg(e,"desc",false,d);if(e.hasOwnProperty("vars")){for(var h=0;h<e.vars.length;h++){var f=e.vars[h];if(f!=null){a+=renderCaseAlg(f,"var",true,d)}}}a+="</table>";c++}}return a}function renderCaseLinks(h,a){var d="";d+="<h3>Links</h3>";var f=h.wiki;var c=algSet.header.id;if(f!=""){if(h.wiki.indexOf("#")>=0){c=algSet.header.id}else{c=h.wiki}}var e=h.algdb;var k=algSet.header.id;if(e!=""){k=h.algdb}for(var b=0;f==""&&b<algSet.views.length;b++){var j=algSet.views[b];if(j!=null){if(j.hasOwnProperty("groups")){for(var i=0;i<j.groups.length;i++){var g=j.groups[i];if(g!=null){if(g.hasOwnProperty("wiki")){if(g.cases.indexOf(h.id)>=0){f=g.wiki;if(g.wiki.indexOf("#")>=0){c=algSet.header.id}else{c=g.wiki}}}}}}}}d+='<p>SpeedSolving Wiki: <a class="clicky" href="'+algSet.header.wiki+f+'" target="_blank">'+c+"</a><p>";d+='<p>AlgDb.Net: <a class="clicky" href="'+algSet.header.algdb+e+'" target="_blank">'+k+"</a><p>";return d}function renderCase(b,h){var c="";var g="128";var a=getCaseIds();c+='<h1><span class="menu-btn">&#9776;</span> '+algSet.header.id+" - "+b+' <a class="clicky" href="#random">&#8230;</a></h1>';c+=header(GALAXY_S3_PORTRAIT);if(a.indexOf(b)>=0){var e=algSet.cases[a.indexOf(b)];if(e.name!=b){c+="<h2>"+e.name+"</h2>"}document.title=algSet.header.id+" "+b;var d=algSet.header.hasOwnProperty("css")?algSet.header.css:algSet.header.id;var f=e.style!=null?e.style:"";c+='<p><i class="'+f+" s"+g+"-"+d.toLowerCase()+" s"+g+"-"+e.image.toLowerCase()+'"></i></p>';if(e.desc){c+="<p>"+replaceAbbr(e.desc)+"</p>"}c+="<p>Probability = "+e.prob+"</p>";c+=renderCaseAlgs(e,h);c+=renderCaseLinks(e,h)}else{c+="Missing case "+b}c+=footer();document.getElementById("container").innerHTML=c};