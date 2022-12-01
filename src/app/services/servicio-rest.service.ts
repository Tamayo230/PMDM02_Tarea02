import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, RespuestaNoticias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestService {

  listaNoticias: Article[] = [];

  constructor(private servidorRest: HttpClient) { }
  // Consulta los articulos de un Serviodr rest y los guarda en el array "listaNoticias"
  public consultaGet(categoria :string) {
    //generamos los string de las diferentes consultas
      this.listaNoticias.splice(0, this.listaNoticias.length);
    //Creamos el observable de la consulta y nos subcribimos
    let respuesta: Observable<RespuestaNoticias> = this.servidorRest.get<RespuestaNoticias>(categoria);

      respuesta.subscribe( resp => {
      console.log("Noticias", resp);
      this.listaNoticias.push(... resp.articles);
      
    } );
  }
}
