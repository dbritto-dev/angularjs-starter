import angular from 'angular';
import { HomePageComponent } from './home-page.component';

export const HomePageModule = angular
  .module('components.pages.error-page', [])
  .component('homePage', HomePageComponent).name;
