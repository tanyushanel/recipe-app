import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.scss'],
})
export class CurrentRecipeComponent implements OnInit {
  @Input() recipeCurrent: Recipe;
  @Output() rateChangedCurrent = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onTitleClick(): void {
    this.router.navigate(['preview', { id: this.recipeCurrent.id }]);
  }

  onChangeRate(i: number): void {
    this.recipeCurrent.rating = i;
    this.rateChangedCurrent.emit(i);
  }
}
