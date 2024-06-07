import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioPageComponent } from './cardio-page.component';

describe('CardioPageComponent', () => {
  let component: CardioPageComponent;
  let fixture: ComponentFixture<CardioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
