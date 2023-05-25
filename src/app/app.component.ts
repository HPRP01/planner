import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public darkTheme: boolean = false;


  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService)
  {

  }

  ngAfterViewInit(): void
  {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
