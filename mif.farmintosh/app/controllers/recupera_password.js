Ti.include('utility.js');

var win = Ti.UI.createWindow({
    backgroundColor:'#007c84'
});

var recuperaView = Ti.UI.createView({
    layout: 'composite',
center: {x: '50%'},
width: 245,
height: '100%'
});
win.add(recuperaView);

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
recuperaView.add(imageLogin);

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
recuperaView.add(userField);

var recuperaButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  backgroundColor: "#00575c",
  title:'recupera',
  color: '#ffffff',
  font:{
	fontSize:20,
	fontFamily: 'SegoeUI-Light'
  },
  top: 204,
  left: 0,
  width: 245,
  height: 30
});
recuperaView.add(recuperaButton);

var tornaButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  title:'torna al login',
  color: '#ffffff',
  font:{
	fontSize:12,
	fontFamily: 'SegoeUI-Light'
  },
  top: 248,
  left: 0,
  width: 245,
  height: 20
});
recuperaView.add(tornaButton);

tornaButton.addEventListener('click', function(){
	win.close({ transition: getTransitionsStyle('flipfromright')});
});

win.open({ transition: getTransitionsStyle('flipfromleft')});