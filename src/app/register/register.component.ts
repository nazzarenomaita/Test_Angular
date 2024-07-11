import { Component } from '@angular/core';

import { FormTitleComponent } from '../form-title/form-title.component';
import { FormsModule } from '@angular/forms';
import { ServiceAuthService } from '../service/service-auth.service';
import { UtenteRegistrationDto } from '../../model/UtenteRegistrationDto';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormTitleComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title: string='';
  message: string = '';
  nome:string='';
  cognome:string='';
  email:string='';
  password:string='';

  constructor(private authService: ServiceAuthService){

  }

  onRegister(): void {
    if (this.nome!= ''&& this.cognome!=''&&this.email!=''&&this.password!='') {
      this.authService.registration(new UtenteRegistrationDto(this.nome,this.cognome,this.email,this.password)).subscribe((res)=>{
        console.log('success')

      })
    } else {
      this.message = 'Inserire campi mancanti';
    }
  }


}
