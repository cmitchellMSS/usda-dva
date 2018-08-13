import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

import { LocationKind } from "./locations.service";

export type LocationFilter = { [key in LocationKind]: boolean; };

@Injectable()
export class MapService {

  locationFilter = new ReplaySubject<LocationFilter>(1);

}