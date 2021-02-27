import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ui-angular';
  temp = 'Abhinav';
  data : any;
  constructor(private appService: AppService){

  }

  ngOnInit(){
  }

  public ingredientSearch(){
    this.appService.ingredientSearch().subscribe((response: any) => {
      this.data = response.data;
    });
  }
}
