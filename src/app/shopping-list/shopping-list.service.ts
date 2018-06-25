import { Injectable } from '@angular/core';
import { Ingredinet } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
public ingrdientChange = new Subject<Ingredinet[]>();
public startEdit = new Subject<number>();

  private ingredients: Ingredinet[] = [
    new Ingredinet('Apple', 5),
    new Ingredinet('Sugar', 1)
  ];

  constructor() { }

  OnIngredientAdded(ingredient: Ingredinet) {
    this.ingredients.push(ingredient);
    this.ingrdientChange.next(this.ingredients.slice());
}

getIngredients() {
 return this.ingredients.slice();
}

getIngredient(index: number) {
  return this.ingredients[index];
 }

 addIngredient(ingredient: Ingredinet) {
  this.ingredients.push(ingredient);
  this.ingrdientChange.next(this.ingredients.slice());
  }

addIngredients(ingredient: Ingredinet[]) {
this.ingredients.push(...ingredient);
this.ingrdientChange.next(this.ingredients.slice());
}

deleteIngredient(index: number) {
  this.ingredients.splice(index, 1);
  this.ingrdientChange.next(this.ingredients.slice());
}

updateIngredient(index: number, newIngred: Ingredinet) {
  this.ingredients[index] = newIngred;
  this.ingrdientChange.next(this.ingredients.slice());

}
}
