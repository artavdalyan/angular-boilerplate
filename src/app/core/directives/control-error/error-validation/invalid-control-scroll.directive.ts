import { Directive, ElementRef, HostListener, inject, input, Optional } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { debounceTime, fromEvent, take } from 'rxjs';
import {
  InvalidControlScrollContainerDirective
} from "@core/directives/control-error/error-validation/invalid-control-scroll-container.directive";

@Directive({
  selector: '[appInvalidControlScroll]',
})
export class InvalidControlScrollDirective {
  labelOffset = input(150);

  private get _containerEl(): HTMLElement | Window {
    return this.scrollContainerDir ? this.scrollContainerDir.containerEl : window;
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private formGroupDir: FormGroupDirective,
    @Optional()
    private scrollContainerDir?: InvalidControlScrollContainerDirective,
  ) {}

  @HostListener('ngSubmit')
  onSubmit(): void {
    if (this.formGroupDir.control.invalid) {
      this._scrollToFirstInvalidControl();
    }
  }

  private _scrollToFirstInvalidControl(): void {
    let firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector('.ng-invalid')!;

    if (firstInvalidControl.hasChildNodes()) {
      const groupInvalidControls = firstInvalidControl.querySelectorAll('.ng-invalid');

      if (groupInvalidControls.length > 0) {
        firstInvalidControl = groupInvalidControls[0] as HTMLElement;
      }
    }

    firstInvalidControl.focus();

    this._containerEl.scroll({
      top: this._getTopOffset(firstInvalidControl),
      left: 0,
      behavior: 'smooth',
    });

    fromEvent(this._containerEl, 'scroll')
      .pipe(debounceTime(100), take(1))
      .subscribe(() => {
        firstInvalidControl.focus();
      });
  }

  private _getTopOffset(controlEl: HTMLElement): number {
    const controlElTop = controlEl.getBoundingClientRect().top;

    if (this.scrollContainerDir) {
      const containerTop = (this._containerEl as HTMLElement).getBoundingClientRect().top;
      const absoluteControlElTop = controlElTop + (this._containerEl as HTMLElement).scrollTop;

      return absoluteControlElTop - containerTop - this.labelOffset();
    }

    const absoluteControlElTop = controlElTop + window.scrollY;

    return absoluteControlElTop - this.labelOffset();
  }
}
