import { Component, OnInit } from '@angular/core';
import { TipoconsumidorService } from '../services/tipoconsumidor.service';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-tipoconsumidor',
  templateUrl: './tipoconsumidor.component.html',
  styleUrls: ['./tipoconsumidor.component.css'],
})
export class TipoconsumidorComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  activeItem2!: MenuItem;

  consumidor: any;

  constructor(private tipoconsumidorService: TipoconsumidorService) {}

  ngOnInit(): void {
    this.getTipoConsumidor();
  }

  getTipoConsumidor() {
    this.tipoconsumidorService.getTipoConsumidor().subscribe((data) => {
      this.consumidor = data.listado;
    });
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }
}
