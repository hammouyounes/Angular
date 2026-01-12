import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
=======
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, FormsModule],
>>>>>>> Components
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('revision');
<<<<<<< HEAD
  count : number = 0;
  username : string = "youness";
  
  increase() {
    this.count++;
  }

  decrease(){
    this.count--;
  }

  onTyping(event : any){
    console.log(event);
  }


  
=======
  name: string = '';
  age: number = 0;
  isAdmin: boolean = false;
>>>>>>> Components
}
