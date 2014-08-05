Ti.include('base_controller.js');
titoloLabel.text = 'Badge';

var titoloBadge = Ti.UI.createLabel({
    text: 'Profilo e Timbratura',
	color: '#7f9296',
	font:{ fontSize: 20, fontFamily: 'SegoeUI-Light' },
    top: 10, left: 10, right: 10
});
containerView.add(titoloBadge);

//------------------ Informazioni Utente ---------------------//
var utenteView = Ti.UI.createView({
    backgroundColor:'#fff',
    layout: 'composite',
    top: 49,
    left: 10,
    right: 10,
    height: 120
});
containerView.add(utenteView);

var imageUser = Ti.UI.createImageView({
  left: 10,
  top: 10,
  width: 100,
  borderWidth: 1,
  borderColor: '#e7e8ea'
});
utenteView.add(imageUser);

var scattaButton = Ti.UI.createButton({
  borderStyle: "Titanium.UI.INPUT_BORDERSTYLE_NONE",
  backgroundColor: "#000",
  title:'carica foto',
  color: '#ffffff',
  font:{
	fontSize:14,
	fontFamily: 'SegoeUI-Light'
  },
  opacity: 0.4,
  top: 85,
  left: 10,
  width: 100,
  height: 25
});
scattaButton.addEventListener('click', function(){
	dialog.show();
});
utenteView.add(scattaButton);

var dialog = Titanium.UI.createOptionDialog({
    title: 'Carica la tua foto avatar',
    options: ['Scatta una foto','Scegli foto esistente','Elimina foto esistente', 'Annulla'],
    cancel:3
});
dialog.addEventListener('click', function(e) {
    if(e.index == 0){
        Titanium.Media.showCamera({
            success:function(event){
                var image = event.media; 
                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
                    Ti.App.Properties.setString("userFoto", image.nativePath);
                }
            	ImpostaUserFoto();
			},
            cancel:function(){
                //do somehting if user cancels operation
            },
            error:function(error){
                var a = Titanium.UI.createAlertDialog({title:'Errore'});
                if (error.code == Titanium.Media.NO_CAMERA){
                    a.setMessage('Il dispositivo non possiede la fotocamera');
                } else {
                    a.setMessage('Errore: ' + error.code);
                }
                a.show();
            },
            allowImageEditing:true,
            saveToPhotoGallery:true
        });
    } else if(e.index == 1) {
        Titanium.Media.openPhotoGallery({
            success:function(event) {
                var image = event.media; 
                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    Ti.App.Properties.setString("userFoto", image.nativePath); 
                }   
            	ImpostaUserFoto();
			},
            cancel:function() {
                //user cancelled the action fron within
                //the photo gallery
            }
        });
    } else if(e.index == 2) {
        Ti.App.Properties.setString("userFoto", "/images/default-no-image.png"); 
        ImpostaUserFoto();
    } else {
        //cancel was tapped
        //user opted not to choose a photo
    }
});

function ImpostaUserFoto(){
	imageUser.image = Ti.App.Properties.getString("userFoto", "/images/default-no-image.png"); 
}
ImpostaUserFoto();

var utenteDetail = Ti.App.Properties.getObject('userLogged');
utenteView.add(Ti.UI.createLabel({
    text: 'utente loggato:',
	color: '#b0b0b0',
	font:{ fontSize: 12, fontFamily: 'SegoeUI-Light' },
    top: 8, left: 116
}));
utenteView.add(Ti.UI.createLabel({
    text: (utenteDetail==null) ? '--' : utente.SIFA_UTEL_NOME_UTENTE,
	color: '#36727c',
	font:{ fontSize: 18, fontFamily: 'SegoeUI-Light' },
    top: 20, left: 120
}));

utenteView.add(Ti.UI.createLabel({
    text: 'indirizzo email:',
	color: '#b0b0b0',
	font:{ fontSize: 12, fontFamily: 'SegoeUI-Light' },
    top: 42, left: 116
}));
utenteView.add(Ti.UI.createLabel({
    text: (utenteDetail==null) ? '--' : utente.SIFA_UTEL_EMAIL,
	color: '#ff9a58',
	font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' },
    top: 56, left: 120
}));

utenteView.add(Ti.UI.createLabel({
    text: 'ruolo nel sistema:',
	color: '#b0b0b0',
	font:{ fontSize: 12, fontFamily: 'SegoeUI-Light' },
    top: 76, left: 116
}));
var ruolo = 'Utente normale';
if(utenteDetail!=null && utente.SIFA_UTEL_FLAG_ADMIN==1){
	ruolo = 'Amministratore centrale';
} else if(utenteDetail!=null && utente.SIFA_UTEL_FLAG_ADMIN==2){
	ruolo = 'Amministratore locale';
}
utenteView.add(Ti.UI.createLabel({
    text: ruolo,
	color: '#ff9a58',
	font:{ fontSize: 14, fontFamily: 'SegoeUI-Light' },
    top: 90, left: 120
}));

//------------------ Informazioni Reparto ---------------------//




ctrl.open({ modal:true });