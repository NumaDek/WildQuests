import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public userName:FormControl = new FormControl('');
  public userMail:FormControl = new FormControl('');
  public userPassword:FormControl = new FormControl('');
  public userStreet:FormControl = new FormControl('');
  public userCity:FormControl = new FormControl('');
  public userZipCode:FormControl = new FormControl('');
  public users:User[] = []

  public onSubmit() : void {
    this.users.push(new User(this.userName.value, this.userMail.value, this.userPassword.value, this.userStreet.value, this.userCity.value, this.userZipCode.value));
  }
}
