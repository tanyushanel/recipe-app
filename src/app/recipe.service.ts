import { Injectable } from '@angular/core';
import { Ingredient } from './recipe-preview/recipe-preview.component';

export interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  description: string;
  image: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes = [
    {
      id: 0,
      title: 'Cezar',
      ingredients: [
        { id: 0, name: 'cheese', isThroughLined: false },
        { id: 1, name: 'meat', isThroughLined: false },
        { id: 2, name: 'salad', isThroughLined: false },
      ],
      description:
        'Coook it! Coook it! Coook it! Coook it! Coook it! Coook it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fXqE-7EcbiLQlWhCSchbslx0T6jyPYcA9A&usqp=CAU',
      rating: 0,
    },

    {
      id: 1,
      title: 'Fries',
      ingredients: [
        { id: 0, name: 'potato', isThroughLined: false },
        { id: 1, name: 'oil', isThroughLined: false },
        { id: 2, name: 'sause', isThroughLined: false },
      ],
      description: 'Fry it! Fry it! Fry it! Fry it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRM6wRsEqpFKGyl8sLxEJTPat5JgLr391jmQ&usqp=CAU',
      rating: 0,
    },
    {
      id: 2,
      title: 'Ice-cream',
      ingredients: [
        { id: 0, name: 'milk', isThroughLined: false },
        { id: 1, name: 'ice', isThroughLined: false },
        { id: 2, name: 'fruit', isThroughLined: false },
      ],
      description: 'Freeze it! Freeze it! Freeze it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiFo9-ZVEWJsEw7NVh5_7RgH01I2W2tnwMIg&usqp=CAU',
      rating: 0,
    },
    {
      id: 3,
      title: 'Wine',
      ingredients: [
        { id: 0, name: 'water', isThroughLined: false },
        { id: 1, name: 'oil', isThroughLined: false },
        { id: 2, name: 'sause', isThroughLined: false },
      ],
      description: 'Wait it',
      image:
        'https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg',
      rating: 0,
    },
    {
      id: 4,
      title: 'Coctail',
      ingredients: [
        { id: 0, name: 'milk', isThroughLined: false },
        { id: 1, name: 'syroup', isThroughLined: false },
        { id: 2, name: 'banana', isThroughLined: false },
      ],
      description: 'Mix it',
      image:
        'https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-1024x683.jpg',
      rating: 0,
    },
    {
      id: 5,
      title: 'Soup',
      ingredients: [
        { id: 0, name: 'potato', isThroughLined: false },
        { id: 1, name: 'cabbage', isThroughLined: false },
        { id: 2, name: 'carrot', isThroughLined: false },
      ],
      description: 'Boil it',
      image:
        'https://cdn.cnn.com/cnnnext/dam/assets/191115120957-immigrant-food-columbia-road.jpg',
      rating: 0,
    },
    {
      id: 6,
      title: 'Bun',
      ingredients: [
        { id: 0, name: 'egg', isThroughLined: false },
        { id: 1, name: 'flour', isThroughLined: false },
        { id: 2, name: 'sugar', isThroughLined: false },
      ],
      description: 'Bake it',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
      rating: 0,
    },
  ];
  randomRecipe: Recipe;

  constructor() {
    this.recipes = this.recipes.map(
      (item) =>
        JSON.parse(localStorage.getItem(item.id.toString())) ||
        this.saveToLocalStore(item)
    );

    this.randomRecipe = this.recipes[
      Math.floor(Math.random() * this.recipes.length)
    ];
  }

  saveToLocalStore(current: Recipe): void {
    localStorage.setItem(current.id.toString(), JSON.stringify(current));
  }
}
