import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilgrimsOfDarkComponent } from './pilgrims-of-dark.component';

describe('PilgrimsOfDarkComponent', () => {
  let component: PilgrimsOfDarkComponent;
  let fixture: ComponentFixture<PilgrimsOfDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilgrimsOfDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilgrimsOfDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
