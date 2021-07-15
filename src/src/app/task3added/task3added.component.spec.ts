import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3addedComponent } from './task3added.component';

describe('Task3addedComponent', () => {
  let component: Task3addedComponent;
  let fixture: ComponentFixture<Task3addedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3addedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3addedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
