import { Component, Input, OnInit } from '@angular/core';

interface CarouselImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.scss']
})
export class Slider1Component implements OnInit {

  constructor() { }
  @Input() images: CarouselImage[] = []
  @Input() indicators= true;
  @Input() controls=true;
  @Input() autoslide=false;
  @Input() slideInterval=3000;

  selectedIndex=0;
  ngOnInit(): void {
    if(this.autoslide){
      this.autoSlideImages();
    }
  }

  autoSlideImages():void{
    setInterval(()=>{
      this.onPrevClick();
    },this.slideInterval);

  }

  selectedImage(index:number):void {
    this.selectedIndex=index;

  }

  onPrevClick():void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.images.length;
    }
      this.selectedIndex--;
    
  }

  onNextClick():void{
    if(this.selectedIndex===this.images.length){
      this.selectedIndex=-1;
    }
      this.selectedIndex++;
     
  
    
  }
}
