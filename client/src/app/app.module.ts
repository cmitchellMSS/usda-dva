import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { SnapMapComponent } from './snap-map/snap-map.component';
import { LocationsPanelComponent } from './locations-panel/locations-panel.component';
import { LocationComponent } from './location/location.component';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { MapService } from './map.service';
import { LocationsService } from './locations.service';
import { RatingControlComponent } from './rating-control/rating-control.component';
import { HelpModalComponent } from './help-modal/help-modal.component';
import { TellSonnyModalComponent } from './tell-sonny-modal/tell-sonny-modal.component';
import { TellSonnyLocationModalComponent } from './tell-sonny-location-modal/tell-sonny-location-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapMapComponent,
    LocationsPanelComponent,
    LocationComponent,
    FiltersBarComponent,
    RatingControlComponent,
    HelpModalComponent,
    TellSonnyModalComponent,
    TellSonnyLocationModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    NgxSmartModalModule.forRoot()
  ],
  providers: [
    LocationsService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
