import { Component } from '@angular/core';
import { happyClients } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-happy-client',
  templateUrl: './home-happy-client.component.html',
  styleUrls: ['./home-happy-client.component.scss'],
  standalone: false
})
export class HomeHappyClientComponent {
  public desc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public title = 'home';
  public happyClientsData: happyClients[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter(
        (item) => item.type == this.title
      );
    });
  }
}
