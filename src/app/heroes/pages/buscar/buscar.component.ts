import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent {

  termino ='';

  heroes: Heroe[] = [];

  // para cuando reciba un heroe seleccionado y lo muestre
  heroeSeleccionado!: Heroe | undefined;

  constructor (private heroesService: HeroesService ){}

  buscando(){

    // primero llamo al servicio, luego al metodo getheroes() para traer
    // a todos lo heroes, desp me suscribo, se que regresara heroes
    // y hago que los heroes que trae sean igual a los heroes del
    // componente

    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes);

  }

  // para opcion seleccionada
  // el event devuelve MatAutocompleteSelectedEvent, porque lo veo en consola,
  // de ahi puedo determinar donde esta lo que busco

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){


    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe);

  }

  }
