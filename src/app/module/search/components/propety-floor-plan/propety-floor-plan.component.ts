import { Component, Input } from '@angular/core';
import { img } from '@shared/interface/property';

@Component({
  selector: 'app-propety-floor-plan',
  templateUrl: './propety-floor-plan.component.html',
  styleUrls: ['./propety-floor-plan.component.scss'],
  standalone: false
})
export class PropetyFloorPlanComponent {

  @Input() floorPlanData: img;

}
