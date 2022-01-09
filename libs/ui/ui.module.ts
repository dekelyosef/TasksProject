import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
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
import { DropDownComponent } from './drop-down/drop-down.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DateComponent } from './date/date.component';
import { TabComponent } from './tab/tab.component';
import { HourComponent } from './hour/hour.component';

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
    DropDownComponent,
    TextInputComponent,
    DateComponent,
    TabComponent,
    HourComponent,
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
    DropDownComponent,
    TextInputComponent,
    DateComponent,
    TabComponent,
    HourComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
  ],
})
export class UiModule {}
