import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursPage } from './cours.page';

describe('CoursPage', () => {
  let component: CoursPage;
  let fixture: ComponentFixture<CoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
