import angular from 'angular';
import { ErrorPageComponent } from './error-page.component';

export const ErrorPageModule = angular
	.module('app.pages.error-page', [])
  .component('errorPage', ErrorPageComponent)
  .name;
