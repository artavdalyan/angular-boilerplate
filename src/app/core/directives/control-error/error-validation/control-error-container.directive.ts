import { ComponentRef, Directive, inject, ViewContainerRef } from '@angular/core';

import { ControlErrorComponent } from '../control-error.component';
import { HashMap } from "@ngneat/transloco";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[controlErrorContainer]',
})
export class ControlErrorContainerDirective {
  private ref: ComponentRef<ControlErrorComponent> | null = null;

  vcr = inject(ViewContainerRef);

  setError(text: string, params?: HashMap): void {
    if (!this.ref) {
      this.ref = this.vcr.createComponent(ControlErrorComponent);
    }

    if (params) {
      this.ref.instance.translationParams = params;
    }

    this.ref.instance.text = text;
  }

  removeError(): void {
    this.vcr.clear();
    this.ref = null;
  }
}
