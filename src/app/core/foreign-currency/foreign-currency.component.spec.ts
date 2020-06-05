import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignCurrencyComponent } from './foreign-currency.component';

describe('ForeignCurrencyComponent', () => {
  let component: ForeignCurrencyComponent;
  let fixture: ComponentFixture<ForeignCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
