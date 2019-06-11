import angular from 'angular';
import _arrayMap from 'lodash-es/_arrayMap';
import ocLazyLoad from 'oclazyload';
import uiRouter from '@uirouter/angularjs';

export const AppRoutingModule = angular
  .module('app.routing', [uiRouter, ocLazyLoad])
  .config([
    '$interpolateProvider',
    $interpolateProvider => {
      $interpolateProvider.startSymbol('<%');
      $interpolateProvider.endSymbol('%>');
    },
  ])
  .config([
    '$stateProvider',
    '$locationProvider',
    '$urlServiceProvider',
    ($stateProvider, $locationProvider, $urlServiceProvider) => {
      const states = [
        {
          name: 'home',
          url: '/',
          component: 'homePage',
          lazyLoad: transition => {
            const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
            return import('@components/pages/home-page/home-page.module').then(mod =>
              $ocLazyLoad.inject(mod.HomePageModule)
            );
          },
        },
        {
          name: 'error',
          url: '/error/:type',
          component: 'errorPage',
          lazyLoad: transition => {
            const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
            return import('@components/pages/error-page/error-page.module').then(mod =>
              $ocLazyLoad.inject(mod.ErrorPageModule)
            );
          },
        },
      ];

      _arrayMap(states, state => $stateProvider.state(state));

      $urlServiceProvider.rules.when('', '/');
      $urlServiceProvider.rules.otherwise('/error/404');
      $locationProvider.html5Mode(true);
    },
  ]).name;
