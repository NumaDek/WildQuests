import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { isRequiredValidator } from '../validators/id-or-title.validator';
import { rangeDateValidator } from '../validators/year.validator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  public isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchMovie.get('file')?.patchValue('Courte');
  }

  public searchMovie = this.formBuilder.group({
    identity: this.formBuilder.group(
      {
        title: ['', Validators.required],
        movieId: ['', Validators.required],
      },
      { validator: isRequiredValidator }
    ),
    type: ['Série', Validators.required],
    year: ['', [Validators.required, rangeDateValidator]],
    file: ['', Validators.required],
  });

  public onSubmit() {
    console.log(JSON.stringify(this.searchMovie.value));
    // console.log(this.searchMovie.get('identity')?.errors?.['isRequiredValidator']);
    this.isSubmitted = true;
  }
}
