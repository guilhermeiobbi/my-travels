angular.module('mytrips')
	.controller('ViagemController', function($scope, recursoViagem, $routeParams, cadastroDeViagens) {

	$scope.viagem = {};
	$scope.mensagem = '';

	if($routeParams.viagemId) {
		recursoViagem.get({viagemId: $routeParams.viagemId}, function(viagem) {
			$scope.viagem = viagem; 
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter a viagem'
		});
	}

	$scope.submeter = function() {

		if ($scope.formulario.$valid) {
			$scope.formulario.$submitted = false;

			cadastroDeViagens.cadastrar($scope.viagem)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.viagem = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});
		}
	};
});