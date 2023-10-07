import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {
  @Output() name: string[] = ['Marcondes','Sinésio', 'da', 'Silva'];
  show = true;
  //public variable: number = 1; //public pode ser acessado pelo HTML
  //private readonly httpUrl: string = "localhost:3000//"; //private so pode ser acessado pelo typescript // readolnly para deixar como constante // 
  //utilizado no backend para maior segurança sem acesso do HTML
  
  constructor() {}
  
  ngOnInit(): void {
  }

 /* varChangeMais(){
    this.variable++;
  }
  varChangeMenos(){
    this.variable--;
  }*/
}
