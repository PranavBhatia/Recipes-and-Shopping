import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    this.newIngredient.emit(new Ingredient(ingName, ingAmount));
  }

}
