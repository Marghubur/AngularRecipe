// student-data.service.ts

import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
    students: BehaviorSubject<any> = new BehaviorSubject(null);
    private generateStudent() {
        return {
          id: faker.datatype.uuid(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          fatherName: faker.name.middleName(),
          dob: faker.date.birthdate(),
          grade: faker.datatype.number({ min: 1, max: 12 }),
          mobile: faker.phone.number(),
          address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
          },
        };
      }
    
      generateStudents(count: number) {
        const students = [];
        for (let i = 0; i < count; i++) {
          students.push(this.generateStudent());
        }
        this.students.next(students);
      }
}
