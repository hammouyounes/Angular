import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isFormValid() : boolean{
   return true
  }
}