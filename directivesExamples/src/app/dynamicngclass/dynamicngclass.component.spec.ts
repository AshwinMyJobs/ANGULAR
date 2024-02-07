import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicngclassComponent } from './dynamicngclass.component';

describe('DynamicngclassComponent', () => {
  let component: DynamicngclassComponent;
  let fixture: ComponentFixture<DynamicngclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicngclassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicngclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
