import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card, CardDeck } from "../models/pokemon.model";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private service: HttpClient) {}

    private localURL: string = "assets/pokedex.json";
    private apiURL: string = "https://api.pokemontcg.io/v1/cards";

    public getPokemons(): Observable<CardDeck> {
        const pokemonData$: Observable<CardDeck> = this.service.get<CardDeck>(this.apiURL);
        return (pokemonData$);
    }
}