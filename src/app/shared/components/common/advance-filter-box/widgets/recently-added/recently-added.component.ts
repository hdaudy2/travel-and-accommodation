import { Component } from '@angular/core';
import { recentAdded } from '@shared/data/advance-filter';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss'],
  standalone: false
})
export class RecentlyAddedComponent {

  public recentAdded = recentAdded;

}
