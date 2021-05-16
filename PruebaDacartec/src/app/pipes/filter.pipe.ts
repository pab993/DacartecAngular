import { Product } from './../models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], arg: string): Product[] {
    const resultPost = [];
    if(!products || !arg){
      return products;
    }
    return products.filter(product => product.description.toLowerCase().indexOf(arg.toLowerCase()) !== -1);
  }

}
