import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buggy } from '../model/buggy';
import { AuthService } from '../services/auth.service';
import { BuggyService } from '../services/buggy.service';
@Component({
  selector: 'app-buggys',
  templateUrl: './buggys.component.html',
  styleUrls: ['./buggys.component.css']
})
export class BuggysComponent implements OnInit {
 // searchText : any;
  buggys : Buggy[];
  
  constructor(private buggyService: BuggyService,public authService: AuthService) { 
    //this.buggys = buggyService.listeBuggys();
    
  }

  ngOnInit(): void {
    this.buggyService.listeBuggy().subscribe(bugs => { console.log(bugs); this.buggys = bugs; });
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
