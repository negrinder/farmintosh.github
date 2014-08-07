/*********** SETTINGS ************/
/*
avvio_preference {demo, local, cloud}
server_preference
farmacia_preference
licenza_preference
username_preference
password_preference
autologin_preference
versione_preference
aggiornamento_preference
*/

/*********** INIZIALIZZA ************/
Ti.App.Properties.setBool("appLogin", false);
Ti.App.Properties.setObject('userLogged', null);
Ti.App.Properties.setObject('userFarmacie', null);
Ti.App.Properties.setString('userFarmaciaSelezionata', null);
Ti.App.Properties.setObject('userReparti', null);
