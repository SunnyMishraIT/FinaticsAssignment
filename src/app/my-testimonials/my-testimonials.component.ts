import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-my-testimonials',
  templateUrl: './my-testimonials.component.html',
  styleUrls: ['./my-testimonials.component.css']
})
export class MyTestimonialsComponent {
  testimonials!: any[];
  pendingTestimonials: any = [];
  approvedTestimonials: any = [];
  searchdata : boolean = false;
  searchstring : any;
  filteredData : any ;
  constructor(private dataService: GetdataService, private searchdataTestimonial : DataserviceService) { }

  ngOnInit() {
    this.gettestimonials();
  }

  gettestimonials() {
    this.dataService.getdata().subscribe((res) => {
      this.pendingTestimonials = res.data.testimonialwithstaus.pending;
      this.approvedTestimonials = res.data.testimonialwithstaus.approved;
    })
  }
  onaccept(e: any) {
    let id = e.id;
    let index = this.pendingTestimonials.findIndex((el: any) =>
      el.id == id)
    if (index !== -1) {
      const approvedTestimonial = this.pendingTestimonials.splice(index, 1)[0];
      this.approvedTestimonials.push(approvedTestimonial);
    }
  }
  onreject(e: any) {
    let id = e.id;
    let index = this.pendingTestimonials.findIndex((el: any) =>
      el.id == id)
    if (index !== -1) {
      this.pendingTestimonials.splice(index, 1)[0];
    }
  }
  getData() {
    this.searchdataTestimonial.data.subscribe(response => {
      this.searchstring = response;
      this.filterTestimonials();
    });
  }
filterTestimonials() {
  if (this.searchstring) {
    this.searchdata = true;
    let temp = [];
    temp = this.approvedTestimonials
    this.filteredData = temp.filter((el: any) => {
      return el.user.name.toLowerCase().includes(this.searchstring.toLowerCase())
    })
  }
}

  clearsearch(){
    this.getData();
    if(this.searchstring == undefined || this.searchstring == '' || this.searchstring == null || this.searchstring.length <= 2){
      this.searchdata = false;
    } else{
      this.filteredData = this.approvedTestimonials.filter((el : any)=>{
        el.user.name.toLowerCase().includes(this.searchstring.toLowerCase())
      })
    }
    console.log(this.filteredData)
  }
}