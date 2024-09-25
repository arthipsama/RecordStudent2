import { Injectable } from '@angular/core';

export interface Student {
  id: number;        
  name: string;       
  address: string;    
  score: number;      
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private students: Student[] = [
    { id: 1, name: 'สมชาย ใจดี', address: '123 หมู่ 1 ตำบลคลองหลวง', score: 85 },
    { id: 2, name: 'สมหญิง จิตใจดี', address: '456 หมู่ 2 ตำบลบ้านนา', score: 90 },
    { id: 3, name: 'อัมพร ช่างทำ', address: '789 หมู่ 3 ตำบลห้วยใหญ่', score: 78 },
    { id: 4, name: 'มานพ ยิ้มแย้ม', address: '321 หมู่ 4 ตำบลคลองสี่', score: 95 },
    { id: 5, name: 'สายฝน น้ำใส', address: '654 หมู่ 5 ตำบลคลองสาม', score: 88 },
    { id: 6, name: 'บุญธรรม รักษา', address: '987 หมู่ 6 ตำบลน้ำพุ', score: 82 },
    { id: 7, name: 'บุญเพ็ง ยิ้มสู้', address: '147 หมู่ 7 ตำบลนาวัง', score: 76 },
    { id: 8, name: 'สุชาติ พิชิต', address: '258 หมู่ 8 ตำบลสวนหลวง', score: 92 },
    { id: 9, name: 'นารี ผ่องใส', address: '369 หมู่ 9 ตำบลขามเรียง', score: 81 },
    { id: 10, name: 'มิตร ชวนชื่น', address: '147 หมู่ 10 ตำบลป่ามะพร้าว', score: 74 }
  ];

  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }
}
