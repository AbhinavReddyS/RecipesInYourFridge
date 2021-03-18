import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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
