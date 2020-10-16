import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() recipeRecipe: Recipe;
  @Input() rateRecipe: number;
  @Input() isSelected: boolean;

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe(): void {
    this.isSelected = true;
    this.recipeSelected.emit(this.recipeRecipe);
  }
}
