function RecomendacaoController($scope, $http) {
	'use strict';
	
	function carregarProdutos() {
		$http
			.jsonp('http://mirrorfashion.caelum.com.br/produtos?callback=JSON_CALLBACK')
			.success(function(retorno) {
				$scope.produtos = retorno.produtos;
			});
	}
	
	carregarProdutos();
	setInterval(carregarProdutos, 5000);
}
