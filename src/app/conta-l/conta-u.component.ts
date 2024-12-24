import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CadastrarComponent } from '../conta-l/cadastrar/cadastrar.component';
import { LoginComponent } from '../conta-l/login/login.component';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-conta-u',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CadastrarComponent,
    LoginComponent,
    ToastModule,
    CadastrarComponent,
    LoginComponent
],
  templateUrl: './conta-u.component.html',
  styleUrls: ['./conta-u.component.css']
})

export class ContaUComponent {
  activeTab: number = 1;

  changeTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }
}
