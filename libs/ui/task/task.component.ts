import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input()
  task: any;

  constructor() {}

  ngOnInit(): void {}

  getHour(hour: string) {
    return hour.split(' ')[1].substring(0, 5);
  }

  getDate(date: string) {
    return date.split(' ')[0];
  }
}
