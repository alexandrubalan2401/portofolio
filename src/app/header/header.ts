import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false; // Tracks mobile menu state
  isScrolled = false; // Tracks scroll position

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50; // Add shadow after 50px
  }

  // Toggle hamburger menu open/close
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close menu when a link is clicked
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
