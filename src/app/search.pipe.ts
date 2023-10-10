// search.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!data || !searchText) {
      return data;
    }

    searchText = searchText.toLowerCase();
    return data.filter(item => {
      // Customize this based on your data structure and the fields you want to search
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}
