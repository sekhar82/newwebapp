import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSeoComponent } from './enterprise-seo.component';

describe('EnterpriseSeoComponent', () => {
  let component: EnterpriseSeoComponent;
  let fixture: ComponentFixture<EnterpriseSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseSeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
