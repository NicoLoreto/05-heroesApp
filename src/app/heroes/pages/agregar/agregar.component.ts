import { Component } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // nonNullable: true para que el campo no pueda estar vacio
  // publisher lo tomo de la interface

  public heroesForm = new FormGroup({

    id:               new FormControl<string>(''),  
    superhero:        new FormControl<string>('', {nonNullable: true}),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    name:             new FormControl(''),
    alt_img:          new FormControl(''),     

  });

  publishers = [
    {
      id: 'DC-comic',
      desc: 'DC-comic'
    },
    {
      id: 'DC-marbel',
      desc: 'DC-marbel'
    }

  ]

  heroe: Heroe = {

    superhero: '',
    name: '',
    alter_ego: '',
    characters: '',
    first_appearance:  '',
    // lo pongo por defecto Publisher.DCComics
    publisher: Publisher.DCComics,
    alt_img: ''


  }

}
