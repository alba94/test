import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredinet } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredinet[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingrdientChange.subscribe(
      (ingredient: Ingredinet[]) => {
        this.ingredients = ingredient;
      }
    );
    this.shoppingListService.startEdit.subscribe(resp => {

      console.log(resp);
    });

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEdit(index: number) {
      this.shoppingListService.startEdit.next(index);
  }


}
