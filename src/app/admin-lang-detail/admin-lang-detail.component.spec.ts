import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLangDetailComponent } from './admin-lang-detail.component';

describe('AdminLangDetailComponent', () => {
  let component: AdminLangDetailComponent;
  let fixture: ComponentFixture<AdminLangDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLangDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
