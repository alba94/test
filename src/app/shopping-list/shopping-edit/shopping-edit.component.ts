import { Component, OnInit, ElementRef, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredinet } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

@ViewChild('f') form: NgForm;
subscription: Subscription;
editIndex: number;
editMode = false;
editedItem: Ingredinet;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startEdit.subscribe(
      (index: number) => {
      this.editIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(index);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
      }
    );
  }

  onAdditem() {
      const value = this.form.value;
      const newIng = new Ingredinet(value.name, value.amount);
      this.slService.OnIngredientAdded(newIng);
      if (this.editMode) {
this.slService.updateIngredient(this.editIndex, newIng);
      } else {
this.slService.addIngredient(newIng);
      }
      this.editMode = false;

  }

  reset() {
    return this.form.reset();
  }

  deleteIt() {
    this.slService.deleteIngredient(this.editIndex);
this.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
