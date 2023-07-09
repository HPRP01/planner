import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() taskName = '';

  constructor(private taskService: TaskService) { }

  public deleteTask(): void 
  {
    this.taskService.deleteTask(this.taskName);
  }
}
