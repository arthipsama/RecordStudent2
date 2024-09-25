import { Component, OnInit } from '@angular/core';
import { Student, TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  students: Student[] = [];
  dataSource: Student[] = []; // เพิ่ม dataSource
  displayedColumns: string[] = ['id', 'name', 'address', 'score', 'actions'];

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.students = this.tableService.getStudents();
    this.dataSource = this.students;
  }
}
