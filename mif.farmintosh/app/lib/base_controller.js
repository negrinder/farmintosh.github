Ti.include('utility.js');
Ti.include('servizio.js');
Ti.include('global.js');

var ctrl = Ti.UI.createWindow({
    backgroundColor:'#e7e8ea',
    exitOnClose: true,
  	fullscreen: true	
});

var cruscottoView = Ti.UI.createScrollView({
    layout: 'composite',
    width: '100%',
	height: '100%'
});
ctrl.add(cruscottoView);

/* ---------------- header ------------------------- */
var headerView = Ti.UI.createView({
    backgroundColor:'#00515a',
    layout: 'composite',
    top: 0,
    left: 0,
    right: 0,
    height: 40
});
var titoloLabel = Ti.UI.createLabel({
  text:'Titolo',
  color: '#fff',
  font:{
	fontSize: 22,
	fontFamily: 'SegoeUI-Light',
	fontWeight: 'bold'
  },
  center:{ x:'50%', y:'50%' }
});
headerView.add(titoloLabel);
var tornaButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  title:'chiudi',
  color: '#73b1ba',
  font:{
	fontSize: 20,
	fontFamily: 'SegoeUI-Light'
  },
  top: 0,
  left: 10
});
tornaButton.addEventListener('click', function(){
	ctrl.close();
});
headerView.add(tornaButton);
cruscottoView.add(headerView);

var linea00 = Ti.UI.createView({
    backgroundColor: '#73b1ba',
    top: 40,
    left: 0,
    width: '100%',
    height: 4
});
cruscottoView.add(linea00);

var containerView = Ti.UI.createView({
    layout: 'composite',
    top: 44,
    left: 0,
    right: 0,
    height: '100%'
});
cruscottoView.add(containerView);