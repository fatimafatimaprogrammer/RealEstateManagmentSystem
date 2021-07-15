import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWebsiteScreenComponent } from './first-website-screen.component';

describe('FirstWebsiteScreenComponent', () => {
  let component: FirstWebsiteScreenComponent;
  let fixture: ComponentFixture<FirstWebsiteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWebsiteScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWebsiteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
