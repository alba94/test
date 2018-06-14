import { Component, OnInit } from '@angular/core';
import { Ingredinet } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredinet[] = [
  new Ingredinet('Apple', 5),
  new Ingredinet('Sugar', 1)
];
  constructor() { }

  ngOnInit() {
  }

  OnIngredientAdded(ingredient: Ingredinet) {
      this.ingredients.push(ingredient);
      console.log(ingredient.name);
  }

}
