import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DesignServicesComponent } from './design-services/design-services.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactUsComponent,
    DesignServicesComponent
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactUsComponent,
    DesignServicesComponent
  ]
})
export class ComponentsModule { }
