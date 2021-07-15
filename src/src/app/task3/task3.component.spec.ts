import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3Componant } from './task3.component';

describe('Task3Component', () => {
  let component: Task3Componant;
  let fixture: ComponentFixture<Task3Componant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3Componant ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3Componant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
