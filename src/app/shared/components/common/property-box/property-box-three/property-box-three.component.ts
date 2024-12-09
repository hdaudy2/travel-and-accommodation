import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { latestForRent } from '@shared/interface/property';
import { PropertyService } from '@shared/services/property.service';
import { addCompareItem } from '@shared/store/actions/compare.action';
import { addWishlistItem } from '@shared/store/actions/wishlist.action';

@Component({
  selector: 'app-property-box-three',
  templateUrl: './property-box-three.component.html',
  styleUrls: ['./property-box-three.component.scss'],
  standalone: false
})
export class PropertyBoxThreeComponent {

  @Input() title: string = '';
  @Input() data: number = 0;
  @Input() propertyListingData: latestForRent;
  @Input() tagClass: string;

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

  constructor(
    public propertyService: PropertyService, 
    private store: Store, 
    private route: ActivatedRoute,
    private router: Router){}


  addWishlist(data: latestForRent) {
    this.store.dispatch(new addWishlistItem(data));
  }

  addCompare(data: latestForRent) {
    this.store.dispatch(new addCompareItem(data));
  }

  getDetails(id:number){
    this.router.navigate(['/property/image-slider'], {
      relativeTo: this.route,
      queryParams: { id : id },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
