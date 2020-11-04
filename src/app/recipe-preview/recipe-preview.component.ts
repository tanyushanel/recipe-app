import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

export class Ingredient {
  id: number;
  isThroughLined: boolean;
  constructor(public name?: string) {
    this.name = name;
  }
}

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent implements OnInit {
  recipePreview: Recipe;
  ingredient = new Ingredient();
  id: number;
  ingredients: Ingredient[];
  searchText = '';
  isDisabledIngredients = true;
  isDisabledDesc = true;

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
    this.ingredients = this.recipePreview.ingredients;
  }

  onEditIngredients(): void {
    this.isDisabledIngredients = !this.isDisabledIngredients;
  }

  onDeleteIngredient(ingredient: Ingredient, index: number): void {
    this.onDeleteClick();

    this.ingredient.id = index;
    if (this.ingredient.isThroughLined) {
      this.ingredients = this.ingredients.filter(
        (item) => !(item === ingredient)
      );
    } else {
      this.ingredients = this.recipePreview.ingredients;
    }
  }

  onDeleteClick(): void {
    this.ingredient.isThroughLined = !this.ingredient.isThroughLined;
  }

  onInsertIngredients(): void {
    if (
      this.ingredients.find((item) => item.name === this.ingredient.name) ||
      !this.ingredient.name.trim()
    ) {
      this.ingredient.name = '';
    } else {
      this.ingredients.push(new Ingredient(this.ingredient.name));
      this.ingredient.name = '';
    }
  }

  onSaveIngredients(): void {
    this.recipePreview.ingredients = this.ingredients;
    this.recipeService.saveToLocalStore(this.recipePreview);
    this.isDisabledIngredients = true;
    this.ingredient.isThroughLined = false;
  }

  onEditDescription(): void {
    this.isDisabledDesc = !this.isDisabledDesc;
  }

  onSaveDescription(): void {
    this.recipeService.saveToLocalStore(this.recipePreview);
    this.isDisabledDesc = true;
  }
}
