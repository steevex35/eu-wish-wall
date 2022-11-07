import { PLATFORM } from 'aurelia-pal';
import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;
   
  
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'OneTec WishWall';

    config.map([
      { route: ['home'],name: 'add',moduleId: PLATFORM.moduleName("./components/add_messages/add_messages"), title:'Home' },
      { route: 'add',name: 'add_messages',moduleId: PLATFORM.moduleName("./components/add_messages/add_messages"), title: 'Add' },
      { route: 'save',name: 'save',moduleId: PLATFORM.moduleName("./components/saveMessage/saveMessage"), title: 'save' },
      { route: 'erase',name: 'erase',moduleId: PLATFORM.moduleName("./components/erase/erase"), title: 'erase' },
      { route: ['','display'],name: 'display_messages',moduleId: PLATFORM.moduleName("./components/display_messages/display_messages"), title: 'Display' },
      
    ]);
  }

}
