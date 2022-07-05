import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() public pokemon!: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
