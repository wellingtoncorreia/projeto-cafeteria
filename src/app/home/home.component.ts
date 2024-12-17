import { Component } from '@angular/core';
import { SectionHeroComponent } from "../section-hero/section-hero.component";
import { SubHeroComponent } from "../sub-hero/sub-hero.component";
import { SectionProductsComponent } from "../section-products/section-products.component";
import { sectionDiscountComponent } from "../section-discount/section-discount.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionHeroComponent, SubHeroComponent, SectionProductsComponent, sectionDiscountComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
