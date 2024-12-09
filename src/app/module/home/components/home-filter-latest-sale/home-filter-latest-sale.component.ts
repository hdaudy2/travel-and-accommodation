import { Component, Input } from '@angular/core';
import { latestForSale } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-filter-latest-sale',
  templateUrl: './home-filter-latest-sale.component.html',
  styleUrls: ['./home-filter-latest-sale.component.scss'],
  standalone: false
})
export class HomeFilterLatestSaleComponent {

  @Input() type: string = 'simple';
  @Input() tagClass: string;
  @Input() titleType: string;

  public title = 'slider_filter_search';
  public tag = "Deals";
  public heading = "Deals for the weekend";
  public desc = "Save on stays for December 13 - December 15";

  public propertyData: latestForSale[] = []

  constructor(public propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.propertyData().subscribe(response => {
      this.propertyData = response.latestForSale.filter(item => item.type == this.title)
  });
}

}
