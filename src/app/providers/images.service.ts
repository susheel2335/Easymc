import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modals/usuario.model';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor( private http: HttpClient ) { }

  getUsuarios() {

    return this.http.get<Usuario[]>( 'https://jsonplaceholder.typicode.com/users' )
              .pipe(
                delay( 2500 )
              );

  }

}