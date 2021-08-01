import { Component, OnInit } from '@angular/core';
import { Imovel } from 'src/app/models/imovel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', 'home.component.css']
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

  imagem = 'https://i.imgur.com/Fu4llks.jpg';

  imoveisLista: Imovel[] = [
    new Imovel(1, this.imoveisTipo[0], this.imagem, 'João Souza', 500000, 'Casa - Rua do Metrô, Iguape, Ilhéus, BA', '2020-12-29'),
  ];

  tipo = '';
  visualizar() {
    console.log(this.tipo);
  }

  public showMessage() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
