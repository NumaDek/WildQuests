import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from './models/article.model';
import { isReferenceFormatted } from './validators/reference.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSubmitted: boolean = false;
  public articleList: Article[] = [];
  public articleForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    reference: ['', [Validators.required, isReferenceFormatted]],
    description: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {}

  public onSubmit(): void {
    this.isSubmitted = true;
    if (this.articleForm.valid)
     this.articleList.push(new Article(this.articleForm.value.name, this.articleForm.value.reference, this.articleForm.value.description))
  }

}
