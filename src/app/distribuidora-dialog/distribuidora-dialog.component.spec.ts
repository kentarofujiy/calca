import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidoraDialogComponent } from './distribuidora-dialog.component';

describe('DistribuidoraDialogComponent', () => {
  let component: DistribuidoraDialogComponent;
  let fixture: ComponentFixture<DistribuidoraDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidoraDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidoraDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
