import { Component } from '@angular/core';
import { banner } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  standalone: false
})
export class HomeBannerComponent {

  public title = 'home';
  public bannerData: banner[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter((item) => item.type == this.title);
    });
  }
}
