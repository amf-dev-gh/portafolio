import { Component } from '@angular/core';
import { DatosPersonales } from '../../../interfaces/datos-personales.interface';
import { JsonService } from '../../../services/json-service.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  fecha: Date = new Date();
  anio: number = this.fecha.getFullYear();
  datosPersonales: DatosPersonales;

  constructor(private jsonService: JsonService) {
    this.datosPersonales = this.jsonService.obtenerDatosPersonales();
  }

}
