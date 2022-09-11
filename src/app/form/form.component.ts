import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {



  constructor(private http:HttpClient,private router: Router) { 

  }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    this.http.post('/api/test',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);
  }
  btnCancel(){
    this.router.navigateByUrl('/HOME');
  }
   

  
}
