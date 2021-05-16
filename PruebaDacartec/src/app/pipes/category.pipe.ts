import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: Product[], args: string[]): Product[] {
    const resultPost = [];
    if(!products || args.length == 0){
      return products;
    }
    return products.filter(product => {
      console.log(product.categories);
      return args.every(cat => {
        console.log(product.categories.includes(cat));
        return product.categories.includes(cat);
      });
    });


    /* 
    console.log(product.categories);
      return product.categories.every(cat => {
        console.log(args.includes(cat));
        return args.includes(cat);
      });
    */

    /*for(var i in args){
        console.log(product.categories);
        console.log(product.categories.includes(args[i]));
        return product.categories.includes(args[i]);
      }
      return [];*/

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  } 
}
