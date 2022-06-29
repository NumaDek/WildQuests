import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  @Input()
  public kittenList: Kitten[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
