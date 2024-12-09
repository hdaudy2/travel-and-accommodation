import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";

import { HomePageComponent } from "./pages/home-page/home-page.component";

import { HomeAgentsComponent } from "./components/home-agents/home-agents.component";
import { HomeBannerComponent } from "./components/home-banner/home-banner.component";
import { HomeBrandComponent } from "./components/home-brand/home-brand.component";
import { HomeFeaturedPropertyComponent } from "./components/home-featured-property/home-featured-property.component";
import { HomeFilterLatestSaleComponent } from "./components/home-filter-latest-sale/home-filter-latest-sale.component";
import { HomeHappyClientComponent } from "./components/home-happy-client/home-happy-client.component";
import { HeroSectionComponent } from "./components/home-hero-section/hero-section.component";
import { HomeLatestPropertyComponent } from "./components/home-latest-property/home-latest-property.component";
import { HomePropertyServiceComponent } from "./components/home-property-service/home-property-service.component";
import { HomeVideoComponent } from "./components/home-video/home-video.component";


// COMPONENTS
const COMPONENTS = [
    HomeAgentsComponent,
    HomeBannerComponent,
    HomeBrandComponent,
    HomeFeaturedPropertyComponent,
    HomeFilterLatestSaleComponent,
    HomeHappyClientComponent,
    HeroSectionComponent,
    HomeLatestPropertyComponent,
    HomePropertyServiceComponent,
    HomeVideoComponent
];

// PAGES
const PAGES = [HomePageComponent];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CarouselModule],
  exports: [],
})
export class HomeModule {}
