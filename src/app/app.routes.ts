import { Routes } from '@angular/router';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

export const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: '**', component: InicioComponent}
];