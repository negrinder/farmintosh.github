Titanium.include('suds.js');

var suds = new SudsClient({ 
  endpoint: 'http://wsf.cdyne.com/WeatherWS/Weather.asmx?WSDL',
  targetNamespace: 'http://ws.cdyne.com/' 
});

var callParams = {
	ZIP:'33325'
};

function doClick(e) {
	suds.invoke("GetCityForecastByZIP", callParams, function(xmlDoc) {
	    var response = xmlDoc.documentElement.getElementsByTagName('GetCityForecastByZIPResult');
	    alert(response);
	});
}

$.index.open();
