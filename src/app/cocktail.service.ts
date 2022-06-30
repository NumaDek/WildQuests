import { Injectable } from "@angular/core";
import { CockTail } from "./models/cocktail.model";

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    public cocktails: CockTail[] = [];

    constructor() {
        this.cocktails.push(new CockTail("Mojito", 4, "https://assets.afcdn.com/recipe/20180705/80255_w350h250c1cx2774cy1849.jpg"));
        this.cocktails.push(new CockTail("Punch exotique", 3, "https://assets.afcdn.com/recipe/20180705/80348_w350h250c1cx1491cy2383.jpg"));
        this.cocktails.push(new CockTail("Punch", 5, "https://assets.afcdn.com/recipe/20180705/80349_w350h250c1cx2208cy2125.jpg"));
        this.cocktails.push(new CockTail("Aperol Spritz", 5, "https://assets.afcdn.com/recipe/20180705/80256_w350h250c1cx1665cy1865.jpg"));
        this.cocktails.push(new CockTail("Pigña Colada", 7, "https://assets.afcdn.com/recipe/20180705/80258_w350h250c1cx974cy1535.jpg"));
    }

    public getCocktails(): CockTail[] {
        return (this.cocktails);
    }
}
