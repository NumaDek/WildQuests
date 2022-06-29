import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-card-kitten',
  templateUrl: './card-kitten.component.html',
  styleUrls: ['./card-kitten.component.scss']
})
export class CardKittenComponent implements OnInit {
  @Input() public kitten: Kitten = new Kitten("", "", "", "");
  
  constructor() { }

  ngOnInit(): void {
  }

}
