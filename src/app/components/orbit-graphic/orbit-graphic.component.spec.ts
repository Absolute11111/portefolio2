import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitGraphicComponent } from './orbit-graphic.component';

describe('OrbitGraphicComponent', () => {
  let component: OrbitGraphicComponent;
  let fixture: ComponentFixture<OrbitGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrbitGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
