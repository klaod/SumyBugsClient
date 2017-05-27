/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModerateComponent } from './moderate.component';

describe('ModerateComponent', () => {
  let component: ModerateComponent;
  let fixture: ComponentFixture<ModerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
