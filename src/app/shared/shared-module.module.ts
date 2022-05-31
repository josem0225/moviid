import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent
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
