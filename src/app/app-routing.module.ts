import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { HomeComponent } from './core/home/home.component';


const route: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'recipes',
  component: RecipeComponent, children: [
    {
      path: '' , component: RecipeStartComponent
    },
    {path: ':id', component: RecipeDetailComponent}
  ] },
  {path: 'shoppping-list', component: ShoppingListComponent},
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]

})

export class AppRoutingModule {
}
