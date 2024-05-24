import { Directive, ElementRef, EventEmitter, inject, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[click.stop]',
})
export class StopPropagationDirective implements OnInit, OnDestroy {
  @Output('click.stop') stopPropEvent = new EventEmitter();

  removeListener!: () => void;

  private renderer2 = inject(Renderer2);

  private elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.removeListener = this.renderer2.listen(this.elementRef.nativeElement, 'click', (event: MouseEvent): void => {
      event.stopPropagation();
      this.stopPropEvent.emit(event);
    });
  }

  ngOnDestroy(): void {
    this.removeListener();
  }
}
