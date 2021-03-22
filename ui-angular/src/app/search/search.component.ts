import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { VoiceRecognitionService } from '../service/voice-recognition.service'


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
  cooking_time_filter:any;
  max_time: number = 1000;



  constructor(private appService: AppService, public service : VoiceRecognitionService){
    this.service.init()
   }
  ngOnInit(): void {
  }

  public ingredientSearch(){
    if (this.ing_query == '')
      return;
    this.lstRecipes = null;
    this.loader_spinner = true;
    this.appService.ingredientSearch(this.ing_query).subscribe((response: any) => {
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
    this.service.start();
  }

  stopService(){
    this.service.stop();
  }

  time_filter(){
    this.max_time = 1000;  
    if (this.cooking_time_filter.indexOf('3') > -1) {
      this.max_time = 1000;
    } else if (this.cooking_time_filter.indexOf('2') > -1) {
      this.max_time = 60;
    } else if (this.cooking_time_filter.indexOf('1') > -1) {
      this.max_time = 30;
    }
  }
}
