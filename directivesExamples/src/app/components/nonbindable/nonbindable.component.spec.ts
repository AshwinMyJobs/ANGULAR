import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonbindableComponent } from './nonbindable.component';

describe('NonbindableComponent', () => {
  let component: NonbindableComponent;
  let fixture: ComponentFixture<NonbindableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonbindableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonbindableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
