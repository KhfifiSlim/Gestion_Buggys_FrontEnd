import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuggyComponent } from './add-buggy.component';

describe('AddBuggyComponent', () => {
  let component: AddBuggyComponent;
  let fixture: ComponentFixture<AddBuggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuggyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
