import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInvalidControlScrollContainer]',
})
export class InvalidControlScrollContainerDirective {
  readonly containerEl: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {
    this.containerEl = this.el.nativeElement;
  }
}
