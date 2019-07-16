import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies = [];
  constructor() { }

  ngOnInit() {
  }

}
