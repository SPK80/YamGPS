 document.addEventListener('DOMContentLoaded', function() {
	
	document.getElementById('addressString').addEventListener('keyup', onKeyUp);
})

function onKeyUp(e){
	var key = e.keyCode;
	console.log(key);	
	if (key == 13){	
		console.log("getGPS");
		getGPS();
	}	
}

function getGPS(){
	var addressString = document.getElementById('addressString').value.toString();	
	var _url = "https://yandex.ru/maps/213/moscow/?text=" + addressString;
	console.log(_url);
	chrome.tabs.create({url: _url})	
	gpsToClipboard();
}

function gpsToClipboard(){
	
	chrome.tabs.executeScript(	
		null, 
		{"code": "document.querySelector('body > div.body > div.sidebar-container > div.sidebar-view._shown > div.sidebar-view__panel > div > div > div > div > div > div > div.scroll__content > div > div:nth-child(2) > div > div > div.toponym-card-title-view__coords > div > div > div > div > div > span > svg > path').click();"},
		function(result){			
			console.log(result);
		}					
	);
}
