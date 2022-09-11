import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private http:HttpClient) { 

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


}
