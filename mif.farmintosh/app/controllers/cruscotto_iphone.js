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
cruscottoView.add(tornaButton);

tornaButton.addEventListener('click', function(){
	win.close({ transition: getTransitionsStyle('flipfromright')});
});

win.open({ transition: getTransitionsStyle('flipfromleft')});