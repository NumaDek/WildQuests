import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';
import { isEmailValid } from './email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public users:User[] = []
  public isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  public onSubmit() : void {
    this.users.push(new User(this.userForm.value.credentials.name, this.userForm.value.credentials.mail, this.userForm.value.credentials.password, new Address(this.userForm.value.address.street, this.userForm.value.address.city, this.userForm.value.address.zipCode)));
    this.isSubmitted = true;
  }

  public userForm: FormGroup = this.formBuilder.group({
    credentials: this.formBuilder.group({
      name: [''],
      email: ['' , [Validators.required, isEmailValid]],
      password: ['']
    }),
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zipCode: ['']  
    })
  });
}
