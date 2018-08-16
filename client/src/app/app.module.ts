import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { SnapMapComponent } from './snap-map/snap-map.component';
import { LocationsPanelComponent } from './locations-panel/locations-panel.component';
import { LocationComponent } from './location/location.component';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { MapService } from './map.service';
import { LocationsService } from './locations.service';
import { RatingControlComponent } from './rating-control/rating-control.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapMapComponent,
    LocationsPanelComponent,
    LocationComponent,
    FiltersBarComponent,
    RatingControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [
    LocationsService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
