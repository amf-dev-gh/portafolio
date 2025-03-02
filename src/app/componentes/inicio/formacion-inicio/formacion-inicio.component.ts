import { Component, Input } from '@angular/core';
import { Formacion } from '../../../interfaces/formacion.interface';

@Component({
  selector: 'app-formacion-inicio',
  imports: [],
  templateUrl: './formacion-inicio.component.html',
  styleUrl: './formacion-inicio.component.css'
})
export class FormacionInicioComponent {

  @Input()
  formacion!: Formacion[];

}
