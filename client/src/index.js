import esriConfig from "@arcgis/core/config.js";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

esriConfig.apiKey = process.env.API_KEY;

const map = new Map({
  basemap: 'arcgis-topographic'
});

const view = new MapView({
  map,
  center: [-111.46668983380363, 39.09515673089838],
  zoom: 7,
  container: 'viewDiv'
});

setInterval(() => console.log(view.zoom), 1000);