import { Component, OnInit } from '@angular/core';
import { FormapagoService } from '../services/formapago.service';

@Component({
  selector: 'app-formapago',
  templateUrl: './formapago.component.html',
  styleUrls: ['./formapago.component.css']
})
export class FormapagoComponent implements OnInit {

  formapago: any;
 


  constructor(private formaPagoService: FormapagoService) {
  }

  


  ngOnInit(): void {


    this.getFormaPago();


  
  }

  getFormaPago() {
    this.formaPagoService.getFormaPago().subscribe(data => {
      this.formapago = data.listado;
    });
    
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

}
