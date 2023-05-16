import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import {MatSnackBar} from '@angular/material/snack-bar'

import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

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

constructor (
  private heroesService: HeroesService,
  private router: Router,
  // para saber los paramentros que tengo en la url
  private acitivatedRoute: ActivatedRoute,
  // snackbar es nativo de angular, se usa para mostrar mensajes, por ej.
  private snackBar: MatSnackBar,
  ){}

  get heroeActual(): Heroe{

    // hago un get para mandar el heroe con los valores ingresados en el form
    // as sirve para decir que trate a este heroe como si fuese un Heroe
    const heroe = this.heroesForm.value as Heroe
    return heroe

  }

  // ngOninit: cuando la pag se carga

  ngOnInit(): void {

    // verifico que si estoy editando dice edit, si estoy
    // creando uno nuevo dice agregar

    if(!this.router.url.includes('edit')) return

    // si la url incluye edit
    // necesito saber los parametros que estan viniendo en el url
    // para ese uso ActivaterRoute
    if(this.router.url.includes('edit')){

      // los params son los que estan en el routing,
      // en este caso necesito el id. Lo tomo con el switchMap.
      // uso el service que toma el id
      this.acitivatedRoute.params
        .pipe(
          switchMap(({id}) => this.heroesService.getHeroePorId( id ) )
        )
          .subscribe( heroe => {

            if(!heroe) return this.router.navigateByUrl('/');

            // para establecerlo al formulario se usa reset regresa
            // el form al valor original

            this.heroesForm.reset( heroe )

            return;



          })

    }
    
  }

  onSubmit(): void{

    if(!this.heroeActual){
      return
    }

    // si tiene un id quiere decir que tengo que actualizarlo
    if(this.heroeActual.id){
      this.heroesService.actualizarHeroe(this.heroeActual)
        .subscribe(hero => {
          //mostrar mensaje, llamo a snackbar
          this.mostrarSnack( `${this.heroe.superhero} Actualizado`)
        })
        return
    }

    // si no tiene id quiere decir que lo tengo que crear
    this.heroesService.agregarHeroe(this.heroeActual)
      .subscribe( heroe => {
        // envio a la ruta de edicion del heroe creado
        this.router.navigate(['heroes/editar/', heroe.id])

        //mensaje
        this.mostrarSnack( `${this.heroe.superhero} Creado`)
      })



    console.log({
      formIsValid: this.heroesForm.valid,
      valor: this.heroesForm.value
    })
  }

  // mostrar snack bar, pasa el mensaje, luego un boton y luego alguna otra propiedad, en este
  // caso la duracion

  mostrarSnack( mensaje: string ){
    this.snackBar.open( mensaje, 'data',{
      duration: 2500,
    })

  }

}
