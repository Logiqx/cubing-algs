/*! Pushy - v1.0.0 - 2016-3-1
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */
;var pushy;try{pushy=(function(g){var z=g(".pushy"),k=g("body"),n=g("#container"),j=g(".push"),f="pushy-left",o="pushy-open-left",t="pushy-open-right",r=g(".site-overlay"),v=g(".menu-btn, .pushy-link"),d=200,a=z.width()+"px",c=".pushy-submenu",q="pushy-submenu-open",y="pushy-submenu-closed",l=g(c);function e(){if(z.hasClass(f)){k.toggleClass(o)}else{k.toggleClass(t)}}function p(){if(z.hasClass(f)){k.addClass(o);z.animate({left:"0px"},d);n.animate({left:a},d);j.animate({left:a},d)}else{k.addClass(t);z.animate({right:"0px"},d);n.animate({right:a},d);j.animate({right:a},d)}}function b(){if(z.hasClass(f)){k.removeClass(o);z.animate({left:"-"+a},d);n.animate({left:"0px"},d);j.animate({left:"0px"},d)}else{k.removeClass(t);z.animate({right:"-"+a},d);n.animate({right:"0px"},d);j.animate({right:"0px"},d)}}function m(){g(c).addClass(y);g(c).on("click",function(){var B=g(this);if(B.hasClass(y)){g(c).addClass(y).removeClass(q);B.removeClass(y).addClass(q)}else{B.addClass(y).removeClass(q)}})}function h(){g(c).addClass(y);l.children("span").on("click",function(B){B.preventDefault();g(this).toggleClass(q).next(".pushy-submenu ul").slideToggle(200).end().parent(c).siblings(c).children("span").removeClass(q).next(".pushy-submenu ul").slideUp(200)})}function i(){var E=document.createElement("p"),B=false,D={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(E,null);for(var C in D){if(E.style[C]!==undefined){E.style[C]="translate3d(1px,1px,1px)";B=window.getComputedStyle(E).getPropertyValue(D[C])}}document.body.removeChild(E);return(B!==undefined&&B.length>0&&B!=="none")}var w=false;function s(){z=g(".pushy");k=g("body");n=g("#container");j=g(".push");f="pushy-left";o="pushy-open-left";t="pushy-open-right";r=g(".site-overlay");v=g(".menu-btn, .pushy-link");d=200;a=z.width()+"px";c=".pushy-submenu";q="pushy-submenu-open";y="pushy-submenu-closed";l=g(c);if(i()){z.css({visibility:"visible"});m();v.on("click",function(){e()});r.on("click",function(){e()})}else{k.addClass("no-csstransforms3d");if(z.hasClass(f)){z.css({left:"-"+a})}else{z.css({right:"-"+a})}z.css({visibility:"visible"});n.css({"overflow-x":"hidden"});h();v.on("click",function(){if(w){b();w=false}else{p();w=true}});r.on("click",function(){if(w){b();w=false}else{p();w=true}})}}function x(){v=g(".menu-btn, .pushy-link");try{if(i()){v.on("click",function(){e()})}else{v.on("click",function(){if(w){b();w=false}else{p();w=true}})}}catch(B){}}var A=0;function u(){if(A==0){s()}else{x()}A++}return u}(jQuery))}catch(err){};