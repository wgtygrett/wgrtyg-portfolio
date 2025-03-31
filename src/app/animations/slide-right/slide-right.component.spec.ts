import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRightComponent } from './slide-right.component';

describe('SlideRightComponent', () => {
  let component: SlideRightComponent;
  let fixture: ComponentFixture<SlideRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
