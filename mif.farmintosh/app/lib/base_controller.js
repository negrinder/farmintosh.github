Ti.include('utility.js');

/* -----------------------------------
 * ------------- header --------------
 * ----------------------------------- 
 */

var win = Ti.UI.createWindow({
    backgroundColor:'#e6e6f0',
    exitOnClose: true,
  	fullscreen: true	
});

var cruscottoView = Ti.UI.createView({
    layout: 'composite',
    width: '100%',
	height: '100%'
});
win.add(cruscottoView);

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
headerView.add(tornaButton);
tornaButton.addEventListener('click', function(){
	win.close({ transition: getTransitionsStyle('flipfromright')});
});
cruscottoView.add(headerView);

var linea0 = Ti.UI.createView({
    backgroundColor: '#73b1ba',
    top: 40,
    left: 0,
    width: '100%',
    height: 4
});
cruscottoView.add(linea0);

var myPersonalHeight = 0;
if(Ti.Platform.osname == "iphone"){
	myPersonalHeight = 524;
} else if(Ti.Platform.osname == "ipad"){
	myPersonalHeight = 724;
}
var containerView = Ti.UI.createView({
    layout: 'composite',
    top: 44,
    left: 0,
    right: 0,
    height: myPersonalHeight
});
cruscottoView.add(containerView);