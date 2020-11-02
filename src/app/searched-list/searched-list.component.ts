import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss'],
})
export class SearchedListComponent implements OnInit {
  clickedRecipe: Recipe;
  searchedList = [];
  searchText = '';
  recipeTitle: string;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchText = this.activateRoute.snapshot.paramMap
      .get('searchText')
      .toLowerCase();

    this.searchedList = this.recipeService.recipes.filter(
      (item) => item.title.toLowerCase() === this.searchText
    );
  }

  goTo(clickedRecipe: Recipe): number {
    console.log(clickedRecipe);
    this.router.navigate(['preview', { id: clickedRecipe.id }]);
    return this.clickedRecipe.id;
  }

  onChangeRate(clickedRecipe: Recipe, rate: number): void {
    clickedRecipe.rating = rate;
    this.recipeService.saveToLocalStore(clickedRecipe);
  }
}
