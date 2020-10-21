import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent implements OnInit {
  recipePreview: Recipe;
  id: number;
  @Output() rateChangedCurrent = new EventEmitter<number>();

  constructor(
    private recipeService: RecipeService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.activateRoute.snapshot.paramMap.get('id');
    this.recipePreview = this.recipeService.recipes.find(
      (item) => item.id === this.id
    );
  }

  onEditRecipe(): void {}

  onSaveRecipe(): void {}

  onChangeRate(i: number): void {
    this.recipePreview.rating = i;
    this.rateChangedCurrent.emit(i);
  }
}
