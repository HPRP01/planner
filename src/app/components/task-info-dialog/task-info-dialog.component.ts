import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/Models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-info-dialog',
  templateUrl: './task-info-dialog.component.html',
  styleUrls: ['./task-info-dialog.component.scss']
})
export class TaskInfoDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TaskInfoDialogComponent>,
    private taskService: TaskService
  ) { 

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  save() {
    if(this.form.valid) 
    {
      this.taskService.save(new Task(this.form.value.id, this.form.value.title, this.form.value.description, this.form.value.date, "new", 1));
    }
    
    this.dialogRef.close(this.form.value);
  }
}
