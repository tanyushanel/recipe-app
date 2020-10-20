import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent implements OnInit {
  recipePreview: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.recipePreview = this.recipeService.recipes.find(
      (item) => item.id === this.id
    );
  }
}
