import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ing_query: string = '';
  ingQueryResponse: any;
  title_query: string = '';
  titleQueryResponse: any;

  constructor(private appService: AppService){

  }

  ngOnInit(){
  }

  public ingredientSearch(){
    this.appService.ingredientSearch(this.ing_query).subscribe((response: any) => {
      this.ingQueryResponse = response;
    });
  }

  public titleSearch(){
    this.appService.titleSearch(this.title_query).subscribe((response: any) => {
      this.titleQueryResponse = response;
    });
  }
}
