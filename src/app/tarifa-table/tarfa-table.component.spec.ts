import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaTableComponent } from './tarifa-table.component';

describe('TarifaTableComponent', () => {
  let component: TarifaTableComponent;
  let fixture: ComponentFixture<TarifaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
