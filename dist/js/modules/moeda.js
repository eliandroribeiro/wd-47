var formatadorMoeda = (function() {
'use strict';

	var simbolo = 'R$ ';

	return {
		numberParaReal : function(numero) {
			return simbolo + numero.toFixed(2).replace(".", ",");
		},

		realParaNumber : function(texto) {
			return parseFloat(texto.replace(simbolo, "").replace(",", "."));
		}
		,teste : function(){return 'retorno';}
	};

})();

if (typeof module !== 'undefined')
	module.exports = formatadorMoeda;
