import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { RouterOutlet, Router } from '@angular/router';
import { Produto } from './produto';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { VendedorService } from './vendedor.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [
    FileUploadModule,
    ButtonModule,
    RouterOutlet,
    HeaderComponent,
    InputTextModule,
    FloatLabelModule,
    InputTextareaModule,
    FormsModule,
    InputMaskModule,
    FooterComponent,
    CascadeSelectModule,
    ToastModule,
    CommonModule
  ],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css',
})

export class VendedorComponent implements OnInit {
  uploadedFiles: any[] = [];

  value!: string;
  categoria: any | undefined;
  marcas: any;

  produto: Produto = {
    preco: 0,
    descricao: "", 
    imagem_url: "", 
    marca: "",
    nome: ""
  }

  constructor(
    private router: Router,
    private messageService: MessageService,
    private vendedorService: VendedorService
  ){}

  criarProduto(){
    this.produto.marca = this.marcas.cname;
    this.vendedorService.criarProduto(this.produto);
  }

  onUpload(event: FileUploadEvent) {
    for (let file of event.files) {
        this.convertToBase64(file).then((base64: string) => {
            this.produto.imagem_url = base64;
            this.uploadedFiles.push({ file, base64 });
        }).catch(err => {
            console.error("Erro ao converter arquivo em Base64:", err);
        });
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
}


  convertToBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string); // Retorna o Base64
          reader.onerror = error => reject(error); // Trata erros
      });
  }

  ngOnInit(): void {
    this.categoria = [
      {
        name: 'Sisal de cetim',
        categoria: [
          {
            name: 'Velas',
            marcas: [
              { cname: 'Velas Perfumadas'},
              { cname: 'Velas Decoradas'},
              { cname: 'Velas Luminarias'},
            ],
          },
          {
            name: 'Aromatizantes',
            marcas: [
              { cname: 'Aromatizantes Ambiente'},
              { cname: 'Aromatizantes Palito'},
              { cname: 'Aromatizantes Refil'},
            ],
          },
          {
            name: 'Decorações',
            marcas: [
              { cname: 'Decorações Artesanatos'},
              { cname: 'Decorações Natal'},
              { cname: 'Decorações Refil'},
            ],
          },
        ],
      },
    ]
  }
}
