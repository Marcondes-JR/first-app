import { Component, OnInit } from '@angular/core';
import { TestListService } from 'src/app/services/test-service/test-list.service';

@Component({
  selector: 'app-component-service',
  templateUrl: './component-service.component.html',
  styleUrls: ['./component-service.component.css']
})
export class ComponentServiceComponent implements OnInit {
  constructor(private service: TestListService){ }

  ngOnInit(): void {

  }

  
  callConsoleService(){//cria função e manda para o HTML
    this.service.startService();//pega a função vinda do backend
  }
  callService(){
    this.service.alertService();
  }
}
