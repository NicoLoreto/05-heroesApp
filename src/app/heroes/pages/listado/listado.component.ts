import { Component, Output } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})

export class ListadoComponent {

  heroes: Heroe[] = [];

  arr : number[] = [1,2,3,4,5,6]

  constructor(private heroesService: HeroesService){}


  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe ( resp => this.heroes = resp )

  }
}
