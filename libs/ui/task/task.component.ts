import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'pt-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input()
  task: any;

  @Input()
  btns: any;

  constructor() {}

  ngOnInit(): void {}

  getDate(date: string) {
    return date.split('T')[0] + '  ' + date.split('T')[1].substring(0, 5);
  }
}
