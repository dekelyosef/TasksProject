import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type T = any;
// tslint:disable-next-line: no-shadowed-variable
export interface Chip<T> {
  data: T;
  title: string;
}

@Component({
  selector: 'pt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input()
  chips: Array<Chip<T>> = [];

  @Input()
  selectedChip?: Chip<T>;

  @Input()
  placeholder = 'Search...';

  @Input()
  onAdd?: (chip: Chip<T>, chips: Chip<T>[]) => Chip<T>[];

  @Output()
  messageEvent = new EventEmitter<string>();

  public showList = false;

  constructor() {}

  ngOnInit(): void {}

  onAddInternal(chip: Chip<T>) {
    this.selectedChip = chip;
    this.placeholder = chip.title;
    this.messageEvent.emit();
  }

  getSelectedChip() {
    return this.selectedChip?.title;
  }

  clearSelectedChip() {
    this.selectedChip = undefined;
    this.placeholder = 'Search...';
  }

  onClick() {
    if (this.showList === true) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    this.showList = true;
  }

  hide() {
    this.showList = false;
  }

  onFocusOut() {
    this.hide();
  }
}
