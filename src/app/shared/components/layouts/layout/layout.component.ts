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
    // if(url.includes('/theme/slider-filter-search')){
    //   this.data = layoutOption.layoutOne;
    // }else if(url.includes('/theme/corporate')){
    //   this.data = layoutOption.layoutTwo;
    // }else if(url.includes('/theme/enterprise')){
    //   this.data = layoutOption.layoutThree;
    // }else if(url.includes('/theme/classic')){
    //   this.data = layoutOption.layoutFour;
    // }else if(url.includes('/theme/image-content')){
    //   this.data = layoutOption.layoutFive;
    // }else if(url.includes('/theme/modern')){
    //   this.data = layoutOption.layoutSix;
    // }else if(url.includes('/theme/parallax-image')){
    //   this.data = layoutOption.layoutSeven;
    // }else if(url.includes('/theme/search-tab')){
    //   this.data = layoutOption.layoutEight;
    // }else if(url.includes('/theme/typed-image')){
    //   this.data = layoutOption.layoutNine;
    // }else if(url.includes('/theme/morden-video')){
    //   this.data = layoutOption.layoutTen;
    // }else if(url.includes('/theme/map-v-search')){
    //   this.data = layoutOption.layoutEleven;
    // }else if(url.includes('/theme/map-h-search')){
    //   this.data = layoutOption.layoutTwelve;
    // }else if((url.includes('/page/portfolio/center-slide')) || (url.includes('/page/portfolio/parallax')) || (url.includes('/property/image-box')) || (url.includes('/property/image-slider')) || (url.includes('/property/info-tab'))){
    //   this.data = layoutOption.lightHeaderLayout;
    // }else if((url.includes('/property/modal-details')) || (url.includes('/property/thumbnail-image')) || (url.includes('/property/without-top'))){
    //   this.data = layoutOption.shadowClsLayout;
    // }else if((url.includes('listing/grid-view/map-header/google-map')) || (url.includes('listing/grid-view/map-header/leaflet-map'))){
    //   this.data = layoutOption.layoutStandHeader;
    // }else if((url.includes('/page/other-pages/coming-soon-2')) || (url.includes('/page/other-pages/404'))){
    //   this.data = layoutOption.noFooter;
    // }else if((url.includes('/page/other-pages/coming-soon-1')) || (url.includes('/page/other-pages/coming-soon-3'))){
    //   this.data = layoutOption.noHeaderFooter;
    // }else if((url.includes('/modules/footer'))){
    //   layoutOption.innerPageLayout.footerStyle = '';
    //   this.data = layoutOption.innerPageLayout;
    // }else {
    //   layoutOption.innerPageLayout.footerStyle = 'basic';
    //   this.data = layoutOption.layoutEight;
    // }
    this.data = layoutOption.layoutEight;
    return this.data;
  }
}
