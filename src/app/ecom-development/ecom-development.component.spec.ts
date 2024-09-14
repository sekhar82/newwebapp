import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomDevelopmentComponent } from './ecom-development.component';

describe('EcomDevelopmentComponent', () => {
  let component: EcomDevelopmentComponent;
  let fixture: ComponentFixture<EcomDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
