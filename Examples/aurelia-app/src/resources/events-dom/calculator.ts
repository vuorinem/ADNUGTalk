import { autoinject } from "aurelia-framework";

@autoinject
export class Calculator {
  private numberA: number = 0;
  private numberB: number = 0;
  private answer: string = '';

  private score: number = 0;

  constructor(private element: Element) {
  }

  private attached() {
    this.reset();
  }

  private onCheck() {
    if (this.answer === '') {
      return;
    }

    const answer = parseInt(this.answer);
    let result: 'right' | 'wrong';

    if (this.numberA + this.numberB === answer) {
      this.score++;
      result = 'right';
    } else {
      this.score--;
      result = 'wrong';
    }

    const event = new CustomEvent('answer', {
      bubbles: true,
      detail: {
        answer: answer,
        result: result,
      }
    });

    this.element.dispatchEvent(event);

    this.reset();
  }

  private reset() {
    this.numberA = Math.round(Math.random() * 10);
    this.numberB = Math.round(Math.random() * 10);
    this.answer = '';
  }

  private onComplete() {
    const event = new CustomEvent('complete', {
      bubbles: true,
      detail: {
        score: this.score,
      }
    });

    this.element.dispatchEvent(event);
  }
}
