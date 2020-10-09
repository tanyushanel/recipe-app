import { Recipe, RecipeService } from './recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe-app';
  pecipe: Recipe;

  constructor(private recipeService: RecipeService) {}
}
