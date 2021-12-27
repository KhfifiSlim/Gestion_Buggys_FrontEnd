import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marque } from '../model/marque';
import { Observable } from 'rxjs'; 
import { AuthService } from './auth.service';
const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  apiURL: string = 'http://localhost:8085/buggys/ami';
  marques: Marque[];

  //marque : Marque;

 
  constructor(private http : HttpClient , private authService : AuthService) {
    
   }



  listeMarque(): Observable<Marque[]>{

    let jwt = this.authService.getToken(); 
    jwt = "Bearer "+jwt; 
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Marque[]>(this.apiURL+"/all",{headers:httpHeaders});
  }



    ajouterMarque( mrq: Marque):Observable<Marque>{ 
      let jwt = this.authService.getToken(); 
      jwt = "Bearer "+jwt; 
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.post<Marque>(this.apiURL, mrq, {headers:httpHeaders});
    
    }
  
  
  
  
  
      supprimerMarque(id : number) { 
        const url = `${this.apiURL}/${id}`; 
        let jwt = this.authService.getToken(); 
        jwt = "Bearer "+jwt; 
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.delete(url, {headers:httpHeaders});
      }


        consulterMarque(id: number): Observable<Marque> { 
          const url = `${this.apiURL}/${id}`; 
          let jwt = this.authService.getToken(); 
          jwt = "Bearer "+jwt; 
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.get<Marque>(url,{headers:httpHeaders});
        }

     

        trierMarques(){
           this.marques= this.marques.sort((n1,n2) => { if (n1.idMq > n2.idMq) { return 1;
           } if (n1.idMq < n2.idMq) { return -1;
           } return 0; }); } 

           updateMarque(bug :Marque) : Observable<Marque> { 
            let jwt = this.authService.getToken(); 
            jwt = "Bearer "+jwt; 
            let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.put<Marque>(this.apiURL, bug, {headers:httpHeaders});
            }

            

  }

