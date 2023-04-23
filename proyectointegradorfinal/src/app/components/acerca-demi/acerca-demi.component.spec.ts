import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDemiComponent } from './acerca-demi.component';

describe('AcercaDemiComponent', () => {
  let component: AcercaDemiComponent;
  let fixture: ComponentFixture<AcercaDemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDemiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
