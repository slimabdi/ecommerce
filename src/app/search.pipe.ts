import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    console.log('term', args);
    return args ? value.filter(item => item.title.toUpperCase().indexOf(args.toUpperCase()) !== -1) : value;
  }

}
