import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIconsComponent } from './tech-icons.component';

describe('TechIconsComponent', () => {
  let component: TechIconsComponent;
  let fixture: ComponentFixture<TechIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
