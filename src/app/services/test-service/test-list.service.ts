import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestListService {

  constructor() { }
 //serviço vindo do backend
  startService(){//aqui eu crio a função
    console.log('Console log 1');
    console.log('Console log 2');
    console.log('Console log 3');
  }

  alertService(){
    alert("O botão de alerta");
  }

}
