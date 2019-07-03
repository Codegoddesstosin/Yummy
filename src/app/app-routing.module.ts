import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from 'src/app/orders/orders.component';


const routes: Routes = [
 // { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'order', children:[
     { path: '', component:OrdersComponent},
     { path: 'edit/:id', component:OrdersComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule { 

}
