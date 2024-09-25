import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}

  success(title: string, text: string): Promise<void> {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      confirmButtonText: 'ตกลง',
    }).then(() => {
      // รีเฟรชหน้าหลังจาก 1 วินาที
      setTimeout(() => {
        location.reload();
      }, 1000);
    });
  }

  confirm(title: string, text: string): Promise<boolean> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ใช่, ลบเลย!',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      return result.isConfirmed; // คืนค่าผลลัพธ์การยืนยัน
    });
  }
}
