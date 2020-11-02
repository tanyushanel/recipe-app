import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() r = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onChangeRate(i: number): void {
    this.recipe.rating = i;
    this.r.emit(i);
  }
}
