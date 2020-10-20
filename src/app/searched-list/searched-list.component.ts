import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss'],
})
export class SearchedListComponent implements OnInit {
  clickedRecipe: Recipe;
  searchedList = this.recipeService.recipes.filter(
    (recipe) => recipe.rating > 2
  );
  @Output() id = new EventEmitter<number>();

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}

  goTo(clickedRecipe: Recipe): number {
    console.log(clickedRecipe);
    this.router.navigate(['preview', { id: clickedRecipe.id }]);
    return this.clickedRecipe.id;
  }

  onChangeRate(clickedRecipe: Recipe, rate: number): void {
    clickedRecipe.rating = rate;
    this.recipeService.saveRatingToLocalStore(clickedRecipe);
  }
}
