import { Component, Input } from '@angular/core';
import { JsonService } from '../../../services/json-service.service';
import { Proyecto } from '../../../interfaces/proyecto.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyectos-inicio',
  imports: [RouterModule],
  templateUrl: './proyectos-inicio.component.html',
  styleUrl: './proyectos-inicio.component.css'
})
export class ProyectosInicioComponent {

  @Input()
  proyectos!: Proyecto[];

  @Input()
  herramientas!: string[];

  filtrado:boolean = false
  htaFiltro:string = "";

      constructor(private jsonService: JsonService) {
        this.proyectos = jsonService.obtenerProyectos();
      }

    
  filtrarProyectos(hta: string) {
    const todosLosProyectos = this.jsonService.obtenerProyectos();
    this.proyectos = todosLosProyectos.filter(
      p => Array.isArray(p.herramientas) && p.herramientas.includes(hta)
    );
    this.htaFiltro = hta;
    this.filtrado = true;
    console.log("Proyectos filtrados por: " + hta, this.proyectos);
  }

  quitarFiltro(){
    this.filtrado = false;
    this.proyectos = this.jsonService.obtenerProyectos();
  }
}
