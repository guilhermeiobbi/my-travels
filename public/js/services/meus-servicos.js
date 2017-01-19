angular.module('meusServicos', ['ngResource'])
	.factory('recursoViagem', function($resource) {

		return $resource('http://localhost:8080/api/v1/viagens/:viagemId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeViagens", function(recursoViagem, $q) {
		var service = {};
		service.cadastrar = function(viagem) {
			return $q(function(resolve, reject) {

				if(viagem.id) {
					recursoViagem.update({viagemId: viagem.id}, viagem, function() {
						resolve({
							mensagem: 'Viagem ' + viagem.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a viagem ' + viagem.titulo
						});
					});

				} else {
					recursoViagem.save(viagem, function() {
						resolve({
							mensagem: 'Viagem ' + viagem.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a viagem ' + viagem.titulo
						});
					});
				}
			});
		};
		return service;
	});