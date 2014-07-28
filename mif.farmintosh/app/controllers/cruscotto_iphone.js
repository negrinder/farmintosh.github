Ti.include('utility.js');

var win = Ti.UI.createWindow({
    backgroundColor:'#007c84'
});

var cruscottoView = Ti.UI.createView({
    layout: 'composite',
    width: '100%',
	height: '100%'
});
win.add(cruscottoView);

var containerView = Ti.UI.createView({
    backgroundColor:'#e6e6f0',
    layout: 'composite',
    top: 21,
    left: 0,
    right: 0,
    height: 520.5
});
cruscottoView.add(containerView);

var imageLogo = Ti.UI.createImageView({
  image:'/images/logomacinfarma_interno.png',
  left: 10,
  top: 13,
  width: 100
});
containerView.add(imageLogo);

var esciButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  title:'esci',
  color: '#007a81',
  font:{
	fontSize: 20,
	fontFamily: 'SegoeUI-Light'
  },
  top: 0,
  right: 10,
});
containerView.add(esciButton);

esciButton.addEventListener('click', function(){
    win.close({ transition: getTransitionsStyle('flipfromright')});
});

var seperator = Ti.UI.createView({
    backgroundColor:'#38969e',
    height: 1,
    top: 40,
    left: 10,
    right: 10
});
containerView.add(seperator);

var benvenuto = Ti.UI.createLabel({
    text:'Benvenuto Utente',
	color: '#a6acad',
	  font:{
		fontSize: 20,
		fontFamily: 'SegoeUI-Light'
	  },
    top: 46,
    left: 10,
    right: 10
});
containerView.add(benvenuto);

var footerView = Ti.UI.createView({
    backgroundColor:'#00262f',
    layout: 'composite',
    top: 520.5,
    left: 0,
    right: 0,
    height: 47.5
});
cruscottoView.add(footerView);

win.open({ transition: getTransitionsStyle('flipfromleft')});