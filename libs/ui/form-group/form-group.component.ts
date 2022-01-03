import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Router } from '@angular/router';

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

  // constructor(private router: Router) {}
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.messageEvent.emit();

    // if (this.path === 'clear') {
    //   this.messageEvent.emit();
    // } else {
    //   // navigate to the given page name
    //   this.router.navigate(['/' + this.path]);
    // }
  }
}
