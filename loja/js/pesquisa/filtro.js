(function($) {
'use strict';

	$('.filtro input').keyup(function(event) {
		var procurado = $(this).val().trim();
		var lis = $('#carrinho li');
	
		if (procurado) {
			lis.hide().find('h2, span').filter(function() {
				var conteudo = $(this).text();
				var regex = new RegExp(procurado, 'i');
				return regex.test(conteudo);
			}).closest('li').show();
		} else {
			lis.show();
		}
	});

})(jQuery):
