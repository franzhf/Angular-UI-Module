import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingActivityFormComponent } from './reading-activity-form.component';

describe('ReadingActivityFormComponent', () => {
  let component: ReadingActivityFormComponent;
  let fixture: ComponentFixture<ReadingActivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingActivityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
