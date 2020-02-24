import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenarioDialogComponent } from './cenario-dialog.component';

describe('CenarioDialogComponent', () => {
  let component: CenarioDialogComponent;
  let fixture: ComponentFixture<CenarioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenarioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
