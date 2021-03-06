import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

export class Ingredient {
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
  hint = '';
  index: number;

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

  onDeleteIngredient(ingredient: Ingredient): void {
    this.onDeleteClick();

    this.index = this.ingredients.findIndex(
      (item) => item.name === ingredient.name
    );
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
      this.ingredient.name === undefined ||
      this.ingredients.find((item) => item.name === this.ingredient.name) ||
      !this.ingredient.name.trim()
    ) {
      this.hint = 'Invalid input';
    } else {
      this.ingredients.push(new Ingredient(this.ingredient.name));
      this.hint = '';
    }
    this.ingredient.name = '';
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
