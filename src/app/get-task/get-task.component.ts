import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css'],
})
export class GetTaskComponent implements OnInit {
  @Input()
  task: any;

  @Output()
  hideMessageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  getDate(date: string) {
    return date.split('T')[0] + '  ' + date.split('T')[1].substring(0, 5);
  }

  exit() {
    this.hideMessageEvent.emit();
  }
}
