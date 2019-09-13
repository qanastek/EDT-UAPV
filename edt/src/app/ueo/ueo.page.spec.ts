import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeoPage } from './ueo.page';

describe('UeoPage', () => {
  let component: UeoPage;
  let fixture: ComponentFixture<UeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
