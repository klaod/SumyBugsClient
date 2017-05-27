/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssueElementComponent } from './issue-element.component';

describe('IssueElementComponent', () => {
  let component: IssueElementComponent;
  let fixture: ComponentFixture<IssueElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
