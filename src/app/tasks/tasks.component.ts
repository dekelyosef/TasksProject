import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterDateComponent } from 'libs/ui/filter-date/filter-date.component';
import { FilterStatusComponent } from 'libs/ui/filter-status/filter-status.component';
import { Task } from '../DTO/task';
import { RequestServiceService } from '../services/requests-service.service';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../services/shared-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements AfterViewInit {
  subscriptions: Array<Subscription> = new Array<Subscription>();
  public tasksList: Array<Task> = [];
  public orderByTitles = ['Date', 'Status', 'Description'];

  public chosenTask: Task | undefined;
  public chosenStatus: any = null;
  public chosenStartDate: any = null;
  public chosenEndDate: any = null;
  public chosenOrder: any = null;
  public add = false;
  public edit = false;
  public details = false;

  @ViewChild(FilterDateComponent) date: any;
  @ViewChild(FilterStatusComponent) status: any;

  constructor(
    private requestsService: RequestServiceService,
    private sharedDataService: SharedDataService
  ) {}

  ngAfterViewInit() {
    this.subscriptions.push(
      this.sharedDataService.currentChange.subscribe((change) => {
        if (change) {
          this.getTasksList();
        } else {
          this.subscriptions.push(
            this.sharedDataService.currentTasksList.subscribe((tasks: any) =>
              this.updateTasks(tasks)
            )
          );
        }
      })
    );
    this.subscriptions.push(
      this.requestsService.onAppResponseError.subscribe(
        (response: { message: any }) => alert(response.message)
      )
    );
  }

  getTasksList() {
    this.requestsService.getTasksList(
      this.chosenStatus,
      this.chosenStartDate,
      this.chosenEndDate,
      this.chosenOrder
    );
    this.subscriptions.push(
      this.requestsService.onGetTasks.subscribe((data) => {
        this.updateTasks(data.Table);
        this.sharedDataService.changeTasksList(this.tasksList);
      })
    );
  }

  updateTasks(tasks: Task[]) {
    this.tasksList = tasks;
  }

  updateFilter() {
    this.chosenStatus =
      this.status.getSelectedStatus() === undefined
        ? null
        : this.status.getSelectedStatus();
    this.chosenStartDate =
      this.date.getSelectedDate() === 'Invalid date'
        ? null
        : this.date.getSelectedDate() + ' 00:00:00';
    this.chosenEndDate =
      this.date.getSelectedDate() === 'Invalid date'
        ? null
        : this.date.getSelectedDate() + ' 23:59:59';
  }

  filterForm() {
    this.updateFilter();
    this.getTasksList();
  }

  cleanForm() {
    this.status.clearSelectedStatus();
    this.date.clearSelectedDate();
  }

  showAddTask() {
    this.add = true;
  }

  hideAddTask() {
    this.add = false;
  }

  showEditTask() {
    this.edit = true;
  }

  hideEditTask() {
    this.edit = false;
  }

  editTask(task: Task) {
    this.chosenTask = task;
    this.showEditTask();
  }

  showGetDetails() {
    this.details = true;
  }

  hideGetDetails() {
    this.details = false;
  }

  getDetails(task: Task) {
    this.chosenTask = task;
    this.showGetDetails();
  }

  deleteTask(task: Task) {
    this.requestsService.deleteTask(task.id);
  }

  editStatus(task: Task) {
    this.requestsService.editTaskStatus(task.id, 'Completed');
  }

  getTaskBtns(task: Task) {
    return [
      {
        title: 'Mark As Completed',
        onClick: () => {
          this.editStatus(task);
        },
        active: task.status === 'To do',
      },
      {
        title: 'Show Details',
        onClick: () => {
          this.getDetails(task);
        },
        active: true,
      },
      {
        title: 'Delete Task',
        onClick: () => {
          this.deleteTask(task);
        },
        active: moment(task.date).isAfter(moment().add(6, 'd')),
      },
      {
        title: 'Edit Task',
        onClick: () => {
          this.editTask(task);
        },
        active: true,
      },
    ];
  }

  changeOrder(title: string) {
    this.chosenOrder = title;
    this.getTasksList();
  }
}
