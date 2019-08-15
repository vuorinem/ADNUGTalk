import { autoinject } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { RoutableComponentActivate, RoutableComponentDeactivate } from "aurelia-router";

const MyEventName = 'my-event';

@autoinject
export class EventsPubsub implements RoutableComponentActivate, RoutableComponentDeactivate {
  private isHighlighted: boolean = false;
  private subscription: Subscription;

  constructor(private eventAggregator: EventAggregator) {
  }

  public activate() {
    this.subscription = this.eventAggregator.subscribe(MyEventName,
      () => this.isHighlighted = !this.isHighlighted);
  }

  public deactivate() {
    this.subscription.dispose();
  }

  private publishEvent() {
    this.eventAggregator.publish(MyEventName);
  }
}
