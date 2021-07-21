function copyTextToClipboard(text) {

	navigator.clipboard.writeText(text)
		.then(() => {
			console.log('clipboard.writeText: success');
		})
		.catch(err => {
			console.log('clipboard.writeText: Something went wrong', err);
		});

}

window.onload = () => {
	const url = window.document.URL;
	const begin = url.indexOf('/?ll=') + 5;
	const end = url.indexOf('&', begin);
	const gps = url.slice(begin, end).replace('%2C', ' ');
	copyTextToClipboard(gps);
}