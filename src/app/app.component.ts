import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SectionHeroComponent } from "./section-hero/section-hero.component";
import { SubHeroComponent } from "./sub-hero/sub-hero.component";
import { SectionProductsComponent } from "./section-products/section-products.component";
import { sectionDiscountComponent } from "./section-discount/section-discount.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SectionHeroComponent, SubHeroComponent, SectionProductsComponent, sectionDiscountComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'brownCafe';
}
