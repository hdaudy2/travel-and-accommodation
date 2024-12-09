import { Component } from '@angular/core';
import { featuredProperty } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-featured-property',
  templateUrl: './home-featured-property.component.html',
  styleUrls: ['./home-featured-property.component.scss'],
  standalone: false
})
export class HomeFeaturedPropertyComponent {

  public title = 'home';
  public featuredProperty: featuredProperty[] = [];

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.featuredPropertyData().subscribe((response) => {
      this.featuredProperty = response.featuredProperty.filter(
        (item) => item.type == this.title
      );
    });
  }

}
