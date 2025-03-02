import { Injectable } from '@angular/core';
import { DatosPersonales } from '../interfaces/datos-personales.interface';
import { Proyecto } from '../interfaces/proyecto.interface';
import jsonDatosPersonales from '../assets/datos-personales.json';
import jsonProyectos from '../assets/proyectos.json';
import jsonFormacion from '../assets/formacion.json';
import { Formacion } from '../interfaces/formacion.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private datosPersonales: DatosPersonales = jsonDatosPersonales;
  private proyectos: Proyecto[] = jsonProyectos.proyectos;
  private formacion: Formacion[] = jsonFormacion.formaciones;

  constructor() { }

  obtenerDatosPersonales(): DatosPersonales {
    return this.datosPersonales;
  }

  obtenerProyectos(): Proyecto[] {
    return this.proyectos;
  }

  obtenerFormacion(): Formacion[]{
    return this.formacion;
  }
}
