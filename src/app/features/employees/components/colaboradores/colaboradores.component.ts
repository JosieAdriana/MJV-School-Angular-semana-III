import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  titulo = "Funcionários";

  colaborador = {
    id: 7,
    nome: "Nathan Carlos Exercício",
    salario: 4500,
    cargo: "Desenvolvedor Pleno",
  };

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }
  saibaMais() {
    alert("Estamos ajustando para melhor atende-ló!");
  }
}
