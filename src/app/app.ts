import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, FormsModule, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  liste = signal<string[]>(["Angular","React","Laravel","Vue"])
}