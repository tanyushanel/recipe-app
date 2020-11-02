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
  description: string;
  isDisabledIngredients = true;
  isDisabledDesc = true;
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
  }

  onEditIngredients(): void {
    this.isDisabledIngredients = false;
  }

  // onSaveIngredients(): void {
  //   this.recipeService.recipes[
  //     this.id
  //   ].description = this.recipePreview.ingredients;
  //   this.isDisabledIngredients= true;
  // }

  onEditDescription(): void {
    this.isDisabledDesc = false;
  }

  onSaveDescription(): void {
    this.recipeService.recipes[
      this.id
    ].description = this.recipePreview.description;
    this.isDisabledDesc = true;
  }
}
