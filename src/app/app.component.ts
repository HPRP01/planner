import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { TaskService } from './services/task.service';
import { v4 as uuidv4 } from 'uuid';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public darkTheme: boolean = true;


  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService, private taskService: TaskService)
  {

  }

  ngAfterViewInit(): void
  {
    this.sidenavService.setSidenav(this.sidenav);
  }

  addTask(): void
  {
    this.taskService.addTask(uuidv4());
  }
}
