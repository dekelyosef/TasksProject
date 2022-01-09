import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'pt-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input()
  titles: any;

  @Output()
  messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.messageEvent.emit(tabChangeEvent.tab.textLabel);
  }
}
