import { Injectable } from '@angular/core';
import { Ingredient } from './recipe-preview/recipe-preview.component';

export class Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  description: string;
  image: string;
  rating: number;
  category: string;
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
        { name: 'cheese', isThroughLined: false },
        { name: 'meat', isThroughLined: false },
        { name: 'salad', isThroughLined: false },
      ],
      description:
        'Coook it! Coook it! Coook it! Coook it! Coook it! Coook it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fXqE-7EcbiLQlWhCSchbslx0T6jyPYcA9A&usqp=CAU',
      rating: 0,
      category: 'Salads',
    },

    {
      id: 1,
      title: 'Fries',
      ingredients: [
        { name: 'potato', isThroughLined: false },
        { name: 'oil', isThroughLined: false },
        { name: 'sause', isThroughLined: false },
      ],
      description: 'Fry it! Fry it! Fry it! Fry it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRM6wRsEqpFKGyl8sLxEJTPat5JgLr391jmQ&usqp=CAU',
      rating: 0,
      category: 'Fast Food',
    },
    {
      id: 2,
      title: 'Ice-cream',
      ingredients: [
        { name: 'milk', isThroughLined: false },
        { name: 'ice', isThroughLined: false },
        { name: 'fruit', isThroughLined: false },
      ],
      description: 'Freeze it! Freeze it! Freeze it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiFo9-ZVEWJsEw7NVh5_7RgH01I2W2tnwMIg&usqp=CAU',
      rating: 0,
      category: 'Desserts',
    },
    {
      id: 3,
      title: 'Wine',
      ingredients: [
        { name: 'water', isThroughLined: false },
        { name: 'oil', isThroughLined: false },
        { name: 'sause', isThroughLined: false },
      ],
      description: 'Wait it',
      image:
        'https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg',
      rating: 0,
      category: 'Drinks',
    },
    {
      id: 4,
      title: 'Coctail',
      ingredients: [
        { name: 'milk', isThroughLined: false },
        { name: 'syroup', isThroughLined: false },
        { name: 'banana', isThroughLined: false },
      ],
      description: 'Mix it',
      image:
        'https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-1024x683.jpg',
      rating: 0,
      category: 'Drinks',
    },
    {
      id: 5,
      title: 'Soup',
      ingredients: [
        { name: 'potato', isThroughLined: false },
        { name: 'cabbage', isThroughLined: false },
        { name: 'carrot', isThroughLined: false },
      ],
      description: 'Boil it',
      image:
        'https://cdn.cnn.com/cnnnext/dam/assets/191115120957-immigrant-food-columbia-road.jpg',
      rating: 0,
      category: 'Vegetarian',
    },
    {
      id: 6,
      title: 'Bun',
      ingredients: [
        { name: 'egg', isThroughLined: false },
        { name: 'flour', isThroughLined: false },
        { name: 'sause', isThroughLined: false },
      ],
      description: 'Bake it',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',
      rating: 0,
      category: 'Desserts',
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
