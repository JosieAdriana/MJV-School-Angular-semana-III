import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/features/models/employee.models';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  titulo = "Funcionários";

  telefone = "51996338705";

  exibeColaborador = true;

  dataHoje = new Date;

  colaborador = {
    id: 7,
    nome: "Nathan Carlos Exercício",
    salario: 4500,
    cargo: "Desenvolvedor Pleno",
    imagem: "https://avatars.githubusercontent.com/u/32680502?v=4",
    ativo: true
  };

  colaboradores: Array<Employee> = [
    {
      id: 7,
      nome: "Nathan Carlos Exercício",
      salario: 4500,
      cargo: "Desenvolvedor Pleno",
      imagem: "https://avatars.githubusercontent.com/u/32680502?v=4",
      ativo: true
    },

    {
      id: 10,
      nome: " Carlos Pereira",
      salario: 4000,
      cargo: "Desenvolvedor Pleno",
      imagem: "https://th.bing.com/th/id/R.375a2599ee3bbc1c228d0113b11f06ec?rik=G91%2fIPKifRf%2f2A&pid=ImgRaw&r=0",
      ativo: false
    },

    {
      id: 13,
      nome: "Chitaozinho de lima",
      salario: 2500,
      cargo: "Desenvolvedor junior",
      imagem: "https://www.areavip.com.br/wp-content/uploads/2018/08/gusttavo-lima3.jpg",
      ativo: true
    }

  ]

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }
  saibaMais() {
    alert("Estamos ajustando para melhor atende-ló!");
  }

  exibeColaboradoresSimNao() {
    this.exibeColaborador = !this.exibeColaborador;
  }
}
