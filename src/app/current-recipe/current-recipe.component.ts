import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.scss'],
})
export class CurrentRecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeCurrent: Recipe;
  @Input() rateCurrent: number;
  @Output() rateChangedCurrent = new EventEmitter<number>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeCurrent = this.recipe;
    this.rateCurrent = +localStorage.getItem(this.recipeCurrent.id.toString());
  }

  onChangeRate(i: number): void {
    this.recipeCurrent.rating = i;
    this.rateCurrent = i;
    this.rateChangedCurrent.emit(this.rateCurrent);
  }
}
