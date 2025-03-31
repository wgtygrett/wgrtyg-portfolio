import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCogComponent } from './code-cog.component';

describe('CodeCogComponent', () => {
  let component: CodeCogComponent;
  let fixture: ComponentFixture<CodeCogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeCogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeCogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
