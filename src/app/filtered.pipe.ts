import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtered'
})
export class FilteredPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const filteredArray = [];
    for(const item of value){
      if(item[propName] === filterString){
        filteredArray.push(item)
      }
    }
    return filteredArray
  }

}
