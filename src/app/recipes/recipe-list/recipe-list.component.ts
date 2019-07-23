import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'A dummy kind of description', 'https://www.bbcgoodfood.com/sites/default/files/' +
      'categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('Test Recipe 2', 'A dummy kind of description', 'https://www.bbcgoodfood.com/sites/default/files/' +
      'categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
