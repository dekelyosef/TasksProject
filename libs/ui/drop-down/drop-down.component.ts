import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

type T = any;
// tslint:disable-next-line: no-shadowed-variable
interface Chip<T> {
  onClick: T;
  title: string;
  active: boolean;
}

@Component({
  selector: 'pt-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements OnInit {
  @ViewChild('dropdownElm')
  inputElement!: ElementRef<HTMLInputElement>;

  @Input()
  chips: Array<Chip<T>> = [];

  @Input()
  selectedChips?: Chip<T>;

  public showList = false;

  constructor() {}

  ngOnInit(): void {}

  onChoose(chip: Chip<T>) {
    if (chip.active) {
      chip.onClick();
      this.hide();
    }
  }

  onClick() {
    this.toggleShow();
  }

  toggleShow() {
    if (this.showList) {
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
    if (this.showList) {
      this.hide();
    }
  }
}
