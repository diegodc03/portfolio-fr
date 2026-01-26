import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { TitleHeader } from "./components/title-header/title-header";
import { AboutMe } from "./components/about-me/about-me";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Experience } from "./components/experience/experience";
import { AcademicFormation } from "./components/academic-formation/academic-formation";
import { Achievements } from "./components/achievements/achievements";
import { Capabilites } from "./components/capabilites/capabilites";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, TitleHeader, AboutMe, Contact, Footer, Experience, AcademicFormation, Achievements, Capabilites],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cvfr');
}
