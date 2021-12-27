import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styles: [
  ]
})
export class UpdateMarqueComponent implements OnInit {
  currentMarque = new Marque();
  constructor(private activatedRoute: ActivatedRoute,private router :Router, private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.marqueService.consulterMarque(this.activatedRoute.snapshot.params['id']). subscribe( prod =>{ 
      this.currentMarque = prod; } ) ;
  }
  updateMarque() { 
    this.marqueService.updateMarque(this.currentMarque).subscribe(() => { 
      this.router.navigate(['marques']);
     },(error) => { 
        alert("Problème lors de la modification !"); } 
        ); 
      }
}