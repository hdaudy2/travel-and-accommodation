import { Component, Input } from '@angular/core';
import { propertyBrief, propertyDetails } from '@shared/interface/property';


@Component({
  selector: 'app-property-brief',
  templateUrl: './property-brief.component.html',
  styleUrls: ['./property-brief.component.scss'],
  standalone: false
})
export class PropertyBriefComponent {

  @Input() propertyBriefData: propertyBrief[];
  @Input() propertyDetailsData: propertyDetails[];

}
