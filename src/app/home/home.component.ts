import { Recipe, RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() recipeHome: Recipe;

  @Input() isCurrent: boolean;

  recipeList = this.recipeService.recipes;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeHome = this.recipeService.randomRecipe;
  }

  onRecipeSelected(event): void {
    this.recipeHome = event;
  }

  onChangeRate(event): void {
    this.recipeHome.rating = event;
    this.recipeService.saveRatingToLocalStore(this.recipeHome);
  }
}
