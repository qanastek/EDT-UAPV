import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavPage } from './add-fav.page';

describe('AddFavPage', () => {
  let component: AddFavPage;
  let fixture: ComponentFixture<AddFavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
