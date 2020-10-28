import { Recipe, RecipeService } from './../recipe.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() recipeHome: Recipe;
  @Input() isCurrent: boolean;

  recipeList = this.recipeService.recipes;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeHome = this.recipeService.randomRecipe;
  }

  onRecipeSelected(event): void {
    this.recipeHome = event;
  }

  onChangeRate(event): void {
    this.recipeHome.rating = event;
    this.recipeService.saveRatingToLocalStore(this.recipeHome);
  }

  goTo(): void {
    this.router.navigate(['preview', { id: this.recipeHome.id }]);
  }
}
