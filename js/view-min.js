function renderGridHeaderRow(a,c){var b="";b+="<thead>";b+="<tr>";b+="<th></th>";for(var d=0;d<a.headers.length;d++){var e=a.headers[d];b+="<th>"+e+"</th>"}b+="</tr>";b+="</thead>";return b}function renderGridDataRows(k,c){var f="";var i=c>=IPAD_LANDSCAPE?"96":"64";var e=getCaseIds();f+="<tbody>";for(var b=0;b<k.rows.length;b++){var j=k.rows[b];if(j!=null){f+="<tr>";f+='<th class="name">'+j.name+"</th>";for(var a=0;a<j.cases.length;a++){f+="<td>";var d=j.cases[a];if(d!=null){var h=algSet.cases[e.indexOf(d)];if(h!=null){var l=algSet.header.id+" "+h.id;if(h.name!=h.id){l+=" - "+h.name}var g=algSet.header.hasOwnProperty("css")?algSet.header.css:algSet.header.id;f+='<abbr title="'+l+'"><i class="clicky s'+i+"-"+g.toLowerCase()+" s"+i+"-"+h.image.toLowerCase()+'" onclick="switchCase(\''+h.id+"')\"><br/></i></abbr>"}}f+="</td>"}f+="</tr>"}}f+="</tbody>";return f}function renderViewAlg(d,c){var b="";var a=getUses(d);if(a.length>0){a=" <sup>"+a+"</sup>"}b+=d.alg+a;b+="<br/>";return b}function renderTableDataCell(j,a,c){var h="";var e=[];var b=0;var d=c>=IPHONE_LANDSCAPE?4:2;for(var g=0;g<j.algs.length&&b<d;g++){var l=j.algs[g];if(l!=null){if(l.status==1){for(var f=0;f<l.uses.length;f++){if(a==null||l.uses[f]==a){if(c>=IPHONE_LANDSCAPE||e.indexOf(l.uses[f])<0){h+=renderViewAlg(l,c);e=e.concat(l.uses);b++;break}}}}if(l.hasOwnProperty("vars")){for(var k=0;k<l.vars.length&&b<d;k++){var i=l.vars[k];if(i!=null){if(i.status==1){for(var f=0;f<i.uses.length;f++){if(a==null||i.uses[f]==a){if(c>=IPHONE_LANDSCAPE||e.indexOf(i.uses[f])<0){h+=renderViewAlg(i,c);e=e.concat(i.uses);b++;break}}}}}}}}}if(h==""){h+="Missing case "+j.id+" for "+a}return h}function renderTableDataRows(k,h,b){var f="";var j=b>=IPHONE_LANDSCAPE?"96":"64";var d=getCaseIds();f+="<tbody>";for(var a=0;a<h.cases.length;a++){var c=h.cases[a];if(c!=null){var i=algSet.cases[d.indexOf(c)];if(i!=null){f+="<tr>";if(b>=IPHONE_LANDSCAPE){f+='<td class="id">'+i.id+"</td>"}var l=algSet.header.id+" "+i.id;if(i.name!=i.id){l+=" - "+i.name}var g=algSet.header.hasOwnProperty("css")?algSet.header.css:algSet.header.id;f+='<td><abbr title="'+l+'"><i class="clicky s'+j+"-"+g.toLowerCase()+" s"+j+"-"+i.image.toLowerCase()+'" onclick="switchCase(\''+i.id+"')\"><br/></i></abbr></td>";if(b>=IPAD_LANDSCAPE){for(var e in algSet.header.uses){f+='<td class="alg">';f+=renderTableDataCell(i,algSet.header.uses[e].id,b);f+="</td>"}}else{f+='<td class="alg">';f+=renderTableDataCell(i,null,b);f+="</td>"}if(b>=IPHONE_LANDSCAPE){f+='<td class="prob">'+i.prob+"</td>"}f+="</tr>"}}}f+="</tbody>";return f}function renderViewOptions(b,e){var d="";d+='<p>Select view: <select id="viewList" onChange="switchView()"></p>';for(var c=0;c<algSet.views.length;c++){var a=algSet.views[c];if(a!=null){d+='<option value="'+a.id+'"';if(a.id==b){d+=" selected"}d+=">"+a.name+"</option>"}}d+="</select>";return d}function renderViewLinks(a,c){var b="";var e=0;b+="<p>";for(var f=0;f<a.groups.length;f++){var d=a.groups[f];if(d!=null){if(f>0&&e>0){b+=", "}if(d.name!=""){b+='<a href="#'+a.id+"_"+d.id+'">'+d.name+"</a>"}e+=d.name.length;if(a.groups.length>8&&e>110){b+="</p><p>";e=0}}}b+="</p>";return b}function renderView(f,a){var c="";var i=false;for(var b=0;b<algSet.views.length;b++){var h=algSet.views[b];if(h!=null){if(h.id==f){i=true;break}}}if(i==false){f=algSet.views[0].id}c+="<h1>"+algSet.header.name+" ("+algSet.header.id+")</h1>";c+=header(IPHONE_LANDSCAPE);var d="<p>";if(f!="grid"){if(algSet.header.hasOwnProperty("level")){switch(algSet.header.level.toLowerCase()){case"beginner":d+="This page lists the algorithms that I teach to beginners. The algorithms have all been chosen for their simplicity and ease of learning.</p><p>";break;case"improver":d+="This page lists the algorithms that I teach to improvers. It includes all of the beginner algorithms and some [inverse] algorithms.</p><p>";break;case"intermediate":d+="This page lists the algorithms that I teach to intermediates. They are good algorithms and have been chosen for their execution speed.</p><p>";break;default:d+="This page lists the algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.</p><p>";break}}else{d+="This page lists the algorithms that I use during actual solves. They are good algorithms and have been chosen for their execution speed.</p><p>"}}if(algSet.views.length>1){d+=" Use the dropdown below to switch views."}d+=" Click on an image for details about the case; e.g. algorithms, comments, breakdowns.</p>";c+=replaceAbbr(d);if(algSet.views.length>1){c+=renderViewOptions(f,a)}for(var b=0;b<algSet.views.length;b++){var h=algSet.views[b];if(h!=null){if(h.id==f){if(h.name!=""){c+="<h2>"+h.name+"</h2>";document.title=algSet.header.id}if(h.hasOwnProperty("rows")){if(a<GALAXY_S3_LANDSCAPE){if(getViewportHeight()>=GALAXY_S3_LANDSCAPE){c+='<p class="alert">Rotate to view in landscape (horizontal) orientation</p>'}else{c+='<p class="alert">Sorry. Your display is too small for the grid view!</p>'}}else{c+="<table>";c+=renderGridHeaderRow(h,a);c+=renderGridDataRows(h,a);c+="</table>"}}else{if(h.hasOwnProperty("groups")){if(a>=IPAD_LANDSCAPE){c+=renderViewLinks(h,a)}for(var g=0;g<h.groups.length;g++){var e=h.groups[g];if(e!=null){c+='<a name="'+h.id+"_"+e.id+'" />';if(e.name!=""){c+="<h3>"+e.name+"</h3>"}if(e.desc){c+="<p>"+replaceAbbr(e.desc)+"</p>"}c+="<table>";c+=renderTableDataRows(h,e,a);c+="</table>"}}}}i=true}}}c+=footer();document.getElementById("view").innerHTML=c};