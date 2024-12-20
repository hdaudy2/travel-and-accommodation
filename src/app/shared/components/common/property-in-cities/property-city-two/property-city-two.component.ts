import { Component, Input } from '@angular/core';
import { propertyInCity } from '@shared/interface/property';

@Component({
  selector: 'app-property-city-two',
  templateUrl: './property-city-two.component.html',
  styleUrls: ['./property-city-two.component.scss'],
  standalone: false
})
export class PropertyCityTwoComponent {

  @Input() propertyInCity: propertyInCity[];

  public Options = {
    loop: true,
    nav: false,
    dots: true,
    responsive : {
      0 : {
        items : 1
      },
      475 : {
        items : 2
      },
      568 : {
        items : 3
      },
      1100 : {
        items : 4
      },
      1300 : {
        items : 5
      }
    }
  };
}
