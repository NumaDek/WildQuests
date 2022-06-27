import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public users:User[] = []

  public onSubmit() : void {
   this.users.push(new User(this.userForm.value.credentials.name, this.userForm.value.credentials.mail, this.userForm.value.credentials.password, new Address(this.userForm.value.address.street, this.userForm.value.address.city, this.userForm.value.address.zipCode)));
  }

  public userForm: FormGroup = this.formBuilder.group({
    credentials: this.formBuilder.group({
      name: [''],
      mail: [''],
      password: ['']
    }),
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zipCode: ['']  
    })
  });
}
