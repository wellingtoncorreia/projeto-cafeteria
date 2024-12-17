import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../model/services/product.service';
import { Iproduct } from '../model/services/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers:[ProductService],
  templateUrl: './cad-product.component.html',
  styleUrl: './cad-product.component.scss'
})
export class CadProductComponent {
  product: Iproduct = {
    id: 0,
    name: '',
    price: 0,
    rating: 0,
    filter:'',
    imageUrl: ''
  };
  constructor(private productService: ProductService, private router: Router) {}

  // Método para enviar o formulário
  onSubmit(): void {
    // Enviar o produto ao serviço ProductService
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        Swal.fire({
          title: "Item Cadastrado!",
          text: "",
          icon: "success", // Corrigido: "success" com letras minúsculas
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/']); // Ajuste a rota conforme necessário
          }
        });
      },
      (error) => {
        console.error('Erro ao adicionar o produto:', error);
      }
    );
  }  
}
