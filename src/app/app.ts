import { Component, computed, signal , PipeTransform, Pipe} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
 @Pipe({
    name : "kebabCase"
  })
export  class KebabCasePipe implements PipeTransform{
    transform(value:string):string{
      return value.toLocaleLowerCase().replace(/ /g,'-');
    }
  }

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, FormsModule, UpperCasePipe,KebabCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
 
  
export class App {
    
}

