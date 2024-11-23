import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },    
    { path: 'esqueceuSenha', component: EsqueceuSenhaComponent},
];
