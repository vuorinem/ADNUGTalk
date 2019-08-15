import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'ADNUG Examples';
    config.map([
      {
        route: '',
        name: 'home',
        moduleId: PLATFORM.moduleName('./views/home'),
        title: 'Home'
      },
      {
        route: 'component',
        name: 'component',
        moduleId: PLATFORM.moduleName('./views/component'),
        title: 'title'
      },
      {
        route: 'events-dom',
        name: 'events-dom',
        moduleId: PLATFORM.moduleName('./views/events-dom'),
        title: 'title'
      }
    ]);
  }
}
