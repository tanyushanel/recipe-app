import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent implements OnInit {
  recipePreview: Recipe;
  searchText = '';
  isDisabledIngredients = true;
  isDisabledDesc = true;

  constructor(
    private recipeService: RecipeService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.recipePreview = this.recipeService.recipes.find(
      (item) => item.id === id
    );
  }

  onEditRecipe1(): void {
    this.isDisabledIngredients = false;
  }

  onEditRecipe2(): void {
    this.isDisabledDesc = false;
  }

  onSaveRecipe(): void {}
}
