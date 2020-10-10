import { Recipe, RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipeList = this.recipeService.recipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    

  }

  

}
