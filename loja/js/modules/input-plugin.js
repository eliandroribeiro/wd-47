(function($) {
'use strict';

	$.fn.inputNumerico = function(seletor) {
		return this.on('input', seletor, function(event) {
			var naoDigitos = /\D/g;
			if (naoDigitos.test(this.value)) {
				this.value = this.value.replace(naoDigitos, '');
				$(this).trigger('input');
			}
		});
	};

})(jQuery);
