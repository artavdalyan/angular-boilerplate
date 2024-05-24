/* eslint-disable @typescript-eslint/no-explicit-any,
@typescript-eslint/no-unsafe-member-access
,@typescript-eslint/no-unsafe-argument */
import { Directive, OnInit, Optional, Self } from '@angular/core';
import { ControlContainer, NgControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isBoolean, isObject } from 'lodash-es';
import { merge } from 'rxjs';

import { ControlErrorContainerDirective } from './control-error-container.directive';
import { HashMap } from "@ngneat/transloco";

@UntilDestroy()
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[controlErrorsDirective]',
})
export class ControlErrorsDirective implements OnInit {
  constructor(
    @Optional() public controlDir: NgControl,
    private controlErrorContainerDirective: ControlErrorContainerDirective,
    @Optional() @Self() private _controlContainer?: ControlContainer,
  ) {}

  ngOnInit(): void {
    merge(this.control.touch$, this.control.statusChanges, this.control.valueChanges)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        const controlErrors = this.control.errors as HashMap | null;

        if (controlErrors && this.control.touched) {
          const firstKey = Object.keys(controlErrors)[0];
          const errorObj = controlErrors[firstKey] as string | HashMap;

          // for local errors
          if (isObject(errorObj)) {
            this.controlErrorContainerDirective.setError(`error.${firstKey}`, controlErrors[firstKey]);
          } else if (isBoolean(errorObj)) {
            this.controlErrorContainerDirective.setError(`error.${firstKey}`);
          } else {
            // for server errors
            this.controlErrorContainerDirective.setError(controlErrors[firstKey]);
          }
        } else {
          this.controlErrorContainerDirective.removeError();
        }
      });
  }

  get control(): any {
    return (this._controlContainer ?? this.controlDir).control;
  }
}
