import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: false,
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  // images = [
  //   { src: 'image1.jpg', description: 'Description for Image 1' },
  //   { src: 'image2.jpg', description: 'Description for Image 2' },
  //   { src: 'image3.jpg', description: 'Description for Image 3' },
  // ];
  @Input() images: { src: string, description: string }[] = [];


  slideIndex = 0;

  moveSlide(direction: string): void {
    if (direction === 'left') {
      this.slideIndex = this.slideIndex === 0 ? this.images.length - 1 : this.slideIndex - 1;
    } else if (direction === 'right') {
      this.slideIndex = this.slideIndex === this.images.length - 1 ? 0 : this.slideIndex + 1;
    }
  }
}
