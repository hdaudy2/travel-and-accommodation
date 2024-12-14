import { Component } from '@angular/core';
import * as layoutOption from 'src/app/shared/data/layout';
import { layout } from 'src/app/shared/interface/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: false
})
export class LayoutComponent {

  public data: layout;

  set(){
    var url = window.location.pathname;
    this.data = layoutOption.layoutEight;
    return this.data;
  }
}
