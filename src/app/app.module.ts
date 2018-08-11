import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { SnapMapComponent } from './snap-map/snap-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapMapComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
