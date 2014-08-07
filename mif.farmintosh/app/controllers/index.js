Ti.include('utility.js');
Ti.include('inizializza.js');
Ti.include('notifiche_push.js');
Ti.include('servizio.js');

var avvioMode = Ti.App.Properties.getString("avvio_preference", 'demo');
		
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
  
  value: (avvioMode == 'demo' ? 'demo' : Ti.App.Properties.getString("username_preference", "")),
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
  
  value: (avvioMode == 'demo' ? 'demo' : Ti.App.Properties.getString("password_preference", "")),
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

var activityIndicator = Ti.UI.createActivityIndicator({
	color: '#fff',
	font:{
		fontSize:18,
		fontFamily: 'SegoeUI-Light'
	},
	message: 'Caricamento...',
	opacity : 0.8,
	borderRadius : 10,
	backgroundColor : 'black',
	center: {x: '50%', y: '50%'},
	width: 160,
	height: 45
});
win.add(activityIndicator);

loginButton.addEventListener('click', function(){
    if(avvioMode == 'demo'){
		Ti.App.Properties.setBool("appLogin", true);
		if(Ti.Platform.osname == "iphone"){
		    Alloy.createController('cruscotto_iphone');
		} else if(Ti.Platform.osname == "ipad"){
		    Alloy.createController('cruscotto_ipad');
		}
	} else if(avvioMode == 'local'){
		activityIndicator.show();
		Login(userField.value, passwordField.value);
		//attendi esito login
		setTimeout(function(){
			activityIndicator.hide();
			if(Ti.App.Properties.getBool("appLogin")){
			    //apri finestra cruscotto			
				if(Ti.Platform.osname == "iphone"){
				    Alloy.createController('cruscotto_iphone');
				} else if(Ti.Platform.osname == "ipad"){
				    Alloy.createController('cruscotto_ipad');
				}
			} else {
				Ti.UI.createAlertDialog({	
					message: 'Le credenziali di accesso inserite non sono corrette.',
					ok: 'Chiudi',
					title: 'Attenzione!'
				}).show();
			}
		}, 4000);		
	} else if(avvioMode == 'cloud'){
		Ti.App.Properties.setBool("appLogin", false);
		Ti.UI.createAlertDialog({
			message: 'Il servizio selezionato non è attivo.',
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