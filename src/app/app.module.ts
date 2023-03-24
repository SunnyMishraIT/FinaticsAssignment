import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import { MyTestimonialsComponent } from './my-testimonials/my-testimonials.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyCertificatesComponent,
    MyTestimonialsComponent
  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
