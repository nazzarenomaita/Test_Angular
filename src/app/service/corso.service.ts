import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CorsoDto } from '../../model/CorsoDto';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  constructor(private http: HttpClient) {
   }
   url= "http://localhost:8080/api/";
   getCorsi(): Observable<CorsoDto[]> {
    console.log('hii')
    return this.http.get<CorsoDto[]>(this.url+'corsi/all');

   }
}
