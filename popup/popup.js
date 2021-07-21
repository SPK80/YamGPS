document.addEventListener('DOMContentLoaded', () => {
	const inpField = document.getElementById('addressString');
	inpField.focus();
	inpField.addEventListener('keyup', onKeyUp);
})

function onKeyUp(e) {
	const key = e.keyCode;
	if (key == 13) {
		openYandexMaps();
	}
}

function openYandexMaps() {
	const sity = 'moscow';
	const addressString = document.getElementById('addressString').value.toString();
	const _url = `https://yandex.ru/maps/${sity}/?text=${addressString}`;
	chrome.tabs.create({ url: _url })
	// gpsToClipboard();
}

// function gpsToClipboard() {

// 	chrome.tabs.executeScript(
// 		null,
// 		{ "code": "document.querySelector('body > div.body > div.sidebar-container > div.sidebar-view._shown > div.sidebar-view__panel > div > div > div > div > div > div > div.scroll__content > div > div:nth-child(2) > div > div > div.toponym-card-title-view__coords > div > div > div > div > div > span > svg > path').click();" },
// 		function (result) {
// 			console.log(result);
// 		}
// 	);
// }