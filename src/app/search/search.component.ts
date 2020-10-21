import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  typingValue: string;
  options: string[];
  filteredOptions: string[];

  constructor(private recipeService: RecipeService) {
    this.options = this.recipeService.recipes.map((item) => item.title);
  }

  ngOnInit(): void {}

  doFilter(typingValue: string): void {
    const filterValue = typingValue.toLowerCase();
    this.filteredOptions = this.options.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }

  onSearch(value: Event): void {}
}
