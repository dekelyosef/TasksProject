import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  @Input()
  status: any;

  constructor() {}

  ngOnInit(): void {}
}
