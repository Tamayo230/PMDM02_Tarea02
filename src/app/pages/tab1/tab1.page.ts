import { ServicioRestService } from './../../services/servicio-rest.service';
import { GestionStorageService } from './../../services/gestion-storage.service';
import { RespuestaNoticias, Article } from './../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { GestionNoticiasLeerService } from './../../services/gestion-noticias-leer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // Creo e inicializo un array vacío
  listaNoticias: Article[] = [];
  respuesta: Observable<RespuestaNoticias> = {} as Observable<RespuestaNoticias>;

  constructor(public servicioConsu: ServicioRestService, public gestionNoticiasLeer: GestionNoticiasLeerService, public gestionAlmacen: GestionStorageService) {
     
  }

  // Cuando cambia el check, en función de su valor añade o borra la noticia
  check(eventoRecibido: any, item: Article) {
    let estado: boolean = eventoRecibido.detail.checked;
    if (estado) {
      this.gestionNoticiasLeer.addNoticia(item);
    } else {
      this.gestionNoticiasLeer.borrarNoticia(item);
    }
    
  }


  // Comprueba si una noticia está para leer o no
  seleccionado(item: Article): boolean {
    let indice: number = this.gestionNoticiasLeer.buscar(item);
    if (indice != -1) {
      return true;
    }
    return false; 
  }

  ngOnInit() { 
   
  }
}
