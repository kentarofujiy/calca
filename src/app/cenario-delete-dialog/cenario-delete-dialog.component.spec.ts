import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenarioDeleteDialogComponent } from './cenario-delete-dialog.component';

describe('CenarioDeleteDialogComponent', () => {
  let component: CenarioDeleteDialogComponent;
  let fixture: ComponentFixture<CenarioDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenarioDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenarioDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
