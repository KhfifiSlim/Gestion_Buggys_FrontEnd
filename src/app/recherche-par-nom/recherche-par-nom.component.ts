import { Component, OnInit } from '@angular/core';
import { Buggy } from '../model/buggy';
import { AuthService } from '../services/auth.service';
import { BuggyService } from '../services/buggy.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  buggys: Buggy[];
  searchText : any;
  constructor(private buggyService : BuggyService, public authService:AuthService) { }

  ngOnInit(): void {
    
    this.buggyService.listeBuggy().subscribe(bugs => {
      console.log(bugs); 
      this.buggys = bugs; 
         });

//this.buggys=[];

  }
  /*
  public searchBuggy(key: string): void {
    const resultat: Buggy[] = [];
    for (const v of this.buggys) {
      if (v.nomBuggy.toLocaleLowerCase().indexOf(key.toLowerCase()) !== -1)
        resultat.push(v);
      }
    this.buggys = resultat;
   
  }
*/
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
