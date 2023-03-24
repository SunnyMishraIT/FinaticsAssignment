import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private apiUrl = 'https://devwebapi.edgelearning.co.in/api/interview/certification';

  constructor(private http: HttpClient) { }

  // getActiveCertificates(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map(certifications => certifications))
  // }
  getdata() : Observable<any> {
    return this.http.get(this.apiUrl)
    .pipe(
      map((ret: any) => {
        return ret;
      })
    );
  }
}
