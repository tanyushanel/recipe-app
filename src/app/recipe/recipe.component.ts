import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() rate: number;
  @Input() isSelected: boolean;
  @Output() recipeSelected = new EventEmitter<Recipe>();


 constructor() { }

  ngOnInit(): void { }

  onSelectRecipe(): void {
    this.recipeSelected.emit(this.recipe);
  }
}
