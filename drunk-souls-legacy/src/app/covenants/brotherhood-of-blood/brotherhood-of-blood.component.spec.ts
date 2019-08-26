import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherhoodOfBloodComponent } from './brotherhood-of-blood.component';

describe('BrotherhoodOfBloodComponent', () => {
  let component: BrotherhoodOfBloodComponent;
  let fixture: ComponentFixture<BrotherhoodOfBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherhoodOfBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherhoodOfBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
