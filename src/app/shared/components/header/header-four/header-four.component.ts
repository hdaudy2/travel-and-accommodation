import { Component } from '@angular/core';
import { Menu, NavService } from '../../../../shared/services/nav.service';

@Component({
  selector: 'app-header-four',
  templateUrl: './header-four.component.html',
  styleUrls: ['./header-four.component.scss'],
  standalone: false
})
export class HeaderFourComponent {

  public menuItems: Menu[] = [];

  constructor(public navServices: NavService) {
    this.navServices.items.subscribe(menuItems => (this.menuItems = menuItems));
  }
}
