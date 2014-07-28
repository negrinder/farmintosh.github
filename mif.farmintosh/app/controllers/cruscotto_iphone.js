Ti.include('utility.js');

var win = Ti.UI.createWindow({
    backgroundColor:'#a6c8d2'
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
    height: 520
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

/* --------------------------------------------------------
 * ------------- inserimento menu button ------------------
 * -------------------------------------------------------- 
 */

var funzioneBadge = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 87,
    left: 10
});
containerView.add(funzioneBadge);

var funzioneIncasso = Ti.UI.createView({
    backgroundColor:'#f4971b',
    height: 94,
    width: 197,
    top: 87,
    left: 113
});
containerView.add(funzioneIncasso);

/*
 * fine linea 1
 */

var funzioneTimbrature = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 190,
    left: 10
});
containerView.add(funzioneTimbrature);

var funzioneComunicazione = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 190,
    left: 113
});
containerView.add(funzioneComunicazione);

var funzioneRapportino = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 190,
    left: 216
});
containerView.add(funzioneRapportino);

/*
 * fine linea 2
 */

var funzioneVendita = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 293,
    left: 10
});
containerView.add(funzioneVendita);

var funzioneMagazzino = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 293,
    left: 113
});
containerView.add(funzioneMagazzino);

var funzioneOrdini = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 293,
    left: 216
});
containerView.add(funzioneOrdini);

/*
 * fine linea 3
 */

var funzioneAggiorna = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 396,
    left: 10
});
containerView.add(funzioneAggiorna);

var funzioneContatti = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 396,
    left: 113
});
containerView.add(funzioneContatti);

var funzioneAssistenza = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 396,
    left: 216
});
containerView.add(funzioneAssistenza);

/*
 * fine linea 4
 */

/* --------------------------------------------------------
 * -------------------------------------------------------- 
 */

var footerView = Ti.UI.createView({
    backgroundColor:'#00262f',
    layout: 'composite',
    top: 520,
    left: 0,
    right: 0,
    height: 48
});
cruscottoView.add(footerView);

win.open({ transition: getTransitionsStyle('flipfromleft')});