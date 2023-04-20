const keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

; (function init() {
	let out = '';
	for (let i = 0; i < keyboard.length; i++) {
		out += '<div class="k-key" data = "' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
	}
	console.log(out);
	document.querySelector('#keyboard').innerHTML = out;
})()

let keys = document.querySelectorAll('.k-key');

document.addEventListener('keypress', function(e) {
	keys.forEach(function (elem) {
		elem.classList.remove('active');
	})
	document.querySelector('.k-key[data ="' + e.keyCode + '"]').classList.add('active');
})

keys.forEach(function (elem) {
	elem.addEventListener('click', function (e) {
		keys.forEach(function (elem) {
			elem.classList.remove('active');
		});
		let code = this.getAttribute('data');
		this.classList.add('active');
		console.log(code);
	})
})



