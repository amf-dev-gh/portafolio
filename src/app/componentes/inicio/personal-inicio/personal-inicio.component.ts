import { Component, Input } from '@angular/core';
import { DatosPersonales } from '../../../interfaces/datos-personales.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-inicio',
  imports: [RouterModule],
  templateUrl: './personal-inicio.component.html',
  styleUrl: './personal-inicio.component.css'
})
export class PersonalInicioComponent {

  @Input()
  datosPersonales!: DatosPersonales;

}
