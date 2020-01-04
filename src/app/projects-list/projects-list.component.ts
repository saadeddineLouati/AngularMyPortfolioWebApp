import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Milk',25),
    new Ingredient('Onion',15),
    new Ingredient('Water',200)
  ];


  constructor() { }

  ngOnInit() {
  }

}
