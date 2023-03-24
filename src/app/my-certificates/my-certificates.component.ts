import { Component } from '@angular/core';
import { GetdataService } from '../services/getdata.service';


@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent {
  activeCertificates!: any[];
  activeCertificatesArray : any[] = [];
  constructor(private dataService: GetdataService,) { }

  ngOnInit() {
    this.getActiveCertificates();
//     const myCarouselElement = document.querySelector('#myCarousel')
//     const carousel = new bootstrap.Carousel(myCarouselElement, {
//       interval: 2000,
//       touch: false
// })

  }
  getActiveCertificates(){
    let temp : any;
    this.dataService.getdata().subscribe((res)=>{
      this.activeCertificates = res.data.certificates;
      this.activeCertificatesArray = this.activeCertificates.filter((certificate) => {
        return certificate.isActive === 1;
      });
      // console.log(this.activeCertificatesArray)
    })
  }

}
