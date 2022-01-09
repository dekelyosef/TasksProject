import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css'],
})
export class HourComponent implements OnInit {
  @Input()
  hour = '';

  constructor() {}

  ngOnInit(): void {}

  clearSelectedHours() {
    this.hour = '';
  }

  getSelectedHour() {
    return this.hour + ':00';
  }
}
