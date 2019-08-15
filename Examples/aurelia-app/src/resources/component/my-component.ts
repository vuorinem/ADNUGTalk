import { bindable, bindingMode } from "aurelia-framework";

export class MyComponent {
  @bindable private name: string;

  // One-time bindables will not create ovbservers
  @bindable({ defaultBindingMode: bindingMode.oneTime }) private day: string;

  // From-view bindables don't take value from the parent component
  @bindable({ defaultBindingMode: bindingMode.fromView }) private myMood: string;

  private moods = [
    'Happy', 'Sad', 'Tired'
  ];
}
