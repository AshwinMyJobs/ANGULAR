import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEventBindingComponent } from './output-event-binding.component';

describe('OutputEventBindingComponent', () => {
  let component: OutputEventBindingComponent;
  let fixture: ComponentFixture<OutputEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputEventBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
