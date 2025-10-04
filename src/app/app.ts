import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Home } from './home/home';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Home, AboutMe, Skills, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
