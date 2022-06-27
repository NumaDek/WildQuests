import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  // public searchMovie: FormGroup = new FormGroup({
  //   title: new FormControl(''),
  //   movieId: new FormControl(''),
  //   type: new FormControl(''),
  //   year: new FormControl(''),
  //   file: new FormControl(''),
  // });

  public searchMovie = this.formBuilder.group({
    title:['', Validators.required],
    movieId: ['', Validators.required],
    type: ['', Validators.required],
    year: ['', Validators.required, Validators.min(1900), Validators.max(2099)],
    file: ['', Validators.required],
  });

  public onSubmit() {
    console.log(this.searchMovie.value);
    this.searchMovie
  }
}
