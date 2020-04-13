import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmNavigationComponent } from './cpm-navigation.component';

describe('CpmNavigationComponent', () => {
  let component: CpmNavigationComponent;
  let fixture: ComponentFixture<CpmNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
