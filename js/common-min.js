(function(){var g;var h;var i;var e={x:-1,y:-1};var b={x:-1,y:-1};function a(l){if(l.originalEvent&&l.originalEvent.targetTouches){return l.originalEvent.targetTouches[0]}if(l.targetTouches){return l.targetTouches[0]}return l}function c(m,l){return Math.abs(m-l)<2}function f(m){var l=a(m);e.x=l.pageX;e.y=l.pageY;b.x=l.pageX;b.y=l.pageY;h=true;if(i){clearTimeout(i)}i=setTimeout(function(){h=false},200)}function j(l){if(h&&c(e.x,b.x)&&c(e.y,b.y)){g.customData={touchX:b.x,touchY:b.y};l.target.dispatchEvent(g)}}function d(m){var l=a(m);b.x=l.pageX;b.y=l.pageY}function k(){g=document.createEvent("CustomEvent");g.initEvent("touchtap",true,true);document.addEventListener("touchstart",f);document.addEventListener("touchend",j);document.addEventListener("touchcancel",j);document.addEventListener("touchmove",d)}k()})();var abbrTouch=(function(){function b(d){return function(f){d(f.currentTarget,f.currentTarget.title,f.customData.touchX,f.customData.touchY)}}function a(f,g,e,d){alert(g)}function c(h,f){if(!h){h=document}var j=f||a;var g=h.querySelectorAll("abbr[title]");var d=b(j);for(var e=0;e<g.length;e++){if(g[e].children.length==0){g[e].addEventListener("touchtap",d)}}}return c})();var abbrs=[{name:"2GLL",desc:"2-Gen Last Layer. Solved using R and U moves"},{name:"2H",desc:"Two-handed"},{name:"AUF",desc:"Adjust U Face"},{name:"CFOP",desc:"Cross, F2L, OLL, PLL"},{name:"COLL",desc:"Corners of the Last Layer - Preserving Edge Orientation"},{name:"CPLL",desc:"Corner Permutation of the Last Layer"},{name:"Commutator",desc:"[A, B] = A B A' B'"},{name:"Conjugate",desc:"[A: B] = A B A'"},{name:"Double-Sexy",desc:"(R U R' U') (R U R' U')"},{name:"EOLL",desc:"Edge Orientation of the Last Layer"},{name:"EPLL",desc:"Edge Permutation of the Last Layer"},{name:"F2L",desc:"First Two Layers"},{name:"Hedgeslammer",desc:"(F R' F' R)"},{name:"LL",desc:"Last Layer"},{name:"OH",desc:"One-handed"},{name:"OCLL",desc:"Orient Corners of the Last Layer"},{name:"OLL",desc:"Orientation of the Last Layer"},{name:"OLLCP",desc:"Orientation of the Last Layer and Corner Permutation"},{name:"PLL",desc:"Permutation of the Last Layer"},{name:"LBAS",desc:"Left-Back Anti-Sune"},{name:"LBN",desc:"Left-Back Niklas"},{name:"LBS",desc:"Left-Back Sune"},{name:"LBWAS",desc:"Left-Back Wide-Anti-Sune"},{name:"LBWS",desc:"Left-Back Wide-Sune"},{name:"LFAS",desc:"Left-Front Anti-Sune"},{name:"LFN",desc:"Left-Front Niklas"},{name:"LFS",desc:"Left-Front Sune"},{name:"LFWAS",desc:"Left-Front Wide-Anti-Sune"},{name:"LFWS",desc:"Left-Front Wide-Sune"},{name:"Mounted-Fish",desc:"OLL #37 - F R U' (R' U' R U) R' F'"},{name:"MU",desc:"Algorithm consisting of M and U moves"},{name:"Niklas",desc:"The 8-move commutator named by Lars Petrus"},{name:"Palindrome",desc:"The algorithm is the same when read backwards"},{name:"RBAS",desc:"Right-Back Anti-Sune"},{name:"RBN",desc:"Right-Back Niklas"},{name:"RBS",desc:"Right-Back Sune"},{name:"RBWAS",desc:"Right-Back Wide-Anti-Sune"},{name:"RBWS",desc:"Right-Back Wide-Sune"},{name:"Reverse-sexy",desc:"U R U' R'"},{name:"RFAS",desc:"Right-Front Anti-Sune"},{name:"RFN",desc:"Right-Front Niklas"},{name:"RFS",desc:"Right-Front Sune"},{name:"RFWAS",desc:"Right-Front Wide-Anti-Sune"},{name:"RFWS",desc:"Right-Front Wide-Sune"},{name:"RU",desc:"Algorithm consisting of R and U moves"},{name:"RUF",desc:"Algorithm consisting of R, U and F moves"},{name:"RUL",desc:"Algorithm consisting of R, U and L moves"},{name:"Sexy",desc:"R U R' U'"},{name:"Sexy-sledge",desc:"OLL #33 - (R U R' U') (R' F R F')"},{name:"Sledgehammer",desc:"(R' F R F')"},{name:"Sune",desc:"Extract F2L pair, AUF, re-insert pair"},{name:"SuneOLL",desc:"Solving an OLL case using Sune variations"},{name:"TPS",desc:"Turns Per Second"},{name:"Triple-Sexy",desc:"(R U R' U') (R U R' U') (R U R' U')"},{name:"VHLS",desc:"Vandenbergh-Harris Last Slot"}];function replaceAbbr(e){for(var b=0;b<abbrs.length;b++){var d="["+abbrs[b].name+"]";while(e.indexOf(d)>=0){var c='<abbr class="dotted" title="'+abbrs[b].desc+'">'+abbrs[b].name+"</abbr>";e=e.replace(d,c)}var a="["+abbrs[b].name.toLowerCase()+"]";while(e.indexOf(a)>=0){var c='<abbr class="dotted" title="'+abbrs[b].desc+'">'+abbrs[b].name.toLowerCase()+"</abbr>";e=e.replace(a,c)}}return e};function header(){var a="";if(getViewportWidth()<PHONE_LANDSCAPE&&getViewportWidth()<getViewportHeight()){a='<p class="alert">Best viewed in landscape (horizontal) orientation</p>'}return a}function footer(){return'<div id="tooltip"></div>'}const TABLET_LANDSCAPE=960;const TABLET_PORTRAIT=600;const PHONE_LANDSCAPE=480;const PHONE_PORTRAIT=320;function getViewportWidth(){return document.documentElement.clientWidth}function getViewportHeight(){return document.documentElement.clientHeight}var caseIds=[];function getCaseIds(){if(caseIds.length==0){for(var b=0;b<algSet.cases.length;b++){var a=algSet.cases[b];caseIds.push(a.id)}}return caseIds}function initAbbrTouch(){abbrTouch(document.querySelector("#view"),function(e,f,b,a){var d=document.querySelector("#tooltip");d.innerHTML=f;d.style.left=((b-d.clientWidth/2)>window.pageXOffset?(b-d.clientWidth/2):window.pageXOffset)+"px";d.style.top=((a-50)>window.pageYOffset?(a-50):window.pageYOffset)+"px";var c=(new Date()).getTime();d.setAttribute("data-timestamp",c);document.body.appendChild(d);setTimeout(function(){if(d.getAttribute("data-timestamp")==c){d.removeAttribute("data-timestamp")}},3000)},true)}var lastFragment="n/a";var lastViewportWidth=getViewportWidth();function processHash(){var c=getViewportWidth();var d=window.location.hash.substring(1);if(d!=lastFragment||c!=lastViewportWidth){var e=d.split("_");var b=e[0];var a=e[1];if(b=="case"){renderCase(a,c)}else{renderView(b,c)}lastFragment=d;lastViewportWidth=c;initAbbrTouch()}}function renderPage(){window.addEventListener("hashchange",processHash);window.addEventListener("resize",processHash);window.addEventListener("popstate",function(a){if(a.state!=null){if(a.state.hash!=""){window.location.hash=a.state.hash}processHash();setTimeout(function(){window.scrollTo(a.state.xOffset,a.state.yOffset)},1)}else{processHash()}});processHash()}function storeWindowOffset(){try{var c={hash:window.location.hash,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var d=document.title;var a=window.location.href;history.replaceState(c,d,a)}catch(b){}}window.addEventListener("load",renderPage);function renderGridHeaderRow(a,b){var c="";c+="<thead>";c+="<tr>";c+="<th></th>";for(var d=0;d<a.headers.length;d++){var e=a.headers[d];c+="<th>"+e+"</th>"}c+="</tr>";c+="</thead>";return c}function renderGridDataRows(i,e){var d="";var g=e>=TABLET_LANDSCAPE?"96":"64";var c=getCaseIds();d+="<tbody>";for(var b=0;b<i.rows.length;b++){var h=i.rows[b];d+="<tr>";d+='<th class="name">'+h.name+"</th>";for(var a=0;a<h.cases.length;a++){d+="<td>";if(h.cases[a]!=null){var f=algSet.cases[c.indexOf(h.cases[a])];if(f!=null){var j=algSet.header.id+" "+f.id;if(f.name!=f.id){j+=" - "+f.name}d+='<abbr title="'+j+'"><i class="clicky s'+g+"-"+algSet.header.id.toLowerCase()+" s"+g+"-"+f.image.toLowerCase()+'" onclick="switchCase(\''+f.id+"')\"/></abbr>"}}d+="</td>"}d+="</tr>"}d+="</tbody>";return d}function renderTableHeaderRow(a,b){var c="";c+="<thead>";c+="<tr>";if(b>=PHONE_LANDSCAPE){c+='<th class="id"></th>'}c+="<th></th>";for(var d in a.uses){for(var f=0;f<algSet.header.uses.length;f++){var e=algSet.header.uses[f];if(e.id==a.uses[d]){c+='<th class="alg">'+e.name+"</th>"}if(b<TABLET_LANDSCAPE){break}}}if(b>=PHONE_LANDSCAPE){c+='<th class="prob">P</th>'}c+="</tr>";c+="</thead>";return c}function renderViewAlg(d,a){var b="";if(a>=TABLET_LANDSCAPE){b+=d.alg+"<br/>"}else{b+=d.alg+" <sup>";for(var c=0;c<d.uses.length;c++){if(c>0){b+=", "}b+=d.uses[c]}b+="</sup><br/>"}return b}function renderTableDataCell(j,a,i){var g="";var d=[];var b=0;var c=i>=PHONE_LANDSCAPE?4:2;for(var f=0;f<j.algs.length&&b<c;f++){var l=j.algs[f];if(l.status==1){for(var e=0;e<l.uses.length;e++){if(a==null||l.uses[e]==a){if(i>=PHONE_LANDSCAPE||d.indexOf(l.uses[e])<0){g+=renderViewAlg(l,i);d=d.concat(l.uses);b++;break}}}}if(l.hasOwnProperty("vars")){for(var k=0;k<l.vars.length&&b<c;k++){var h=l.vars[k];if(h.status==1){for(var e=0;e<h.uses.length;e++){if(a==null||h.uses[e]==a){if(i>=PHONE_LANDSCAPE||d.indexOf(h.uses[e])<0){g+=renderViewAlg(h,i);d=d.concat(h.uses);b++;break}}}}}}}if(g==""){g+="Missing case "+j.id+" for "+a}return g}function renderTableDataRows(i,e,f){var d="";var h=f>=PHONE_LANDSCAPE?"96":"64";var b=getCaseIds();d+="<tbody>";for(var a=0;a<e.cases.length;a++){if(e.cases[a]!=null){var g=algSet.cases[b.indexOf(e.cases[a])];if(g!=null){d+="<tr>";if(f>=PHONE_LANDSCAPE){d+="<td>"+g.id+"</td>"}var j=algSet.header.id+" "+g.id;if(g.name!=g.id){j+=" - "+g.name}d+='<td><abbr title="'+j+'"><i class="clicky s'+h+"-"+algSet.header.id.toLowerCase()+" s"+h+"-"+g.image.toLowerCase()+'" onclick="switchCase(\''+g.id+"')\"/></abbr></td>";if(f>=TABLET_LANDSCAPE){for(var c in i.uses){d+="<td>";d+=renderTableDataCell(g,i.uses[c],f);d+="</td>"}}else{d+="<td>";d+=renderTableDataCell(g,null,f);d+="</td>"}if(f>=PHONE_LANDSCAPE){d+='<td class="prob">'+g.prob+"</td>"}d+="</tr>"}}}d+="</tbody>";return d}function renderViewOptions(b,c){var e="";e+='<p>Select view: <select id="viewList" onChange="switchView()"></p>';for(var d=0;d<algSet.views.length;d++){var a=algSet.views[d];e+='<option value="'+a.id+'"';if(a.id==b){e+=" selected"}e+=">"+a.name+"</option>"}e+="</select>";return e}function renderViewLinks(a,b){var c="";var e=0;c+="<p>";for(var f=0;f<a.groups.length;f++){var d=a.groups[f];if(f>0&&e>0){c+=", "}if(d.name!=""){c+='<a href="#'+a.id+"_"+d.id+'">'+d.name+"</a>"}e+=d.name.length;if(a.groups.length>8&&e>110){c+="</p><p>";e=0}}c+="</p>";return c}function renderView(f,e){var b="";var i=false;for(var a=0;a<algSet.views.length;a++){if(algSet.views[a].id==f){i=true;break}}if(i==false){f=algSet.views[0].id}b+="<h1>"+algSet.header.name+" ("+algSet.header.id+")</h1>";b+=header();var c="<p>";if(f!="grid"){c+="This page lists the algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.</p><p>"}if(algSet.views.length>1){c+=" Use the dropdown below to switch views."}c+=" Click on an image for details about the case; e.g. algorithms, comments, breakdowns.</p>";b+=c;if(algSet.views.length>1){b+=renderViewOptions(f,e)}for(var a=0;a<algSet.views.length;a++){if(algSet.views[a].id==f){var h=algSet.views[a];if(h.name!=""){b+="<h2>"+h.name+"</h2>";document.title=algSet.header.id+" - "+h.name}if(h.hasOwnProperty("rows")){if(e<PHONE_LANDSCAPE){b+='<p class="alert">Rotate to view in landscape (horizontal) orientation</p>'}else{b+="<table>";b+=renderGridHeaderRow(h,e);b+=renderGridDataRows(h,e);b+="</table>"}}else{if(h.hasOwnProperty("groups")){b+=renderViewLinks(h,e);for(var g=0;g<h.groups.length;g++){var d=h.groups[g];b+='<a name="'+h.id+"_"+d.id+'" />';if(d.name!=""){b+="<h3>"+d.name+"</h3>"}if(d.desc){b+="<p>"+replaceAbbr(d.desc)+"</p>"}b+="<table>";b+=renderTableHeaderRow(h,e);b+=renderTableDataRows(h,d,e);b+="</table>"}}}i=true}}b+=footer();document.getElementById("view").innerHTML=b}function switchView(){storeWindowOffset();var c=document.getElementById("viewList");var a=c.options[c.selectedIndex].value;var g="#"+a;try{var f={hash:g,xOffset:window.pageXOffset,yOffset:window.pageYOffset};var h=algSet.header.id+" - "+c.options[c.selectedIndex].text;var b=g;history.pushState(f,h,b);processHash()}catch(d){window.location.hash=g}};function renderCaseAlg(g,f,h,b){var c="";var a="";if(g.uses.length>0){a+=" <sup>";for(var d=0;d<g.uses.length;d++){if(d>0){a+=", "}a+=g.uses[d]}a+="</sup>"}var e="";if(g.status<1||g.uses.length<1){e=" inactive"}if(b>=TABLET_LANDSCAPE){c+="<tr>";c+='<td class="'+f+e+'">'+g.alg+a+"</td>";c+='<td class="desc'+e+'">'+replaceAbbr(g.desc)+"</td>";c+="</tr>"}else{if(h){c+="<tr><td>&nbsp;</td></tr>"}c+='<tr><td class="'+f+e+'">'+g.alg+a+"</td></tr>";c+='<tr><td class="'+f+e+'"><em>'+replaceAbbr(g.desc)+"</em></td></tr>"}return c}function renderCaseAlgs(c,a){var b="";var d=1;for(var g=0;g<c.algs.length;g++){var e=c.algs[g];b+="<h3>Alg "+d+"</h3>";switch(e.status){case 0:b+='<p class="inactive">I don\'t use this algorithm yet.</p>';break;case -1:b+='<p class="inactive">I don\'t use this algorithm nowadays.</p>';break}b+="<table>";b+=renderCaseAlg(e,"alg",false,a);if(e.hasOwnProperty("vars")){for(var h=0;h<e.vars.length;h++){var f=e.vars[h];b+=renderCaseAlg(f,"var",true,a)}}b+="</table>";d++}return b}function renderCaseLinks(i,h){var d="";d+="<h3>Links</h3>";var f=i.wiki;var c=algSet.header.id;if(f!=""){if(i.wiki.indexOf("#")>=0){c=algSet.header.id}else{c=i.wiki}}var e=i.algdb;var l=algSet.header.id;if(e!=""){l=i.algdb}for(var b=0;f==""&&b<algSet.views.length;b++){var k=algSet.views[b];if(k.hasOwnProperty("groups")){for(var j=0;j<k.groups.length;j++){var g=k.groups[j];if(g.hasOwnProperty("wiki")){for(var a=0;a<g.cases.length;a++){if(g.cases.indexOf(i.id)>=0){f=g.wiki;if(g.wiki.indexOf("#")>=0){c=algSet.header.id}else{c=g.wiki}}}}}}}d+='<p>SpeedSolving Wiki: <a href="'+algSet.header.wiki+f+'" target="_blank">'+c+"</a><p>";d+='<p>AlgDb.Net: <a href="'+algSet.header.algdb+e+'" target="_blank">'+l+"</a><p>";return d}function renderCase(c,b){var d="";var f=b>=PHONE_LANDSCAPE?"128":"96";var a=getCaseIds();d+="<h1>"+algSet.header.id+" "+c+"</h1>";d+=header();if(a.indexOf(c)>=0){var e=algSet.cases[a.indexOf(c)];if(e.name!=c){d+="<h2>"+e.name+"</h2>"}document.title=algSet.header.id+" "+c;d+='<p><i class="s'+f+"-"+algSet.header.id.toLowerCase()+" s"+f+"-"+e.image.toLowerCase()+'"></i></p>';if(e.desc){d+="<p>"+replaceAbbr(e.desc)+"</p>"}d+="<p>Probability = "+e.prob+"</p>";d+=renderCaseAlgs(e,b);d+=renderCaseLinks(e,b)}else{d+="Missing case "+c}d+=footer();document.getElementById("view").innerHTML=d}function switchCase(a){storeWindowOffset();var f="#case_"+a;try{var d={hash:f,xOffset:0,yOffset:0};var g=algSet.header.id+" "+a;var b=f;history.pushState(d,g,b);processHash()}catch(c){window.location.hash=f}window.scrollTo(0,0)};