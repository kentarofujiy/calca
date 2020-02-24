import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaDeleteDialogComponent } from './tarifa-delete-dialog.component';

describe('TarifaDeleteDialogComponent', () => {
  let component: TarifaDeleteDialogComponent;
  let fixture: ComponentFixture<TarifaDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
