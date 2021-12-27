import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuggysComponent } from './buggys/buggys.component';
import { AddBuggyComponent } from './add-buggy/add-buggy.component';
import { UpdateBuggyComponent } from './update-buggy/update-buggy.component';
import { MarquesComponent } from './marques/marques.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BuggyGuard } from './buggy.guard';
import { MarqueGuard } from './marque.guard';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "buggys", component : BuggysComponent},
  {path: "add-buggy", component : AddBuggyComponent, canActivate:[BuggyGuard]},
  {path: "", redirectTo: "buggys", pathMatch: "full" },
  {path: "updateBuggy/:id", component: UpdateBuggyComponent, canActivate:[BuggyGuard]},
  {path: "marques", component : MarquesComponent},
  {path: "add-marque", component : AddMarqueComponent, canActivate:[MarqueGuard]},
  {path: "updateMarque/:id", component: UpdateMarqueComponent, canActivate:[MarqueGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
