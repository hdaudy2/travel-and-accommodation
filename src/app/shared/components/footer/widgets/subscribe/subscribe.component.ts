import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  standalone: false
})
export class SubscribeComponent {

  public isSubscribe: boolean = false;

  openSubscribe() {
    this.isSubscribe = !this.isSubscribe;
  }
}
