import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTestimonial : any ;
  constructor(private dataService : DataserviceService){

  }
  searchTestimonialData(e : any){
    console.log(this.searchTestimonial)
    this.dataService.sendData(this.searchTestimonial)
  }
}
