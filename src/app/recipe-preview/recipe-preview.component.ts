import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent implements OnInit {
  recipePreview: Recipe;
  ingredients: string[];
  searchText = '';
  isDisabledIngredients = true;
  isDisabledDesc = true;
  itemThroughLined: number;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.activateRoute.snapshot.paramMap.get('id');
    this.recipePreview = this.recipeService.recipes.find(
      (item) => item.id === this.id
    );

    this.recipePreview = this.recipeService.recipes[this.id];
    this.itemThroughLined = this.recipePreview[this.id];
    this.ingredients = this.recipePreview.ingredients;
  }

  onEditIngredients(): void {
    this.isDisabledIngredients = !this.isDisabledIngredients;
  }

  onDeleteClick(ingredient: string): void {
    this.ingredients = this.ingredients.filter(
      (item) => !(item === ingredient)
    );
    // this.itemTroughLined = 2; //TODO
  }

  onInsertIngredients(): void {}

  onSaveIngredients(): void {
    this.recipePreview.ingredients = this.ingredients;
    this.recipeService.saveToLocalStore(this.recipePreview);
    this.isDisabledIngredients = true;
  }

  onEditDescription(): void {
    this.isDisabledDesc = !this.isDisabledDesc;
  }

  onSaveDescription(): void {
    this.recipeService.saveToLocalStore(this.recipePreview);
    this.isDisabledDesc = true;
  }
}
