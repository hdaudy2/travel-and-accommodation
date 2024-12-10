import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { SearchRoutingModule } from "./search-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";

import { ListingComponent } from "./pages/listing/listing.component";
import { PropertyDetailComponent } from "./pages/property-detail/property-detail.component";

import { FeaturesComponent } from "./components/features/features.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HomeDetailsComponent } from "./components/home-details/home-details.component";
import { PropertyTabComponent } from "./components/property/property-tab/property-tab.component";
import { PropertySliderComponent } from "./components/property/property-slider/property-slider.component";
import { PropertyComponent } from "./components/property/property.component";
import { PropertyBriefComponent } from "./components/property-brief/property-brief.component";
import { PropertyImagesComponent } from "./components/property-images/property-images.component";
import { PropetyDetailsComponent } from "./components/propety-details/propety-details.component";
import { PropetyFloorPlanComponent } from "./components/propety-floor-plan/propety-floor-plan.component";
import { PropetyLocationComponent } from "./components/propety-location/propety-location.component";
import { RelatedPropertyComponent } from "./components/related-property/related-property.component";
import { RequestExplorationFormComponent } from "./components/request-exploration-form/request-exploration-form.component";
import { ReviewComponent } from "./components/review/review.component";
import { VideoComponent } from "./components/video/video.component";

// COMPONENTS
const COMPONENTS = [
  FeaturesComponent,
  GalleryComponent,
  HomeDetailsComponent,
  PropertySliderComponent,
  PropertyTabComponent,
  PropertyComponent,
  PropertyBriefComponent,
  PropertyImagesComponent,
  PropetyDetailsComponent,
  PropetyFloorPlanComponent,
  PropetyLocationComponent,
  RelatedPropertyComponent,
  RequestExplorationFormComponent,
  ReviewComponent,
  VideoComponent
];

// PAGES
const PAGES = [
  ListingComponent,
  PropertyDetailComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS, 
    ...PAGES
  ],
  imports: [CommonModule, SearchRoutingModule, SharedModule, CarouselModule],
  exports: [],
})
export class SearchModule {}
