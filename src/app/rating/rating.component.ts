import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  onChangeRate(i: number): void {
    this.recipe.rating = i;
  }
}
