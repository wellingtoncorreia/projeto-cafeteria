import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMobileMenu = false; // Variável que controla a visibilidade do menu

  toggleMobileMenu() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 700) {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
}