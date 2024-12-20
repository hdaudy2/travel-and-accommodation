import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: false
})
export class MapComponent {
  
  public isMapData: boolean = false;

  openMap() {
    this.isMapData = !this.isMapData;
  }
}
