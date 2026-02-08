import { Component, ElementRef, HostListener, inject, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
  currentLang = signal('ES');

  constructor(@Inject(ElementRef) private eRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.detectLanguage();
  }

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

  detectLanguage() {
    // Si la URL contiene "/en/", estamos en inglés
    if (this.document.location.href.includes('/en/')) {
      this.currentLang.set('EN');
    } else {
      this.currentLang.set('ES');
    }
  }

  toggleLanguage() {
    const currentUrl = this.document.location.href;
    const pathName = this.document.location.pathname;

    // LÓGICA DE REDIRECCIÓN
    if (pathName.startsWith('/en')) {
      // ESTAMOS EN INGLÉS -> VAMOS A ESPAÑOL
      // Quitamos el '/en' de la URL.
      // Ejemplo: localhost:4200/en/experiencia -> localhost:4200/experiencia
      const newUrl = currentUrl.replace('/en', '');
      this.document.location.href = newUrl;
    } else {
      // ESTAMOS EN ESPAÑOL -> VAMOS A INGLÉS
      // Añadimos '/en' después del dominio.
      // Ojo: En local esto fallará con ng serve (te lo explico abajo), pero en producción funcionará.
      const origin = this.document.location.origin; // http://localhost:4200
      const newUrl = origin + '/en' + pathName;
      this.document.location.href = newUrl;
    }
  }
  
}
