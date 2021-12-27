import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Buggy } from '../model/buggy';
import { BuggyService } from '../services/buggy.service';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-update-buggy',
  templateUrl: './update-buggy.component.html',
  styles: [
  ]
})
export class UpdateBuggyComponent implements OnInit {
  buggyForm:FormGroup;
  //currentBuggy =new Buggy(this.buggyForm.value.name,this.buggyForm.value.price,this.buggyForm.value.date,this.buggyForm.value.marque);
  
  mess!: string;
  marqueList:any = [];
  currentBuggy: Buggy;
   constructor(private buggyService: BuggyService,private router :Router,private marqueService: MarqueService,private formBuilder:FormBuilder,private activatedRoute: ActivatedRoute) {
    this.buggyForm = this.formBuilder.group({
      id : new FormControl(''),
      name : new FormControl(''),
      price : new FormControl(''),
      date : new FormControl(''),
      marque : new FormControl('')
    })

   } 

   ngOnInit(): void {
    this.onSelectmarq();
    console.log("Id:", this.activatedRoute.snapshot.params['id']);
    this.buggyService.consulterBuggy(this.activatedRoute.snapshot.params['id']).subscribe(
      bug => {
        this.currentBuggy = bug;
        console.log(bug);
        this.buggyForm.controls['id'].setValue(bug.idBuggy);
        this.buggyForm.controls['name'].setValue(bug.nomBuggy);
        this.buggyForm.controls['price'].setValue(bug.prixBuggy);
        this.buggyForm.controls['date'].setValue(bug.dateCreation);
        this.buggyForm.controls['marque'].setValue(bug.marque.nomMq);
      },
      (error) => {
        console.log(error);
      } 
    ) ;
  }

  updateBuggy() { 
    this.buggyService.updateBuggy(this.currentBuggy).subscribe(() => { 
      this.router.navigate(['buggys']);
     },(error) => { 
        alert("Problème lors de la modification !"); } 
        );
       
      }
      
/*
      updatBuggy(){
        let currentBuggy : Buggy  =  new Buggy (this.buggyForm.value.name, this.buggyForm.value.price, this.buggyForm.value.date, this.buggyForm.value.marque);
        
         this.buggyService.updateBuggy(currentBuggy) .subscribe(bug => {
            console.log(bug); 
          }); 
          this.router.navigate(['buggys']); 
        }
*/
    onSelectmarq(){
      this.marqueService.listeMarque().subscribe(response =>{
        console.log(response)
          this.marqueList = response;
        
      }); 
    }


}
