import 'mapbox-gl/dist/mapbox-gl.css';
import { PropsWithChildren, useReducer } from 'react';

import {Map, NavigationControl, Source, RasterLayer, Layer} from 'react-map-gl';


// PDOK: https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0
// EUMESAT https://view.eumetsat.int/geoserver/wms?service=WMS&version=1.3.0

//sources
export const testKadasterSource = {
  type: "raster",
  tiles: [
    "https://geodata.nationaalgeoregister.nl/kadastralekaart/wms/v4_0?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=true&layers=Perceel&CRS=EPSG:3857&STYLES=&WIDTH=256&HEIGHT=256&BBOX={bbox-epsg-3857}",
  ],
  tileSize: 256,
  minzoom: 1,
  maxzoom: 50
};

export const testPDOKSource = {
  type: "raster",
  tiles: [
    "https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=true&layers=Actueel_ortho25&CRS=EPSG:3857&STYLES=&WIDTH=256&HEIGHT=256&BBOX={bbox-epsg-3857}",
  ],
  tileSize: 256,
  minzoom: 1,
  maxzoom: 22
};

// layers
export const testKadasterLayer = {
  id: "public-kadaster-layer",
  type: "raster",
  paint: {
    "raster-opacity": 0.8,
  },
};

export const testPDOKLayer = {
  id: "public-pdok-layer",
  type: "raster",
  paint: {
    "raster-opacity": 0.8,
  },
};


// TODO: show loading screen if component not loaded yet!
const MapboxMapComponent = (props: PropsWithChildren) => {
  return (
    <div className='fixed top-0'>
        <Map
          initialViewState={{
            longitude: 4.900272,
            latitude: 52.379128,
            zoom: 14
          }}
          style={{width: '100vw', height: '100vh'}}
          mapboxAccessToken='pk.eyJ1Ijoic2hpdmFucmJuIiwiYSI6ImNsMXhjazkzejAxbDgzaWxwdDRrOWdlanAifQ.UYGHejjK30k-DTtIxN7UDA'
          mapStyle="mapbox://styles/mapbox/streets-v9?optimize=true"
          >
            <NavigationControl position='bottom-right'/>
            <div>
            <Source {...testKadasterSource}>
              <Layer {...testKadasterLayer} />
            </Source>
            {/* <Source {...testPDOKSource}>
              <Layer {...testPDOKLayer} />
            </Source> */}
            </div>
          </Map>
      </div>
  );
}

export default MapboxMapComponent