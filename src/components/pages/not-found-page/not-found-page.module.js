import angular from 'angular';
import { NotFoundPageComponent } from './not-found-page.component';

export const NotFoundPageModule = angular
	.module('components.pages.not-found-page', [])
  .component('notFoundPage', NotFoundPageComponent)
  .name;
