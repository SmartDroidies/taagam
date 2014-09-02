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
