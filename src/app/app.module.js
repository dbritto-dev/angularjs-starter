import angular from 'angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

window.__INITIAL_STATE__ = window.__INITIAL_STATE__ || {};

export const AppModule = angular
  .module('app', [AppRoutingModule])
  .constant('__INITIAL_STATE__', window.__INITIAL_STATE__)
  .component('app', AppComponent)
  .name;
