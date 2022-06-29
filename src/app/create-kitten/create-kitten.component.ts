import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent{
  @Output()
  public sendNewKitten: EventEmitter<Kitten> = new EventEmitter();
  public isSubmitted: boolean = false;
  public kittyForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthday: ['', Validators.required],
    pictureUrl: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  public onSubmit(): void {
    this.sendNewKitten.emit(new Kitten(this.kittyForm.value.name, this.kittyForm.value.race, this.kittyForm.value.birthday, this.kittyForm.value.pictureUrl));
    console.log(this.kittyForm);
    this.isSubmitted = true;
  }
}
