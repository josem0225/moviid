import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';
import { Menu } from '../../models/menu.interface';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.scss']
})
export class MenuBoxComponent implements OnInit,OnChanges {

  @Input()
  public keyBox:number=0;

  @Input()
  public menu:Menu[]=[];

  @Output()
  public toolTipKey = new EventEmitter<boolean>();



  public itemBox:number=0;

  public menuBox1:Menu[]=[
    {id:0,item:"About Movid 1"},
    {id:1,item:"Buy Movid 1"},
    {id:2,item:"Movid 1 Case Studies"},
    {id:3,item:"Movid 1 Reviews"},
    {id:4,item:"Installation Guides"},
    {id:5,item:"Movid 1 Parts"},
    {id:6,item:"Contact Us"},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
  }

  public hideBox(){
    this.keyBox=-1;
    this.toolTipKey.emit(true);
  }

  public showBox(){
    this.toolTipKey.emit(false);
  }

  public colorItem(item:number){
    this.itemBox=item;
  }

}
