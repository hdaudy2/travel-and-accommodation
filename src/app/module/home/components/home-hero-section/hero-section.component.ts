import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: false
})
export class HeroSectionComponent {

  public active = 1;
  public openTab: string = 'sell';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
