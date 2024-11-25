import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContaComponent } from './conta/conta.component'; 

export const routes: Routes = [
    { path: 'login', component: LoginComponent },    
    { path: 'conta', component: ContaComponent}
];
