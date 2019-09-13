import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantsPage } from './enseignants.page';

describe('EnseignantsPage', () => {
  let component: EnseignantsPage;
  let fixture: ComponentFixture<EnseignantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
