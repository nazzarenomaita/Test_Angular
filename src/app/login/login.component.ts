import { Component, Directive, EventEmitter, Output } from '@angular/core';
import { LoginRequest } from '../../model/LoginRequest';
import { FormsModule } from '@angular/forms';
import { FormTitleComponent } from '../form-title/form-title.component';
import { NgClass, NgIf } from '@angular/common';
import { ServiceAuthService } from '../service/service-auth.service';
import { LoginDto } from '../../model/LoginDto';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormTitleComponent, NgIf, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  title: string = '';
  message: string = '';
  constructor(private authService : ServiceAuthService, private router: Router){

  }

  @Output()
  dataEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginRequest: LoginRequest = new LoginRequest();

  isLoggedIn: boolean = false;
  

  submit():void{
    //console.log(this.loginRequest);
    this.dataEmitter.emit(true);

  }
  
  /* onLogin(): void {
    if (this.loginRequest.email && this.loginRequest.password) {
      this.authService.login(new LoginDto(this.loginRequest.email, this.loginRequest.password)).subscribe((res:any)=>{
        console.log(res)
      }, (error:HttpErrorResponse)=>{
        console.log("Errore")
      })
      
    } else {
      this.message = 'Inserire email e password';
    }
  } */
  onLogin(form: any): void {
    if (form.valid) {
      this.authService.login(new LoginDto(this.loginRequest.email, this.loginRequest.password)).subscribe(
        (res: any) => {
        
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('user_email', this.loginRequest.email);

         
          
          this.message = 'Login successful!';
          this.router.navigate(['/profile']);

        },
        (error: HttpErrorResponse) => {
          console.error("Errore", error);
          this.message = 'Login failed. Please check your credentials and try again.';
        }
      );
    } else {
      this.message = 'Inserire email e password validi.';
    }
  }
}

