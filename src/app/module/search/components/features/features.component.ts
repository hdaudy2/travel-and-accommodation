import { Component, Input } from '@angular/core';
import { featuresData } from '@shared/interface/property';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  standalone: false
})
export class FeaturesComponent {

  @Input() featuresData: featuresData[];
  
}
