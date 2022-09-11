import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';


@NgModule({
  declarations: [FormComponent, HomeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
   
    BrowserAnimationsModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { 
 
}
