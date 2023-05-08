import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';



@Pipe({
    name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

    transform(valor: Heroe): string{

        if(!valor.id && !valor.alt_img){
            return 'assets/no-image.png'
        }

        // url
        if( valor.alt_img){
            return valor.alt_img
        }
        return `assets/heroes/${valor.id}.jpg`

    }

}