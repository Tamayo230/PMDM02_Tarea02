import { GestionStorageService } from './gestion-storage.service';
import { Article } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasLeerService {

  private noticiasLeer: Article [] = [];

  constructor(public gestionAlmacenamiento : GestionStorageService) {
    this.cargarArticulosLocal();
  }
  // Añade una nueva noticia a leer
  addNoticia(item : Article) {
    // copiar item
    let itemString = JSON.stringify(item);
    item = JSON.parse(itemString);

    // Añadirlo
    this.noticiasLeer.push(item);
    //Actualizamos el almacenamiento local
    this.gestionAlmacenamiento.setObject("Articulos", this.noticiasLeer);

  }


  private cargarArticulosLocal(){
      //Anadimos al almacenamiento local
    let datosPromesa : Promise <Article[]> = this.gestionAlmacenamiento.getObject("Articulos");
    datosPromesa.then(datos => {
      this.noticiasLeer.push(...datos);
    }); 
  }

  // Comprueba si una noticia ya está en el array
  buscar(item: Article): number  {
    let articuloEncontrado: any = this.noticiasLeer.find(
      function(cadaArticulo) { 
        return JSON.stringify(cadaArticulo) == JSON.stringify(item);
      }
    );
    let indice = this.noticiasLeer.indexOf(articuloEncontrado);
    return indice;
  }

  // Borra una noticia
  borrarNoticia(item: Article) {
    let indice = this.buscar(item);
    if (indice != -1) {
      this.noticiasLeer.splice(indice, 1);
      //Actulizamos el almacenamiento local
      this.gestionAlmacenamiento.setObject("Articulos", this.noticiasLeer);
    }
  }

  // Devuelve todas las noticias para leer
  getNoticias() {
    return this.noticiasLeer;
  }
}
