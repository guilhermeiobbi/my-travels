angular.module('mytrips')
    .controller('ViagensController', function($scope, recursoViagem) {
	
	$scope.viagens = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	/**
	 *  Busca lista de viagens
	 */
	recursoViagem.get(function(response) {
		console.log(response);
		$scope.viagens = response.data;
	}, function(erro) {
		console.log(erro);
	});

	/**
	 * Remove viagem selecionada
	 */
	$scope.remover = function(viagem) {
		recursoViagem.delete({viagemId: viagem.id}, function() {
			var indiceDaViagem = $scope.viagens.indexOf(viagem);
			$scope.viagens.splice(indiceDaViagem, 1);
			$scope.mensagem = 'Viagem ' + viagem.titulo + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a viagem ' + viagem.titulo;
		});
	};

});