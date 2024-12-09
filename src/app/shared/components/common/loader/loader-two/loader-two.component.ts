import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-two',
  templateUrl: './loader-two.component.html',
  styleUrls: ['./loader-two.component.scss'],
  standalone: false
})
export class LoaderTwoComponent {
  
  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
