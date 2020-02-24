import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoDialogComponent } from './lancamento-dialog.component';

describe('LancamentoDialogComponent', () => {
  let component: LancamentoDialogComponent;
  let fixture: ComponentFixture<LancamentoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
