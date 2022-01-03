import { Component, OnInit, ViewChild } from '@angular/core';
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

  // constructor(private http: HttpClient) {}
  constructor() {}

  ngOnInit(): void {
    this.getStatusList();
  }

  getStatusList() {
    return [
      { title: 'Completed', data: '1' },
      { title: 'Remaining', data: '2' },
    ];
    // this.http.get<any>('general/inquiries/statuses').subscribe({
    //   next: (res) => {
    //     this.statuses = Array.from(res.data).map((t: any) => {
    //       return {
    //         title: t.slug,
    //         data: t._id,
    //       };
    //     });
    //   },
    //   error: (error) => {
    //     this.errors = error;
    //   },
    // });
  }

  clearSelectedStatus() {
    this.child.clearSelectedChip();
  }

  getSelectedStatus() {
    return this.child.getSelectedChip()?.title;
  }
}
