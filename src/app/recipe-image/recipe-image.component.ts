import { Component, Input, OnInit } from '@angular/core';
import { Recipe} from '../recipe.service';

@Component({
  selector: 'app-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.scss']
})
export class RecipeImageComponent implements OnInit {

  @Input() recipe: Recipe;
  width: string;
  height: string;

 constructor() { }

  ngOnInit(): void {}

  handleImageLoad(event): void {
    this.width = event.target.naturalWidth;
    this.height = event.target.naturalHeight;
  }

}
