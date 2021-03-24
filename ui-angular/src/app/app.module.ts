import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {SearchFilter} from './search/search.filter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,MatOptionModule, MatSelectModule, MatIconModule,


  ],
  providers: [],
  bootstrap: [AppComponent,SearchComponent]
})
export class AppModule { }
