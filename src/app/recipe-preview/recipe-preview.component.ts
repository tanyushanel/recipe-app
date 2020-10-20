import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent implements OnInit {
  @Input() recipePreview: Recipe;

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(event): void {
    this.recipePreview = event;
  }
}
