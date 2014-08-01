Ti.include('utility.js');

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

var containerView = Ti.UI.createView({
    layout: 'composite',
    top: 0,
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
	Ti.App.Properties.setBool("appLogin", false);
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

var utente = Ti.App.Properties.getObject('userLogged');
var messaggio = '';
if(new Date().getHours() > 12){
	messaggio = 'Buonasera';
} else {
	messaggio = 'Buongiorno';
}

var benvenuto = Ti.UI.createLabel({
    text:messaggio + ', ' + utente.SIFA_UTEL_NOME + ' ' + utente.SIFA_UTEL_COGNOME,
	color: '#7f9296',
	  font:{
		fontSize: 20,
		fontFamily: 'SegoeUI-Light'
	  },
    top: 48,
    left: 10,
    right: 10
});
containerView.add(benvenuto);

/* --------------------------------------------------------
 * ------------- inserimento menu button ------------------
 * -------------------------------------------------------- 
 */

/* --------------------- badge --------------------------*/
var funzioneBadge = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 87,
    left: 10
});
funzioneBadge.addEventListener('click', function(){
	Alloy.createController('badge');
});
containerView.add(funzioneBadge);

var titolo1 = Ti.UI.createLabel({ text:'badge', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione1 = Ti.UI.createLabel({ text:'timbra la tua presenza', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona1 = Ti.UI.createImageView({ image:'/images/pulsanti/badge.png', left: 6, top: 67, height: 20 });
funzioneBadge.add(titolo1);
funzioneBadge.add(descrizione1);
funzioneBadge.add(icona1);
/* ------------------------------------------------------*/

/* --------------------- incasso ------------------------*/
var funzioneIncasso = Ti.UI.createView({
    backgroundColor:'#f4971b',
    height: 94,
    width: 197,
    top: 87,
    left: 113
});
containerView.add(funzioneIncasso);

var titolo2 = Ti.UI.createLabel({ text:'statistiche', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione2 = Ti.UI.createLabel({ text:'totale incasso giornaliero della farmacia', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona2 = Ti.UI.createImageView({ image:'/images/pulsanti/incasso.png', left: 6, top: 67, height: 20 });
funzioneIncasso.add(titolo2);
funzioneIncasso.add(descrizione2);
funzioneIncasso.add(icona2);
/* ------------------------------------------------------*/

/*
 * fine linea 1
 */

/* --------------------- timbrature ---------------------*/
var funzioneTimbrature = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 190,
    left: 10
});
containerView.add(funzioneTimbrature);

var titolo3 = Ti.UI.createLabel({ text:'timbrature', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione3 = Ti.UI.createLabel({ text:'storico delle presenze', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona3 = Ti.UI.createImageView({ image:'/images/pulsanti/timbrature.png', left: 6, top: 67, height: 20 });
funzioneTimbrature.add(titolo3);
funzioneTimbrature.add(descrizione3);
funzioneTimbrature.add(icona3);
/* ------------------------------------------------------*/

/* --------------------- comunicazioni ------------------*/
var funzioneComunicazioni = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 190,
    left: 113
});
containerView.add(funzioneComunicazioni);

var titolo4 = Ti.UI.createLabel({ text:'comunica', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione4 = Ti.UI.createLabel({ text:'assenze, ferie e malattie', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona4 = Ti.UI.createImageView({ image:'/images/pulsanti/comunicazioni.png', left: 6, top: 67, height: 20 });
funzioneComunicazioni.add(titolo4);
funzioneComunicazioni.add(descrizione4);
funzioneComunicazioni.add(icona4);
/* ------------------------------------------------------*/
/* --------------------- rapportino ---------------------*/
var funzioneRapportino = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 190,
    left: 216
});
containerView.add(funzioneRapportino);

var titolo5 = Ti.UI.createLabel({ text:'rapportino', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione5 = Ti.UI.createLabel({ text:'compila le presenze', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona5 = Ti.UI.createImageView({ image:'/images/pulsanti/rapportino.png', left: 6, top: 67, height: 20 });
funzioneRapportino.add(titolo5);
funzioneRapportino.add(descrizione5);
funzioneRapportino.add(icona5);
/* ------------------------------------------------------*/

/*
 * fine linea 2
 */

/* --------------------- vendita ------------------------*/
var funzioneVendita = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 293,
    left: 10
});
containerView.add(funzioneVendita);

var titolo6 = Ti.UI.createLabel({ text:'vendita', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione6 = Ti.UI.createLabel({ text:'controlla le vendite', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona6 = Ti.UI.createImageView({ image:'/images/pulsanti/vendite.png', left: 6, top: 67, height: 20 });
funzioneVendita.add(titolo6);
funzioneVendita.add(descrizione6);
funzioneVendita.add(icona6);
/* ------------------------------------------------------*/

/* --------------------- magazzino ----------------------*/
var funzioneMagazzino = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 293,
    left: 113
});
containerView.add(funzioneMagazzino);

var titolo7 = Ti.UI.createLabel({ text:'magazzino', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione7 = Ti.UI.createLabel({ text:'gestisci il magazzino', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona7 = Ti.UI.createImageView({ image:'/images/pulsanti/magazzino.png', left: 6, top: 67, height: 20 });
funzioneMagazzino.add(titolo7);
funzioneMagazzino.add(descrizione7);
funzioneMagazzino.add(icona7);
/* ------------------------------------------------------*/

/* --------------------- ordini -------------------------*/
var funzioneOrdini = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 293,
    left: 216
});
containerView.add(funzioneOrdini);

var titolo8 = Ti.UI.createLabel({ text:'ordini', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione8 = Ti.UI.createLabel({ text:'evasi e in pending', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona8 = Ti.UI.createImageView({ image:'/images/pulsanti/ordini.png', left: 6, top: 67, height: 20 });
funzioneOrdini.add(titolo8);
funzioneOrdini.add(descrizione8);
funzioneOrdini.add(icona8);
/* ------------------------------------------------------*/

/*
 * fine linea 3
 */

/* --------------------- aggiorna -----------------------*/
var funzioneAggiorna = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 396,
    left: 10
});
containerView.add(funzioneAggiorna);

var titolo9 = Ti.UI.createLabel({ text:'aggiorna', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione9 = Ti.UI.createLabel({ text:'allineamento del sistema', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona9 = Ti.UI.createImageView({ image:'/images/pulsanti/aggiorna.png', left: 6, top: 67, height: 20 });
funzioneAggiorna.add(titolo9);
funzioneAggiorna.add(descrizione9);
funzioneAggiorna.add(icona9);
/* ------------------------------------------------------*/

/* --------------------- contatti -----------------------*/
var funzioneContatti = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 396,
    left: 113
});
containerView.add(funzioneContatti);

var titolo10 = Ti.UI.createLabel({ text:'contatti', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione10 = Ti.UI.createLabel({ text:'indirizzi e recapiti', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona10 = Ti.UI.createImageView({ image:'/images/pulsanti/contatti.png', left: 6, top: 67, height: 20 });
funzioneContatti.add(titolo10);
funzioneContatti.add(descrizione10);
funzioneContatti.add(icona10);
/* ------------------------------------------------------*/

/* --------------------- assistenza ---------------------*/
var funzioneAssistenza = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 94,
    width: 94,
    top: 396,
    left: 216
});
containerView.add(funzioneAssistenza);

var titolo11 = Ti.UI.createLabel({ text:'assistenza', color: '#fff', font:{ fontSize: 16, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione11 = Ti.UI.createLabel({ text:'chiama il numero verde', color: '#fff', font:{ fontSize: 9, fontFamily: 'SegoeUI-Light' }, top: 25, left: 6 });
var icona11 = Ti.UI.createImageView({ image:'/images/pulsanti/assistenza.png', left: 6, top: 67, height: 20 });
funzioneAssistenza.add(titolo11);
funzioneAssistenza.add(descrizione11);
funzioneAssistenza.add(icona11);
/* ------------------------------------------------------*/

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

/* --------------------------------------------------------
 * ------------- inserimento menu tab footer --------------
 * -------------------------------------------------------- 
 */

var linea0 = Ti.UI.createView({
    backgroundColor: '#73b1ba',
    top: 516,
    left: 0,
    width: 80,
    height: 4
});
cruscottoView.add(linea0);

var cruscottoButton = Ti.UI.createButton({
	backgroundColor: '#00515a',
	image: '/images/menu.png',
	tintColor: '#fff',
	left: 0,
	width: 80
});
footerView.add(cruscottoButton);

var linea1 = Ti.UI.createView({
    backgroundColor: '#a0abb5',
    top: 0,
    left: 80,
    height: 48,
    width: 1
});
footerView.add(linea1);

var venditeButton = Ti.UI.createButton({
	image: '/images/vendite.png',
	tintColor: '#007c84',
	left: 81,
	width: 80
});
footerView.add(venditeButton);

var linea2 = Ti.UI.createView({
    backgroundColor: '#a0abb5',
    top: 0,
    left: 161,
    height: 48,
    width: 1
});
footerView.add(linea2);

var settingsButton = Ti.UI.createButton({
	image: '/images/settings.png',
	tintColor: '#007c84',
	left: 162,
	width: 80
});
footerView.add(settingsButton);

var linea3 = Ti.UI.createView({
    backgroundColor: '#a0abb5',
    top: 0,
    left: 242,
    height: 48,
    width: 1
});
footerView.add(linea3);

var helpButton = Ti.UI.createButton({
	image: '/images/help.png',
	tintColor: '#007c84',
	left: 243,
	width: 80
});
footerView.add(helpButton);

/* --------------------------------------------------------
 * -------------------------------------------------------- 
 */

Titanium.UI.iPhone.appBadge=0;

win.open({ transition: getTransitionsStyle('flipfromleft')});