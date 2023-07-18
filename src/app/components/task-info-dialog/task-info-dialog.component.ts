import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-info-dialog',
  templateUrl: './task-info-dialog.component.html',
  styleUrls: ['./task-info-dialog.component.scss']
})
export class TaskInfoDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TaskInfoDialogComponent>
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
    this.dialogRef.close(this.form.value);
  }
}
