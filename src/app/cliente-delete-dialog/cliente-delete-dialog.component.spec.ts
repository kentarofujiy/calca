import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDeleteDialogComponent } from './cliente-delete-dialog.component';

describe('ClienteDeleteDialogComponent', () => {
  let component: ClienteDeleteDialogComponent;
  let fixture: ComponentFixture<ClienteDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
