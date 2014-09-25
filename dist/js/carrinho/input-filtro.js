+function() { // IIFE
'use strict';

	var inputs = document.querySelectorAll('#carrinho input');

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('input', function(event) {
			var naoNumeros = /\D/g;
			if (naoNumeros.test(this.value)) {
				this.value = this.value.replace(naoNumeros, '');
			}
		});
	}
}();
