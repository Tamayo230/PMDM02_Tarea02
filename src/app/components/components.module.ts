import { CategoriasComponent } from './categorias/categorias.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { NoticiaComponent } from './noticia/noticia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NoticiaComponent,
    ExploreContainerComponent,
    CategoriasComponent
 
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NoticiaComponent,
    ExploreContainerComponent,
    CategoriasComponent
  ]
})
export class ComponentsModule { }
