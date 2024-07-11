import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'profile', component: ProfileComponent},
    {path:'', component: CardsComponent},
    {path:'register',component: RegisterComponent}
];

