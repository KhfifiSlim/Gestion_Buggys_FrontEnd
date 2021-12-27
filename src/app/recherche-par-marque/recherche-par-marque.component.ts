import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Buggy } from '../model/buggy';
import { Marque } from '../model/marque';
import { AuthService } from '../services/auth.service';
import { BuggyService } from '../services/buggy.service';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
buggys: Buggy[];
//marques: Observable<Marque[]>;
marqueList:any = [];
idMq:number;


  constructor(private buggyService : BuggyService, private marqueService : MarqueService, public authService:AuthService) {

   }

  ngOnInit(): void {
      this.onSelectmarq();
     // this.buggys=[];
      //this.buggys=this.buggyService.listeBuggy();
      this.buggyService.listeBuggy().subscribe(bugs => {
         console.log(bugs); 
         this.buggys = bugs; 
         
        });
  }

  onSelectmarq(){
    this.marqueService.listeMarque().subscribe(response =>{
      console.log(response)
      this.marqueList = response;
      
    }); 
    
  }
  onChange(){
    console.log(this.idMq);
    this.buggys= this.buggyService.rechercherParMarque(this.idMq);

  }

  
    supprimerBuggy(b: Buggy) { 
      let conf = confirm("Etes-vous sûr ?");
       if (conf) this.buggyService.supprimerBuggy(b.idBuggy).subscribe(() => {
          console.log("buggy supprimé"); 
          this.SuprimerBuggyDuTableau(b);
         }); 
   
       }
       SuprimerBuggyDuTableau(bug : Buggy) { 
         this.buggys.forEach((cur, index) => { 
           if(bug.idBuggy=== cur.idBuggy) { 
             this.buggys.splice(index, 1); } });
   }

   

}
