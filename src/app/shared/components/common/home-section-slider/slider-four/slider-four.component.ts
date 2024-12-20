import { Component, Input } from '@angular/core';
import { homeSectionSlider } from '@shared/interface/property';

@Component({
  selector: 'app-slider-four',
  templateUrl: './slider-four.component.html',
  styleUrls: ['./slider-four.component.scss'],
  standalone: false
})
export class SliderFourComponent {

  @Input() homeSectionSliderData: homeSectionSlider[];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
