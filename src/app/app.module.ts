import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestrictDotsDirective } from './directives/restrict-dots.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    FooterComponent,
    RestrictDotsDirective,
  ],
  imports: [
    BrowserModule,
    ProductsComponent,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
