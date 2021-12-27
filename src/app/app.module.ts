import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BuggysComponent } from './buggys/buggys.component';
import { AddBuggyComponent } from './add-buggy/add-buggy.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { UpdateBuggyComponent } from './update-buggy/update-buggy.component';
import { MarquesComponent } from './marques/marques.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    BuggysComponent,
    AddBuggyComponent,
    UpdateBuggyComponent,
    MarquesComponent,
    AddMarqueComponent,
    UpdateMarqueComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
