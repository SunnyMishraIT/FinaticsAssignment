import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import { MyTestimonialsComponent } from './my-testimonials/my-testimonials.component';

const routes: Routes = [
  // {
  //   path : '',
  //   component : MyCertificatesComponent
  // },
  // {
  //   path : 'testimonials',
  //   component : MyTestimonialsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
