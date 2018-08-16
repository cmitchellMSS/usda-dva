import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs";
import * as esri from 'esri-leaflet';

import { environment } from "../environments/environment";
import { FarmersMarket } from "../../../server/src/dataProviders/farmers-market";
import { SnapOffice } from "../../../server/src/dataProviders/snap-office";

type RetailerProperties = {
  ADDRESS: string;
  ADDRESS2: string;
  CITY: string;
  County: string;
  OBJECTID: number;
  STATE: string;
  STORE_NAME: string;
  ZIP5: number;
  latitude: number;
  longitude: number;
  zip4: string;
};

export type LocationKind = 'market' | 'office' | 'retail';

export type MapLocation = {
  kind: LocationKind;
  name: string;
  lat: number;
  lng: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  website?: string;
};

function mapMarket(market: FarmersMarket): MapLocation {
  return {
    kind: 'market',
    name: market.MarketName,
    lat: market.y,
    lng: market.x,
    address1: market.street,
    address2: null,
    city: market.city,
    state: market.State,
    zip: market.zip,
    website: market.Website,
  };
}

function mapOffice(office: SnapOffice): MapLocation {
  return {
    kind: 'office',
    name: office.Name,
    lat: office.Lat,
    lng: office.Lng,
    address1: office.Address,
    address2: null,
    city: office.City,
    state: office.State,
    zip: office.Zip,
    website: null,
  };
}

function mapRetailer(retailer: GeoJSON.Feature<GeoJSON.Point, RetailerProperties>): MapLocation {
  return {
    kind: 'retail',
    name: retailer.properties.STORE_NAME,
    lat: retailer.properties.latitude,
    lng: retailer.properties.longitude,
    address1: retailer.properties.ADDRESS,
    address2: retailer.properties.ADDRESS2,
    city: retailer.properties.CITY,
    state: retailer.properties.STATE,
    zip: retailer.properties.ZIP5.toString(),
  };
}

@Injectable()
export class LocationsService {
  readonly locations = new ReplaySubject<MapLocation[]>(1);

  constructor(private http: HttpClient) { }

  async updateLocation(bounds: L.LatLngBounds) {
    const markets = await this.getMarkestData(bounds);
    const offices = await this.getOfficeData(bounds);
    const retailers = await this.getRetailersData(bounds);

    const mappedMarkets = markets.filter((val, idx) => idx < 50).map(mapMarket);
    const mappedOffices = offices.filter((val, idx) => idx < 50).map(mapOffice);
    const mappedRetailers = retailers.features.filter((val, idx) => idx < 50).map(mapRetailer);

    this.locations.next([...mappedMarkets, ...mappedOffices, ...mappedRetailers]);
  }

  private async getMarkestData(bounds: L.LatLngBounds) {
    return this.http.get<FarmersMarket[]>(`${environment.production ? '' : 'http://localhost:3000'}/farmersmarkets?north=${bounds.getNorth()}&south=${bounds.getSouth()}&west=${bounds.getWest()}&east=${bounds.getEast()}`).toPromise();
  }

  private async getOfficeData(bounds: L.LatLngBounds) {
    return this.http.get<SnapOffice[]>(`${environment.production ? '' : 'http://localhost:3000'}/snapoffices?north=${bounds.getNorth()}&south=${bounds.getSouth()}&west=${bounds.getWest()}&east=${bounds.getEast()}`).toPromise();
  }

  private getRetailersData(bounds: L.LatLngBounds) {
    return new Promise<GeoJSON.FeatureCollection<GeoJSON.Point, RetailerProperties>>(resolve => {
      esri.query({ url: `${environment.production ? '' : 'http://localhost:3000'}/ArcGIS/rest/services/retailer/MapServer/0` })
        .within(bounds)
        .run((_, geoJson: GeoJSON.FeatureCollection<GeoJSON.Point, RetailerProperties>) => {
          resolve(geoJson);
        });
    });
  }
}