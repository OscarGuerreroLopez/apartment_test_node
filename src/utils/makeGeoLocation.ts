import {
  toLatLon,
  headingDistanceTo,
  LonLatTuple,
  LatLon,
  HeadingDistance
} from "geolocation-utils";

export interface MakeGeoLocation {
  makeGeoLocation: (params: LonLatTuple) => LatLon;
  distanceGeoLocation: (start: LatLon, end: LatLon) => HeadingDistance;
}

const makeGeoLocation = (params: LonLatTuple): LatLon => {
  return toLatLon(params);
};

const distanceGeoLocation = (start: LatLon, end: LatLon): HeadingDistance => {
  return headingDistanceTo(start, end);
};

export const GeoLocation: Readonly<MakeGeoLocation> = {
  makeGeoLocation,
  distanceGeoLocation
};
