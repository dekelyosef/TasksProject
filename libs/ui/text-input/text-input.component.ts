import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input()
  left = '';

  @Input()
  right = '';

  @Input()
  placeholder? = '';

  @Input()
  message = false;

  public value = '';
  public content = '';

  constructor() {}

  ngOnInit(): void {}

  getValue() {
    return this.value;
  }

  getContent() {
    return this.content;
  }
}
