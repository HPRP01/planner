import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskInfoDialogComponent } from './components/task-info-dialog/task-info-dialog.component';
import { BoardComponent } from './components/board/board.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { OverlayContainer } from '@angular/cdk/overlay';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCardComponent,
    TaskInfoDialogComponent,
    BoardComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    DragDropModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('darkMode');
  }
 }
