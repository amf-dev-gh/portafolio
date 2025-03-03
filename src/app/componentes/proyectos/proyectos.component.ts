import { Component } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { JsonService } from '../../services/json-service.service';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

    proyectos: Proyecto[];
  
    constructor(private jsonService: JsonService) {
      this.proyectos = this.jsonService.obtenerProyectos().reverse();
    }
}
