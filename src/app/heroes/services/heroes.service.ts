import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // creo una propiedad para la url de desarrollo

  private baseUrl: string = environment.baseUrl;

  constructor( private http : HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId (id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes/?q=${termino}&_limit=6`);
    
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe>{
    if(!heroe.id){
      throw Error ('El ID es requerido');
    }
    // puedo tmb usar pull si quiero actualizar todo
    return this.http.patch<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  eliminarHeroePorId(id: any): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/heroes/${ id }`)
      .pipe(
        map(resp => (true)),
        catchError(err=> of(false))
      
    );
  }


}
