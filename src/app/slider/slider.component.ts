import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  recipeList = this.recipeService.recipes;

  width: string;
  height: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.showRecipeList();
  }

  showRecipeList(): Recipe[] {
    return this.recipeList;
  }

}
