import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaDialogComponent } from './tarifa-dialog.component';

describe('TarifaDialogComponent', () => {
  let component: TarifaDialogComponent;
  let fixture: ComponentFixture<TarifaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
