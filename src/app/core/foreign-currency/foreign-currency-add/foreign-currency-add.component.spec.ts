import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignCurrencyAddComponent } from './foreign-currency-add.component';

describe('ForeignCurrencyAddComponent', () => {
  let component: ForeignCurrencyAddComponent;
  let fixture: ComponentFixture<ForeignCurrencyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignCurrencyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignCurrencyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
