import { ServicioRestService } from './../../services/servicio-rest.service';
import { Tab1Page } from './../../pages/tab1/tab1.page';
import { Component, OnInit } from '@angular/core';
import { GestionNoticiasLeerService } from './../../services/gestion-noticias-leer.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

   categoria : string = "general";
  constructor(private gestionNoticiasLeer: GestionNoticiasLeerService, private categorias : Tab1Page, private consultas : ServicioRestService) { 
    let bussines : string = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d1de9ce98954c24a98751fc8fbea520"
    this.consultas.consultaGet(bussines);
  }
  categoriaSel(event: any){
      this.categoria = event.detail.value;
      console.log("esto es value= ", this.categoria)
      if(this.categoria == "general"){
        let general : string = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=9d1de9ce98954c24a98751fc8fbea520";
        this.consultas.consultaGet(general);
      }else if(this.categoria == "business"){
        let bussines : string = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d1de9ce98954c24a98751fc8fbea520"
        this.consultas.consultaGet(bussines);
      }else if(this.categoria == "techology"){
        let technology : string = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9d1de9ce98954c24a98751fc8fbea520"
        this.consultas.consultaGet(technology);
      }else if(this.categoria == "science"){
        let science : string = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9d1de9ce98954c24a98751fc8fbea520"
        this.consultas.consultaGet(science);
      }else{
        let sport : string = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9d1de9ce98954c24a98751fc8fbea520"
        this.consultas.consultaGet(sport);
      }
      console.log(event.detail.value);
  }  

  ngOnInit() {
    
  }

}
