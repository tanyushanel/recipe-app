import { Component, Input, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.scss']
})
export class CurrentRecipeComponent implements OnInit {

  @Input() recipe: Recipe;  

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.randomRecipe;
  }  
}
