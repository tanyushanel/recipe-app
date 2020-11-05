import { Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isMenuOpened = false;
  menuPoints = ['Vegetarian', 'Drinks', 'Desserts', 'Salads'];
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}

  onMenuClick(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  goToCategory(category: string): void {
    this.router.navigate([`searched/Category/${category}`]);
  }
}
