import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject
export class EventsDom {
  constructor(private router: Router) {
  }

  private onAnswer(event: CustomEvent) {
    alert(`Your answer ${event.detail.answer} was ${event.detail.result}`);
  }

  private onComplete(event: CustomEvent) {
    alert(`Your final score was ${event.detail.score}`);

    this.router.navigateToRoute('home');
  }
}
