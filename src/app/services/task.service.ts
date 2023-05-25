import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks = ["Test", "Test2"];

  public getTasks(): string[]
  {
    return this.tasks;
  }

  public addTask(taskName: string): void
  {
    this.tasks.push(taskName);
  }
}
