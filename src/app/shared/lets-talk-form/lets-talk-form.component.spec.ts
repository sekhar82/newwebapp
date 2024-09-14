import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTalkFormComponent } from './lets-talk-form.component';

describe('LetsTalkFormComponent', () => {
  let component: LetsTalkFormComponent;
  let fixture: ComponentFixture<LetsTalkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsTalkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsTalkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
