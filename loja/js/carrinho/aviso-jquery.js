(function($) { // IIFE
'use strict';

	var textoEsconde = 'Esconder';
	var botao = $('<button>').attr('id', 'botaoaviso').text(textoEsconde);

	botao.click(function(event) {
		var div = $(this).next();
		div.toggle();
	
		if (div.is(':visible')) {
			$(this).text(textoEsconde);
		} else {
			$(this).text('Aviso');
		}
	}).prependTo('#principal');

})(jQuery);
