import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px
  }
  
  `]
})
export class HeroeComponent {

  heroe!: Heroe;

  constructor(
    private activeRoute: ActivatedRoute,
    private servicio: HeroesService,
    private route: Router){}

  //  ActivatedRoute se utiliza para acceder a los parámetros de ruta y a 
  // los datos asociados con la ruta actual.

      // metodo para navegar a una pagina

 regresar(){

    this.route.navigate(['/heroes/listado']);
    

    }

  ngOnInit(): void {
   
    // me suscribo a los cambios que haya en la url de las rutas, recibo el 
    // parametro 
    // por desestructuracion tomo solo el id, es decir dejo solo
    // el valor

    this.activeRoute.params
      // desestructuro el params
      .pipe(
          switchMap( ({ id }) => this.servicio.getHeroePorId(id)), 
          )
          .subscribe(heroe => this.heroe = heroe);
    


  }

}


