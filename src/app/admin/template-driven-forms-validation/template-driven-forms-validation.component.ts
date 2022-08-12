import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-validation',
  templateUrl: './template-driven-forms-validation.component.html',
  styleUrls: ['./template-driven-forms-validation.component.scss']
})
export class TemplateDrivenFormsValidationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(postForm: any) { console.log("post form", postForm); }
}
