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
  data = {};
  constructor(private appService: AppService){

  }

  ngOnInit(){
    this.getData()
  }

  public getData(){
    this.title = "1";
    this.appService.get_data().subscribe((response: any) => 
      this.data = response
    );
  }
}
