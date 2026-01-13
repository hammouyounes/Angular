import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  // On importe les outils de routage et le pipe de formatage
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class NavComponent {
  // Utilisation d'un Signal pour la liste des menus
  menuItems = signal([
    { path: '/home', label: 'accueil' },
    { path: '/child', label: 'child' },
    { path: '/footer', label: 'footer' }
  ]);
}