import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('revision');
  count : number = 0;
  
  increase() {
    this.count++;
  }

  decrease(){
    this.count--;
  }

  onTyping(event : any){
    console.log(event);
  }
  
}
