import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.scss'],
})
export class CurrentRecipeComponent implements OnInit {
  @Input() recipeCurrent: Recipe;
  @Output() rateChangedCurrent = new EventEmitter<number>();

  rateCurrent: number;
  isRatedCurrent: boolean;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeCurrent = this.recipeService.randomRecipe;
  }

  onChangeRate(i: number): void {
    this.rateCurrent = i;
    // this.isRatedCurrent = true;
    this.rateChangedCurrent.emit(this.rateCurrent);
  }
}
