import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
})
export class BadgeComponent implements OnInit {
  @Input()
  title?: string = '';

  constructor() {}

  ngOnInit(): void {}
}
