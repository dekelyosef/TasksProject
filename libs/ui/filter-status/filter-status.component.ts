import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SelectComponent } from '../select/select.component';

type T = any;
// tslint:disable-next-line: no-shadowed-variable
export interface Chip<T> {
  data: T;
  title: string;
}

@Component({
  selector: 'pt-filter-status',
  templateUrl: './filter-status.component.html',
  styleUrls: ['./filter-status.component.css'],
})
export class FilterStatusComponent implements OnInit {
  public statuses: Array<Chip<string>> = [];
  public errors: any;

  @ViewChild(SelectComponent) child: any;

  constructor() {}

  ngOnInit(): void {
    this.getStatusList();
  }

  getStatusList() {
    this.statuses = [
      { title: 'Completed', data: '1' },
      { title: 'To do', data: '2' },
    ];
  }

  clearSelectedStatus() {
    this.child.clearSelectedChip();
  }

  getSelectedStatus() {
    return this.child.getSelectedChip();
  }
}
