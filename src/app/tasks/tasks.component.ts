import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterDateComponent } from 'libs/ui/filter-date/filter-date.component';
import { FilterStatusComponent } from 'libs/ui/filter-status/filter-status.component';
import { ITask } from '../entities';
// import { HttpClient } from '@angular/common/http';
// import moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements AfterViewInit {
  public tasksList: Array<ITask> = [];
  public selectedDays = [];
  public dayTime = false;
  public filterParams = [];
  public errors: any;
  public registerErrors: any;
  public pageSize = '5';
  public page = '0';
  public filterCourses = [];
  public filterDays = [];
  public filterHours = { from: '00:00', to: '24:00' };
  // public filterDate = {
  //   from: moment().format('YYYY-MM-DD HH:mm:ss'),
  //   to: moment().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
  // };
  public addTask = false;

  // constructor(private http: HttpClient) {}
  constructor() {}

  @ViewChild(FilterDateComponent) date: any;
  @ViewChild(FilterStatusComponent) status: any;
  // @ViewChild(FilterHoursComponent) hours: any;

  ngAfterViewInit() {
    // this.updateFilter();
    // this.getLectures();
  }

  // updateFilter() {
  //   this.filterDate.from = moment().format('YYYY-MM-DD HH:mm:ss');
  //   this.filterDate.to = moment().add(1, 'month').format('YYYY-MM-DD HH:mm:ss');
  //   this.filterCourses = this.courses.getSelectedCourses();
  //   this.filterDays = this.days.getSelectedDays();
  //   this.filterHours = this.hours.getSelectedHours();
  // }

  getTasks() {
    //   this.http
    //     .get<any>('/lectures', {
    //       params: this.getParams(),
    //     })
    //     .subscribe(
    //       (res) => {
    //         this.lecturesList = res.data.map((lecture: ILecture) => {
    //           return {
    //             lecture: lecture,
    //             btns: getBtns(this, lecture),
    //             status: getStatus(lecture),
    //           };
    //         });
    //         this.handlePages();
    //       },
    //       (err) => {
    //         this.errors = err;
    //       }
    //     );
    this.hideAddTask();
  }

  // getParams() {
  //   return {
  //     from: this.filterDate.from,
  //     to: this.filterDate.to,
  //     courses:
  //       this.filterCourses.length === 0
  //         ? []
  //         : JSON.stringify(this.filterCourses),
  //     days: this.filterDays.length === 0 ? [] : JSON.stringify(this.filterDays),
  //     startHour: this.filterHours.from === '' ? '00:00' : this.filterHours.from,
  //     endHour: this.filterHours.to === '' ? '24:00' : this.filterHours.to,
  //     pageSize: this.pageSize,
  //     page: this.page,
  //   };
  // }

  // handlePages() {
  //   if (this.lecturesList.length < Number(this.pageSize)) {
  //     this.pageNum.lastPage();
  //   }
  //   if (this.lecturesList.length === 0) {
  //     this.pageNum.getLastPage();
  //     this.pageNum.lastPage();
  //   }
  // }
  // deleteLecture(id: string) {
  //   this.http.delete('teacher/lectures/' + id).subscribe(
  //     (res: any) => {
  //       this.pageChanged(this.page);
  //     },
  //     (err) => {
  //       this.registerErrors = err;
  //     }
  //   );
  // }

  filterForm() {
    // this.updateFilter();
    // this.getLectures();
    // this.cleanForm();
  }

  cleanForm() {
    // this.errors = '';
    // this.hideDayTime();
    this.status.clearSelectedStatus();
    this.date.clearSelectedDate();
    // this.hours.clearSelectedHours();
  }

  // showDayTime() {
  //   this.setDayTime();
  //   if (this.selectedDays !== []) {
  //     this.dayTime = true;
  //   } else {
  //     this.hideDayTime();
  //   }
  // }

  // setDayTime() {
  //   this.selectedDays = this.days.getSelectedDays();
  // }

  // hideDayTime() {
  //   this.dayTime = false;
  // }

  showAddTask() {
    this.addTask = true;
  }

  hideAddTask() {
    this.addTask = false;
    //   this.getLectures();
  }

  // ShowStudents(students: Array<IUser> | undefined) {
  //   this.selectedStudents = students;
  //   this.showStudents = true;
  // }

  // hideStudents() {
  //   this.showStudents = false;
  // }

  // hideRegisterError() {
  //   this.registerErrors = '';
  // }
}
