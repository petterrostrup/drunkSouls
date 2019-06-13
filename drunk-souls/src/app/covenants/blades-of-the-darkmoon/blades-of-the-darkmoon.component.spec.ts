import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesOfTheDarkmoonComponent } from './blades-of-the-darkmoon.component';

describe('BladesOfTheDarkmoonComponent', () => {
  let component: BladesOfTheDarkmoonComponent;
  let fixture: ComponentFixture<BladesOfTheDarkmoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesOfTheDarkmoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesOfTheDarkmoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
