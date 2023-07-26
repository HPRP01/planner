import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { TaskService } from './services/task.service';
import { v4 as uuidv4 } from 'uuid';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Task } from './Models/task.model';
import { TaskInfoDialogComponent } from './components/task-info-dialog/task-info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public darkTheme: boolean = true;

  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService, 
    private taskService: TaskService,
    private dialog: MatDialog)
  {

  }
  
  ngOnInit(): void
  {
    this.taskService.getTasks();
  }

  ngAfterViewInit(): void
  {
    this.sidenavService.setSidenav(this.sidenav);
  }

  sidenavAction(): void
  {
    this.sidenavService.close();
  }

  addTask(): void
  {
    const dialogRef = this.dialog.open(TaskInfoDialogComponent, {
      height: '500px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(
      data => this.taskService.save(new Task(data.id, data.title, data.description, data.date, "new", 1))
    );
  }
}
