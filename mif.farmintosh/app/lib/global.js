/*********** Variabili Globali ************/
var isDemo = Ti.App.Properties.getString("avvio_preference", 'demo') == 'demo';
var utente = Ti.App.Properties.getObject('userLogged');
var lemiefarmacie = Ti.App.Properties.getObject('userFarmacie');
