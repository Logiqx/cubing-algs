function getDisplayName(a){var d=a.id;var c=d.indexOf(".");var b="";if(c>=0){d=d.substr(0,c)}if(a.name.indexOf(d)<0){b+=d+" - "}b+=a.name;return b}function getTooltip(a){var b="";if(a.algdb.indexOf(algSet.header.id)>=0){b=algSet.header.id+" "}b+=getDisplayName(a);return b}function renderGridHeaderRow(a,c){var b="";b+="<thead>";b+="<tr>";b+="<th></th>";for(var d=0;d<a.headers.length;d++){var e=a.headers[d];b+="<th>"+e+"</th>"}b+="</tr>";b+="</thead>";return b}function renderGridDataRows(m,d){var h="";var g=m.rows[0].cases.length-1;var k=(g<=8&&d>=IPAD_LANDSCAPE)||(g<=6&&d>=IPAD_PORTRAIT)?"96":"64";var f=getCaseIds();h+="<tbody>";for(var c=0;c<m.rows.length;c++){var l=m.rows[c];if(l!=null){h+="<tr>";h+='<th class="name">'+l.name+"</th>";for(var a=0;a<l.cases.length;a++){h+="<td>";var e=l.cases[a];if(e!=null){var j=algSet.cases[f.indexOf(e)];if(j!=null){var i=algSet.header.hasOwnProperty("css")?algSet.header.css:algSet.header.id;var b=j.style!=null?j.style:"";h+='<abbr title="'+getTooltip(j)+'"><i class="clicky '+b+" s"+k+"-"+i.toLowerCase()+" s"+k+"-"+j.image.toLowerCase()+'" onclick="switchCase(\''+j.id+"')\"><br/></i></abbr>"}}h+="</td>"}h+="</tr>"}}h+="</tbody>";return h}function renderViewAlg(d,c){var b="";var a=getUses(d);if(a.length>0){a=" <sup>"+a+"</sup>"}b+=d.alg+a;b+="<br/>";return b}function renderTableDataCell(i,b){var f="";var h={};var a=0;var c=b>=IPHONE_LANDSCAPE?4:2;f+='<span class="clicky" onclick="switchCase(\''+i.id+"')\">"+getDisplayName(i);f+="</span>";f+=" - "+i.prob;f+="<br/>";for(var e=0;e<algSet.header.uses.length;e++){useId=algSet.header.uses[e].id;h[useId]=0}for(var d=0;d<i.algs.length&&a<c;d++){var l=i.algs[d];if(l!=null){if(l.status==1){var k=false;for(var e=0;e<l.uses.length;e++){if(h[l.uses[e]]<c){k=true;h[l.uses[e]]+=algSet.header.uses.length/l.uses.length}}if(k==true){f+=renderViewAlg(l,b);a++}}if(l.hasOwnProperty("vars")){for(var j=0;j<l.vars.length&&a<c;j++){var g=l.vars[j];if(g!=null){if(g.status==1){var k=false;for(var e=0;e<g.uses.length;e++){if(h[g.uses[e]]<c){k=true;h[g.uses[e]]+=algSet.header.uses.length/g.uses.length}}if(k==true){f+=renderViewAlg(g,b);a++}}}}}}}if(f==""){f+="Missing case "+i.id}return f}function renderTableDataRows(m,j,c){var g="";var l=c>=IPHONE_LANDSCAPE?"96":"64";var f=c>=IPAD_LANDSCAPE?Math.floor(c/512):1;var h=0;var e=getCaseIds();g+="<tbody>";for(var a=0;a<j.cases.length;a++){var d=j.cases[a];if(d!=null){var k=algSet.cases[e.indexOf(d)];if(k!=null){if(h==0){g+="<tr>"}var i=algSet.header.hasOwnProperty("css")?algSet.header.css:algSet.header.id;var b=k.style!=null?k.style:"";g+='<td><abbr title="'+getTooltip(k)+'"><i class="clicky '+b+" s"+l+"-"+i.toLowerCase()+" s"+l+"-"+k.image.toLowerCase()+'" onclick="switchCase(\''+k.id+"')\"><br/></i></abbr></td>";g+='<td class="alg">';g+=renderTableDataCell(k,c);g+="</td>";h++;if(h==f){g+="</tr>";h=0}}}}if(h>0){g+="</tr>"}g+="</tbody>";return g}function renderViewOptions(b,e){var d="";d+='<p>Select view: <select id="viewList" onChange="switchView()"></p>';for(var c=0;c<algSet.views.length;c++){var a=algSet.views[c];if(a!=null){d+='<option value="'+a.id+'"';if(a.id==b){d+=" selected"}d+=">"+a.name+"</option>"}}d+="</select>";return d}function renderViewLinks(a,c){var b="";var e=0;b+="<p>";for(var f=0;f<a.groups.length;f++){var d=a.groups[f];if(d!=null){if(f>0&&e>0){b+=" | "}if(d.name!=""){b+='<a class="clicky" href="#'+a.id+"-"+d.id+'">'+d.name+"</a>"}e+=d.name.length;if(a.groups.length>8&&e>110){b+="</p><p>";e=0}}}b+="</p>";return b}function renderContents(){var a="";a+='<a class="clicky" href="https://youtu.be/kETStPTH3tE"><img class="contents" src="../img/mikegeorge.jpg"/></a>';for(var d=0;d<menuItems.length;d++){var c=menuItems[d];switch(c.type){case"h1":a+="<hr/>";a+="<h2>"+c.desc+"</h2>";break;case"h2":a+="<h3>"+c.desc+"</h3>";break;case"submenu":a+="<p>"+c.desc+" - ";for(var b=0;b<c.items.length;b++){var e=c.items[b];switch(e.type){case"link":if(b>0){a+=" + "}a+='<a class="clicky" href="'+e.href+'">'+e.desc+"</a>";break}}a+="</p>";break}}return a}function renderView(f,a){var c="";var i=false;for(var b=0;b<algSet.views.length;b++){var h=algSet.views[b];if(h!=null){if(h.id==f){i=true;break}}}if(i==false){f=algSet.views[0].id}var e=algSet.header.name;if(algSet.header.name.indexOf(algSet.header.id)<0){e+=" ("+algSet.header.id+")"}c+='<h1><span class="menu-btn">&#9776;</span> '+e+"</h1>";for(var b=0;b<algSet.views.length;b++){var h=algSet.views[b];if(h!=null){if(h.id==f){if(h.name!=""){c+="<h2>"+h.name+"</h2>";document.title=algSet.header.id}if(h.hasOwnProperty("rows")&&a<GALAXY_S3_LANDSCAPE){if(getViewportHeight()>=GALAXY_S3_LANDSCAPE-128){c+='<p class="alert">Rotate to landscape (horizontal) for the grid view.</p>'}else{c+='<p class="alert">Sorry. Your display is too small for the grid view!</p>'}}else{c+=header(IPHONE_LANDSCAPE);if(algSet.header.hasOwnProperty("desc")){c+="<p>"+replaceAbbr(algSet.header.desc)+"</p>"}if(h.hasOwnProperty("desc")){c+="<p>"+replaceAbbr(h.desc)+"</p>"}if(algSet.cases.length>0){c+="<p> Click on an <strong>image</strong> or <strong>name</strong> for details about the case; e.g. algorithms, comments, breakdowns.</p>"}}if(algSet.views.length>1){c+="<p> Use the <strong>dropdown</strong> to switch between views.</p>";c+=renderViewOptions(f,a)}if(h.hasOwnProperty("rows")){if(a>=GALAXY_S3_LANDSCAPE){c+="<table>";c+=renderGridHeaderRow(h,a);c+=renderGridDataRows(h,a);c+="</table>"}}else{if(h.hasOwnProperty("groups")){if(a>=1000){c+="<h2>Shortcuts</h2>";c+=renderViewLinks(h,a)}for(var g=0;g<h.groups.length;g++){var d=h.groups[g];if(d!=null){c+='<a id="'+h.id+"-"+d.id+'" />';if(d.name!=""){c+="<h3>"+d.name+"</h3>"}if(d.desc){c+="<p>"+replaceAbbr(d.desc)+"</p>"}c+="<table>";c+=renderTableDataRows(h,d,a);c+="</table>"}}}}i=true}}}if(f=="contents"&&algSet.cases.length==0){c+=renderContents()}c+=footer();document.getElementById("container").innerHTML=c};