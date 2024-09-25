import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../table.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {
  student: Student;
  isReadOnly: boolean; // ประกาศตัวแปร isReadOnly
  dialogType: 'add' | 'edit' | 'view'; // ประเภทของ dialog

  constructor(
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { student: Student; isReadOnly: boolean; dialogType: 'add' | 'edit' | 'view' }
  ) {
    this.student = { ...data.student };
    this.isReadOnly = data.isReadOnly || false;
    this.dialogType = data.dialogType; // ตั้งค่า dialogType
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.student);
  }
}
