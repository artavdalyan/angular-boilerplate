import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { ClickDebounceDirective, StopPropagationDirective } from '@core/directives';

const modules = [ReactiveFormsModule, CommonModule, TranslocoModule, FormsModule, RouterModule];

const directives = [ClickDebounceDirective, StopPropagationDirective];

@NgModule({
  imports: [modules],
  declarations: [directives],
  exports: [modules, directives],
})
export class SharedModule {}
