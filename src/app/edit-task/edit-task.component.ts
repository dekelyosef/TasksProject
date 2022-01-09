import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DateComponent } from 'libs/ui/date/date.component';
import { HourComponent } from 'libs/ui/hour/hour.component';
import { SelectComponent } from 'libs/ui/select/select.component';
import { RequestServiceService } from '../services/requests-service.service';

export interface Chip<T> {
  data: T;
  title: string;
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements AfterViewInit {
  public statuses: Array<Chip<string>> = [];

  @Input()
  task: any;

  @Output()
  hideMessageEvent = new EventEmitter<string>();

  @Output()
  addMessageEvent = new EventEmitter<string>();

  @ViewChild(DateComponent) date: any;
  @ViewChild(HourComponent) hour: any;
  @ViewChild('title') title: any;
  @ViewChild('description') description: any;
  @ViewChild(SelectComponent) status: any;

  constructor(private requestsService: RequestServiceService) {}

  ngAfterViewInit() {
    this.getStatusList();
  }

  getStatusList() {
    this.statuses = [
      { title: 'Completed', data: '1' },
      { title: 'To do', data: '2' },
    ];
  }

  editTask() {
    this.requestsService.editTask(
      this.task.id,
      this.title.getValue(),
      this.date.getSelectedDate() + ' ' + this.hour.getSelectedHour(),
      this.description.getContent(),
      this.status.getSelectedChip() === undefined
        ? this.task.status
        : this.status.getSelectedChip()
    );
    this.addMessageEvent.emit();
  }

  exit() {
    this.hideMessageEvent.emit();
  }

  getSelectedStatus() {
    return this.status.getSelectedChip();
  }

  getDate(date: string) {
    return date.split('T')[0];
  }

  getHour(date: string) {
    return date.split('T')[1].substring(0, 5);
  }
}
