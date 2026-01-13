import { Routes } from '@angular/router';
import { Child } from './child/child';
import { App } from './app';
import { Footer } from './footer/footer';

export const routes: Routes = [
    {path : "home" , component : App},
    {path : "child" , component : Child},
    {path : "footer" , component : Footer},
    {path : "",component : App, pathMatch : 'full'},
    {path : "**", component : App}
];
