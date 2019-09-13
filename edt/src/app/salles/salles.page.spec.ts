import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesPage } from './salles.page';

describe('SallesPage', () => {
  let component: SallesPage;
  let fixture: ComponentFixture<SallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
