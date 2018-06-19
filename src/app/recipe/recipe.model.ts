import { Ingredinet } from '../shared/ingredient.model';


export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredient: Ingredinet[];

  constructor (name: string, description: string, imagepath: string, ingredient: Ingredinet[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagepath;
    this.ingredient = ingredient;
  }

 }
