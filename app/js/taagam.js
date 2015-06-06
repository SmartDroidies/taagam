// load I18N bundles
//document.addEventListener("deviceready", function(){
	//loadBundles('tn');
//});

$(document).ready(function() {
	loadBundles('tn');
});

function loadBundles(lang) {
	jQuery.i18n.properties({
		name:'Messages', 
		path:'bundle/', 
		mode:'both',
		language:lang, 
		callback: function() {
			updateLanguage();
		}
	});
}

function updateLanguage() {
	$(".i18n").each(function(i, element){
		if(element.tagName == "input")
			$(element).val(jQuery.i18n.prop(element.id));
		else
			$(element).html(jQuery.i18n.prop(element.id));
	});		
}

//Load AdMob Interstitial Ad
function showInterstitial(){
	admobAd.isInterstitialReady(function(isReady){
		if(isReady){
			admobAd.showInterstitial();
		}
	});
}
function onInterstitialReceive (message) {
	//alert("onMInterstitialReceive ,you can show it now");
	console.log('onMInterstitialReceive ,you can show it now');
}
function onReceiveFail (message) {
   //alert("load fail: "+message.type+"  "+message.data);
   console.log("load fail: " + message.type + "  " + message.data);
}

function onAdmobEvent (message) {
	console.log("Message Received - " + message);
}

function onDeviceReady() {
	admobAd.initInterstitial("ca-app-pub-5575552359884924/4141809090");
	console.log("init Interstitial Triggered");
	document.addEventListener('onAdmobInterstitialDismiss', onAdmobEvent, false);
	document.addEventListener('onAdmobInterstitialFailedReceive', onAdmobEvent, false);
	document.addEventListener('onAdmobInterstitialLeaveApplication', onAdmobEvent, false);
	document.addEventListener('onAdmobInterstitialPresent', onAdmobEvent, false);
	document.addEventListener('onAdmobInterstitialReceive', onAdmobEvent, false);
	//document.addEventListener(admobAd.AdEvent.onInterstitialReceive, onInterstitialReceive, false);
	//document.addEventListener(admobAd.AdEvent.onInterstitialFailedReceive,onReceiveFail, false);
	
	admobAd.initBanner("ca-app-pub-5575552359884924/4721415096", admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height);
	console.log('Init Banner Triggered');
	admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);
}

document.addEventListener('deviceready',onDeviceReady, false);
