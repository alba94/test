import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Ingredinet } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('f') form: NgForm;
subscription: Subscription;
editIndex: number;
editMode = false;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startEdit.subscribe(
      (index: number) => {
this.editIndex = index;
this.editMode = true;
      }
    );
  }

  onAdditem() {
const value = this.form.value;
const newIng = new Ingredinet(value.name, value.amount);
this.slService.OnIngredientAdded(new Ingredinet('dfgdfg', 5));

  }

}
