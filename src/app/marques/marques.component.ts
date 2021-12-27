import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../model/marque';
import { AuthService } from '../services/auth.service';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css']
})
export class MarquesComponent implements OnInit {

  public marques: Marque[];
  
  constructor(private marqueService: MarqueService,public authService: AuthService) { 
    //this.buggys = buggyService.listeBuggys();
    
  }

  ngOnInit(): void {
    this.marqueService.listeMarque().subscribe(bugs => { console.log(bugs); this.marques = bugs; });
  }

 supprimerMarque(b: Marque) {   
   let conf = confirm("Etes-vous sûr ?");
    if (conf) this.marqueService.supprimerMarque(b.idMq).subscribe(() => {
       console.log("buggy supprimé"); 
       this.SuprimerMarqueDuTableau(b);
       //return true;
      }
   
      ); 

    }


    SuprimerMarqueDuTableau(bug : Marque) { 
      this.marques.forEach((cur, index) => { 
        if(bug.idMq=== cur.idMq) { 
          this.marques.splice(index, 1); } });
}
}
