import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../Models/task.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private tasks: Task[] = [];

  private toDo  = new BehaviorSubject<string[]>([]);
  private task = new BehaviorSubject<Task[]>([]);
  private doing = new BehaviorSubject<Task[]>([]);
  private done  = new BehaviorSubject<Task[]>([]);

  private toDos:  string[] = [];
  private doings: Task[] = [];
  private dones:  Task[] = [];

  readonly toDo$  = this.toDo.asObservable();
  readonly doing$ = this.doing.asObservable();
  readonly cond$  = this.done.asObservable();
  readonly task$  = this.task.asObservable();

  public addTask(taskName: string): void
  {
    this.toDos.push(taskName);
    this.toDo.next(Object.assign([], this.toDos));
  }


  public updateStatus(id: number, status: string): void
  {
    this.http.put(`http://localhost:8080/tasks/update-status?id=${id}&status=${status}`, { }).subscribe(
      (response) => {
        console.log(response);
        this.getTasks();
      },
      (error) => {
        console.error(error);
      }
    )
  }

  public save(task: Task) 
  {
    this.http.post('http://localhost:8080/tasks/add', task, { headers }).subscribe(
      (response) => {
        console.log(response);
        this.getTasks();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public getTasks()
  {
    this.http.get<Task[]>('http://localhost:8080/tasks').subscribe(
      (response) => {
        this.tasks = response;
        console.log(response);

        this.task.next(Object.assign([], this.tasks));
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public deleteTask(id: number)
  {
    const params = new HttpParams().set('id', id.toString());

    this.http.delete('http://localhost:8080/tasks', {params}).subscribe(
      (response) => {
        console.log(response)

        this.getTasks();
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
