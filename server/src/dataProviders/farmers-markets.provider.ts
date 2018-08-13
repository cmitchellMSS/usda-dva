import * as fs from 'fs';
import parse from 'csv-parse/lib/sync';

import { FarmersMarket } from './farmers-market';

function readFile() {
  return fs.readFileSync('../data/national-farmers-market-directory_snap.csv', 'utf8');
}

function parseData(data: string): FarmersMarket[] {
  return parse(data, {
    cast(value, context) {
      if (context.header) {
        return value;
      } else {
        switch (context.column as keyof FarmersMarket) {
          case 'FMID':
            return parseInt(value);
          case 'x':
          case 'y':
            return parseFloat(value);
          case 'Credit':
          case 'WIC':
          case 'WICcash':
          case 'SFMNP':
          case 'SNAP':
          case 'Organic':
          case 'Bakedgoods':
          case 'Cheese':
          case 'Crafts':
          case 'Flowers':
          case 'Eggs':
          case 'Seafood':
          case 'Herbs':
          case 'Vegetables':
          case 'Honey':
          case 'Jams':
          case 'Maple':
          case 'Meat':
          case 'Nursery':
          case 'Nuts':
          case 'Plants':
          case 'Poultry':
          case 'Prepared':
          case 'Soap':
          case 'Trees':
          case 'Wine':
          case 'Coffee':
          case 'Beans':
          case 'Fruits':
          case 'Grains':
          case 'Juices':
          case 'Mushrooms':
          case 'PetFood':
          case 'Tofu':
          case 'WildHarvested':
            return value === 'Y';
          default:
            return value;
        }
      }
    },
    columns: true
  });
}

export type BoundingBox = {
  north: number;
  east: number;
  south: number;
  west: number;
};

export default class FarmersMarketsProvider {
  farmersMarkets: FarmersMarket[];

  constructor() {
    const rawData = readFile();
    this.farmersMarkets = parseData(rawData);
  }

  getMarkets(bbox: BoundingBox) {
    return this.farmersMarkets.filter(m =>
      m.x > bbox.west
      && m.x < bbox.east
      && m.y < bbox.north
      && m.y > bbox.south);
  }
}