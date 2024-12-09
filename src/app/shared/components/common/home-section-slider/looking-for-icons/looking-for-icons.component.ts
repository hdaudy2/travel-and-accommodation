import { Component, Input } from '@angular/core';
import { lookingForData } from '@shared/data/slider-filter-search';

@Component({
  selector: 'app-looking-for-icons',
  templateUrl: './looking-for-icons.component.html',
  styleUrls: ['./looking-for-icons.component.scss'],
  standalone: false
})
export class LookingForIconsComponent {

  @Input() text : boolean = false;

  public lookingForData = lookingForData;

}
