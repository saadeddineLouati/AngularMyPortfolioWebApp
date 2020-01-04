import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(`Ionic project`, `Mobile application`, `https://cdn.imgbin.com/18/14/16/imgbin-mobile-app-euclidean-icon-click-the-ppt-phone-material-2Lqgh9BhdFBUtFQMCnEBaKrDq.jpg`),
    new Recipe(`React project`, `Web application`, `https://cdn.imgbin.com/18/14/16/imgbin-mobile-app-euclidean-icon-click-the-ppt-phone-material-2Lqgh9BhdFBUtFQMCnEBaKrDq.jpg`),
  ];

  constructor() { }

  ngOnInit() {
  }

}
