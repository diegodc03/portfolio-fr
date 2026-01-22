import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  esOculto = signal(false);
  ultimoScroll = signal(0);

  opacidadMenu = signal(1);

  menuAbierto = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollActual = window.pageYOffset || document.documentElement.scrollTop;

    const limiteDesaparicion = 300; // A los 300px ya no se verá nada

    this.opacidadMenu.set(Math.max(0, 1 - (scrollActual / limiteDesaparicion)));
  }

  // FUNCIÓN PARA EL SCROLL SUAVE
  irASeccion(id: string) {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.scrollIntoView({ 
        behavior: 'smooth', // ESTO HACE LA MAGIA (SUAVE)
        block: 'start' 
      });
    }

    if (window.innerWidth < 768) {
      this.menuAbierto.set(false);
    }
  }

  // Función extra para el botón de la hamburguesa (Abrir/Cerrar)
  toggleMenu() {
    this.menuAbierto.set(!this.menuAbierto());
  }
}
