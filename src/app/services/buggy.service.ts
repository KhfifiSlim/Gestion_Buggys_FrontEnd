import { Injectable } from '@angular/core';
import { Buggy } from '../model/buggy';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Marque } from '../model/marque';
const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class BuggyService {
  apiURL: string = 'http://localhost:8085/buggys/api';
  buggys: Buggy[];
  //buggysRecherche: Buggy[];
  buggysRecherche: Buggy[];
 //buggy: Buggy;

 
  constructor(private http : HttpClient , private authService : AuthService) {
    this.listeBuggy().subscribe((response) => {
      console.log(response);
      this.buggys = response;
    });
   }



  listeBuggy(): Observable<Buggy[]>{ 
    let jwt = this.authService.getToken();
     jwt = "Bearer "+jwt; 
     let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Buggy[]>(this.apiURL+"/all",{headers:httpHeaders});
     }



    ajouterBuggy( bug: Buggy):Observable<Buggy>{ 

      let jwt = this.authService.getToken(); 
      jwt = "Bearer "+jwt; 
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.post<Buggy>(this.apiURL, bug, {headers:httpHeaders}); 
    
    }
  
  
  
  
  
      supprimerBuggy(id : number) { 
        const url = `${this.apiURL}/${id}`; 
        let jwt = this.authService.getToken(); 
        jwt = "Bearer "+jwt; let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.delete(url, {headers:httpHeaders});
      }


        consulterBuggy(id: number): Observable<Buggy> { 
          const url = `${this.apiURL}/${id}`; 
          let jwt = this.authService.getToken(); 
          jwt = "Bearer "+jwt; let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.get<Buggy>(url,{headers:httpHeaders}); 
        }

     

        trierBuggys(){
           this.buggys = this.buggys.sort((n1,n2) => { if (n1.idBuggy > n2.idBuggy) { return 1;
           } if (n1.idBuggy < n2.idBuggy) { return -1;
           } return 0; }); } 

           updateBuggy(bug :Buggy) : Observable<Buggy> { 
            let jwt = this.authService.getToken(); 
            jwt = "Bearer "+jwt; 
            let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.put<Buggy>(this.apiURL, bug, {headers:httpHeaders});
            }

/*
            rechercherParMarque(idMq: number): Buggy[]{ 
              this.buggysRecherche = []; 
              this.buggys.forEach((cur, index) => { 
                if(idMq == cur.marque.idMq) { 
                  console.log("cur "+cur); 
                  this.buggysRecherche.push(cur); 
                } }); 
                return this.buggysRecherche; }


        */ 
                rechercherParMarque(idMq: number): Buggy[]{ 
                  this.buggysRecherche = []; 
                  this.buggys.forEach((cur, index) => { 
                    if(idMq == cur.marque.idMq) { 
                      console.log("cur "+cur); 
                      this.buggysRecherche.push(cur); 
                    } }); 
                    return this.buggysRecherche; 
                    
                  }
              
  }
