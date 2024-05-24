import { Directive, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, Subject } from 'rxjs';

@UntilDestroy()
@Directive({
  selector: '[click.debounce]',
})
export class ClickDebounceDirective implements OnInit {
  @Input() debounceTime = 300;

  @Output('click.debounce') debounceClick = new EventEmitter();

  private clicks = new Subject();

  @HostListener('click', ['$event'])
  clickEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(true);
  }

  ngOnInit(): void {
    this.clicks.pipe(debounceTime(this.debounceTime), untilDestroyed(this)).subscribe(e => {
      this.debounceClick.emit(e);
    });
  }
}
