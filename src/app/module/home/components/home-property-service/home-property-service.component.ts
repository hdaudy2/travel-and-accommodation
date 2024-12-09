import { Component } from '@angular/core';
import { providedServices } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-property-service',
  templateUrl: './home-property-service.component.html',
  styleUrls: ['./home-property-service.component.scss'],
  standalone: false
})
export class HomePropertyServiceComponent {

  public desc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public title = 'home';

  public providedServices: providedServices[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter(
        (item) => item.type == this.title
      );
    });
  }
}
