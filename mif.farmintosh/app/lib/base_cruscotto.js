Ti.include('utility.js');

var win = Ti.UI.createWindow({
    backgroundColor:'#e7e8ea',
    exitOnClose: true,
  	fullscreen: true	
});

var cruscottoView = Ti.UI.createView({
    layout: 'composite',
    width: '100%',
	height: '100%'
});
win.add(cruscottoView);

/* ---------------- header ------------------------- */

var headerView = Ti.UI.createView({
    layout: 'composite',
    top: 0,
    left: 0,
    right: 0,
    height: 48
});
cruscottoView.add(headerView);

var imageLogo = Ti.UI.createImageView({
  image:'/images/logomacinfarma_interno.png',
  left: 10,
  top: 13,
  width: 100
});
headerView.add(imageLogo);

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
esciButton.addEventListener('click', function(){
	Ti.App.Properties.setBool("appLogin", false);
	Ti.App.Properties.setObject('userLogged', null);
    win.close({ transition: getTransitionsStyle('flipfromright')});
});
headerView.add(esciButton);

var seperator = Ti.UI.createView({
    backgroundColor:'#38969e',
    height: 1,
    top: 40,
    left: 10,
    right: 10
});
headerView.add(seperator);

/* ---------------- scrollable ------------------------- */
var scrollcontainerView = Ti.UI.createScrollableView({
	separatorStyle: 0,
	borderWidth:0,

    overlayEnabled: true,
	pagingControlHeight: 30,
	showPagingControl: true,
	backgroundColor: 'transparent',
	pagingControlColor: 'transparent',
	
    top: 48,
    left: 0,
    right: 0,
    bottom: 48
});
scrollcontainerView.addEventListener('scrollend', function (e) {
    colorizzaButton(e.currentPage);
});
cruscottoView.add(scrollcontainerView);

/* ---------------- containers ------------------------- */
var containerView = Ti.UI.createScrollView({
    top: 0,
    left: 0,
    right: 0
});
var reportView = Ti.UI.createView({
    top: 0,
    left: 0,
    right: 0,
});
var settingsView = Ti.UI.createView({
    top: 0,
    left: 0,
    right: 0,
});
var helpView = Ti.UI.createView({
    top: 0,
    left: 0,
    right: 0,
});
scrollcontainerView.addView(containerView);
scrollcontainerView.addView(reportView);
scrollcontainerView.addView(settingsView);
scrollcontainerView.addView(helpView);

/* ---------------- titolo di benvenuto ---------------- */
var utente = Ti.App.Properties.getObject('userLogged');
var messaggio = '';
if(new Date().getHours() > 12){
	messaggio = 'Buonasera';
} else {
	messaggio = 'Buongiorno';
}

var benvenuto = Ti.UI.createLabel({
    text:messaggio + ', ' + ((utente==null) ? 'Utente' : utente.SIFA_UTEL_NOME + ' ' + utente.SIFA_UTEL_COGNOME),
	color: '#7f9296',
	  font:{
		fontSize: 20,
		fontFamily: 'SegoeUI-Light'
	  },
    top: 0,
    left: 10,
    right: 10
});
containerView.add(benvenuto);

//carica farmacie da utente
if(!isDemo){
	getFarmacie(utente.SIFA_UTEL_ID_UTENTE);
}
//-------------------------

var titolo2 = Ti.UI.createLabel({
    text: 'Statistiche',
	color: '#7f9296',
	font:{ fontSize: 20, fontFamily: 'SegoeUI-Light' },
    top: 0, left: 10, right: 10
});
reportView.add(titolo2);

var titolo3 = Ti.UI.createLabel({
    text: 'Impostazioni',
	color: '#7f9296',
	font:{ fontSize: 20, fontFamily: 'SegoeUI-Light' },
    top: 0, left: 10, right: 10
});
settingsView.add(titolo3);

var titolo4 = Ti.UI.createLabel({
    text: 'Aiuto',
	color: '#7f9296',
	font:{ fontSize: 20, fontFamily: 'SegoeUI-Light' },
    top: 0, left: 10, right: 10
});
helpView.add(titolo4);


/* ---------------------- footer ------------------------ */

var footerView = Ti.UI.createView({
    backgroundColor:'#00262f',
    layout: 'composite',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48
});
cruscottoView.add(footerView);

var linea0 = Ti.UI.createView({
    backgroundColor: '#73b1ba',
    bottom: 48,
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
cruscottoButton.addEventListener('click', function(){
	scrollcontainerView.scrollToView(0);
	colorizzaButton(0);
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

var reportButton = Ti.UI.createButton({
	image: '/images/vendite.png',
	tintColor: '#007c84',
	left: 81,
	width: 80
});
reportButton.addEventListener('click', function(){
	scrollcontainerView.scrollToView(1);
	colorizzaButton(1);
});
footerView.add(reportButton);

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
settingsButton.addEventListener('click', function(){
	scrollcontainerView.scrollToView(2);
	colorizzaButton(2);
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
helpButton.addEventListener('click', function(){
	scrollcontainerView.scrollToView(3);
	colorizzaButton(3);
});
footerView.add(helpButton);

if(Ti.Platform.osname == "ipad"){
	var linea4 = Ti.UI.createView({
	    backgroundColor: '#a0abb5',
	    top: 0,
	    left: 324,
	    height: 48,
	    width: 1
	});
	footerView.add(linea4);
}

function colorizzaButton(numero){
	if(numero == null){
		numero = 0;
	}	
	linea0.left = 81*numero;
	deselezionaButton(cruscottoButton);
	deselezionaButton(reportButton);
	deselezionaButton(settingsButton);
	deselezionaButton(helpButton);
	if(numero == 0){
		selezionaButton(cruscottoButton);
	} else if(numero == 1){
		selezionaButton(reportButton);
	} else if(numero == 2){
		selezionaButton(settingsButton);
	} else if(numero == 3){
		selezionaButton(helpButton);
	}
}

function selezionaButton(pulsante){
	pulsante.backgroundColor = '#00515a';
	pulsante.tintColor = '#fff';
}
function deselezionaButton(pulsante){
	pulsante.backgroundColor = 'transparent';
	pulsante.tintColor = '#007c84';
}

/* ------------------------------------------------------- */

Titanium.UI.iPhone.appBadge=0;

win.open({ transition: getTransitionsStyle('flipfromleft')});