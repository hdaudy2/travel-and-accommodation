import { Component } from '@angular/core';
import { agents } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-home-agents',
  templateUrl: './home-agents.component.html',
  styleUrls: ['./home-agents.component.scss'],
  standalone: false
})
export class HomeAgentsComponent {
  public desc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public title = 'home';
  public agentsData: agents[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData = response.agents.filter((item) => item.type == this.title);
    });
  }
}
