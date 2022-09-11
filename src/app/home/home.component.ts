import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { NavbarComponent } from '../navbar/navbar.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  images=[
    {
      imageSrc:'assets/images/img1.jpg',
      imageAlt:'img1'
    },
    {
      imageSrc:'assets/images/img2.jpg',
      imageAlt:'img2'
    },
    {
      imageSrc:'assets/images/img3.jpg',
      imageAlt:'img3'
    },
    
  ]
  images1=[
  {
    imageSrc:'/assets/images/events/im4.png',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/events/im5.png',
    imageAlt:'im2'
  },
 
]
images2=[
  {
    imageSrc:'/assets/images/events/im6.png',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/events/im7.png',
    imageAlt:'im2'
  },
  {
    imageSrc:'/assets/images/events/im8.png',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/events/im9.png',
    imageAlt:'im2'
  },
 
]
images3=[
  {
    imageSrc:'/assets/images/events/im10.png',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/events/im11.png',
    imageAlt:'im2'
  },
 
]
images4=[
  {
    imageSrc:'/assets/images/events/im12.png',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/events/im13.png',
    imageAlt:'im2'
  },
  {
    imageSrc:'/assets/images/events/im14.png',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/events/im15.png',
    imageAlt:'im2'
  },
 
]
images5=[
  {
    imageSrc:'/assets/images/events/im16.png',
    imageAlt:'im2'
  },
  {
    imageSrc:'/assets/images/events/im17.png',
    imageAlt:'im2'
  },
  {
    imageSrc:'/assets/images/events/im18.png',
    imageAlt:'im2'
  },
]
images6=[
  {
    imageSrc:'/assets/images/events/im19.png',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/events/im20.png',
    imageAlt:'im2'
  },
 
]
images7=[
  {
    imageSrc:'/assets/images/about/im1.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/about/im2.jpg',
    imageAlt:'im1'
  }, 
  {
    imageSrc:'/assets/images/about/im3.jpg',
    imageAlt:'im1'
  }, 
  {
    imageSrc:'/assets/images/about/im4.jpg',
    imageAlt:'im1'
  }, 
  {
    imageSrc:'/assets/images/about/im5.jpg',
    imageAlt:'im1'
  },
]
images8=[
  {
    imageSrc:'/assets/images/linkedin/im1.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/linkedin/im2.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/linkedin/im3.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/linkedin/im4.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/linkedin/im5.jpg',
    imageAlt:'im1'
  },
]
images9=[
  {
    imageSrc:'/assets/images/T/IM1.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/T/IM2.jpg',
    imageAlt:'im2'
  },
 
]
images10=[
  {
    imageSrc:'/assets/images/tds/im1.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/tds/im2.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/tds/im3.jpg',
    imageAlt:'im1'
  },
  {
    imageSrc:'/assets/images/tds/im4.jpg',
    imageAlt:'im1'
  },
 
]




 
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  btnClick () {
    this.router.navigateByUrl('/FORM');

}

   

}
