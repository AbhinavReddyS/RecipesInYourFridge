import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchFilter} from './search/search.filter';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SpeechToTextComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatInputModule,MatOptionModule, MatSelectModule, MatIconModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,SearchComponent]
})
export class AppModule { }
