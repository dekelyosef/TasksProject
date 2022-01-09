import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  @Input()
  status: any;

  public type = 'toDo';

  constructor() {}

  ngOnInit(): void {
    if (this.status === 'Completed') {
      this.type = 'completed';
    } else {
      this.type = 'toDo';
    }
  }

  getStatus() {
    return this.status;
  }
}
