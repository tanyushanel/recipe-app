import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  recipes = [
    {
      id: 1,
      title: 'Cezar',
      ingredients: ['salad', 'bread', 'meat'],
      description: 'Coook it!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fXqE-7EcbiLQlWhCSchbslx0T6jyPYcA9A&usqp=CAU'
    },

    {
      id: 2,
      title: 'Fries',
      ingredients: ['potato', 'sauce', 'oil'],
      description: 'Fry it!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRM6wRsEqpFKGyl8sLxEJTPat5JgLr391jmQ&usqp=CAU'
    },
    {
      id: 3,
      title: 'Ice-cream',
      ingredients: ['milk', 'ice', 'banana'],
      description: 'Freeze it!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiFo9-ZVEWJsEw7NVh5_7RgH01I2W2tnwMIg&usqp=CAU'
    },
  ];

  currentRecipe: BehaviorSubject<Recipe> = new BehaviorSubject<Recipe>(this.recipes[0]);

  constructor() {}
}
