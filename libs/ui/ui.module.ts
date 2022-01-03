import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { StatusComponent } from './status/status.component';
import { BadgeComponent } from './badge/badge.component';
import { AddComponent } from './add/add.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FilterComponent } from './filter/filter.component';
import { FilterDateComponent } from './filter-date/filter-date.component';
import { FilterStatusComponent } from './filter-status/filter-status.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    TaskComponent,
    StatusComponent,
    BadgeComponent,
    AddComponent,
    FormGroupComponent,
    FilterComponent,
    FilterDateComponent,
    FilterStatusComponent,
    SelectComponent,
    ButtonComponent,
  ],
  exports: [
    TaskComponent,
    StatusComponent,
    BadgeComponent,
    AddComponent,
    FormGroupComponent,
    FilterComponent,
    FilterDateComponent,
    FilterStatusComponent,
    SelectComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, FormsModule, MatDatepickerModule],
})
export class UiModule {}
