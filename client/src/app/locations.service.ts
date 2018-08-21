import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs";

import { environment } from "../environments/environment";
import { FarmersMarket } from "../../../server/src/dataProviders/farmers-market";
import { Retailer } from "../../../server/src/dataProviders/retailer";
import { SnapOffice } from "../../../server/src/dataProviders/snap-office";

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

function mapRetailer(retailer: Retailer): MapLocation {
  return {
    kind: 'retail',
    name: retailer.STORE_NAME,
    lat: retailer.latitude,
    lng: retailer.longitude,
    address1: retailer.ADDRESS,
    address2: retailer.ADDRESS2,
    city: retailer.CITY,
    state: retailer.STATE,
    zip: retailer.ZIP5.toString(),
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
    const mappedRetailers = retailers.filter((val, idx) => idx < 50).map(mapRetailer);

    this.locations.next([...mappedMarkets, ...mappedOffices, ...mappedRetailers]);
  }

  private async getMarkestData(bounds: L.LatLngBounds) {
    return this.http.get<FarmersMarket[]>(`${environment.production ? '' : 'http://localhost:3000'}/farmersmarkets?north=${bounds.getNorth()}&south=${bounds.getSouth()}&west=${bounds.getWest()}&east=${bounds.getEast()}`).toPromise();
  }

  private async getOfficeData(bounds: L.LatLngBounds) {
    return this.http.get<SnapOffice[]>(`${environment.production ? '' : 'http://localhost:3000'}/snapoffices?north=${bounds.getNorth()}&south=${bounds.getSouth()}&west=${bounds.getWest()}&east=${bounds.getEast()}`).toPromise();
  }

  private getRetailersData(bounds: L.LatLngBounds) {
    return this.http.get<Retailer[]>(`${environment.production ? '' : 'http://localhost:3000'}/retailers?north=${bounds.getNorth()}&south=${bounds.getSouth()}&west=${bounds.getWest()}&east=${bounds.getEast()}`).toPromise();
  }
}