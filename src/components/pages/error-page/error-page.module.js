import angular from 'angular';
import { ErrorPageComponent } from './error-page.component';

export const ErrorPageModule = angular
	.module('components.pages.error-page', [])
  .component('errorPage', ErrorPageComponent)
  .name;
