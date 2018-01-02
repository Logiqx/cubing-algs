menuItems=[{type:"h1",desc:"3x3x3"},{type:"h2",desc:"CFOP"},{type:"submenu",desc:"Beginner",items:[{type:"link",desc:"2AOLL",href:"2aoll.html"},{type:"link",desc:"2APLL",href:"2apll.html"}]},{type:"submenu",desc:"Improver",items:[{type:"link",desc:"4AOLL",href:"4aoll.html"},{type:"link",desc:"4APLL",href:"4apll.html"}]},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"2LOLL",href:"2loll.html"},{type:"link",desc:"2LPLL",href:"2lpll.html"}]},{type:"submenu",desc:"Advanced",items:[{type:"link",desc:"OLL",href:"oll.html"},{type:"link",desc:"COLL",href:"coll.html"},{type:"link",desc:"PLL",href:"pll.html"},{type:"link",desc:"PLL Recognition",href:"2spll.html"}]},{type:"h2",desc:"CFCE"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"2LCLL",href:"2lcll.html"},{type:"link",desc:"2LELL",href:"2lell.html"}]},{type:"h2",desc:"Roux"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"2LCLL",href:"2lcll.html"}]},{type:"h2",desc:"4LLL"},{type:"submenu",desc:"CO CP EO EP",items:[{type:"link",desc:"2LCLL",href:"2lcll.html"},{type:"link",desc:"2LELL",href:"2lell.html"}]},{type:"submenu",desc:"EO CO CP EP",items:[{type:"link",desc:"2LOLL",href:"2loll.html"},{type:"link",desc:"2LPLL",href:"2lpll.html"}]},{type:"submenu",desc:"EO CP CO EP",items:[{type:"link",desc:"2LCPEOLL",href:"2lcpeoll.html"},{type:"link",desc:"2L2GLL",href:"2l2gll.html"}]},{type:"submenu",desc:"EO EP CO CP",items:[{type:"link",desc:"2LLLEF",href:"2lllef.html"},{type:"link",desc:"2LL4C",href:"2ll4c.html"}]},{type:"h1",desc:"2x2x2"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"OLL",href:"poll.html"}]},{type:"h1",desc:"Big Cubes"},{type:"submenu",desc:"5x5x5",items:[{type:"link",desc:"L2E",href:"l2e.html"}]},{type:"h1",desc:"Pyraminx"},{type:"submenu",desc:"Intermediate",items:[{type:"link",desc:"L3E",href:"l3e.html"}]},{type:"submenu",desc:"Advanced",items:[{type:"link",desc:"L4E",href:"l4e.html"}]}];var initMenu=(function(){function a(){try{var b='<nav class="pushy pushy-left"><h1>Cube Algs</h1><ul>';for(var f=0;f<menuItems.length;f++){var d=menuItems[f];switch(d.type){case"h1":b+='<li class="pushy-h1">'+d.desc+"</li>";break;case"h2":b+='<li class="pushy-h2">'+d.desc+"</li>";break;case"submenu":b+='<li class="pushy-submenu"><span>'+d.desc+"</span><ul>";for(var c=0;c<d.items.length;c++){var g=d.items[c];switch(g.type){case"link":b+='<li class="pushy-link"><a href="'+g.href+'">'+g.desc+"</a></li>";break}}b+="</ul></li>";break}}b+="</ul></nav>";document.getElementById("navigation").innerHTML=b}catch(e){window.alert(e.message)}}return a})();