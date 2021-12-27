import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../model/marque';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.css']
})
export class AddMarqueComponent implements OnInit {

  newMarque = new Marque();
  mess!: string;
   constructor(private marqueService: MarqueService,private router :Router) {} 

   ngOnInit(): void {
  }

  addMarque(){
     this.marqueService.ajouterMarque(this.newMarque) .subscribe(mrq => {
        console.log(mrq); 
      }); 
      this.router.navigate(['marques']); 
      this.ngOnInit();

    }


  
}
