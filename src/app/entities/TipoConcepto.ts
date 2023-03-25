export class TipoConcepto {
    
    idTipoConcepto?:     number;
    nombreTipoConcepto: string;
    descTipoConcepto:   string;
    idUnidadTc:         number;
    prtidaNc:           number;
    fechaTc:           number;
    idUsuarioTc:        number;

    
    constructor(nombreTipoConcepto: string, descTipoConcepto: string, idUnidadTc:number, prtidaNc: number,fechaTc:number,idUsuarioTc:number){
        this.nombreTipoConcepto = nombreTipoConcepto;
        this.descTipoConcepto = descTipoConcepto;
        this.idUnidadTc = idUnidadTc;
        this.prtidaNc = prtidaNc;
        this.fechaTc = fechaTc;
        this.idUsuarioTc = idUsuarioTc;

    }
}


