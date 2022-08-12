import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsValidationComponent } from './template-driven-forms-validation.component';

describe('TemplateDrivenFormsValidationComponent', () => {
  let component: TemplateDrivenFormsValidationComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
