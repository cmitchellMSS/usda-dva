import * as fs from 'fs';
import parse from 'csv-parse/lib/sync';

import serverConfig from '../config';
import { SnapOffice } from './snap-office';

function readFile() {
  return fs.readFileSync(serverConfig.snapOfficesFilePath, 'utf8');
}

function parseData(data: string): SnapOffice[] {
  return parse(data, {
    cast(value, context) {
      if (context.header) {
        return value;
      } else {
        switch (context.column as keyof SnapOffice) {
          case 'Lat':
          case 'Lng':
            return parseFloat(value);
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

export default class SnapOfficesProvider {
  snapOffices: SnapOffice[];

  constructor() {
    const rawData = readFile();
    this.snapOffices = parseData(rawData);
  }

  getMarkets(bbox: BoundingBox) {
    return this.snapOffices.filter(m =>
      m.Lng > bbox.west
      && m.Lng < bbox.east
      && m.Lat < bbox.north
      && m.Lat > bbox.south);
  }
}