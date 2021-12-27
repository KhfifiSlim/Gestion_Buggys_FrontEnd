import { Marque } from "./marque";

export class Buggy {
    idBuggy: number;
    nomBuggy: string;
    prixBuggy: number;
    dateCreation: Date;
    marque: Marque;

   constructor(nomBuggy:string , prixBuggy:number , dateCreation:Date , marque:Marque )
    {
        this.nomBuggy = nomBuggy;
        this.prixBuggy = prixBuggy;
        this.dateCreation = dateCreation ;
        this.marque = marque;
    }
    
}