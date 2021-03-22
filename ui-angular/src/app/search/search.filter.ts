import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'recipeFilter',
    pure: false
})
export class SearchFilter implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.cooking_time <= filter);
    }
}