import { Component, ElementRef, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  ultimoScroll = 0;
  menuVisible = signal(true);
  darkIconBool = signal(true);
  menuAbierto = signal(false);

  constructor(private eRef: ElementRef) {}

  // Detectar clics en todo el documento
  @HostListener('document:click', ['$event'])
  clickFuera(event: Event) {
    // Si el menú está abierto y el clic NO fue dentro del componente (nav)
    if (this.menuAbierto() && !this.eRef.nativeElement.contains(event.target)) {
      this.menuAbierto.set(false);
    }
  }

  irASeccion(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.menuAbierto.set(false);
  }

  toggleMenu() {
    this.menuAbierto.set(!this.menuAbierto());
  }

  toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    this.darkIconBool.set(!isDark);

    if (isDark) {
      console.log('Cambiando a tema claro');
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  }
}
