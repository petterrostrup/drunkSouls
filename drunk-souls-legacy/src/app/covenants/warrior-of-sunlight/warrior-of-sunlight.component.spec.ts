import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorOfSunlightComponent } from './warrior-of-sunlight.component';

describe('WarriorOfSunlightComponent', () => {
  let component: WarriorOfSunlightComponent;
  let fixture: ComponentFixture<WarriorOfSunlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarriorOfSunlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarriorOfSunlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
