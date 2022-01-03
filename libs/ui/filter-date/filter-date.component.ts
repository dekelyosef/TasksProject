import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'pt-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.css'],
})
export class FilterDateComponent implements OnInit {
  public date = '';

  constructor() {}

  ngOnInit(): void {}

  clearSelectedDates() {
    this.date = '';
  }

  getDate() {
    return moment(this.date).format('YYYY-MM-DD');
  }
}
