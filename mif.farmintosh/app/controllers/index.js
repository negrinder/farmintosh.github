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
	if(Ti.Platform.osname == "iphone"){
	    Alloy.createController('cruscotto_iphone');
	} else if(Ti.Platform.osname == "ipad"){
	    Alloy.createController('cruscotto_ipad');
	}
	
	/*Titanium.include('suds.js');
		
	var url = "http://server01v:7415/services/sistemafarmacia.asmx";
	var callparams = {
	    //FromCurrency: 'EUR',
	    //ToCurrency: 'USD'
	};
	
	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://tempuri.org/'
	});
	
	try {
	    suds.invoke('HelloWorld', callparams, function(xmlDoc) {
	        var results = xmlDoc.documentElement.getElementsByTagName('HelloWorldResult');
	        if (results && results.length>0) {
	            alert(results.item(0).text);
	        }
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}*/
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

setTimeout(function() {
	win.open({ transition: getTransitionsStyle('flipfromleft')});
}, 3000);