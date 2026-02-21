import { AfterViewInit, Component, signal } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Contact } from "../../components/contact/contact";
import { Experience } from "../../components/experience/experience";
import { Achievements } from "../../components/achievements/achievements";
import { Capabilites } from "../../components/capabilites/capabilites";
import { AboutMe } from "../../components/about-me/about-me";
import { TitleHeader } from "../../components/title-header/title-header";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-curriculum-portfolio',
  imports: [Footer, Contact, Experience, Achievements, Capabilites, AboutMe, TitleHeader, Navbar],
  templateUrl: './curriculum-portfolio.html',
  styleUrl: './curriculum-portfolio.css',
  standalone: true
})
export class CurriculumPortfolio implements AfterViewInit {
  
  protected readonly title = signal('Currículum Vitae');

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cuando el elemento entra en pantalla, añadimos la clase 'show-element'
          entry.target.classList.add('show-element');
          
        } else {
            entry.target.classList.remove('show-element');
        }
      });
    });

    // Seleccionamos todos los elementos ocultos
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}
