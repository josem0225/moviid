import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public itemSelected:number = 0;
  public menu:any =[
    {id:0 , item: "Home"},
    {id:1, item: "Nosotros"},
    {id:1, item: "Contacto"}
  ]

  constructor() { }
  ngOnInit(): void {
  }

  public itemSelectedMenu(itemMenu:number){
    this.itemSelected=itemMenu;
  }

}
