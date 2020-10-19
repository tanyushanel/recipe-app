import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss'],
})
export class SearchedListComponent implements OnInit {
  searchedList = this.recipeService.recipes.filter(
    (recipe) => recipe.rating > 2
  );

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}

  goTo(recipe): void {
    this.router.navigate([recipe]);
  }
}
