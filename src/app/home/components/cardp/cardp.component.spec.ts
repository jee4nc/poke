import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpComponent } from './cardp.component';

describe('CardpComponent', () => {
  let component: CardpComponent;
  let fixture: ComponentFixture<CardpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
