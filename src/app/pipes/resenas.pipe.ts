import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resenas'
})
export class ResenasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultResenas = [];
    for (const post of value) {
      if(post.nombre.toLowerCase().indexOf(arg) > -1) {
        resultResenas.push(post);
      }
    }
    return null;
  }

}
