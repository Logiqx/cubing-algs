java -jar yuicompressor-2.4.8.jar css/common.css -o css/common-min.css
java -jar yuicompressor-2.4.8.jar css/2l2gll.css -o css/2l2gll-min.css
java -jar yuicompressor-2.4.8.jar css/2loll.css -o css/2loll-min.css
java -jar yuicompressor-2.4.8.jar css/2lpll.css -o css/2lpll-min.css
java -jar yuicompressor-2.4.8.jar css/coll.css -o css/coll-min.css
java -jar yuicompressor-2.4.8.jar css/oll.css -o css/oll-min.css
java -jar yuicompressor-2.4.8.jar css/pll.css -o css/pll-min.css

java -jar yuicompressor-2.4.8.jar js/touchtap-event.js -o js/touchtap-event-min.js
java -jar yuicompressor-2.4.8.jar js/abbr-touch.js -o js/abbr-touch-min.js
java -jar yuicompressor-2.4.8.jar js/abbr.js -o js/abbr-min.js
java -jar yuicompressor-2.4.8.jar js/lib.js -o js/lib-min.js
java -jar yuicompressor-2.4.8.jar js/view.js -o js/view-min.js
java -jar yuicompressor-2.4.8.jar js/case.js -o js/case-min.js

COPY / b js\touchtap-event-min.js+js\abbr-touch-min.js+js\abbr-min.js+js\lib-min.js+js\view-min.js+js\case-min.js js\common-min.js

java -jar yuicompressor-2.4.8.jar data/2aoll.js -o data/2aoll-min.js
java -jar yuicompressor-2.4.8.jar data/2apll.js -o data/2apll-min.js
java -jar yuicompressor-2.4.8.jar data/2l2gll.js -o data/2l2gll-min.js
java -jar yuicompressor-2.4.8.jar data/2loll.js -o data/2loll-min.js
java -jar yuicompressor-2.4.8.jar data/2lpll.js -o data/2lpll-min.js
java -jar yuicompressor-2.4.8.jar data/3apll.js -o data/3apll-min.js
java -jar yuicompressor-2.4.8.jar data/4aoll.js -o data/4aoll-min.js
java -jar yuicompressor-2.4.8.jar data/coll.js -o data/coll-min.js
java -jar yuicompressor-2.4.8.jar data/oll.js -o data/oll-min.js
java -jar yuicompressor-2.4.8.jar data/pll.js -o data/pll-min.js

PAUSE