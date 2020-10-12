import { Recipe, RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() recipe: Recipe;
  

  recipeList = this.recipeService.recipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    
    
  }
}
