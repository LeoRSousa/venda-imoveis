import { Component, OnInit } from '@angular/core';
import { Comissionado } from 'src/app/models/comissionado';
import { Contratado } from 'src/app/models/contratado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corretores',
  templateUrl: './corretores.component.html',
  styleUrls: ['../../app.component.css', 'corretores.component.css']
})
export class CorretoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comissionadosLista: Comissionado[] = [];
  contratadosLista: Contratado[] = [];

  creci = 0.0;
  nome = '';
  salario = 0.0;
  admissao = '';
  comissao = 0.0;

  cadastrarContratado() {
    if(this.salario == 0.0 || this.admissao == '') {
      alert('Campos incompletos. Favor, preencher tudo corretamente');
      return;
    }

    let num = this.creci;
    let indice = -1;

    //Ver se a pessoa já está na lista, pega o indice dela
    for (let index = 0; index < this.contratadosLista.length; index++) {
      if (this.contratadosLista[index].creci == num) {
        indice = index;
      }
    }

    //Se a pessoa não estiver, cria
    if(indice < 0) {
      this.contratadosLista.push(
        new Contratado(this.creci, this.nome, this.salario, this.admissao)
      );
      indice = -1;
      Swal.fire('Corretor cadastrado!');
    };

    //Se a pessoa estiver, atualiza o valor do salario
    if(indice >= 0) {
      this.contratadosLista[indice].salario = this.salario;
      indice = -1;
      Swal.fire('Salario atualizado!');
    };

  }

  cadastrarComissionado() {
    if (this.comissao < 1 || this.comissao > 3) {
      alert('Valor da comissão deve ser entre 1 e 3');
      return;
    }

    let num = this.creci;
    let indice = -1;

    //Ver se a pessoa já está na lista, pega o indice dela
    for (let index = 0; index < this.comissionadosLista.length; index++) {
      if (this.comissionadosLista[index].creci == num) {
        indice = index;
      }
    }

    //Se a pessoa não estiver, cria
    if(indice < 0) {
      this.comissionadosLista.push(
        new Comissionado(this.creci, this.nome, this.comissao)
      );
      indice = -1;
      Swal.fire('Corretor cadastrado!');
    };

    //Se a pessoa estiver, atualiza o valor da comissão
    if(indice >= 0) {
      this.comissionadosLista[indice].comissao = this.comissao;
      indice = -1;
      Swal.fire('Comissão atualizada!');
    }
  };

}
