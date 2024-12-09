import { Component } from '@angular/core';
import { baths, beds, propertyType, rooms } from '@shared/data/advance-filter';


@Component({
  selector: 'app-filter-box-two',
  templateUrl: './filter-box-two.component.html',
  styleUrls: ['./filter-box-two.component.scss'],
  standalone: false
})
export class FilterBoxTwoComponent {

  public propertyType = propertyType;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;

}
