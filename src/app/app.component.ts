import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './componentes/layout/footer/footer.component';
import { NavegadorComponent } from './componentes/layout/navegador/navegador.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavegadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  esVisible:boolean = false;
  cargando = true;
  verContenido = false;
  contenidoAnimado = false;

  ngOnInit() {
    setTimeout(() => {
      this.cargando = false;

      setTimeout(() => {
        this.verContenido = true;
        setTimeout(() => {
          this.contenidoAnimado = true;
        }, 10);
      }, 10);
    }, 1500);
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    this.esVisible = scrollPosition >= documentHeight * 0.8;
  }

  scrollToTop(): void {
    const scrollStep = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -window.scrollY / 15);
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  }

}
