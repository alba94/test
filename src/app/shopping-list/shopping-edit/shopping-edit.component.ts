import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Ingredinet } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameinputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
ingredientAdded = new EventEmitter<Ingredinet>();

  constructor() { }

  ngOnInit() {
  }

  onAdditem() {
const ingName = this.nameinputRef.nativeElement.value;
const ingAmount = this.nameinputRef.nativeElement.value;
const newIng = new Ingredinet(ingName, ingAmount);
this.ingredientAdded.emit(newIng);
  }

}
