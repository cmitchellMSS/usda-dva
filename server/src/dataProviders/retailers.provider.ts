import sqlite3 from 'sqlite3';

import serverConfig from '../config';
import { Retailer } from './retailer';

export type BoundingBox = {
  north: number;
  east: number;
  south: number;
  west: number;
};

export default class FarmersMarketsProvider {
  retailersDb: sqlite3.Database;

  constructor() {
    this.retailersDb = new (sqlite3.verbose()).Database(serverConfig.retailersFilePath);
  }

  getMarkets(bbox: BoundingBox, callback: (retailers: Retailer[]) => void) {
    const rows: Retailer[] = [];

    var stmt = this.retailersDb.each('SELECT * FROM retailers WHERE longitude > $west AND longitude < $east AND latitude > $south AND latitude < $north LIMIT 100;', {
      '$west': bbox.west,
      '$east': bbox.east,
      '$north': bbox.north,
      '$south': bbox.south
    }, (sql, row) => {
      rows.push(row as Retailer);
    }, () => {
      callback(rows);
    });
  }
}