function SudsClient(_options) {
    function isBrowserEnvironment() {
        try {
            return window && window.navigator ? true : false;
        } catch (e) {
            return false;
        }
    }
    function isAppceleratorTitanium() {
        try {
            return Titanium ? true : false;
        } catch (e) {
            return false;
        }
    }
    function extend(original, extended) {
        for (var key in extended || {}) original.hasOwnProperty(key) && (original[key] = extended[key]);
        return original;
    }
    function isArray(obj) {
        return "[object Array]" == Object.prototype.toString.call(obj);
    }
    function getXHR() {
        var xhr;
        isBrowserEnvironment() ? xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP") : isAppceleratorTitanium() && (xhr = Titanium.Network.createHTTPClient());
        return xhr;
    }
    function xmlDomFromString(_xml) {
        var xmlDoc = null;
        if (isBrowserEnvironment()) if (window.DOMParser) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(_xml, "text/xml");
        } else {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML(_xml);
        } else isAppceleratorTitanium() && (xmlDoc = Titanium.XML.parseString(_xml));
        return xmlDoc;
    }
    function convertToXml(_obj, namespacePrefix) {
        var xml = "";
        if (isArray(_obj)) for (var i = 0; _obj.length > i; i++) xml += convertToXml(_obj[i], namespacePrefix); else for (var key in _obj) {
            xml += namespacePrefix && namespacePrefix.length ? "<" + namespacePrefix + ":" + key + ">" : "<" + key + ">";
            xml += isArray(_obj[key]) || "object" == typeof _obj[key] && null != _obj[key] ? convertToXml(_obj[key]) : _obj[key];
            xml += namespacePrefix && namespacePrefix.length ? "</" + namespacePrefix + ":" + key + ">" : "</" + key + ">";
        }
        return xml;
    }
    var config = extend({
        endpoint: "http://localhost",
        targetNamespace: "http://localhost",
        envelopeBegin: '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:ns0="PLACEHOLDER" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>',
        envelopeEnd: "</soap:Body></soap:Envelope>"
    }, _options);
    this.invoke = function(_soapAction, _body, _callback) {
        var body = _body;
        if ("string" != typeof body) {
            body = "<ns0:" + _soapAction + ">";
            body += convertToXml(_body, "ns0");
            body += "</ns0:" + _soapAction + ">";
        }
        var ebegin = config.envelopeBegin;
        config.envelopeBegin = ebegin.replace("PLACEHOLDER", config.targetNamespace);
        var soapAction = "";
        soapAction = config.targetNamespace.lastIndexOf("/") != config.targetNamespace.length - 1 ? config.targetNamespace + "/" + _soapAction : config.targetNamespace + _soapAction;
        var xhr = getXHR();
        xhr.onload = function() {
            _callback.call(this, xmlDomFromString(this.responseText));
        };
        xhr.open("POST", config.endpoint);
        xhr.setRequestHeader("Content-Type", "text/xml");
        xhr.setRequestHeader("SOAPAction", soapAction);
        xhr.send(config.envelopeBegin + body + config.envelopeEnd);
    };
}