import './error-page.component.css';
import ErrorPageTemplate from './error-page.component.pug';

class ErrorPageController {
  static $inject = ['$stateParams', '__INITIAL_STATE__'];

  constructor($stateParams, __INITIAL__STATE__) {
    this.$stateParams = $stateParams;
    this.__INITIAL__STATE__ = __INITIAL__STATE__;
  }

  $onInit() {
    const { type } = this.$stateParams;

    this.type = type;

    console.log(this);
  }
}

export const ErrorPageComponent = {
  bindings: {},
  template: ErrorPageTemplate,
  controller: ErrorPageController,
};
