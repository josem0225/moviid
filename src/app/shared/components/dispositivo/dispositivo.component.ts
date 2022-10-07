import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss']
})
export class DispositivoComponent implements OnInit {

  @Input()
  public product:Product[]=[];
  constructor() { }
  ngOnInit(): void {
  }

}
