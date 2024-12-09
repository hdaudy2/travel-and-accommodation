import { Component, Input } from '@angular/core';
import { peopleSay } from '@shared/interface/property';

@Component({
  selector: 'app-people-say',
  templateUrl: './people-say.component.html',
  styleUrls: ['./people-say.component.scss'],
  standalone: false
})
export class PeopleSayComponent {

  @Input() peopleSayData: peopleSay[];

  public Options = {
    center: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeOut:700,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
}
