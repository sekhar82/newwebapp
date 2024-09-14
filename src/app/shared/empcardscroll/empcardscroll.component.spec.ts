import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcardscrollComponent } from './empcardscroll.component';

describe('EmpcardscrollComponent', () => {
  let component: EmpcardscrollComponent;
  let fixture: ComponentFixture<EmpcardscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcardscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpcardscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
