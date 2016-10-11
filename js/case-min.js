function renderCaseAlg(d,c,e){var a="";a+="<tr>";a+='<td class="'+c+'">'+d.alg+"</td>";if(e==false){a+='<td class="uses">';for(var b=0;b<d.uses.length;b++){if(b>0){a+=", "}a+=d.uses[b]}a+="</td>";a+='<td class="desc">'+replaceAbbr(d.desc)+"</td>"}a+="</tr>";return a}function renderCaseAlgs(b,g){var a="";var c=1;for(var f=0;f<b.algs.length;f++){var d=b.algs[f];a+="<h3>Alg "+c+"</h3>";switch(d.status){case 0:a+="<p>I don't use this algorithm yet.</p>";break;case -1:a+="<p>I don't use this algorithm nowadays.</p>";break}a+="<table>";a+=renderCaseAlg(d,"alg",g);if(d.hasOwnProperty("vars")){for(var h=0;h<d.vars.length;h++){var e=d.vars[h];a+=renderCaseAlg(e,"var",g)}}a+="</table>";c++}return a}function renderCaseLinks(h){var d="";d+="<h3>Links</h3>";var f=h.wiki;var c=algSet.header.id;if(f!=""){if(h.wiki.indexOf("#")>=0){c=algSet.header.id}else{c=h.wiki}}var e=h.algdb;var j=algSet.header.id;if(e!=""){j=h.algdb}for(var b=0;f==""&&b<algSet.views.length;b++){var k=algSet.views[b];if(k.hasOwnProperty("groups")){for(var i=0;i<k.groups.length;i++){var g=k.groups[i];if(g.hasOwnProperty("wiki")){for(var a=0;a<g.cases.length;a++){if(g.cases.indexOf(h.id)>=0){f=g.wiki;if(g.wiki.indexOf("#")>=0){c=algSet.header.id}else{c=g.wiki}}}}}}}d+='<p>SpeedSolving Wiki: <a href="'+algSet.header.wiki+f+'" target="_blank">'+c+"</a><p>";d+='<p>AlgDb.Net: <a href="'+algSet.header.algdb+e+'" target="_blank">'+j+"</a><p>";return d}function renderCase(b,f){var c="";var e=f==false?"128":"96";var a=getCaseIds();c+="<h1>"+algSet.header.id+" "+b+"</h1>";c+=important();if(a.indexOf(b)>=0){var d=algSet.cases[a.indexOf(b)];if(d.name!=b){c+="<h2>"+d.name+"</h2>"}document.title=algSet.header.id+" "+b;c+='<p><i class="s'+e+"-"+algSet.header.id.toLowerCase()+" s"+e+"-"+d.image.toLowerCase()+'"></i></p>';if(d.desc){c+="<p>"+replaceAbbr(d.desc)+"</p>"}c+="<p>Probability = "+d.prob+"</p>";c+=renderCaseAlgs(d,f);c+=renderCaseLinks(d)}else{c+="Missing case "+b}document.getElementById("view").innerHTML=c}function switchCase(a){storeWindowOffset();var f="#case_"+a;try{var d={hash:f,xOffset:0,yOffset:0};var g=algSet.header.id+" "+a;var b=f;history.pushState(d,g,b);processHash()}catch(c){window.location.hash=f}window.scrollTo(0,0)};