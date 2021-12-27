import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buggy } from '../model/buggy';
import { BuggyService } from '../services/buggy.service';
import { MarqueService } from '../services/marque.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
//import { Marque } from 'c:/Users/khfif/Desktop/DSI 33/Atelier S.O.A/Angular_2021/MesBuggys/src/app/model/marque';
@Component({
  selector: 'app-add-buggy',
  templateUrl: './add-buggy.component.html',
  styleUrls: ['./add-buggy.component.css']
})
export class AddBuggyComponent implements OnInit {
  buggyForm:FormGroup;
  mess!: string;
  marqueList:any = [];
   constructor(private buggyService: BuggyService,private router :Router,private marqueService: MarqueService,private formBuilder:FormBuilder) {
    this.buggyForm = this.formBuilder.group({

      name : new FormControl(''),
      price : new FormControl(''),
      date : new FormControl(''),
      marque : new FormControl('')
    })

   } 

   ngOnInit(): void {
     this.onSelectmarq();
     
  }

  addBuggy(){
    let newBuggy : Buggy  = new Buggy(this.buggyForm.value.name,this.buggyForm.value.price,this.buggyForm.value.date,this.buggyForm.value.marque);
    
     this.buggyService.ajouterBuggy(newBuggy) .subscribe(bug => {
        console.log(bug); 
      }); 
      this.ngOnInit();
      this.router.navigate(['buggys']); 
   
    }

    onSelectmarq(){
      this.marqueService.listeMarque().subscribe(response =>{
        console.log(response)
        this.marqueList = response;
        
      }); 
    }


  
}
