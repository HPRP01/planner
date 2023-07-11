import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/Models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) { }

  public deleteTask(): void 
  {
    this.taskService.deleteTask(this.task.id);
  }
}
