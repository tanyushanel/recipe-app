import { Injectable } from '@angular/core';

export interface Recipe {
  id: number;
  ingredients: string[];
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipe = [
    {
      id: 1,
      ingredients: ['salad', 'bread', 'meat'],
      description: 'Coook it!',
    },

    {
      id: 2,
      ingredients: ['potato', 'sauce', 'oil'],
      description: 'Fry it!',
    },
    {
      id: 1,
      ingredients: ['milk', 'ice', 'banana'],
      description: 'Freeze it!',
    },
  ];

  constructor() {}
}
