import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmCalcCurrencyComponent } from './cpm-calc-currency.component';

describe('CpmCalcCurrencyComponent', () => {
  let component: CpmCalcCurrencyComponent;
  let fixture: ComponentFixture<CpmCalcCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmCalcCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmCalcCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
