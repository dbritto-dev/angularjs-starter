import './home-page.component.css';
import HomePageTemplate from './home-page.component.pug';

class HomePageController {
  static $inject = ['__INITIAL_STATE__'];

  constructor(__INITIAL_STATE__) {
    this.__INITIAL_STATE__ = __INITIAL_STATE__;
  }

  $onInit() {
    console.log(this.__INITIAL_STATE__);
  }
}

export const HomePageComponent = {
  bindings: {},
  template: HomePageTemplate,
  controller: HomePageController,
};
