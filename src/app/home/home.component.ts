import { Recipe, RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() rate: number;
  @Input() isCurrent: boolean;
  recipeList = this.recipeService.recipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { }
  
  onRecipeSelected(event): void {
    this.recipe = event;
    
  }
  
  onRateChange(event): void {
    this.rate = event;
  }
}
