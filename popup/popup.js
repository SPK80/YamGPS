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
}