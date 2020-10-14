import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() rate: number;
  
  @Output() recipeSelected = new EventEmitter<Recipe>();
  

 constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { }

  onRecipeSelected(): void {
    this.recipeSelected.emit(this.recipe);
  }
  
  
  

}
