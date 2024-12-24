import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [
    HeaderComponent,
    InputTextModule,
    FloatLabelModule,
    InputTextareaModule,
    FormsModule,
    InputMaskModule,
    FooterComponent
  ],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent {
  value!: string;
}
