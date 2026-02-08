import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { TitleHeader } from "./components/title-header/title-header";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Experience } from "./components/experience/experience";
import { Achievements } from "./components/achievements/achievements";
import { Capabilites } from "./components/capabilites/capabilites";
import { AboutMe } from "./components/about-me/about-me";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, TitleHeader, Contact, Footer, Experience, Achievements, Capabilites, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  protected readonly title = signal('Currículum Vitae');

  // Obtenemos todos los elementos con la clase .hidden-element
  // Nota: Esto requiere que uses document.querySelectorAll o ViewChildren si son componentes Angular.
  // Para simplificar en Angular, usaremos el IntersectionObserver directamente sobre el DOM nativo
  // o una directiva. Aquí una forma rápida en el componente:

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cuando el elemento entra en pantalla, añadimos la clase 'show-element'
          entry.target.classList.add('show-element');
          
          // Opcional: Dejar de observar si solo quieres que pase una vez
          // observer.unobserve(entry.target); 
        } else {
            // Si quieres que la animación se repita al salir y volver a entrar:
            entry.target.classList.remove('show-element');
        }
      });
    });

    // Seleccionamos todos los elementos ocultos
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}
