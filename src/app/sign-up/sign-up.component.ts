import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user:User = new User("", "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit():void {
    console.log(this.user);
  }
}
