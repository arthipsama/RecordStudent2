import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student, TableService } from '../table.service';
import { StudentDialogComponent } from '../dialog/student-dialog/student-dialog.component';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  students: Student[] = [];
  dataSource: Student[] = []; // เพิ่ม dataSource
  displayedColumns: string[] = ['id', 'name', 'address', 'score', 'actions'];
  searchTerm: string = '';

  constructor(
    private tableService: TableService, 
    public dialog: MatDialog,
    private sweetAlertService: SweetAlertService,
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.students = this.tableService.getStudents();
    this.dataSource = this.students;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '400px',
      data: { student: {}, isReadOnly: false, dialogType: 'add' } // ตั้งค่า dialogType เป็น 'add'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newId = this.dataSource.length > 0 ? Math.max(...this.dataSource.map(s => s.id)) + 1 : 1;
        const newStudent = { ...result, id: newId };
        this.dataSource.push(newStudent);
        this.tableService.addStudent(newStudent);
        this.sweetAlertService.success('เพิ่มสำเร็จ', 'นักเรียนถูกเพิ่มเรียบร้อยแล้ว!');
      }
    });
  }
  
  editStudent(student: Student): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '400px',
      data: { student, isReadOnly: false, dialogType: 'edit' } // ตั้งค่า dialogType เป็น 'edit'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(s => s.id === result.id);
        if (index !== -1) {
          this.dataSource[index] = result;
          this.tableService.updateStudent(result);
          this.sweetAlertService.success('แก้ไขสำเร็จ', 'ข้อมูลนักเรียนถูกแก้ไขเรียบร้อยแล้ว!');
        }
      }
    });
  }
  
  viewStudent(student: Student): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '400px',
      data: { student, isReadOnly: true, dialogType: 'view' } // ตั้งค่า dialogType เป็น 'view'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed view dialog for student:', student);
    });
  }

  deleteStudent(student: Student): void {
    this.sweetAlertService.confirm('ยืนยันการลบ?', 'คุณแน่ใจหรือไม่ว่าจะลบข้อมูลนี้?').then((isConfirmed) => {
      if (isConfirmed) {
        const index = this.dataSource.findIndex(s => s.id === student.id);
        if (index !== -1) {
          this.dataSource.splice(index, 1);
          this.tableService.deleteStudent(student.id);
          this.sweetAlertService.success('Deleted!', 'ข้อมูลนักเรียนถูกลบเรียบร้อยแล้ว.');
        }
      }
    });
  }

  searchStudents(): void {
    const term = this.searchTerm.toLowerCase();
    const allStudents = this.tableService.getStudents(); // โหลดข้อมูลนักเรียนทั้งหมด

    // ค้นหานักเรียนที่ชื่อตรงกับที่ค้นหา
    this.dataSource = allStudents.filter(student =>
      student.name.toLowerCase().includes(term)
    );
  }
}
