import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss'],
})
export class SearchedListComponent implements OnInit {
  @Input() clickedRecipe: Recipe;
  searchedList = this.recipeService.recipes.filter(
    (recipe) => recipe.rating > 2
  );

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}

  goTo(clickedRecipe): void {
    console.log(clickedRecipe);
    this.router.navigate(['recipe']);
  }

  onChangeRate(clickedRecipe, event): void {
    clickedRecipe.rating = event;
    this.recipeService.saveRatingToLocalStore(clickedRecipe);
  }
}
