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
  @Output() clickTitle = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoTo(recipeCurrent: Recipe): void {
    this.router.navigate(['preview', { id: recipeCurrent.id }]);
    this.clickTitle.emit();
  }

  onChangeRate(i: number): void {
    this.recipeCurrent.rating = i;
    this.rateChangedCurrent.emit(i);
  }
}
