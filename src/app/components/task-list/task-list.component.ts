import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, HostListener, OnInit } from '@angular/core';
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
  task$!: Observable<Task[]>;
  task = [];

  columnHeight: number = 0;
  
  constructor(private taskService: TaskService)
  {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setColumnHeight;
  }

  ngOnInit() 
  {
    this.task$ = this.taskService.task$;
    this.setColumnHeight();
  }

  setColumnHeight() {
    const windowHeight = window.innerHeight;

    this.columnHeight = windowHeight;
  }
  

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.item.data.status = event.container.id;

      this.taskService.updateStatus(event.item.data.id, event.container.id);
    }
  }
}


