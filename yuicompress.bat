java -jar yuicompressor-2.4.8.jar css/main.css -o css/common-min.css
java -jar yuicompressor-2.4.8.jar css/coll.css -o css/coll-min.css

java -jar yuicompressor-2.4.8.jar js/abbr.js -o js/abbr-min.js
java -jar yuicompressor-2.4.8.jar js/lib.js -o js/lib-min.js
java -jar yuicompressor-2.4.8.jar js/view.js -o js/view-min.js
java -jar yuicompressor-2.4.8.jar js/case.js -o js/case-min.js

COPY / b js\abbr-min.js+js\lib-min.js+js\view-min.js+js\case-min.js js\common-min.js

java -jar yuicompressor-2.4.8.jar data/2l-2gll.js -o data/2l-2gll-min.js
java -jar yuicompressor-2.4.8.jar data/2l-oll.js -o data/2l-oll-min.js
java -jar yuicompressor-2.4.8.jar data/coll.js -o data/coll-min.js
java -jar yuicompressor-2.4.8.jar data/oll.js -o data/oll-min.js

PAUSE