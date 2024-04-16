import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoyageAddComponent } from './admin-voyage-add.component';

describe('AdminVoyageAddComponent', () => {
  let component: AdminVoyageAddComponent;
  let fixture: ComponentFixture<AdminVoyageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVoyageAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVoyageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
