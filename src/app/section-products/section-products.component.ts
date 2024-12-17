import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StarRatingDirective } from '../diretivas/star-rating.directive';
import { MoneyFormatDirective } from '../diretivas/money-format.directive';
import Swal from 'sweetalert2';
import { Iproduct } from '../model/services/iproduct';
import { ProductService } from '../model/services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-section-products',
  standalone: true,
  imports: [
    CommonModule, 
    StarRatingDirective, 
    MoneyFormatDirective,
    HttpClientModule
  ],
  providers: [ProductService],
  templateUrl: './section-products.component.html',
  styleUrls: ['./section-products.component.scss'] // Corrigido 'styleUrl' para 'styleUrls'
})
export class SectionProductsComponent {
  products: Iproduct[] = []; 
  filteredProducts: Iproduct[] = [];

  selectedButton: string = 'featured';

  constructor(private productService: ProductService) {
    this.loadProducts(this.selectedButton); // Carregar produtos ao inicializar o componente
  }

  loadProducts(selectedButton: string): void {
    this.productService.getProducts().subscribe(
      (data: Iproduct[]) => {
        this.products = data; // Atualiza os produtos com os dados recebidos
        if (selectedButton === 'featured') {
          this.filteredProducts = this.products;
        } else {
          this.filteredProducts = this.products.filter(product => product.filter === selectedButton);
        }
        this.selectedButton = selectedButton;
      },
      (error) => {
        console.error('Erro ao carregar os produtos:', error);
      }
    );
  }

  addBag() {
    Swal.fire({
      title: "Good job!",
      text: "You added this item to your bag!",
      icon: "success"
    });
  }
}
