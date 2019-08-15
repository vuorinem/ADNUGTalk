import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./component/my-component'),
    PLATFORM.moduleName('./events-dom/calculator'),
  ]);
}
