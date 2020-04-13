import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmChartCurrencyComponent } from './cpm-chart-currency.component';

describe('CpmChartCurrencyComponent', () => {
  let component: CpmChartCurrencyComponent;
  let fixture: ComponentFixture<CpmChartCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmChartCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmChartCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
