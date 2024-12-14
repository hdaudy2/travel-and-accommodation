// ANGULAR CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ROUTES
import { AppRoutingModule } from './app-routing.module';

// STATE MANAGEMENT
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// CORE MODULES
import { layoutModule } from '@core/layouts/layout.module';
import { CoreTranslateModule } from '@core/localization/shared.module';

// SHARED MODULES
import { wishlistState } from '@shared/store/states/wishlist.state';
import { categoryState } from '@shared/store/states/category.state';
import { compareState } from '@shared/store/states/compare.state';
import { propertyState } from '@shared/store/states/property-detail.state';
import { imageState } from '@shared/store/states/property-images.state';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    layoutModule,
    CoreTranslateModule,
    
    // Ngxs
    NgxsModule.forRoot([wishlistState, categoryState, compareState, imageState, propertyState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['wishlist', 'compare'],
    }),
    
    ToastrModule.forRoot(),
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [
  ],
  exports: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
