import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Options } from 'ngx-slider-v2';
import { agencyParams, areaFilter, bathParams, bedParams, categoryParams, img, priceFilter, roomsParams, statusParams } from '@shared/interface/property';

@Component({
  selector: 'app-advance-filter',
  templateUrl: './advance-filter.component.html',
  styleUrls: ['./advance-filter.component.scss'],
  standalone: false
})
export class AdvanceFilterComponent {

  @Input() propertyFilterSliderData: img[];
  @Input() contact: boolean = true;
  @Input() featured: boolean = false;
  @Input() mortgage: boolean = false;
  @Input() filter: boolean = false;

  @Output() categoryValue = new EventEmitter<categoryParams>();
  @Output() propertyStatusData = new EventEmitter<statusParams>();
  @Output() propertyTypeData = new EventEmitter<categoryParams>();
  @Output() roomsData = new EventEmitter<roomsParams>();
  @Output() bedsData = new EventEmitter<bedParams>();
  @Output() bathData = new EventEmitter<bathParams>();
  @Output() agencyData = new EventEmitter<agencyParams>();
  @Output() priceFilter: EventEmitter<priceFilter> = new EventEmitter<priceFilter>();
  @Output() areaFilter: EventEmitter<areaFilter> = new EventEmitter<areaFilter>();

  public totalAmount: number;
  public totalInterest: number;
  public instalment: number;

  options: Options = {
    floor: 0,
    ceil: 500,
  };

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
  };

  getStatus(status: statusParams) {
    this.propertyStatusData.emit(status);
  }

  getType(type: categoryParams) {
    this.propertyTypeData.emit(type);
  }

  getRooms(room: roomsParams) {
    this.roomsData.emit(room);
  }

  getBeds(bed: bedParams) {
    this.bedsData.emit(bed);
  }

  getBath(bath: bathParams) {
    this.bathData.emit(bath);
  }

  getAgency(agency: agencyParams) {
    this.agencyData.emit(agency);
  }

  priceChange(event: priceFilter) {
    this.priceFilter.emit(event);
  }

  areaChange(event: areaFilter) {
    this.areaFilter.emit(event);
  }
}
