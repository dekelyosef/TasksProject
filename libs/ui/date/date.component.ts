import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'pt-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
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
