import angular from 'angular';
import ocLazyLoad from 'oclazyload';
import uiRouter from '@uirouter/angularjs';

export const AppRoutingModule = angular
  .module('app.routing', [uiRouter, ocLazyLoad])
  .config(['$interpolateProvider', ($interpolateProvider) => {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
  }])
	.config([
		'$stateProvider',
		'$urlServiceProvider',
		($stateProvider, $urlServiceProvider) => {
			$urlServiceProvider.rules.otherwise('/error/404');
			$stateProvider.state('error', {
				url: '/error/:type',
				component: 'errorPage',
				lazyLoad: (transition) => {
					const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
					return import('@components/pages/error-page/error-page.module').then(
						(mod) => $ocLazyLoad.inject(mod.ErrorPageModule)
					);
				},
			});
		},
  ])
  .name;
