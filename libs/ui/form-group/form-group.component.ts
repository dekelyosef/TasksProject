import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pt-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  @Input()
  left = '';

  @Input()
  right = '';

  @Input()
  path = '';

  @Input()
  svg = '';

  @Output()
  messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.messageEvent.emit();
  }
}
