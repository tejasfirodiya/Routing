import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FirstComponent } from './components/first/first.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { ProductsComponent } from './components/products/products.component';
import { SecondComponent } from './components/second/second.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'products', component:ProductsComponentComponent, children:[{path:':id/:name', component:ProductsComponent}]},
  {path:'products', component:ProductsComponentComponent},
  {path:'careers', component:CareersComponent},
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
