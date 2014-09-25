(function(fm) { // IIFE
'use strict';

	var inputs = document.querySelectorAll('#carrinho input');

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('input', function(event) {
			var li = this.parentNode.parentNode.parentNode;
			var spans = li.querySelectorAll('span');
			var spanValorUnitario = spans[0];
			console.log('spanValorUnitario: %s', spanValorUnitario.textContent);
			var spanValorTotal = spans[1];
			var quantidade = parseInt(this.value) || 0;
			var valorUnitario = fm.realParaNumber(spanValorUnitario.textContent);
			var novoTotal = quantidade * valorUnitario;
			spanValorTotal.textContent = fm.numberParaReal(novoTotal);
		});
	}

})(formatadorMoeda);
