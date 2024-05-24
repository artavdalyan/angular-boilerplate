import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';


import { ControlErrorComponent } from './control-error.component';
import {
  ControlErrorContainerDirective,
  ControlErrorsDirective, InvalidControlScrollContainerDirective, InvalidControlScrollDirective
} from "@core/directives/control-error/error-validation";

const directives = [
  ControlErrorsDirective,
  ControlErrorContainerDirective,
  InvalidControlScrollDirective,
  InvalidControlScrollContainerDirective,
];

const components = [ControlErrorComponent];

@NgModule({
  declarations: [directives, components],
  exports: [directives, components],
  imports: [TranslocoModule],
})
export class ControlErrorModule {}
