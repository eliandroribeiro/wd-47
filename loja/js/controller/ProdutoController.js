function ProdutoController($scope) {
	'use strict';

	var produtos = [
		{
			id : 1, 
			codigo: "#00AMT01", 
			nome : "FURLAN MISTERY CARDIGAN", 
			imagem: "img/produto-1.jpg", 
			preco: 120.00, 
			quantidade: 1
		},
		{
			id : 2, 
			codigo: "#00AMT02", 
			nome : "ASOS MARITAL COLLAR CARDIGAN", 
			imagem : "img/produto-2.jpg", 
			preco : 74.00, 
			quantidade: 1
		},
		{
			id : 3, 
			codigo: "#00AMT03", 
			nome : "AOS MERINO SHAWL COLLAR CARDIGAN", 
			imagem : "img/produto-3.jpg", 
			preco : 109.00, 
			quantidade: 1
		}
	];

	$scope.produtos = produtos;
	$scope.fm = formatadorMoeda;
	$scope.totalizar = function() {
		var total = 0;
		for (var i = 0; i < produtos.length; i++) {
			total += produtos[i].preco * produtos[i].quantidade;
		}
		return total
	};
}
