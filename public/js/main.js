angular.module('mytrips', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'ViagensController'
		});

		$routeProvider.when('/viagens/new', {
			templateUrl: 'partials/viagem.html',
			controller: 'ViagemController'
		});

		$routeProvider.when('/viagens/edit/:viagemId', {
			templateUrl: 'partials/viagem.html',
			controller: 'ViagemController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});