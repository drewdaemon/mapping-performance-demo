import esriConfig from "@arcgis/core/config.js";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

esriConfig.apiKey = process.env.API_KEY;

const map = new Map({
  basemap: 'arcgis-topographic'
});

const view = new MapView({
  map,
  center: [-118.805, 34.027],
  zoom: 13,
  container: 'viewDiv'
});