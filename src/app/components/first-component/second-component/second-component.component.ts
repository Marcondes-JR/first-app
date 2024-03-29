import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {

  @Input() nameInput: string[] = [];

  constructor(){}

  ngOnInit(): void {}

  ngOnDestroy(): void{
    console.log('ngDestroy!');
  }
}
