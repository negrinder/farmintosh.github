var win = Ti.UI.createWindow({
    backgroundColor:'#007c84'
});

var loginview = Ti.UI.createView({
    layout: 'composite',
    center: {x: '50%', y: '50%'},
    width: 245,
    height: 150
});
win.add(loginview);

var titolo1 = Titanium.UI.createLabel({
    color: '#ffffff',
    text:'sistema',
    font:{
        fontSize:34,
        fontFamily: 'SegoeUI-Light'
    },
    textAlign:'left',
    width: 245,
    top: 50
});
win.add(titolo1);

var titolo2 = Titanium.UI.createLabel({
    color: '#ffffff',
    text:'farmacia',
    font:{
        fontSize:34,
        fontFamily: 'SegoeUI-Light'
    },
    textAlign:'left',
    width: 245,
    top: 84
});
win.add(titolo2);

var imageLogin = Ti.UI.createImageView({
  image:'/images/login.png',
  top: 0,
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
  top: 0,
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
  top: 44,
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
  top: 44,
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
	fontSize:20,
	fontFamily: 'SegoeUI-Light'
  },
  top: 88,
  left: 0,
  width: 245,
  height: 30
});
loginview.add(loginButton);

var text =  'richiedi password';
var attr = Titanium.UI.iOS.createAttributedString({
    text: text,
    attributes: [
        {
            type: Titanium.UI.iOS.ATTRIBUTE_UNDERLINES_STYLE,
            value: Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
            range: [0, text.length]
        }
    ]
});

var richiediButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  title:'richiedi password',
  color: '#ffffff',
  font:{
	fontSize:12,
	fontFamily: 'SegoeUI-Light'
  },
  top: 132,
  left: 0,
  width: 245,
  height: 20,
  attributedString: attr
});
loginview.add(richiediButton);

win.open();