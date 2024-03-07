import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  first: boolean = true;
  saludo: string = "";

  constructor() {}

  ngOnInit(): void {
    this.saludo = this.first ? "Hola, que tal estas" : "Bienvenido de vuelta";
  }
}
