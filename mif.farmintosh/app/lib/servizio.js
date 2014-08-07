Ti.include('suds.js');

var url = ""; 
var suds = null;

function inizializzaServizio(){
	var serverName = Ti.App.Properties.getString("server_preference");
	if(serverName == ''){
		var dialog = Ti.UI.createAlertDialog({  message: 'Il server non è stato specificato!',
											    ok: 'Chiudi',
											    title: 'Attenzione!'
											 }).show();
		return false;
	}
	url = "http://" + serverName + "/services/sistemafarmacia.asmx";
	
	suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://tempuri.org/'
	});	
	return true;	
}

/*********** Metodi Servizio ************/
function Login(myUsername, myPassword){
	var callparams = {
	    username: myUsername,
	    password: myPassword
	};
	
	if(!inizializzaServizio()){
		return;
	}
	
	try {
		suds.invoke('Login', callparams, function(xmlDoc) {
	        //inizializza utente loggato
			Ti.App.Properties.setBool("appLogin", false);
			//procedura di login
			var results = xmlDoc.documentElement.getElementsByTagName('LoginResult');
	        var data = null;
	        if (results && results.length>0) {
	            data = JSON.parse(results.item(0).text);
	            Ti.App.Properties.setObject('userLogged', data);
	        }
		    if (data){
		        if(data.SIFA_UTEL_FLAG_ATTIVO){
					//carica farmacie da utente
					getFarmacie(data.SIFA_UTEL_ID_UTENTE);
					//set utente loggato
					Ti.App.Properties.setBool("appLogin", true);
				}
			}
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}
}

function getFarmacie(identificativo_utente){
	var callparams = {
	    id_utente: identificativo_utente
	};
	
	if(!inizializzaServizio()){
		return;
	}
		
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

function getReparti(identificativo_utente, identificativo_farmacia){
	var callparams = {
	    id_utente: identificativo_utente,
	    id_farmacia: identificativo_farmacia
	};
	
	if(!inizializzaServizio()){
		return;
	}
	
	try {
	    suds.invoke('EstraiReparti', callparams, function(xmlDoc) {
	        var results = xmlDoc.documentElement.getElementsByTagName('EstraiRepartiResult');
	        if (results && results.length>0) {
	            var data = JSON.parse(results.item(0).text);
	            Ti.App.Properties.setObject('userReparti', data);
	        }
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}
}