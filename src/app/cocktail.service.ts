import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CockTail } from "./models/cocktail.model";

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    constructor(public cocktailService: HttpClient) {}

    public getCocktails(): Observable<CockTail[]> {
        const cocktailsData$: Observable<CockTail[]> = this.cocktailService.get<CockTail[]>("assets/cocktails.json");
        return (cocktailsData$);
    }
}
