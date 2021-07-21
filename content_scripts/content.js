function fallbackCopyTextToClipboard(text) {
	var textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Fallback: Copying text command was ' + msg);
	} catch (err) {
		console.error('Fallback: Oops, unable to copy', err);
	}

	document.body.removeChild(textArea);
}

window.onload = () => {
	// document.addEventListener('DOMContentLoaded', () => {
	const url = window.document.URL;
	const begin = url.indexOf('/?ll=') + 5;
	const end = url.indexOf('&', begin);
	const gps = url.slice(begin, end).replace('%2C', ' ');
	fallbackCopyTextToClipboard(gps);
}