import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersoldComponent } from './buyersold.component';

describe('BuyersoldComponent', () => {
  let component: BuyersoldComponent;
  let fixture: ComponentFixture<BuyersoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyersoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
