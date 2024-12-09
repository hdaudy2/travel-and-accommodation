import { Component, Input } from '@angular/core';
import { banner } from '@shared/interface/property';

@Component({
  selector: 'app-banner-four',
  templateUrl: './banner-four.component.html',
  styleUrls: ['./banner-four.component.scss'],
  standalone: false
})
export class BannerFourComponent {

  @Input() bannerData: banner;

}
