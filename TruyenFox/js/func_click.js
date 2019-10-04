function impressionTrackingYomedia(){
	console.log("impressionTrackingYomedia");
}
function clickTrackingYomedia(){
	console.log("clickTrackingYomedia");
	parent.postMessage("clickTrackingYomedia_"+pid+"();", "*");
	var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if (isMac||isFirefox) {
		var click_tag = getURLParameter('clk');
		if (click_tag !== null && click_tag.length > 0){
	     var date = new Date();
	     var time = date.getTime();
	     click_tag = click_tag.replace('[timestamp]', time);
	     click_tag = click_tag.replace(encodeURIComponent('[timestamp]'), time);
	     window.open(click_tag);
	    }
	}
}
function closeYoMediaPopupAd(){
	console.log("closeYoMediaPopupAd");
	parent.postMessage("closeYoMediaPopupAd_"+pid+"();", "*");
}
function minYoMediaPopupAd(){
	console.log("minYoMediaPopupAd");
	parent.postMessage("minYoMediaPopupAd_"+pid+"();", "*");
}
function setYoMediaPre(){
	console.log("setYoMediaPre");
	parent.postMessage("setYoMediaPre_"+pid+"();", "*");
}
function setYoMediaExpand(){
	console.log("setYoMediaExpand");
	parent.postMessage("setYoMediaExpand_"+pid+"();", "*");
}

function firstQuartileYomediaVideo(){
	console.log("firstQuartileYomediaVideo");
	parent.postMessage("firstQuartileTrackingYomedia_"+pid+"();", "*");
}
function midpointYomediaVideo(){
	console.log("midpointYomediaVideo");
	parent.postMessage("midpointTrackingYomedia_"+pid+"();", "*");
}
function thirdQuartileYomediaVideo(){
	console.log("thirdQuartileYomediaVideo_");
	parent.postMessage("thirdQuartileTrackingYomedia_"+pid+"();", "*");
}
function startYomediaVideo(){
	if(isStartVideo==false){
		console.log("startYomediaVideo");
		parent.postMessage("startTrackingYomedia_"+pid+"();", "*");
		isStartVideo=true;
	}
}
function completeYomediaVideo(){
	console.log("completeYomediaVideo");
	parent.postMessage("completeTrackingYomedia_"+pid+"();", "*");
}
var isStartVideo=false;

var fnext=-1;
var videoUrl="tvc.mp4";
var lVideo;
var _global={};
_global.subExpanded=false;
_global.engaged = false;
_global.callEngage = function ()
{
    if (!_global.engaged)
    {
        //innity.call("sendEngage", 0);
        _global.engaged = true;
    } // end if
};