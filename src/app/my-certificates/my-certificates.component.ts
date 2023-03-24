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
  constructor(private dataService: GetdataService) { }

  ngOnInit() {
    this.getActiveCertificates();
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
