import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { DatosComponent } from './components/datos/datos.component';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MoveComponent } from './components/move/move.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    IntroductionComponent,
    DatosComponent,
    DispositivoComponent,
    CarouselComponent,
    MoveComponent,
    AliadosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    HomeComponent
  ]
})
export class SharedModuleModule { }
