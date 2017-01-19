angular.module('mytravels')
    .controller('ViagensController', function($scope, recursoViagem) {
	
	$scope.viagens = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoViagem.query(function(viagens) {
		console.log(viagens);
		$scope.viagens = viagens;
	}, function(erro) {
		console.log(erro);
	});

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