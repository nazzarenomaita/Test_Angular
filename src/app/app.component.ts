import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormTitleComponent } from './form-title/form-title.component';
import { FormsModule, NgModel } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CardsComponent } from './cards/cards.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, NavComponent, FooterComponent, FormTitleComponent, FormsModule, RegisterComponent, CardsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibm';
  
  isLogged: boolean = false;
  

  handleData(isLogged:boolean):void{
    this.isLogged=isLogged;
    //console.log(isLogged);
  }
}
