(function(){var g;var h;var i;var e={x:-1,y:-1};var b={x:-1,y:-1};function a(l){if(l.originalEvent&&l.originalEvent.targetTouches){return l.originalEvent.targetTouches[0]}if(l.targetTouches){return l.targetTouches[0]}return l}function c(m,l){return Math.abs(m-l)<2}function f(m){var l=a(m);e.x=l.pageX;e.y=l.pageY;b.x=l.pageX;b.y=l.pageY;h=true;if(i){clearTimeout(i)}i=setTimeout(function(){h=false},200)}function j(l){if(h&&c(e.x,b.x)&&c(e.y,b.y)){g.customData={touchX:b.x,touchY:b.y};l.target.dispatchEvent(g)}}function d(m){var l=a(m);b.x=l.pageX;b.y=l.pageY}function k(){g=document.createEvent("CustomEvent");g.initEvent("touchtap",true,true);document.addEventListener("touchstart",f);document.addEventListener("touchend",j);document.addEventListener("touchcancel",j);document.addEventListener("touchmove",d)}k()})();