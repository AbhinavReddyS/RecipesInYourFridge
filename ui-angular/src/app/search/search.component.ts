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
  lstRecipes: any;
  ingredients:any;
  constructor(private appService: AppService, public service : VoiceRecognitionService){
   this.service.init()
  }
  ngOnInit(): void {
  }

  public ingredientSearch(){
    this.appService.ingredientSearch(this.ing_query).subscribe((response: any) => {
      this.lstRecipes = response;
    });
  }

  public fetchIngredients(){
    this.appService.fetchIngredients().subscribe((response: any) => {
      this.ingredients = response;
      console.log(this.ingredients)
    });
  }

  public toggle(){

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

  tiles: Tile[] = [
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},
    {text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3'},

  ];

}
