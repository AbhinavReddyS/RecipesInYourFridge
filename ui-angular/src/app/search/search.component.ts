import { Component, OnInit , ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { VoiceRecognitionService } from '../service/voice-recognition.service'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ViewChild } from '@angular/core'



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
    providers: [VoiceRecognitionService]
})
export class SearchComponent implements OnInit {

  ing_query: string = '';
  title_query: string = '';
  ing_search: boolean = false;
  ing_loaded: boolean = false;
  loader_spinner: boolean = false;
  lstRecipes: any;
  IngredientsFromDB:any;
  cooking_time_filter_value:string;
  max_time: number = 1000;
  difficulty_level:string;
  difficulty_level_filter:any;
  cuisine_filter:any;
  cuisine:string;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  ingCtrl = new FormControl();
  filteredIngs: Observable<string[]>;
  ingredients: string[] = [];
  allIngredients:string[] = [];

  @ViewChild('ingInput') ingInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private appService: AppService, public service : VoiceRecognitionService){
    this.service.init()
    this.fetchIngredients()
    this.filteredIngs = this.ingCtrl.valueChanges.pipe(
        startWith(null),
        map((ingredient: string | null) => ingredient ? this._filter(ingredient) : this.allIngredients.slice()));
   }
  ngOnInit(): void {
  }

  public ingredientSearch(){
    this.lstRecipes = null;
    this.loader_spinner = true;
    var string= new  String()
    for ( let ing of this.ingredients){
    string = string+ " "+ ing
    }
    this.appService.ingredientSearch(string).subscribe((response: any) => {
      this.lstRecipes = response;
      this.loader_spinner = false;
    });
  }

  public titleSearch(){
    if (this.title_query == '')
      return;
    this.lstRecipes = null;
    this.loader_spinner = true;
    this.appService.titleSearch(this.title_query).subscribe((response: any) => {
      this.lstRecipes = response;
      this.loader_spinner = false;
    });
  }

  public fetchIngredients(){
    this.appService.fetchIngredients().subscribe((response: any) => {
    for(let result of response){
        this.allIngredients.push(result.name);
    }
    });
  }

  public toggle(){
    this.ing_query = '';
    this.title_query = '';
    this.ing_search = !this.ing_search;
    if (this.ing_loaded== false){
      this.fetchIngredients();
      this.ing_loaded=true;
      }}

  public redirect(url:any){
        window.open(url, "_blank");
  }

  startService(){
    this.service.start();
  }

  stopService(){
    this.service.stop();
  }
  time_filter(){
    this.max_time = 1000;
    console.log(this.cooking_time_filter_value)
    if (this.cooking_time_filter_value== '3') {
      this.max_time = 1000;
    } else if (this.cooking_time_filter_value== '2') {
      this.max_time = 60;
    } else if (this.cooking_time_filter_value== '1') {
      this.max_time = 30;
    }

    console.log(this.max_time)
  }

 dl_filter(){
   if (this.difficulty_level_filter=='0') {
      this.difficulty_level = null;
    }
    if (this.difficulty_level_filter=='1') {
      this.difficulty_level = "super easy";
    } else if (this.difficulty_level_filter=='2') {
      this.difficulty_level = "easy";
    } else if (this.difficulty_level_filter=='3') {
      this.difficulty_level = "moderate";
    } else if (this.difficulty_level_filter=='4') {
      this.difficulty_level = "advanced";
    }
  }

  cu_filter() {
     if (this.cuisine_filter=='0') {
      this.cuisine = null;
    }
    if (this.cuisine_filter=='1') {
      this.cuisine = "thai";
    } else if (this.cuisine_filter=='2') {
      this.cuisine = "indian";
    } else if (this.cuisine_filter=='3') {
      this.cuisine = "french";
    } else if (this.cuisine_filter=='4') {
      this.cuisine = "italian";
    }  else if (this.cuisine_filter=='5') {
      this.cuisine = "chinese";
    } else if (this.cuisine_filter=='6') {
      this.cuisine = "mexican";
    }

  }


/// ADD CHIP functionality....
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our ingredient
    if ((value || '').trim()) {
      this.ingredients.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.ingCtrl.setValue(null);
  }

/// REMOVE CHIP functionality....
  remove(ingredient: string): void {
    const index = this.ingredients.indexOf(ingredient);
    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

///  MAT AUTOCOMPLETE functionality....
  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingredients.push(event.option.viewValue);
    this.ingInput.nativeElement.value = '';
    this.ingCtrl.setValue(null);
  }

///  Filter Ingredients...
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allIngredients.filter(ingredient => ingredient.toLowerCase().indexOf(filterValue) === 0);
  }

}
