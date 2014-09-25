+function($) {
'use strict';

	function incluirSugestao(event) {
		var inputSugestao = $('input[type=text]');
		var sugestao = inputSugestao.val().trim();
	
		if (sugestao) {
			var sugestaoExistente = $('.sugestoes li').filter(function() {
				return $(this).find('.sugestao').text().toLowerCase() == sugestao.toLowerCase();
			});
		
			if (sugestaoExistente.length > 0) {
				var votos = sugestaoExistente.data('votos') + 1;
				sugestaoExistente.data('votos', votos).find('.votos').text(votos + ' votos');
			} else {
				var nomeSugestao = $('<span>').addClass('sugestao').text(sugestao);
				var votos = $('<span>').addClass('votos').text('1 voto');
				$('<li>').data('votos', 1).append(nomeSugestao).append(votos).appendTo('.sugestoes');
			}
		
			inputSugestao.val('').focus();
			
			// TODO desabilitar (:disable)
//			$('input[type=button]').addClass(':disabled');
			//$('input[type=button]').toggle();
		}
	}

	$('input[type=button]').click(incluirSugestao);
	//.addClass(':disabled');

	$('input[type=text]').on('keyup', function(event) {
		var sugestao = $(this).val().trim();
		var botaoIncluir = $('input[type=button]');
	
		if (sugestao) {
			//botaoIncluir.show();
			//botaoIncluir.removeClass(':disabled');
		
			if (event.keyCode == 13) {
				incluirSugestao(event);
			}
		} else {
			//botaoIncluir.hide();
			//botaoIncluir.addClass(':disabled');
		}
	});

	$('.sugestoes').on('dblclick', 'li', function(event) {
		$(this).remove();
	});
	
	$('input[type=text]').autocomplete({
		source : function(entrada, devolveResposta) {
			var sugestoesParecidas = [];
			var novaSugestao = new RegExp('^' + entrada.term, 'i');
			
			$('.sugestao').each(function() {
				var sugestaoExistente = $(this).text();
				if (novaSugestao.test(sugestaoExistente)) {
					sugestoesParecidas.push(sugestaoExistente);
				}
			});
			
			devolveResposta(sugestoesParecidas);
		}
	});

}(jQuery);
