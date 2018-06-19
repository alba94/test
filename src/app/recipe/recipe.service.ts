import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredinet } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 private recipes: Recipe[] = [
    new Recipe(
      'TestRecipe',
      'Make a test',
      'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg',
       [new Ingredinet('meat', 1),
      new Ingredinet('bread', 2)]),
    new Recipe(
      'Another TestRecipe',
      'Make a test',
    'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg',
     [new Ingredinet('water', 1),
     new Ingredinet('flour', 2)])
  ];

  constructor(private slService: ShoppingListService) { }
  getRecipe() {
    return this.recipes.slice();
  }

  adIngredientsToShoppingList(ingredient: Ingredinet[]) {
    this.slService.addIngredients(ingredient);

  }

  getRecipeById(id: number ) {
    return this.recipes[id];
  }
}
