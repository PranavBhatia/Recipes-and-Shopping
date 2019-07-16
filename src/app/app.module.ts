import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecepieListComponent } from './recepie-book/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie-book/recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailComponent } from './recepie-book/recepie-detail/recepie-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecepieBookComponent } from './recepie-book/recepie-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecepieListComponent,
    RecepieItemComponent,
    RecepieDetailComponent,
    HeaderComponent,
    RecepieBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
