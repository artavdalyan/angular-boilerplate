import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { ClickDebounceDirective, StopPropagationDirective } from '@core/directives';
import { AntDesignModule } from "@shared/ant-design.module";
import { ControlErrorModule } from "@core/directives/control-error/control-error.module";

const modules = [ControlErrorModule, ReactiveFormsModule, CommonModule, TranslocoModule, FormsModule, RouterModule, AntDesignModule];

const directives = [ClickDebounceDirective, StopPropagationDirective];

@NgModule({
  imports: [modules],
  declarations: [directives],
  exports: [modules, directives],
})
export class SharedModule {}
