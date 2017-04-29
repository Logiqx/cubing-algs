java -jar yuicompressor-2.4.8.jar css/normalize.css -o css/normalize-min.css
java -jar yuicompressor-2.4.8.jar css/pushy.css -o css/pushy-min.css
java -jar yuicompressor-2.4.8.jar css/main.css -o css/main-min.css
java -jar yuicompressor-2.4.8.jar css/2l2gll.css -o css/2l2gll-min.css
java -jar yuicompressor-2.4.8.jar css/2lcll.css -o css/2lcll-min.css
java -jar yuicompressor-2.4.8.jar css/2lcpeoll.css -o css/2lcpeoll-min.css
java -jar yuicompressor-2.4.8.jar css/2lell.css -o css/2lell-min.css
java -jar yuicompressor-2.4.8.jar css/2ll4c.css -o css/2ll4c-min.css
java -jar yuicompressor-2.4.8.jar css/2lllef.css -o css/2lllef-min.css
java -jar yuicompressor-2.4.8.jar css/2loll.css -o css/2loll-min.css
java -jar yuicompressor-2.4.8.jar css/2lpll.css -o css/2lpll-min.css
java -jar yuicompressor-2.4.8.jar css/2spll.css -o css/2spll-min.css
java -jar yuicompressor-2.4.8.jar css/coll.css -o css/coll-min.css
java -jar yuicompressor-2.4.8.jar css/l2e.css -o css/l2e-min.css
java -jar yuicompressor-2.4.8.jar css/oll.css -o css/oll-min.css
java -jar yuicompressor-2.4.8.jar css/pll.css -o css/pll-min.css

COPY /b css\normalize-min.css+css\pushy-min.css+css\main-min.css css\common-min.css

java -jar yuicompressor-2.4.8.jar js/menu.js -o js/menu-min.js
java -jar yuicompressor-2.4.8.jar js/pushy.js -o js/pushy-min.js
java -jar yuicompressor-2.4.8.jar js/touchtap-event.js -o js/touchtap-event-min.js
java -jar yuicompressor-2.4.8.jar js/abbr-touch.js -o js/abbr-touch-min.js
java -jar yuicompressor-2.4.8.jar js/abbr.js -o js/abbr-min.js
java -jar yuicompressor-2.4.8.jar js/lib.js -o js/lib-min.js
java -jar yuicompressor-2.4.8.jar js/view.js -o js/view-min.js
java -jar yuicompressor-2.4.8.jar js/case.js -o js/case-min.js

COPY /b js\menu-min.js+js\pushy-min.js+js\touchtap-event-min.js+js\abbr-touch-min.js+js\abbr-min.js+js\lib-min.js+js\view-min.js+js\case-min.js js\common-min.js

java -jar yuicompressor-2.4.8.jar data/2aoll.js -o data/2aoll-min.js
java -jar yuicompressor-2.4.8.jar data/2apll.js -o data/2apll-min.js
java -jar yuicompressor-2.4.8.jar data/2l2gll.js -o data/2l2gll-min.js
java -jar yuicompressor-2.4.8.jar data/2loll.js -o data/2loll-min.js
java -jar yuicompressor-2.4.8.jar data/2lcpeoll.js -o data/2lcpeoll-min.js
java -jar yuicompressor-2.4.8.jar data/2lcll.js -o data/2lcll-min.js
java -jar yuicompressor-2.4.8.jar data/2lell.js -o data/2lell-min.js
java -jar yuicompressor-2.4.8.jar data/2ll4c.js -o data/2ll4c-min.js
java -jar yuicompressor-2.4.8.jar data/2lllef.js -o data/2lllef-min.js
java -jar yuicompressor-2.4.8.jar data/2lpll.js -o data/2lpll-min.js
java -jar yuicompressor-2.4.8.jar data/2spll.js -o data/2spll-min.js
java -jar yuicompressor-2.4.8.jar data/4aoll.js -o data/4aoll-min.js
java -jar yuicompressor-2.4.8.jar data/4apll.js -o data/4apll-min.js
java -jar yuicompressor-2.4.8.jar data/coll.js -o data/coll-min.js
java -jar yuicompressor-2.4.8.jar data/l2e.js -o data/l2e-min.js
java -jar yuicompressor-2.4.8.jar data/oll.js -o data/oll-min.js
java -jar yuicompressor-2.4.8.jar data/pll.js -o data/pll-min.js

java -jar yuicompressor-2.4.8.jar data/index.js -o data/index-min.js

PAUSE