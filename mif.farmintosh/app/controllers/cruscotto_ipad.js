Ti.include('base_cruscotto.js');

/* --------------------- funzioni ----------------------- */

/* --------------------- badge -------------------------- */
var funzioneBadge = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 132,
    left: 36
});
funzioneBadge.addEventListener('click', function(){
	Alloy.createController('badge');
});
containerView.add(funzioneBadge);

var titolo1 = Ti.UI.createLabel({ text:'badge', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione1 = Ti.UI.createLabel({ text:'timbra la tua presenza', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona1 = Ti.UI.createImageView({ image:'/images/pulsanti/badge.png', left: 6, top: 100, height: 25 });
funzioneBadge.add(titolo1);
funzioneBadge.add(descrizione1);
funzioneBadge.add(icona1);
/* ------------------------------------------------------ */

/* --------------------- timbrature --------------------- */
var funzioneTimbrature = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 132,
    left: 185
});
containerView.add(funzioneTimbrature);

var titolo3 = Ti.UI.createLabel({ text:'timbrature', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione3 = Ti.UI.createLabel({ text:'storico delle presenze', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona3 = Ti.UI.createImageView({ image:'/images/pulsanti/timbrature.png', left: 6, top: 100, height: 25 });
funzioneTimbrature.add(titolo3);
funzioneTimbrature.add(descrizione3);
funzioneTimbrature.add(icona3);
/* ------------------------------------------------------ */

/* --------------------- farmacia ----------------------- */
var funzioneFarmacia = Ti.UI.createView({
    backgroundColor:'#d1b50a',
    height: 140,
    width: 438,
    top: 132,
    left: 334
});
containerView.add(funzioneFarmacia);

var titolo2 = Ti.UI.createLabel({ text:'farmacia', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione2 = Ti.UI.createLabel({ text:'le operazioni verranno eseguite su:', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona2 = Ti.UI.createImageView({ image:'/images/pulsanti/cambia.png', left: 6, top: 100, height: 25 });

var farmacia2 = Ti.UI.createLabel({ text:'FARMACIA BUCCELLA', color: '#514708', font:{ fontSize: 24, fontFamily: 'SegoeUI-Light', fontWeight: 'bold' }, top: 48, left: 6 });

funzioneFarmacia.add(titolo2);
funzioneFarmacia.add(descrizione2);
funzioneFarmacia.add(farmacia2);
funzioneFarmacia.add(icona2);
/* ------------------------------------------------------ */

/* --------------------- comunicazioni ------------------ */
var funzioneComunicazioni = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 281,
    left: 36
});
containerView.add(funzioneComunicazioni);

var titolo4 = Ti.UI.createLabel({ text:'comunica', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione4 = Ti.UI.createLabel({ text:'assenze, ferie e malattie', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona4 = Ti.UI.createImageView({ image:'/images/pulsanti/comunicazioni.png', left: 6, top: 100, height: 25 });
funzioneComunicazioni.add(titolo4);
funzioneComunicazioni.add(descrizione4);
funzioneComunicazioni.add(icona4);
/* ------------------------------------------------------ */

/* --------------------- rapportino --------------------- */
var funzioneRapportino = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 281,
    left: 185
});
containerView.add(funzioneRapportino);

var titolo5 = Ti.UI.createLabel({ text:'rapportino', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione5 = Ti.UI.createLabel({ text:'compila le presenze', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona5 = Ti.UI.createImageView({ image:'/images/pulsanti/rapportino.png', left: 6, top: 100, height: 25 });
funzioneRapportino.add(titolo5);
funzioneRapportino.add(descrizione5);
funzioneRapportino.add(icona5);
/* ------------------------------------------------------ */

/* --------------------- vendita ------------------------ */
var funzioneVendita = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 281,
    left: 334
});
containerView.add(funzioneVendita);

var titolo6 = Ti.UI.createLabel({ text:'vendita', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione6 = Ti.UI.createLabel({ text:'controlla le vendite', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona6 = Ti.UI.createImageView({ image:'/images/pulsanti/vendite.png', left: 6, top: 100, height: 25 });
funzioneVendita.add(titolo6);
funzioneVendita.add(descrizione6);
funzioneVendita.add(icona6);
/* ------------------------------------------------------ */

/* --------------------- magazzino ---------------------- */
var funzioneMagazzino = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 281,
    left: 483
});
containerView.add(funzioneMagazzino);

var titolo7 = Ti.UI.createLabel({ text:'magazzino', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione7 = Ti.UI.createLabel({ text:'gestisci il magazzino', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona7 = Ti.UI.createImageView({ image:'/images/pulsanti/magazzino.png', left: 6, top: 100, height: 25 });
funzioneMagazzino.add(titolo7);
funzioneMagazzino.add(descrizione7);
funzioneMagazzino.add(icona7);
/* ------------------------------------------------------ */

/* --------------------- ordini ------------------------- */
var funzioneOrdini = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 281,
    left: 632
});
containerView.add(funzioneOrdini);

var titolo8 = Ti.UI.createLabel({ text:'ordini', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione8 = Ti.UI.createLabel({ text:'evasi e in pending', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona8 = Ti.UI.createImageView({ image:'/images/pulsanti/ordini.png', left: 6, top: 100, height: 25 });
funzioneOrdini.add(titolo8);
funzioneOrdini.add(descrizione8);
funzioneOrdini.add(icona8);
/* ------------------------------------------------------ */

/* --------------------- ricerca ------------------------ */
var funzioneRicerca = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 430,
    left: 36
});
containerView.add(funzioneRicerca);

var titolo12 = Ti.UI.createLabel({ text:'ricerca', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione12 = Ti.UI.createLabel({ text:'farmaci, parafarmaci e ausili', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona12 = Ti.UI.createImageView({ image:'/images/pulsanti/cerca.png', left: 6, top: 100, height: 25 });
funzioneRicerca.add(titolo12);
funzioneRicerca.add(descrizione12);
funzioneRicerca.add(icona12);
/* ------------------------------------------------------ */

/* --------------------- tariffazione ------------------- */
var funzioneTariffazione = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 430,
    left: 185
});
containerView.add(funzioneTariffazione);

var titolo13 = Ti.UI.createLabel({ text:'tariffazione', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione13 = Ti.UI.createLabel({ text:'validazione e calcolo degli importi', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona13 = Ti.UI.createImageView({ image:'/images/pulsanti/ricetta.png', left: 6, top: 100, height: 25 });
funzioneTariffazione.add(titolo13);
funzioneTariffazione.add(descrizione13);
funzioneTariffazione.add(icona13);
/* ------------------------------------------------------ */

/* --------------------- aggiorna ----------------------- */
var funzioneAggiorna = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 430,
    left: 334
});
containerView.add(funzioneAggiorna);

var titolo9 = Ti.UI.createLabel({ text:'aggiorna', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione9 = Ti.UI.createLabel({ text:'allineamento del sistema', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona9 = Ti.UI.createImageView({ image:'/images/pulsanti/aggiorna.png', left: 6, top: 100, height: 25 });
funzioneAggiorna.add(titolo9);
funzioneAggiorna.add(descrizione9);
funzioneAggiorna.add(icona9);
/* ------------------------------------------------------ */

/* --------------------- contatti ----------------------- */
var funzioneContatti = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 430,
    left: 483
});
containerView.add(funzioneContatti);

var titolo10 = Ti.UI.createLabel({ text:'contatti', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione10 = Ti.UI.createLabel({ text:'indirizzi e recapiti', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona10 = Ti.UI.createImageView({ image:'/images/pulsanti/contatti.png', left: 6, top: 100, height: 25 });
funzioneContatti.add(titolo10);
funzioneContatti.add(descrizione10);
funzioneContatti.add(icona10);
/* ------------------------------------------------------ */

/* --------------------- assistenza --------------------- */
var funzioneAssistenza = Ti.UI.createView({
    backgroundColor:'#007c84',
    height: 140,
    width: 140,
    top: 430,
    left: 632
});
containerView.add(funzioneAssistenza);

var titolo11 = Ti.UI.createLabel({ text:'assistenza', color: '#fff', font:{ fontSize: 22, fontFamily: 'SegoeUI-Light' }, top: 4, left: 6 });
var descrizione11 = Ti.UI.createLabel({ text:'chiama il numero verde', color: '#fff', font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' }, top: 30, left: 6 });
var icona11 = Ti.UI.createImageView({ image:'/images/pulsanti/assistenza.png', left: 6, top: 100, height: 25 });
funzioneAssistenza.add(titolo11);
funzioneAssistenza.add(descrizione11);
funzioneAssistenza.add(icona11);
/* ------------------------------------------------------ */
