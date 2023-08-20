import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../service/student.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Array<any> = [];
  selectedStudent: any = null;

  constructor(private student: StudentDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.student.generateStudents(100);
    this.student.students.subscribe(res => {
      this.students = res;
    })
  }

  viewStudent(item: any) {
    this.router.navigate(["/studentview"], {queryParams: {id : item.id}})
  }

  viewId(item: any) {
    this.selectedStudent = item;
    $("#idModal").modal('show');
  }
  
  

}
