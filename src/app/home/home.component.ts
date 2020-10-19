import { Recipe, RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() recipeHome: Recipe;
  @Input() rateHome: number;
  @Input() isCurrent: boolean;

  recipeList = this.recipeService.recipes;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeHome = this.recipeService.randomRecipe;
    this.rateHome = this.recipeHome.rating;
  }

  onRecipeSelected(event): void {
    this.recipeHome = event;
    this.rateHome = this.recipeHome.rating;
  }

  onChangeRate(event): void {
    this.rateHome = event;
    this.recipeService.saveRatingToLocalStore(this.recipeHome);
  }
}
