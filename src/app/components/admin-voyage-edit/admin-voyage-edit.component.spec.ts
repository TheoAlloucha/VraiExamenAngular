import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoyageEditComponent } from './admin-voyage-edit.component';

describe('AdminVoyageEditComponent', () => {
  let component: AdminVoyageEditComponent;
  let fixture: ComponentFixture<AdminVoyageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVoyageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVoyageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
