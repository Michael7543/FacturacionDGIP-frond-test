import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoConcepto } from '../entities/TipoConcepto';
import { TipoconceptoService } from '../services/tipoconcepto.service';

@Component({
  selector: 'app-tipoconcepto',
  templateUrl: './tipoconcepto.component.html',
  styleUrls: ['./tipoconcepto.component.css']
})
export class TipoconceptoComponent implements OnInit {

  concepto: any;
 
  TipoconceptoForm: FormGroup;

  constructor(private tipoconceptoService: TipoconceptoService, private form: FormBuilder,) {
    { 
      this.TipoconceptoForm = this.form.group({
        nombreTipoConcepto: ['', Validators.required],
        descTipoConcepto: ['', Validators.required],
        idUnidadTc: ['', Validators.required],
        prtidaNc: ['', Validators.required],
        fechaTc: ['', Validators.required],
        idUsuarioTc: ['', Validators.required],

      })
    }
  
  }

  


  ngOnInit(): void {
    
    this.getTipoConcepto();
  
  }

  getTipoConcepto() {
    this.tipoconceptoService.getTipoconcepto().subscribe(data => {
      this.concepto = data.listado;
    });
    
  }

  agregarTipoConcepto(){

    const tipoConcepto: TipoConcepto = {
      nombreTipoConcepto: this.TipoconceptoForm.get('nombreTipoConcepto')?.value,
      descTipoConcepto: this.TipoconceptoForm.get('descTipoConcepto')?.value,
      idUnidadTc: this.TipoconceptoForm.get('idUnidadTc')?.value, 
      prtidaNc: this.TipoconceptoForm.get('prtidaNc')?.value, 
      fechaTc: this.TipoconceptoForm.get('fechaTc')?.value, 
      idUsuarioTc: this.TipoconceptoForm.get('idUsuarioTc')?.value, 
    }
    this.tipoconceptoService.createTipoConcepto(tipoConcepto).subscribe(data=> {
      
    })
  }

    getEventValue($event: any): string {
      return $event.target.value;
    }
  }





