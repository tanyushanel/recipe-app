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
  searchedList: Recipe[] = [];
  searchText = '';
  searchTarget = '';
  recipeTitle: string;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchText = this.activateRoute.snapshot.paramMap.get('searchText');

    this.searchTarget = this.activateRoute.snapshot.paramMap.get(
      'searchTarget'
    );

    if (this.searchTarget.toLowerCase() === 'title') {
      this.searchedList = this.recipeService.recipes.filter(
        (item) => item.title.toLowerCase() === this.searchText.toLowerCase()
      );
    }
    if (this.searchTarget.toLowerCase() === 'category') {
      this.searchedList = this.recipeService.recipes.filter(
        (item) => item.category.toLowerCase() === this.searchText.toLowerCase()
      );
    }
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
