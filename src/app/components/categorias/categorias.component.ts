import { Tab1Page } from './../../pages/tab1/tab1.page';
import { Component, OnInit } from '@angular/core';
import { GestionNoticiasLeerService } from './../../services/gestion-noticias-leer.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  constructor(private gestionNoticiasLeer: GestionNoticiasLeerService, private categorias : Tab1Page) { }

  general(){
    let general : string = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=9d1de9ce98954c24a98751fc8fbea520";
      this.categorias.consultaGet(general);
  }

  business(){
    let bussines : string = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d1de9ce98954c24a98751fc8fbea520"
      this.categorias.consultaGet(bussines);
  }

  technology(){
    let technology : string = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9d1de9ce98954c24a98751fc8fbea520"
      this.categorias.consultaGet(technology);
  }

  science(){
    let science : string = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9d1de9ce98954c24a98751fc8fbea520"
      this.categorias.consultaGet(science);
  }

  sport(){
    let sport : string = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9d1de9ce98954c24a98751fc8fbea520"
      this.categorias.consultaGet(sport);
  }

  ngOnInit() {}

}
