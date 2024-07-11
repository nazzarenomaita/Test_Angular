import { Injectable } from '@angular/core';
import { UtenteRegistrationDto } from '../../model/UtenteRegistrationDto';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../../model/LoginDto';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  constructor(private http: HttpClient) {
  }

    url= "http://localhost:8080/api/";

    

    registration(utenteRegistrationDto: UtenteRegistrationDto) {
      console.log(utenteRegistrationDto)
      return this.http.post(this.url+'auth/register', utenteRegistrationDto)

  }

    login(loginDto: LoginDto){
      console.log(JSON.stringify(loginDto))
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json')
      
      return this.http.post(this.url+'auth/login', JSON.stringify(loginDto), {headers} ).pipe(catchError(this.handleError))
      
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Something bad happened; please try again later.'));

}

getUser(email:string) {
  const token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('No token found');
  }

  let headers = new HttpHeaders();
  headers = headers.set('Authorization', `Bearer ${token}`);

  return this.http.get(this.url + 'utenti/get/'+email, { headers })
    .pipe(
      catchError(this.handleError)
    );
}

}
