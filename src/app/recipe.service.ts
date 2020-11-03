import { Injectable } from '@angular/core';

export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
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
      ingredients: ['salad', 'bread', 'meat'],
      description:
        'Coook it! Coook it! Coook it! Coook it! Coook it! Coook it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0fXqE-7EcbiLQlWhCSchbslx0T6jyPYcA9A&usqp=CAU',
      rating: 0,
    },

    {
      id: 1,
      title: 'Fries',
      ingredients: ['potato', 'sauce', 'oil'],
      description: 'Fry it! Fry it! Fry it! Fry it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRM6wRsEqpFKGyl8sLxEJTPat5JgLr391jmQ&usqp=CAU',
      rating: 0,
    },
    {
      id: 2,
      title: 'Ice-cream',
      ingredients: ['milk', 'ice', 'banana'],
      description: 'Freeze it! Freeze it! Freeze it!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiFo9-ZVEWJsEw7NVh5_7RgH01I2W2tnwMIg&usqp=CAU',
      rating: 0,
    },
    {
      id: 3,
      title: 'Wine',
      ingredients: ['grape', 'sugar', 'water'],
      description: 'Wait it',
      image:
        'https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg',
      rating: 0,
    },
    {
      id: 4,
      title: 'Coctail',
      ingredients: ['milk', 'ice', 'banana'],
      description: 'Mix it',
      image:
        'https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-1024x683.jpg',
      rating: 0,
    },
    {
      id: 5,
      title: 'Soup',
      ingredients: ['water', 'potato', 'meat'],
      description: 'Boil it',
      image:
        'https://cdn.cnn.com/cnnnext/dam/assets/191115120957-immigrant-food-columbia-road.jpg',
      rating: 0,
    },
    {
      id: 6,
      title: 'Bun',
      ingredients: ['milk', 'flour', 'egg'],
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
