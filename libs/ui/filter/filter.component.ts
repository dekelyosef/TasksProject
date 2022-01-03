import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input()
  title = '';

  constructor() {}

  ngOnInit(): void {}
}
