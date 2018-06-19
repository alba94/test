import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';

const route: Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: 'full'},
  {path: 'recipes',
  component: RecipeComponent, children: [
    {
      path: '' , component: RecipeStartComponent
    },
    {path: ':id', component: RecipeDetailComponent}
  ] },
  {path: 'shoppping-list',
  component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]

})

export class AppRoutingModule {
}
