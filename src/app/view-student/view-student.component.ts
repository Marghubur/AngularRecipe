import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../service/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {
  students: any = null;

  constructor(private student: StudentDataService,
              private route: ActivatedRoute) {
    let data = null;
    this.student.students.subscribe(res => {
      data = res;
    })
    let id = this.route.snapshot.queryParamMap.get("id");
    this.students = data.find(x => x.id == id);
   }

  ngOnInit(): void {
    
  }

}
