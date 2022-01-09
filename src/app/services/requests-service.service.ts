import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestServiceService {
  readonly APIUrl = 'http://localhost:5000/Tasks';
  public chosenStatus = null;
  public chosenStartDate = null;
  public chosenEndDate = null;
  public chosenOrder = null;

  ResponseSubjects: { [responseID: string]: Subject<any> } = {
    GetTasks: new Subject<any>(),
    AppResponseError: new Subject<any>(),
  };

  constructor(private http: HttpClient) {}

  get onGetTasks() {
    return this.ResponseSubjects['GetTasks'];
  }
  get onAppResponseError() {
    return this.ResponseSubjects['AppResponseError'];
  }

  getTasksList(status: any, startDate: any, endDate: any, order: any) {
    this.chosenStatus = status;
    this.chosenStartDate = startDate;
    this.chosenEndDate = endDate;
    this.chosenOrder = order;
    var request = {
      Status: status,
      StartDate: startDate,
      EndDate: endDate,
      Order: order,
    };
    this.http.post(this.APIUrl + '/GetTasks', request).subscribe(
      (data: any) => {
        if (data.ResponseType == 'AppResponseError') {
          this.ResponseSubjects['AppResponseError'].next(data);
        } else {
          this.ResponseSubjects['GetTasks'].next(data);
        }
      },
      (err) => this.ResponseSubjects['AppResponseError'].next(err)
    );
  }

  deleteTask(id: any) {
    var request = {
      Id: id,
    };
    this.http.post(this.APIUrl + '/DeleteTask', request).subscribe(() => {
      this.getTasksList(
        this.chosenStatus,
        this.chosenStartDate,
        this.chosenEndDate,
        this.chosenOrder
      );
    });
  }

  editTask(id: any, title: any, date: any, description: any, status: any) {
    var request = {
      Id: id,
      Title: title,
      Date: date,
      Description: description,
      Status: status,
    };
    this.http.post(this.APIUrl + '/EditTask', request).subscribe(() => {
      this.getTasksList(
        this.chosenStatus,
        this.chosenStartDate,
        this.chosenEndDate,
        this.chosenOrder
      );
    });
  }

  editTaskStatus(id: any, status: any) {
    var request = {
      Id: id,
      Status: status,
    };
    this.http.post(this.APIUrl + '/EditTaskStatus', request).subscribe(() => {
      this.getTasksList(
        this.chosenStatus,
        this.chosenStartDate,
        this.chosenEndDate,
        this.chosenOrder
      );
    });
  }

  addNewTask(id: any, title: any, date: any, description: any, status: any) {
    var request = {
      Id: id,
      Title: title,
      Date: date,
      Description: description,
      Status: status,
    };
    console.log(id, title, date, description, status);
    this.http.post(this.APIUrl + '/AddNewTask', request).subscribe(() => {
      this.getTasksList(
        this.chosenStatus,
        this.chosenStartDate,
        this.chosenEndDate,
        this.chosenOrder
      );
    });
  }
}
