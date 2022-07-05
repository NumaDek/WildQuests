import { Component, OnInit } from '@angular/core';
import { Card, CardDeck } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokedex: Card[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data:CardDeck) => {
      // console.log(typeof(data));
      this.pokedex = data.cards;
      // console.log(this.pokedex);
    });
  }

}
