import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewqstComponent } from './interviewqst.component';

describe('InterviewqstComponent', () => {
  let component: InterviewqstComponent;
  let fixture: ComponentFixture<InterviewqstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewqstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewqstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
