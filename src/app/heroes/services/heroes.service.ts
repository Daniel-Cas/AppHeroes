import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.url }/heroes` )
  }

  getHeroePorId( id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${ this.url }/heroes/${ id }` );
  }

  getSugerencias( termino:string ): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.url }/heroes?q=${ termino }&_limit=6`);
  }

  agregarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${ this.url }/heroes`, heroe);
  }

  actualizarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${ this.url }/heroes/${ heroe.id }`, heroe);
  }

  borrarHeroe( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.url }/heroes/${ id }`);
  }

}
