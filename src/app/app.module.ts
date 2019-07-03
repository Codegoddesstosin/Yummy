import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './Orders/order/order.component';
import { OrderItemComponent } from './Orders/order-item/order-item.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
