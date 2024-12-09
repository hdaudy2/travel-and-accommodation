import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-home-filter-property-in-cities',
  templateUrl: './home-filter-property-in-cities.component.html',
  styleUrls: ['./home-filter-property-in-cities.component.scss'],
})
export class HomeFilterPropertyInCitiesComponent {

  @Input() title: string;
  @Input() tagClass: string = '';
  @Input() sectionClass: string;
  public propertyInCity: propertyInCity[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }
}
