import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CockTail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  public cocktails: CockTail[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
