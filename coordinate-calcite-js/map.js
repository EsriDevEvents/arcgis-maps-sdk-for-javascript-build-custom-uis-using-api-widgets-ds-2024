import Map from "https://js.arcgis.com/4.29/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.29/@arcgis/core/views/MapView.js";
import CoordinateConversion from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion.js";

// custom UI
import { createCustomCoordinateConversion } from "./calcite-coordinate.js";

// Create the map
const map = new Map({
  basemap: {
    portalItem: {
      id: "826498a48bd0424f9c9315214f2165d4", // Colored Pencil basemap,
    },
  },
});

// Create the MapView
const view = new MapView({
  container: "viewDiv",
  map,
  center: [-116.545601, 33.830517],
  zoom: 12,
});

const ccWidget = new CoordinateConversion({ view, multipleConversions: true });

view.ui.add(ccWidget, "bottom-left");

createCustomCoordinateConversion(view);
