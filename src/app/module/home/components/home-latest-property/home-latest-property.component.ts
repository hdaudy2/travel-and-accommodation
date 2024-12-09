import { Component, Input } from '@angular/core';
import { latestForRent } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-latest-property',
  templateUrl: './home-latest-property.component.html',
  styleUrls: ['./home-latest-property.component.scss'],
  standalone: false
})
export class HomeLatestPropertyComponent {

  @Input() latestPropertyData: latestForRent[];

  public desc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public title = 'home';

  constructor(public propertyService: PropertyService){}

}
