import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  public users = [
    { name: 'Lucas', dogs: 'Sim' },
    { name: 'Juliana', dogs: 'Não' },
    { name: 'Isaac', dogs: 'Sim' },
    { name: 'Leonardo', dogs: 'Não' },
  ];

}
