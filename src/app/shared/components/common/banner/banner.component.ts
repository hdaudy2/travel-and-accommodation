import { Component, Input } from '@angular/core';
import { banner } from '@shared/interface/property';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: false
})
export class BannerComponent {

  @Input() bannerData: banner;
  @Input() type: string = '';
  @Input() tagClass: string = '';
  @Input() buttonClass: string;

}
