import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidoraDeleteDialogComponent } from './distribuidora-delete-dialog.component';

describe('DistribuidoraDeleteDialogComponent', () => {
  let component: DistribuidoraDeleteDialogComponent;
  let fixture: ComponentFixture<DistribuidoraDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidoraDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidoraDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
