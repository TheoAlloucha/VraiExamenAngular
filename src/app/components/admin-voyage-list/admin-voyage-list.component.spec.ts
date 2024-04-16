import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoyageListComponent } from './admin-voyage-list.component';

describe('AdminVoyageListComponent', () => {
  let component: AdminVoyageListComponent;
  let fixture: ComponentFixture<AdminVoyageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVoyageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVoyageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
