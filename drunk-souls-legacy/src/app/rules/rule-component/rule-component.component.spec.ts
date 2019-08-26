import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleComponentComponent } from './rule-component.component';

describe('RuleComponentComponent', () => {
  let component: RuleComponentComponent;
  let fixture: ComponentFixture<RuleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
