import { Component, Input } from '@angular/core';
import { img } from '@shared/interface/property';

@Component({
  selector: 'app-property-images',
  templateUrl: './property-images.component.html',
  styleUrls: ['./property-images.component.scss'],
  standalone: false
})
export class PropertyImagesComponent {

  @Input() propertyImageData: img[];
  
}
