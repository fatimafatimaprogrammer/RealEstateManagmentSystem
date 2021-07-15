import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanAgentComponent } from './ban-agent.component';

describe('BanAgentComponent', () => {
  let component: BanAgentComponent;
  let fixture: ComponentFixture<BanAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
