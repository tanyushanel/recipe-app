import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  options: string[];
  filteredOptions: string[];
  @Input() typingValue: string;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.options = this.recipeService.recipes.map((item) => item.title);
  }

  ngOnInit(): void {}

  doFilter(typingValue: string): void {
    const filterValue = typingValue.toLowerCase();
    this.filteredOptions = this.options.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }

  onSearchClick(): void {
    this.router.navigate([`searched/Title/${this.typingValue}`]);
  }
}
