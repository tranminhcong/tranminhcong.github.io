;(function(){
var msg = "I LOVE U";
var size = 20;
var circleY = 0.5; var circleX = 4;
var letter_spacing = 8;
var diameter = 10;
var rotation = 0.3;
var speed = 0.2;

////////////////////// Stop Editing //////////////////////

if (!window.addEventListener && !window.attachEvent || !document.createElement) return;

msg = msg.split('');
var n = msg.length - 1, a = Math.round(size * diameter * 0.208333), currStep = 20,
ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
o = document.createElement('div'), oi = document.createElement('div'),
b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,

mouse = function(e){
e = e || window.event;
ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position
xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position
},

makecircle = function(){ // rotation/positioning
if(init.nopy){
o.style.top = (b || document.body).scrollTop + 'px';
o.style.left = (b || document.body).scrollLeft + 'px';
};
currStep -= rotation;
for (var d, i = n; i > -1; --i){ // makes the circle
d = document.getElementById('iemsg' + i).style;
d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
};
},

drag = function(){ // makes the resistance
y[0] = Y[0] += (ymouse - Y[0]) * speed;
x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
for (var i = n; i > 0; --i){
y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
x[i] = X[i] += (x[i-1] - X[i]) * speed;
};
makecircle();
},

init = function(){ // appends message divs, & sets initial values for positioning arrays
if(!isNaN(window.pageYOffset)){
ymouse += window.pageYOffset;
xmouse += window.pageXOffset;
} else init.nopy = true;
for (var d, i = n; i > -1; --i){
d = document.createElement('div'); d.id = 'iemsg' + i;
d.style.height = d.style.width = a + 'px';
d.appendChild(document.createTextNode(msg[i]));
oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
};
o.appendChild(oi); document.body.appendChild(o);
setInterval(drag, 25);
},

ascroll = function(){
ymouse += window.pageYOffset;
xmouse += window.pageXOffset;
window.removeEventListener('scroll', ascroll, false);
};

o.id = 'outerCircleText'; o.style.fontSize = size + 'px';

if (window.addEventListener){
window.addEventListener('load', init, false);
document.addEventListener('mouseover', mouse, false);
document.addEventListener('mousemove', mouse, false);
if (/Apple/.test(navigator.vendor))
window.addEventListener('scroll', ascroll, false);
}
else if (window.attachEvent){
window.attachEvent('onload', init);
document.attachEvent('onmousemove', mouse);
};

})();


var pictureSrc ="https://tranminhcong.github.io/thiep/img/14.ico"; 
var pictureWidth = 15; //the width of the snowflakes
var pictureHeight = 15; //the height of the snowflakes
var numFlakes = 10; //the number of snowflakes
var downSpeed = 0.01; //the falling speed of snowflakes (portion of screen per 100 ms)
var lrFlakes = 10; //the speed that the snowflakes should swing from side to side


if( typeof( numFlakes ) != 'number' || Math.round( numFlakes ) != numFlakes || numFlakes < 1 ) { numFlakes = 10; }

//draw the snowflakes
for( var x = 0; x < numFlakes; x++ ) {
if( document.layers ) { //releave NS4 bug
document.write('<layer id="snFlkDiv'+x+'"><imgsrc="'+pictureSrc+'" height="'+pictureHeight+'"width="'+pictureWidth+'" alt="*" border="0"></layer>');
} else {
document.write('<div style="position:absolute; z-index:9999;"id="snFlkDiv'+x+'"><img src="'+pictureSrc+'"height="'+pictureHeight+'" width="'+pictureWidth+'" alt="*"border="0"></div>');
}
}

//calculate initial positions (in portions of browser window size)
var xcoords = new Array(), ycoords = new Array(), snFlkTemp;
for( var x = 0; x < numFlakes; x++ ) {
xcoords[x] = ( x + 1 ) / ( numFlakes + 1 );
do { snFlkTemp = Math.round( ( numFlakes - 1 ) * Math.random() );
} while( typeof( ycoords[snFlkTemp] ) == 'number' );
ycoords[snFlkTemp] = x / numFlakes;
}

//now animate
function flakeFall() {
if( !getRefToDivNest('snFlkDiv0') ) { return; }
var scrWidth = 0, scrHeight = 0, scrollHeight = 0, scrollWidth = 0;
//find screen settings for all variations. doing this every time allows for resizing and scrolling
if( typeof( window.innerWidth ) == 'number' ) { scrWidth = window.innerWidth; scrHeight = window.innerHeight; } else {
if( document.documentElement && (document.documentElement.clientWidth ||document.documentElement.clientHeight ) ) {
scrWidth = document.documentElement.clientWidth; scrHeight = document.documentElement.clientHeight; } else {
if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
scrWidth = document.body.clientWidth; scrHeight = document.body.clientHeight; } } }
if( typeof( window.pageYOffset ) == 'number' ) { scrollHeight = pageYOffset; scrollWidth = pageXOffset; } else {
if( document.body && ( document.body.scrollLeft ||document.body.scrollTop ) ) { scrollHeight = document.body.scrollTop;scrollWidth = document.body.scrollLeft; } else {
if(document.documentElement && (document.documentElement.scrollLeft ||document.documentElement.scrollTop ) ) { scrollHeight =document.documentElement.scrollTop; scrollWidth =document.documentElement.scrollLeft; } }
}
//move the snowflakes to their new position
for( var x = 0; x < numFlakes; x++ ) {
if( ycoords[x] * scrHeight > scrHeight - pictureHeight ) { ycoords[x] = 0; }
var divRef = getRefToDivNest('snFlkDiv'+x); if( !divRef ) { return; }
if( divRef.style ) { divRef = divRef.style; } var oPix = document.childNodes ? 'px' : 0;
divRef.top = ( Math.round( ycoords[x] * scrHeight ) + scrollHeight ) + oPix;
divRef.left = ( Math.round( ( ( xcoords[x] * scrWidth ) - (pictureWidth / 2 ) ) + ( ( scrWidth / ( ( numFlakes + 1 ) * 4 ) ) * (Math.sin( lrFlakes * ycoords[x] ) - Math.sin( 3 * lrFlakes * ycoords[x]) ) ) ) + scrollWidth ) + oPix;
ycoords[x] += downSpeed;
}
}

//DHTML handlers
function getRefToDivNest(divName) {
if( document.layers ) { return document.layers[divName]; } //NS4
if( document[divName] ) { return document[divName]; } //NS4 also
if( document.getElementById ) { return document.getElementById(divName); } //DOM (IE5+, NS6+, Mozilla0.9+, Opera)
if( document.all ) { return document.all[divName]; } //Proprietary DOM - IE4
return false;
}

window.setInterval('flakeFall();',100);
 