import * as moment from 'moment';
import { ITask } from '../entities';
import { TasksComponent } from '../tasks/tasks.component';

type T = TasksComponent;

export function getStatus(task: ITask) {
  if (moment(task.date).isBefore()) {
    return { title: 'Closed for registration', type: 'closed' };
  } else {
    return { title: 'Open for registration', type: 'open' };
  }
}

export function getBtns(self: T, task: ITask) {
  return [
    {
      title: 'edit task',
      onClick: () => {
        // self.ShowStudents(lecture.students);
      },
      //   active: numofStudent(lecture) > 0,
      active: 'active',
    },
    {
      title: 'delete task',
      //   onClick: () => self.deleteLecture(lecture._id),
      //   active: moment(lecture.start).isAfter(),
      active: 'active',
    },
  ];
}
