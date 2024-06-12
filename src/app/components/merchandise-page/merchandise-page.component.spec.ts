import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandisePageComponent } from './merchandise-page.component';

describe('MerchandisePageComponent', () => {
  let component: MerchandisePageComponent;
  let fixture: ComponentFixture<MerchandisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandisePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
