Ti.include('utility.js');

var win = Ti.UI.createWindow({
    backgroundColor:'#007c84'
});

var loginview = Ti.UI.createView({
    layout: 'composite',
    center: {x: '50%'},
    width: 245,
    height: '100%'
});
win.add(loginview);

var imageLogo = Ti.UI.createImageView({
  image:'/images/logomacinfarma_b.png',
  center: {x: '50%', y: 100},
  width: 170
});
win.add(imageLogo);

var imageLogin = Ti.UI.createImageView({
  image:'/images/login.png',
  top: 160,
  left: 0,
  height: 30,
  width: 30
});
loginview.add(imageLogin);

var userField = Ti.UI.createTextField({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  backgroundColor: "#ffffff",
  color: '#007c84',
  paddingLeft:10,
  font:{
	fontSize:18,
	fontFamily: 'SegoeUI-Light'
  },
  top: 160,
  left: 30,
  width: 215,
  height: 30,
  
  value: Ti.App.Properties.getString("username_preference", ""),
  autocorrect: false,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
  keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
  returnKeyType : Titanium.UI.RETURNKEY_DONE,
  autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
        
});
loginview.add(userField);

var imagePassword = Ti.UI.createImageView({
  image:'/images/password.png',
  top: 204,
  left: 0,
  height: 30,
  width: 30	
});
loginview.add(imagePassword);

var passwordField = Ti.UI.createTextField({
  passwordMask:"true",
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  backgroundColor: "#ffffff",
  color: '#007c84',
  paddingLeft:10,
  font:{
	fontSize:18,
	fontFamily: 'SegoeUI-Light'
  },
  top: 204,
  left: 30,
  width: 215,
  height: 30,
  
  value: Ti.App.Properties.getString("password_preference", ""),
  autocorrect: false,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
  keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
  returnKeyType : Titanium.UI.RETURNKEY_DONE,
  autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
  
});
loginview.add(passwordField);

var loginButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  backgroundColor: "#00575c",
  title:'login',
  color: '#ffffff',
  font:{
	fontSize:22,
	fontFamily: 'SegoeUI-Light'
  },
  top: 248,
  left: 0,
  width: 245,
  height: 30
});
loginview.add(loginButton);

loginButton.addEventListener('click', function(){
    var avvioMode = Ti.App.Properties.getString("avvio_preference", 'demo');
	if(avvioMode == 'demo'){
		Ti.App.Properties.setBool("appLogin", true);
		if(Ti.Platform.osname == "iphone"){
		    Alloy.createController('cruscotto_iphone');
		} else if(Ti.Platform.osname == "ipad"){
		    Alloy.createController('cruscotto_ipad');
		}
	} else if(avvioMode == 'local'){
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
		    username: userField.value,
		    password: passwordField.value
		};
		var suds = new SudsClient({
		    endpoint: url,
		    targetNamespace: 'http://tempuri.org/'
		});
		try {
		    suds.invoke('Login', callparams, function(xmlDoc) {
		        var results = xmlDoc.documentElement.getElementsByTagName('LoginResult');
		        if (results && results.length>0) {
		            var data = JSON.parse(results.item(0).text);
		            Ti.App.Properties.setBool("appLogin", data.SIFA_UTEL_FLAG_ATTIVO);
		            Ti.App.Properties.setObject('userLogged', data);
		            if(Ti.App.Properties.getBool("appLogin")){
		            	if(Ti.Platform.osname == "iphone"){
						    Alloy.createController('cruscotto_iphone');
						} else if(Ti.Platform.osname == "ipad"){
						    Alloy.createController('cruscotto_ipad');
						}
					} else {
						var dialog = Ti.UI.createAlertDialog({  message: 'Le credenziali di accesso inserite non sono corrette.',
														    ok: 'Chiudi',
														    title: 'Attenzione!'
														 }).show();
					}
				} else {
		        	Ti.App.Properties.setBool("appLogin", false);
		        	var dialog = Ti.UI.createAlertDialog({  message: 'Le credenziali di accesso inserite non sono corrette.',
														    ok: 'Chiudi',
														    title: 'Attenzione!'
														 }).show();
				}
		    });
		} catch(e) {
		    Ti.API.error('Error: ' + e);
		}
	} else if(avvioMode == 'cloud'){
		//to do implement
		Ti.App.Properties.setBool("appLogin", false);
		var dialog = Ti.UI.createAlertDialog({  message: 'Il servizio selezionato non è attivo.',
											    ok: 'Chiudi',
											    title: 'Attenzione!'
											 }).show();
	}	
});

var recuperaButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  title:'recupera password',
  color: '#ffffff',
  font:{
	fontSize:14,
	fontFamily: 'SegoeUI-Light'
  },
  top: 292,
  left: 0,
  width: 245,
  height: 20
});
loginview.add(recuperaButton);

recuperaButton.addEventListener('click', function(){
    Alloy.createController('recupera_password');
});

/*********** SETTINGS ************/
/*
avvio_preference {demo, local, cloud}
server_preference
farmacia_preference
licenza_preference
username_preference
password_preference
autologin_preference
versione_preference
aggiornamento_preference
*/
/*********** APP LUNCH ************/
Ti.App.Properties.setBool("appLogin", false);

/******** PUSH NOTIFICATION *******/
// Require the Cloud module
var Cloud = require("ti.cloud");
var deviceToken = null;
function subscribeToChannel () {
    // Subscribes the device to the 'mif_alert' channel
    Cloud.PushNotifications.subscribeToken({
        device_token: deviceToken,
        channel: 'mif_alert',
        type: 'ios'
    }, function (e) {
        if (e.success) {
            //alert('Subscribed');
        } else {
            //alert('Errore di sottoscrizione: ' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
function unsubscribeToChannel () {
    // Unsubscribes the device from the 'mif_alert' channel
    Cloud.PushNotifications.unsubscribeToken({
        device_token: deviceToken,
        channel: 'mif_alert',
    }, function (e) {
        if (e.success) {
            //alert('Unsubscribed');
        } else {
            //alert('Errore di cancellazione: ' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
Ti.Network.registerForPushNotifications({
    // Specifies which notifications to receive
    types: [
        Ti.Network.NOTIFICATION_TYPE_BADGE,
        Ti.Network.NOTIFICATION_TYPE_ALERT,
        Ti.Network.NOTIFICATION_TYPE_SOUND
    ],
    success: deviceTokenSuccess,
    error: deviceTokenError,
    callback: receivePush
});
// Process incoming push notifications
function receivePush(e) {
    //alert('Notifica ricevuta: ' + JSON.stringify(e));
    //alert(e.data.aps.alert);
    Titanium.UI.iPhone.appBadge=0;
}
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
    //alert(deviceToken);
    if(Ti.App.Properties.getBool("avvisi_preference")){
		subscribeToChannel();
	} else {
		unsubscribeToChannel();
	}
}
// Error to register push notifications
function deviceTokenError(e) {
    //alert('Registrazione alle notifiche fallita! [' + e.error + ']');
}
/**********************************/

setTimeout(function() {
	win.addEventListener("open", controllaAccessoAutomatico);
	win.open({ transition: getTransitionsStyle('flipfromleft')});
}, 3000);

function controllaAccessoAutomatico() {
    if(Ti.App.Properties.getBool("autologin_preference")){
		loginButton.fireEvent('click');
	}
}