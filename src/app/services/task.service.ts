import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  private toDo  = new BehaviorSubject<string[]>([]);
  private doing = new BehaviorSubject<Task[]>([]);
  private done  = new BehaviorSubject<Task[]>([]);

  private toDos:  string[] = [];
  private doings: Task[] = [];
  private dones:  Task[] = [];

  readonly toDo$  = this.toDo.asObservable();
  readonly doing$ = this.doing.asObservable();
  readonly cond$  = this.done.asObservable();

  public addTask(taskName: string): void
  {
    this.toDos.push(taskName);
    this.toDo.next(Object.assign([], this.toDos));
  }

  public deleteTask(taskId: string): void
  {
    this.toDos.forEach((e, i) =>
    {
      if(e==taskId)
      {
        this.toDos.splice(i,1);
      }
    });

    this.toDo.next(Object.assign([], this.toDos));
  }

  public updateStatus(taskId: number, status: string): void
  {
    
  }
}
