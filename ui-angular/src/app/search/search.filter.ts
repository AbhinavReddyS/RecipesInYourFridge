import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'recipeFilter',
    pure: false
})
export class SearchFilter implements PipeTransform {

a:any[];

    transform(items: any[], cooking_time_filter: Object, difficulty_level_filter: Object,cuisine_filter: Object): any {

        if(!items) {
        return items;}

        this.a = items;
        if (cooking_time_filter)  {
        this.a= items.filter(item => item.cooking_time <= cooking_time_filter);
        }
        if (difficulty_level_filter) {
        this.a = this.a.filter(item => item.difficulty_level == difficulty_level_filter);
        }
        if (cuisine_filter) {
        this.a= this.a.filter(item => item.cuisine == cuisine_filter);
        }
        return this.a;

}
}
