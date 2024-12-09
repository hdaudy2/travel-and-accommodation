import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.scss'],
  standalone: false
})
export class FooterTwoComponent {

  @Input() footerLogo: string;

}
