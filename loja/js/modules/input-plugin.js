(function($) {
'use strict';

	$.fn.inputNumerico = function() {
		return this.on('input', function(event) {
			var naoDigitos = /\D/g;
			if (naoDigitos.test(this.value)) {
				this.value = this.value.replace(naoDigitos, '');
			}
		});
	};

})(jQuery);
