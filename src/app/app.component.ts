import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIG2S';

  constructor(private dialog:MatDialog){

  }  
 
  ngOnInit(): void {
  }

  openModel=()=>{
    console.log('works');
    const dialogRef=new MatDialogConfig();
    this.dialog.open(FormComponent,dialogRef)

  }
}
