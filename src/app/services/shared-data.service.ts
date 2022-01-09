import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../DTO/task';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  private tasksListSource = new BehaviorSubject<Array<Task>>([]);
  currentTasksList = this.tasksListSource.asObservable();
  changeTasksList(tasksList: Array<Task>) {
    this.tasksListSource.next(tasksList);
  }

  private changeSource = new BehaviorSubject<boolean>(true);
  currentChange = this.changeSource.asObservable();
  changeChange(change: boolean) {
    this.changeSource.next(change);
  }
}
