import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeService } from './recipe/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeModule } from './recipe/recipe.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/header/header.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ShoppingListModule,
    RecipeModule,
    CoreModule,
    SharedModule
    ],
  providers: [
    RecipeService,
    ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
