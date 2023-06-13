import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { GoogleButtonComponent } from './components/pages/login-page/thirdPartyLoginButtons/google-button/google-button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'food/:id', component:FoodPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'google', component: GoogleButtonComponent },
  { path:"home", component:HomeComponent  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'track', component: OrderTrackPageComponent },
  { path: '**', component: NotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
