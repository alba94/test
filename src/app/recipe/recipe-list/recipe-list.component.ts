import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [
  new Recipe('TestRecipe', 'Make a test', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg'),
  new Recipe('Another TestRecipe', 'Make a test',
  'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg')
];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);

  }

}
