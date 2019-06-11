import HomePageTemplate from './home-page.component.pug';

class HomePageController {
  static $inject = ['__INITIAL_STATE__'];

  constructor(__INITIAL_STATE__) {
    this.__INITIAL_STATE__ = __INITIAL_STATE__;
  }

  $onInit() {}
}

export const HomePageComponent = {
  bindings: {},
  templateUrl: HomePageTemplate,
  controller: HomePageController,
};
