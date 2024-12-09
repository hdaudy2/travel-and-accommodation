import { Component } from '@angular/core';
import { brand } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-brand',
  templateUrl: './home-brand.component.html',
  styleUrls: ['./home-brand.component.scss'],
  standalone: false
})
export class HomeBrandComponent {

  public title = 'home';
  public brandData: brand[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
