import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'pt-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.css'],
})
export class FilterDateComponent implements OnInit {
  @Input()
  date = '';

  constructor() {}

  ngOnInit(): void {}

  clearSelectedDate() {
    this.date = '';
  }

  getSelectedDate() {
    return moment(this.date).format('YYYY-MM-DD');
  }
}
