import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe; 

  width: string;
  height: string;
  

 constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

   handleImageLoad(event: any): void {
    this.width = event.target.naturalWidth;
    this.height = event.target.naturalHeight;
  }

}
