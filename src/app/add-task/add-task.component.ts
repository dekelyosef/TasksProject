import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { DateComponent } from 'libs/ui/date/date.component';
import { HourComponent } from 'libs/ui/hour/hour.component';
import { RequestServiceService } from '../services/requests-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements AfterViewInit {
  @Output()
  hideMessageEvent = new EventEmitter<string>();

  @Output()
  addMessageEvent = new EventEmitter<string>();

  @ViewChild(DateComponent) date: any;
  @ViewChild(HourComponent) hour: any;
  @ViewChild('title') title: any;
  @ViewChild('description') description: any;

  constructor(private requestsService: RequestServiceService) {}

  ngAfterViewInit() {}

  addTask() {
    this.requestsService.addNewTask(
      this.getRandom().toString(),
      this.title.getValue(),
      this.date.getSelectedDate() + ' ' + this.hour.getSelectedHour(),
      this.description.getContent(),
      'To do'
    );
    this.addMessageEvent.emit();
  }

  getRandom() {
    return Math.floor(Math.random() * (100000000 - 0 + 1)) + 0;
  }

  exit() {
    this.hideMessageEvent.emit();
  }
}
