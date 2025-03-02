import { Component } from '@angular/core';
import { DatosPersonales } from '../../interfaces/datos-personales.interface';
import { JsonService } from '../../services/json-service.service';
import { RouterModule } from '@angular/router';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { Formacion } from '../../interfaces/formacion.interface';
import { PersonalInicioComponent } from './personal-inicio/personal-inicio.component';
import { ProyectosInicioComponent } from './proyectos-inicio/proyectos-inicio.component';
import { FormacionInicioComponent } from './formacion-inicio/formacion-inicio.component';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, PersonalInicioComponent, ProyectosInicioComponent, FormacionInicioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  datosPersonales: DatosPersonales;
  herramientas: string[];
  proyectos: Proyecto[];
  formacion: Formacion[];

  constructor(private jsonService: JsonService) {
    this.formacion = this.jsonService.obtenerFormacion();
    this.proyectos = this.jsonService.obtenerProyectos();
    this.datosPersonales = this.jsonService.obtenerDatosPersonales();
    this.herramientas = this.datosPersonales.herramientas;
  }
}
