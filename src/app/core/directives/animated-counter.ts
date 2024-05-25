import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  NgZone,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[countUp]',
  standalone: true,
})
export class CountUpDirective implements OnChanges {
  countUp: CountUp | undefined;

  // the value you want to count to
  @Input('countUp') endVal: number | undefined;

  @Input() options: CountUpOptions = {};

  @Input() reanimateOnClick = true;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() complete = new EventEmitter<void>();

  // Re-animate if preference is set.
  @HostListener('click')
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: NonNullable<unknown>,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    // don't animate server-side (universal)
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const { options, endVal } = changes;

    if (endVal.currentValue !== undefined) {
      if (this.countUp === undefined) {
        this.initAndRun();
      } else {
        this.zone.runOutsideAngular(() => {
          this.countUp!.update(this.endVal!);
        });
      }
    } else if (options.currentValue !== undefined) {
      this.initAndRun();
    }
  }

  animate(): void {
    this.zone.runOutsideAngular(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.countUp!.reset();
      this.countUp!.start(() => {
        this.zone.run(() => {
          this.complete.emit();
        });
      });
    });
  }

  private initAndRun(): void {
    this.zone.runOutsideAngular(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.countUp = new CountUp(this.el.nativeElement, this.endVal!, this.options);

      if (!this.options.enableScrollSpy) {
        this.animate();
      }
    });
  }
}
