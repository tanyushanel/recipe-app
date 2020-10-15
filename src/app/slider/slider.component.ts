import { RecipeService } from './../recipe.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() rateSlider: number;
  @Input() isRatedSlider: boolean;
  @Output() sliderRecipeSelected = new EventEmitter<Recipe>();
  @Output() sliderRating = new EventEmitter<number>();

  selectedRecipe: Recipe;
  recipeList = this.recipeService.recipes;
  width: string;
  height: string;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.showRecipeList();
  }

  showRecipeList(): Recipe[] {
    return this.recipeList;
  }

  onSelectRecipe(event): void {
    this.selectedRecipe = event;
    this.sliderRecipeSelected.emit(event);
  }
}
