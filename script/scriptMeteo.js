var error = document.getElementById("error");
var meteo = document.getElementById('meteo');
var getPosX;
var getPosY;
var lien_meteo;
var api;
function geolocation() {
	if(navigator.geolocation) {
		var position = navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		error.innerHTML = "Le navigateur ne supporte pas la géolocalisation";
	}
}

function getXMLHttpRequest() {
    var xmlhttp = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    } else {
        xmlhttp = new XMLHttpRequest();
    }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    return xmlhttp;
}

function showPosition(position) {
    getPosX = position.coords.latitude; 
    getPosY = position.coords.longitude;
    lien_meteo = "http://www.prevision-meteo.ch/services/json/lat=" + getPosX + "lng=" + getPosY;
    api = getXMLHttpRequest();
    api.open("get", lien_meteo, true);
    api.send(null);
    if(api.statusText = "OK"){
    	meteo.innerHTML = api.response['hour'];
    	console.log(api.response['hour']);
    	console.log(api.response);
    }

}