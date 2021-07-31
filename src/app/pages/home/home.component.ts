import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imoveisTipo = [
    'casa', 
    'apartamento', 
    'sala comercial', 
    'lote', 
    'chácara', 
    'sítio',
    'fazenda',
  ]

  tipo = '';
  visualizar() {
    console.log(this.tipo);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
