import { Injectable } from '@angular/core';
import { Ingredinet } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingrdientChange = new Subject<Ingredinet[]>();
public startEdit = new Subject<number>();

  private ingredients: Ingredinet[] = [
    new Ingredinet('Apple', 5),
    new Ingredinet('Sugar', 1)
  ];

  constructor() { }

  OnIngredientAdded(ingredient: Ingredinet) {
    this.ingredients.push(ingredient);
    this.ingrdientChange.next(this.ingredients.slice());
    console.log(ingredient.name);
}

getIngredients() {
 return this.ingredients.slice();
}

addIngredients(ingredient: Ingredinet[]) {
this.ingredients.push(...ingredient);
this.ingrdientChange.next(this.ingredients.slice());
}
}
