import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DesignServicesComponent } from './components/design-services/design-services.component';

const routes: Routes = [
  {path:'', component: HomeComponent},  
  // {path:'home', component: HomeComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'designServices', component: DesignServicesComponent},
  {path:'products', component: ProductsComponent},
  {path:'careers', component: CareersComponent},
  {path:'contactUs', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
