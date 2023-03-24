import { Component, ViewChild } from '@angular/core';
import { GetdataService } from '../services/getdata.service';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent {
  activeCertificates!: any[];
  activeCertificatesArray : any[] = [];
  // imgags = [
  //   'assets/bg.jpg',
  //   'assets/car.png',
  //   'assets/canberra.jpg',
  //   'assets/holi.jpg'
  // ];
  // public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  // public carouselTiles : any = {
  //   0: [],
  //   1: [],
  //   2: [],
  //   3: [],
  //   4: [],
  //   5: []
  // };
  // public carouselTile: NguCarouselConfig = {
  //   grid: { xs: 1, sm: 1, md: 3, lg: 3, xl:3, all: 0 },
  //   slide: 3,
  //   speed: 250,
  //   point: {
  //     visible: true
  //   },
  //   load: 2,
  //   velocity: 0,
  //   touch: true,
  //   easing: 'cubic-bezier(0, 0, 0.2, 1)'
  // };
  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 5, all: 0 },
    slide: 2,
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2, 3];
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
