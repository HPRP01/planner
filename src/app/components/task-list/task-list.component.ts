import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { Task } from '../../Models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit
{
  todo$!: Observable<string[]>;

  task$!: Observable<Task[]>;
  
  constructor(private taskService: TaskService)
  {

  }

  ngOnInit() 
  {
    this.todo$ = this.taskService.toDo$;
    this.task$ = this.taskService.task$;
  }
  
  todo = ['1111', '2222', '3333', '4444', '5555', '6666'];
  task = [];
  doing = ['9999'];
  done = ['0'];
  categories = ["todo", "done"]

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.item.data);
      this.taskService.updateStatus(event.item.data.id, 'doing');
    }
  }
}


