import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
} from '@angular/core';
import { HashMap } from "@ngneat/transloco";

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent {
  valText!: string;

  translationParams: HashMap = {};

  @Input() set text(value: string) {
    if (value !== this.valText) {
      this.valText = value;
      this.cdr.detectChanges();
    }
  }

  cdr = inject(ChangeDetectorRef);
}
