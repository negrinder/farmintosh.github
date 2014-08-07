var Cloud = require("ti.cloud");
var deviceToken = null;

/******** PUSH NOTIFICATION *******/
function subscribeToChannel () {
    Cloud.PushNotifications.subscribeToken({
        device_token: deviceToken,
        channel: 'mif_alert',
        type: 'ios'
    }, function (e) {
        if (e.success) {
            //alert('Subscribed');
        } else {
            //alert('Errore di sottoscrizione: ' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
function unsubscribeToChannel () {
    Cloud.PushNotifications.unsubscribeToken({
        device_token: deviceToken,
        channel: 'mif_alert',
    }, function (e) {
        if (e.success) {
            //alert('Unsubscribed');
        } else {
            //alert('Errore di cancellazione: ' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
Ti.Network.registerForPushNotifications({
    types: [
        Ti.Network.NOTIFICATION_TYPE_BADGE,
        Ti.Network.NOTIFICATION_TYPE_ALERT,
        Ti.Network.NOTIFICATION_TYPE_SOUND
    ],
    success: deviceTokenSuccess,
    error: deviceTokenError,
    callback: receivePush
});
// Events
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
    if(Ti.App.Properties.getBool("avvisi_preference")){
		subscribeToChannel();
	} else {
		unsubscribeToChannel();
	}
}
function deviceTokenError(e) {
    //alert('Registrazione alle notifiche fallita! [' + e.error + ']');
}
function receivePush(e) {
    //alert('Notifica ricevuta: ' + JSON.stringify(e));
    //alert(e.data.aps.alert);
    Titanium.UI.iPhone.appBadge=0;
}