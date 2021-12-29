import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { InfluncerShopComponent } from './influncer-shop/influncer-shop.component';
import { MyfavComponent } from './myfav/myfav.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'productDetails',
    component: ProductDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'influncerShop',
    component: InfluncerShopComponent
  },
  {
    path: 'myFav',
    component: MyfavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
