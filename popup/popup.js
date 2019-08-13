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
		{"code": "document.querySelector('body > div.body > div.sidebar-container > div.sidebar-view > div.sidebar-panel-view._name_search._show-search._view_full > div.sidebar-panel-view__content > div > div > div > div > div.scroll__content > div > div:nth-child(2) > div > div > div.toponym-card-title-view__coords > div > div > div > div > div').click();"},
		function(result){			
			console.log(result);
		}					
	);
}
