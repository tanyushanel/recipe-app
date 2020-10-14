import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.scss']
})
export class CurrentRecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() rate: number;

  @Output() rateChange = new EventEmitter<number>();



  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.randomRecipe;
  }

  changeRate(i): void {
    this.rate = i;

    this.rateChange.emit(this.rate);
  }
}
