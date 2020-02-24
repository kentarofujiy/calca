import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoDeleteDialogComponent } from './lancamento-delete-dialog.component';

describe('LancamentoDeleteDialogComponent', () => {
  let component: LancamentoDeleteDialogComponent;
  let fixture: ComponentFixture<LancamentoDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
