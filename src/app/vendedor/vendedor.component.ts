import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { CascadeSelectModule } from 'primeng/cascadeselect';

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
    FooterComponent,
    CascadeSelectModule,
  ],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css',
})
export class VendedorComponent implements OnInit {
  value!: string;
  categoria: any[] | undefined;
  selectedCity: any;

  ngOnInit(): void {
    this.categoria = [
      {
        name: 'Sisal de cetim',
        code: 'Sisal de cetim',
        states: [
          {
            name: 'Velas',
            cities: [
              { cname: 'Velas Perfumadas', code: 'Perfumadas' },
              { cname: 'Velas Decoradas', code: 'Decoradas' },
              { cname: 'Velas Luminarias', code: 'Luminarias' },
            ],
          },
          {
            name: 'Aromatizantes',
            cities: [
              { cname: 'Aromatizantes Ambiente', code: 'Ambiente' },
              { cname: 'Aromatizantes Palito', code: 'Palito' },
              { cname: 'Aromatizantes Refil', code: 'Refil' },
            ],
          },
          {
            name: 'Decorações',
            cities: [
              { cname: 'Decorações Artesanatos', code: 'Artesanatos' },
              { cname: 'Decorações Natal', code: 'Natal' },
              { cname: 'Decorações Refil', code: 'Refil' },
            ],
          },
        ],
      },
    ]
  }
}
