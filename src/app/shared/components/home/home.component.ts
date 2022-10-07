import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public product1:Product[]=[
    {
      id:0,
      Title:"It shouldn’t be this hard!",
      Asset:"/assets/Home/MOVIID5.jpg",
      Description:"Carrying items as a wheelchair user can be difficult and frustrating."
    },
    {
      id:1,
      Title:"LapStacker makes it easy!",
      Asset:"/assets/Home/MOVIID7.jpg",
      Description:"Pull the straps over your lap. Clip the buckles together. Roll with confidence."
    },
  ];

  constructor() { }
  ngOnInit(): void {
  }

}
