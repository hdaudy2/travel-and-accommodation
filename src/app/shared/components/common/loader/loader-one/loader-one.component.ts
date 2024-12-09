import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-one',
  templateUrl: './loader-one.component.html',
  styleUrls: ['./loader-one.component.scss'],
  standalone: false
})
export class LoaderOneComponent {

  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

}
