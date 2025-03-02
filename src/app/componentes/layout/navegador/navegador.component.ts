import { Component } from '@angular/core';
import { JsonService } from '../../../services/json-service.service';
import { DatosPersonales } from '../../../interfaces/datos-personales.interface';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegador',
  imports: [RouterModule, CommonModule],
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css'
})
export class NavegadorComponent {

  datosPersonales: DatosPersonales;
  urlActual: string = "";
  estaDeescargando:boolean = false;

  constructor(private jsonService: JsonService, private router: Router) {
    this.datosPersonales = this.jsonService.obtenerDatosPersonales();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.urlActual = event.url;
      });
  }

  protected seleccionado(link: string) {
    return {
      'subrayado': this.urlActual === (link),
      'nav-link link-nav': true
    }
  }

  descargarCv() {
    this.estaDeescargando = true;
    setTimeout(() => {
      this.estaDeescargando = false;
    }, 3000);
  }
}