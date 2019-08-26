import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOfChampionsComponent } from './company-of-champions.component';

describe('CompanyOfChampionsComponent', () => {
  let component: CompanyOfChampionsComponent;
  let fixture: ComponentFixture<CompanyOfChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOfChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOfChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
