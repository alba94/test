import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  formGroup: FormGroup;
  editMode = false;
  id: number;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      });
    this.submitForm();
  }

  submitForm() {
    let nameEl = '';
    let descEl = '';
    let imgEl = '';

    if (this.editMode) {
const recipe = this.recipeService.getRecipeById(this.id);
nameEl = recipe.name;
descEl = recipe.description;
imgEl = recipe.imagePath;
    }

this.formGroup = new FormGroup({
  'name': new FormControl(nameEl),
  'description': new FormControl(descEl),
  'imagePath': new FormControl(imgEl)
});
  }

}
