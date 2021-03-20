import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ing_query: string = '';
  lstRecipes: any;
  constructor(private appService: AppService){

  }
  ngOnInit(): void {
  }

  public ingredientSearch(){
    this.appService.ingredientSearch(this.ing_query).subscribe((response: any) => {
      this.lstRecipes = response;
    });
  }

  public redirect(url:any){
    window.open(url, "_blank");
  }
}
