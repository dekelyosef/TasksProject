import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements AfterViewInit {
  constructor() {}

  public selectedType = '';
  public title = '';

  public isOther = false;
  public showTypesList = false;
  public errors: any;

  @Output()
  hideMessageEvent = new EventEmitter<string>();

  @Output()
  addMessageEvent = new EventEmitter<string>();

  // @ViewChild(SelectComponent) select: any;
  // @ViewChild('input') input: any;
  // @ViewChild('content') content: any;

  // constructor(private http: HttpClient, private router: Router) {}

  ngAfterViewInit() {
    this.getTypesList();
  }

  addInquiry() {
    // if (this.isOther) {
    //   this.title = this.input.getValue();
    // } else {
    //   this.title = this.selectedType;
    // }
    // this.http
    //   .post<any>('/inquiries', {
    //     type: this.selectedType,
    //     title: this.title,
    //     description: this.content.getContent(),
    //   })
    //   .subscribe(
    //     () => {
    //       this.router.navigate(['/inquiries']);
    //     },
    //     (error) => {
    //       this.errors = error;
    //     }
    //   );
    this.addMessageEvent.emit();
  }

  getTypesList() {
    // this.http.get<any>('general/inquiries/types/teacher').subscribe({
    //   next: (res) => {
    //     this.types = Array.from(res.data).map((t: any) => {
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

  getSelectedType() {
    //   this.selectedType = this.select.getSelectedChip().title;
    //   if (this.selectedType === 'Other' || this.selectedType === 'other') {
    //     this.isOther = true;
    //   } else {
    //     this.isOther = false;
    //   }
  }

  exit() {
    this.hideMessageEvent.emit();
  }
}
