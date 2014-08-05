var isDemo = Ti.App.Properties.getString("avvio_preference", 'demo') == 'demo';

function getTransitionsStyle(type){
	var pageTransitionStyle;	
	switch(type){
		case 'curlup':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.CURL_UP;
        	break;
		case 'curldown':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.CURL_DOWN;
			break;
		case 'flipfromleft':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
			break;
		case 'flipfromright':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT;
			break;
		case 'none':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.NONE;			
			break;
	}	
	return pageTransitionStyle;
}

function getFarmacie(identificativo_utente){
	var serverName = Ti.App.Properties.getString("server_preference");
	if(serverName == ''){
		var dialog = Ti.UI.createAlertDialog({  message: 'Il server non è stato specificato!',
											    ok: 'Chiudi',
											    title: 'Attenzione!'
											 }).show();
		return;
	}
	Titanium.include('suds.js');
	var url = "http://" + serverName + "/services/sistemafarmacia.asmx";
	var callparams = {
	    id_utente: identificativo_utente
	};
	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://tempuri.org/'
	});
	try {
	    suds.invoke('EstraiFarmacie', callparams, function(xmlDoc) {
	        var results = xmlDoc.documentElement.getElementsByTagName('EstraiFarmacieResult');
	        if (results && results.length>0) {
	            var data = JSON.parse(results.item(0).text);
	            Ti.App.Properties.setObject('userFarmacie', data);
	        }
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}
}