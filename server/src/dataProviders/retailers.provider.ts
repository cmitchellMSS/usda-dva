import * as fs from 'fs';

import serverConfig from '../config';
import { Retailer } from './retailer';

function readFile() {
  return fs.readFileSync(serverConfig.retailersFilePath, 'utf8');
}

function parseData(data: string): Retailer[] {
  const parsedData = JSON.parse(data);

  return parsedData.features.map((f: any) => f.attributes);
}

export type BoundingBox = {
  north: number;
  east: number;
  south: number;
  west: number;
};

export default class FarmersMarketsProvider {
  retailers: Retailer[];

  constructor() {
    const rawData = readFile();
    this.retailers = parseData(rawData);
    console.log(this.retailers.length);
  }

  getMarkets(bbox: BoundingBox) {
    return this.retailers.filter(m => 
      m.longitude > bbox.west
      && m.longitude < bbox.east
      && m.latitude < bbox.north
      && m.latitude > bbox.south
    );
  }
}