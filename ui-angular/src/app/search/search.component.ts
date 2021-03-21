import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { VoiceRecognitionService } from '../service/voice-recognition.service'


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
  loader_spinner: boolean = false;
  lstRecipes: any;
  ingredients:any;
  constructor(private appService: AppService, public service : VoiceRecognitionService){
    this.service.init()
   }
  ngOnInit(): void {
  }

  public ingredientSearch(){
    this.lstRecipes = null;
    this.loader_spinner = true;
    this.appService.ingredientSearch(this.ing_query).subscribe((response: any) => {
      this.lstRecipes = response;
      this.loader_spinner = false;
    });
  }

  public titleSearch(){
    this.lstRecipes = null;
    this.loader_spinner = true;
    this.appService.titleSearch(this.title_query).subscribe((response: any) => {
      this.lstRecipes = response;
      this.loader_spinner = false;
    });
  }

  public fetchIngredients(){
    this.appService.fetchIngredients().subscribe((response: any) => {
      this.ingredients = response;
      console.log(this.ingredients)
    });
  }

  public toggle(){
    this.ing_query = '';
    this.title_query = '';
    this.ing_search = !this.ing_search;
  }

  public redirect(url:any){
        window.open(url, "_blank");
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }

}
