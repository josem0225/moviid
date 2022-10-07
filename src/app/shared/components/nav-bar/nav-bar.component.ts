import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public itemSelected:number = 0;
  public hideToolTipKey:boolean=false
  public hideToolTipKeyReceived:boolean=false
  public keyBox:number=0;
  public menu:Menu [] =[
    {id:0, item: "Moviid 1"},
    {id:1, item: "Explore"},
  ]
  public movidOption:Menu[]=[ ]


  constructor() { }
  ngOnInit(): void {
  }

  public itemSelectedMenu(itemMenu:number){
    this.itemSelected=itemMenu;
  }

  public showBox(KeyBox:number){
    this.hideToolTipKey=false;
    this.keyBox=KeyBox;
    if(this.keyBox==0){
      this.movidOption=[
        {id:0,item:"About Moviid 1"},
        {id:1,item:"Buy Moviid 1"},
        {id:2,item:"Moviid 1 Case Studies"},
        {id:3,item:"Moviid 1 Reviews"},
        {id:4,item:"Installation Guides"},
        {id:5,item:"Moviid 1 Parts"},
        {id:6,item:"Contact Us"},
      ]
    }
    if(this.keyBox==1){
      this.movidOption=[
        {id:0,item:"Podcast"},
        {id:1,item:"Stories"},
        {id:2,item:"The Bike"},
      ]
    }
  }

  public hideToolTip(value:boolean){
    this.hideToolTipKey=true;
  }
  public valueReceived(value:boolean){
    this.hideToolTipKeyReceived=value;
  }

}
